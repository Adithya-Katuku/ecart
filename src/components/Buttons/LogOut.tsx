import { IoIosLogOut } from "react-icons/io";

const LogOut = () => {
  return (
    <a
      href="/"
      className="text-decoration-none text-danger mx-1"
      onClick={() => {
        sessionStorage.clear();
        localStorage.removeItem('username');
      }}
    >
      <IoIosLogOut className="m-1 fs-2" />
    </a>
  );
};

export default LogOut;
