import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const Sidebar = () => {
  const { handleFunction } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    handleFunction.handleLogout();

    toast.success("Logout berhasil!", {
      position: toast.POSITION.TOP_RIGHT,
    });

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <>
      <div className="relative hidden h-screen shadow-lg lg:block w-80">
        <div className="h-full bg-white dark:bg-gray-700">
          <div className="flex items-center justify-start pt-6 ml-8">
            <p className="text-xl font-bold dark:text-white">Menu</p>
          </div>
          <nav className="mt-6">
            <div>
              <Link
                className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                to={"/dashboard"}
              >
                <span className="text-left">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Dashboard</span>
              </Link>

              <p className="flex items-center justify-start w-full p-2 pl-6 my-2 font-semibold text-gray-400 transition-colors duration-200 border-l-4 border-transparent">
                Manage Product
              </p>

              <Link
                className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                to={"/dashboard/list-product"}
              >
                <span className="text-left">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">List Product</span>
              </Link>
              <Link
                className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                to={"/dashboard/list-product/form"}
              >
                <span className="text-left">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Create Product</span>
              </Link>

              <p className="flex items-center justify-start w-full p-2 pl-6 my-2 font-semibold text-gray-400 transition-colors duration-200 border-l-4 border-transparent">
                Profile
              </p>
              <Link
                className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                to={"/dashboard/profile"}
              >
                <span className="text-left">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9971 9.34873 20.9426 6.80688 19.0679 4.93215C17.1931 3.05742 14.6513 2.00291 12 2ZM12 7C12.5933 7 13.1734 7.17595 13.6667 7.50559C14.1601 7.83524 14.5446 8.30377 14.7716 8.85195C14.9987 9.40013 15.0581 10.0033 14.9424 10.5853C14.8266 11.1672 14.5409 11.7018 14.1213 12.1213C13.7018 12.5409 13.1672 12.8266 12.5853 12.9424C12.0033 13.0581 11.4001 12.9987 10.852 12.7716C10.3038 12.5446 9.83524 12.1601 9.5056 11.6667C9.17595 11.1734 9 10.5933 9 10C9 9.20435 9.31607 8.44129 9.87868 7.87868C10.4413 7.31607 11.2044 7 12 7ZM12 20C10.2392 20.0019 8.51699 19.4843 7.049 18.512C7.16502 17.5451 7.63092 16.6541 8.35879 16.0071C9.08666 15.3601 10.0262 15.0019 11 15H13C13.9739 15.0019 14.9134 15.3601 15.6412 16.0071C16.3691 16.6541 16.835 17.5451 16.951 18.512C15.483 19.4843 13.7608 20.0019 12 20Z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Account</span>
              </Link>
              <Link
                className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-400 transition-colors duration-200 border-l-4 border-transparent hover:text-gray-800"
                to={"/"}
                onClick={handleLogout}
              >
                <span className="text-left">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-sm font-normal">Log out</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
