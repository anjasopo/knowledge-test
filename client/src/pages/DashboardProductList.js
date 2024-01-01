import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const DashboardProductList = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { data, fetchStatus, setFetchStatus } = state;

  const { handleDelete, handleUpdate, fetchData } = handleFunction;

  useEffect(() => {
    if (fetchStatus === true) {
      fetchData();
    }
  }, [fetchStatus, setFetchStatus, fetchData]);
  return (
    <>
      <div className="container relative mx-auto mt-10 mb-5 overflow-x-auto">
        <h2 className="mb-5 text-2xl font-bold">List Product</h2>
      </div>
      <div className="container relative mx-auto mt-10 mb-5 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-black uppercase bg-violet dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-3">
                NO
              </th>
              <th scope="col" className="px-3 py-3">
                Nama
              </th>
              <th scope="col" className="px-3 py-3">
                Deskripsi
              </th>
              <th scope="col" className="px-3 py-3">
                Harga
              </th>
              <th scope="col" className="px-3 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data !== null &&
              data.map((res, index) => (
                <tr
                  key={res._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-3 py-4">{index + 1}</td>
                  <td className="px-3 py-4">
                    {res.name === null ? " " : res.name}
                  </td>
                  <td className="px-3 py-4">
                    {res.description === null ? " " : res.description}
                  </td>
                  <td className="px-3 py-4">
                    {res.price === null ? " " : res.price}
                  </td>
                  <td>
                    <button
                      onClick={handleUpdate}
                      value={res._id}
                      className="px-2 py-1 mx-2 font-medium text-white bg-yellow-200 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={handleDelete}
                      value={res._id}
                      className="px-2 py-1 font-medium text-white bg-red-500 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardProductList;
