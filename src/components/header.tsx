import { useState } from "react";
import { FaSearch, FaShoppingBag, FaSignOutAlt, FaUser } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";

import { Link } from "react-router-dom";
import { User } from "../types/types";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";
import toast from "react-hot-toast";
// const user = { _id: "", role: "admin" };
interface PropsType {
  user: User | null;
}
const Header = ({ user }: PropsType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const logoutHandler = async () => {
    try {
      await signOut(auth);
      toast.success("Sign Out SuccesFully");
      setIsOpen(false);
    } catch (error) {
      toast.error("Sign Out Failed");
    }
  };

  return (
    <nav className="header">
      <Link to={"/"} onClick={() => setIsOpen(false)}>
        HOME
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/search"}>
        <FaSearch />
      </Link>
      <Link onClick={() => setIsOpen(false)} to={"/cart"}>
        <FaShoppingBag />
      </Link>
      {user?._id ? (
        <>
          <button onClick={() => setIsOpen((prev) => !prev)}>
            <FaUser />
            {/* <FaUserAlt /> */}
          </button>
          <dialog open={isOpen}>
            <div style={{ backgroundColor: "red" }}>
              {user?.role === "admin" && (
                <Link onClick={() => setIsOpen(false)} to={"/admin/dashboard"}>
                  Admin
                </Link>
              )}
              <Link onClick={() => setIsOpen(false)} to={"/orders"}>
                Orders
              </Link>
              <button onClick={logoutHandler}>
                <FaSignOutAlt />
              </button>
            </div>
          </dialog>
        </>
      ) : (
        <Link to={"/login"}>
          <TbLogin2 />
        </Link>
      )}
    </nav>
  );
};

export default Header;
