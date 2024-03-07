import { BiSolidMessageError } from "react-icons/bi";
const NotFound = () => {
  return (
    <div className="container not-found">
      <BiSolidMessageError />
      <h1>Page Not Found</h1>
    </div>
  );
};

export default NotFound;
