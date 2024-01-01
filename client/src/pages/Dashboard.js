import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";

const Dashboard = () => {
  const { state } = useContext(GlobalContext);
  const { token } = state;

  const [userData, setUserData] = useState(null);
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => {
    let fetchUserData = async () => {
      try {
        if (token) {
          let userResponse = await axios.get(
            "http://localhost:3000/api/auth/profile",
            {
              headers: {
                Authorization: "Bearer " + token,
              },
            }
          );
          setUserData(userResponse.data);
        }
      } catch (error) {
        alert(error);
      }
    };

    let fetchProductData = async () => {
      try {
        let productResponse = await axios.get(
          "http://localhost:3000/api/products/"
        );
        setData(productResponse.data);
      } catch (error) {
        alert(error);
      }
    };

    if (fetchStatus) {
      fetchUserData();
      fetchProductData();
      setFetchStatus(false);
    }
  }, [token, fetchStatus]);

  function ucapan() {
    const today = new Date();
    let h = today.getHours();
    if (h >= 4 && h < 11) {
      return "Selamat Pagi";
    } else if (h >= 11 && h < 17) {
      return "Selamat Siang/Sore";
    } else {
      return "Selamat Malam";
    }
  }

  return (
    <>
      <div className="container relative mx-auto mt-10 mb-5 overflow-x-auto">
        <h2 className="mb-5 text-2xl font-bold">
          Hi! {userData?.name || "Guest"}, {ucapan()}
        </h2>
      </div>
      <div className="flex flex-col w-full md:space-y-4">
        <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
          <div className="flex flex-col items-center w-full gap-3 my-6 space-y-4">
            <div className="w-full">
              <div className="relative w-full overflow-hidden bg-white shadow-lg dark:bg-gray-700">
                <Link
                  to={"/dashboard/list-product"}
                  className="block w-full h-full"
                >
                  <div className="flex items-center justify-between px-4 py-6 space-x-4">
                    <div className="flex items-center">
                      <p className="ml-2 text-xl font-semibold text-gray-700 border-b border-gray-200 dark:text-white">
                        Total Produk
                      </p>
                    </div>
                    <div className="mt-6 text-3xl font-bold text-black border-b border-gray-200 md:mt-0 dark:text-white">
                      {data !== null && data.length}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
