import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        formData
      );

      // Jika register berhasil, tambahkan notifikasi atau arahkan pengguna ke halaman login
      console.log(response.data); // Anda bisa menampilkan notifikasi di sini

      // Tampilkan notifikasi sukses
      toast.success("Registrasi berhasil! Silahkan login.", {
        position: toast.POSITION.TOP_RIGHT,
      });

      // Tambahkan penanganan waktu tunggu sebelum redirect
      setTimeout(() => {
        // Redirect ke halaman login setelah 1500 milidetik (1,5 detik)
        navigate("/login");
      }, 1500);
    } catch (error) {
      // Tangani error, misalnya tampilkan pesan kesalahan
      console.error(error);
      // Tampilkan notifikasi error
      toast.error("Registrasi gagal. Coba lagi.", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <div className="container p-4 mx-auto">
        <div className="max-w-md p-8 mx-auto bg-white rounded shadow-md">
          <h1 className="mb-6 text-2xl font-semibold text-center">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-semibold text-gray-700"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-700"
              >
                <option value="" disabled>
                  Silahkan Pilih Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-700 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-600">
            Sudah punya akun?{" "}
            <Link to={"/login"} className="text-blue-700">
              Login di sini
            </Link>
            .
          </p>
        </div>
      </div>
      {/* Tambahkan ToastContainer di sini */}
      <ToastContainer />
    </>
  );
};

export default Register;
