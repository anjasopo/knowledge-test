import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailProduct = () => {
  let { idData } = useParams();

  const [dataProduct, setDataProduct] = useState(null);

  useEffect(() => {
    if (idData !== undefined) {
      axios.get(`http://localhost:3000/api/products/${idData}`).then((res) => {
        setDataProduct(res.data);
      });
    }
  }, []);

  return (
    <>
      {dataProduct !== null && (
        <>
          <div className="m-10 lg:mt-24 lg:mb-6 lg:mx-28">
            <h3 className="text-4xl font-medium leading-6 text-gray-900">
              Informasi Produk
            </h3>
          </div>
          <div className="mx-10 overflow-hidden bg-white border-2 shadow-xl lg:mx-24 lg:p-8 sm:rounded-lg">
            <div className="flex flex-row-reverse justify-between px-4 py-5 sm:px-6">
              <img
                src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster"
                className="w-28 md:w-32"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl font-medium leading-6 text-gray-900">
                  {dataProduct.name}
                </h3>
              </div>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Nama Produk
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {dataProduct.name}
                  </dd>
                </div>
                <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Deskripsi Produk
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {dataProduct.description}
                  </dd>
                </div>
                <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Harga Produk
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    ${dataProduct.price}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailProduct;
