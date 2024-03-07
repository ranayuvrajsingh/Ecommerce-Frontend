/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { ReactElement, useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Column } from "react-table";
import AdminSidebar from "../../components/admin/AdminSidebar";
import TableHOC from "../../components/admin/TableHOC";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import {
  useAllUsersQuery,
  useDeleteUserMutation,
} from "../../redux/api/userAPI";
import { CustomError } from "../../types/api-types";
import toast from "react-hot-toast";
import { Skeleton } from "../../components/loader";
import { responseToast } from "../../utils/features";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}
const userImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp";

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

// ... (previous imports and component definition)

const Customers = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);
  const { data, isLoading, isError } = useAllUsersQuery(user?._id!);
  const [rows, setRows] = useState<DataType[]>([]);
  const [deleteUser] = useDeleteUserMutation();

  const handleApiError = (error: CustomError) => {
    toast.error(error.data.message);
  };

  const deleteHandler = async (userId: string) => {
    try {
      const res = await deleteUser({ userId, adminUserId: user?._id! });
      responseToast(res, null, "");
    } catch (error) {
      handleApiError(error as CustomError);
    }
  };

  useEffect(() => {
    console.log("Data received:", data);

    if (data?.success && data?.data) {
      setRows(
        data.data.map((i) => ({
          avatar: (
            <img
              style={{ borderRadius: "10px" }}
              src={i?.photo || userImg}
              alt={`${i?.name}'s avatar`}
            />
          ),
          name: i?.name || "",
          email: i?.email || "",
          gender: i?.gender || "",
          role: i?.role || "",
          action: (
            <button onClick={() => deleteHandler(i?._id)}>
              <FaTrash />
            </button>
          ),
        }))
      );
    }
  }, [data]);

  const Table = TableHOC<DataType>(
    columns,
    rows,
    "dashboard-product-box",
    "Customers",
    rows.length > 6
  )();

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>{isLoading || isError ? <Skeleton length={20} /> : Table}</main>
    </div>
  );
};

export default Customers;
