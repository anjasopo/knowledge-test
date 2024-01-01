import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalContext } from "../context/GlobalContext";

const Login = () => {
  const navigate = useNavigate();
  const { handleFunction } = useContext(GlobalContext);

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { handleLoginSuccess } = handleFunction;

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email: input.email,
          password: input.password,
        }
      );

      const data = response.data;
      Cookies.set("token", data.token, { expires: 1 });

      handleLoginSuccess(data.token);

      toast.success("Login berhasil!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      console.error(error);

      toast.error("Login gagal. Periksa kembali email dan password Anda.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <div className="container p-4 mx-auto">
        <div className="max-w-md p-8 mx-auto bg-white rounded shadow-md">
          <h1 className="mb-6 text-2xl font-semibold text-center">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                value={input.email}
                onChange={handleInput}
                type="text"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <input
                value={input.password}
                onChange={handleInput}
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-700"
              />
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-600">
            Belum punya akun?{" "}
            <Link to={"/register"} className="text-blue-700">
              Daftar di sini
            </Link>
            .
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
