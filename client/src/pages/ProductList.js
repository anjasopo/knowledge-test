import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [display, setDisplay] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let fetchData = async () => {
      try {
        setDisplay(true);
        let res = await axios.get(`http://localhost:3000/api/products`);
        setData(res.data);
        setDisplay(false);
      } catch (error) {
        alert(error);
      }
    };

    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus]);

  useEffect(() => {
    let timeoutId;

    const handleSearch = async () => {
      try {
        setDisplay(true);
        let res = await axios.get(`http://localhost:3000/api/products`);
        let dataProduct = res.data;

        let searchData = dataProduct.filter((res) => {
          return Object.values(res)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase());
        });

        setDisplay(false);
        setData([...searchData]);
      } catch (error) {
        alert(error);
      }
    };

    if (search !== "") {
      timeoutId = setTimeout(() => {
        handleSearch();
      }, 300);
    } else {
      setFetchStatus(true);
    }

    return () => clearTimeout(timeoutId);
  }, [search]);

  const formatPrice = (price) => {
    return `Rp ${price.toLocaleString("id-ID")}`;
  };

  const handleText = (param) => {
    if (param === null) {
      return "";
    } else {
      return param.slice(0, 150) + "...";
    }
  };

  const handleChangeSearch = (event) => setSearch(event.target.value);

  return (
    <>
      <div>
        <h1 className="p-10 mb-20 text-2xl font-bold lg:p-0">
          Product Tersedia
        </h1>
      </div>

      <div className="flex flex-row justify-center w-full mb-1 sm:mb-0">
        <div className="w-full p-5 mx-auto mb-20 bg-white rounded-lg shadow md:w-1/2 h-fit">
          <div className="relative pt-2 mx-auto text-gray-600">
            <form onSubmit={(e) => e.preventDefault()} flex items-center>
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  onChange={handleChangeSearch}
                  value={search}
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Cari nama produk..."
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-10 lg:justify-start">
        {display && (
          <>
            <div
              role="status"
              className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
            >
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
              <div className="flex items-center mt-4 space-x-3">
                <svg
                  className="text-gray-200 w-14 h-14 dark:text-gray-700"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                  <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
            <div
              role="status"
              className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
            >
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
              <div className="flex items-center mt-4 space-x-3">
                <svg
                  className="text-gray-200 w-14 h-14 dark:text-gray-700"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2" />
                  <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
                </div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          </>
        )}

        {data !== null &&
          data.map((res) => {
            return (
              <Link
                to={`/list-product/${res._id}`}
                key={res._id}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer h-72 w-60 md:w-80"
              >
                <div className="flex flex-col w-full p-4 bg-white grow dark:bg-gray-800">
                  <div className="flex flex-col w-full grow">
                    <p className="font-medium text-indigo-500 text-md">
                      {res.name}
                    </p>
                    <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                      {formatPrice(res.price)}
                    </p>
                    <p className="font-light text-gray-400 grow dark:text-gray-300 text-md">
                      {handleText(res.description)}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button href="#" className="relative block">
                      <img
                        alt="profil"
                        src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster"
                        className="object-cover w-10 h-10 mx-auto rounded-full "
                      />
                    </button>
                    <div className="flex flex-col justify-between ml-4 text-sm">
                      <p className="text-gray-800 dark:text-white">
                        {res.name}
                      </p>
                      <p className="text-gray-400 dark:text-gray-300">
                        {formatPrice(res.price)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default ProductList;
