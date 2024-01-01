import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState(null);

  //indikator
  const [fetchStatus, setFetchStatus] = useState(true);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    let fetchData = async () => {
      try {
        setDisplay(true);
        let res = await axios.get(`http://localhost:3000/api/products/`);
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

  return (
    <>
      <Hero />

      <div>
        <h1 className="p-10 mb-20 text-2xl font-bold lg:p-0">
          Product Tersedia
        </h1>
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
                    <button className="relative block">
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

export default Home;
