import axios from "axios";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const DashboardForm = () => {
  let { id } = useParams();
  id = id ? String(id) : null;

  const { state, handleFunction } = useContext(GlobalContext);
  const { input, setInput } = state;

  const { handleInput, handleSubmit } = handleFunction;

  useEffect(() => {
    if (id !== undefined) {
      axios
        .get(`http://localhost:3000/api/products/${String(id)}`)
        .then((res) => {
          let data = res.data;
          console.log("Data from Server:", data);

          setInput({
            name: data.name,
            description: data.description,
            price: data.price,
          });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [id, setInput]);

  return (
    <div className="container p-10 mx-auto rounded-md mb-36">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h2 className="mb-5 text-2xl font-bold">Informasi Produk</h2>
        <hr className="mb-3" />
        <label>Nama</label>
        <input
          onChange={handleInput}
          value={input.name}
          className="px-2 pt-2 pb-2 mt-2 mb-5 border-2 rounded-md border-zinc-200 bg-zinc-50"
          name="name"
          type="text"
          required
        />
        <label>Description</label>
        <input
          onChange={handleInput}
          value={input.description}
          className="px-2 pt-2 pb-2 mt-2 mb-5 border-2 rounded-md border-zinc-200 bg-zinc-50"
          name="description"
          type="text"
          required
        />
        <label>Harga</label>
        <input
          onChange={handleInput}
          value={input.price}
          className="px-2 pt-2 pb-2 mt-2 mb-5 border-2 rounded-md border-zinc-200 bg-zinc-50"
          name="price"
          required
        />
        <div className="py-3 text-left">
          <button
            type={"submit"}
            className="inline-flex justify-center px-10 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default DashboardForm;
