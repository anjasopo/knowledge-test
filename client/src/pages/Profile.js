import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";

const Profile = () => {
  const { state } = useContext(GlobalContext);
  const { token } = state;

  const [userData, setUserData] = useState(null);
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

    if (fetchStatus) {
      fetchUserData();
      setFetchStatus(false);
    }
  }, [token, fetchStatus]);

  return (
    <>
      <div className="container relative mx-auto mt-10 mb-5 overflow-x-auto">
        <h2 className="mb-5 text-2xl font-bold">Profile</h2>
      </div>
      <div className="container relative mx-auto mt-10 mb-5 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-black uppercase bg-violet dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-3">
                Nama
              </th>
              <th scope="col" className="px-3 py-3">
                Email
              </th>
              <th scope="col" className="px-3 py-3">
                Gender
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-3 py-4">{userData?.name || " "}</td>
              <td className="px-3 py-4">{userData?.email || " "}</td>
              <td className="px-3 py-4">{userData?.gender || " "}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Profile;
