import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);
  const [input, setInput] = useState({
    name: "",
    description: "",
    price: 0,
  });
  const [token, setToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (name === "description") {
      setInput({ ...input, description: value });
    } else if (name === "price") {
      setInput({ ...input, price: value });
    } else if (name === "name") {
      setInput({ ...input, name: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let { name, description, price } = input;

    if (!token) {
      console.error("Token is missing");
      return;
    }

    if (currentId === -1) {
      // Create data
      axios
        .post(
          "http://localhost:3000/api/products",
          { name, description, price },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          setFetchStatus(true);
          navigate("/dashboard/list-product");
        })
        .catch((error) => {
          console.error("Error creating data:", error);
        });
    } else {
      // Update data
      axios
        .put(
          `http://localhost:3000/api/products/${currentId}`,
          { name, description, price },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          setFetchStatus(true);
          navigate("/dashboard/list-product");
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
    }

    setCurrentId(-1);

    setInput({
      name: "",
      description: "",
      price: 0,
    });
  };

  const handleDelete = (event) => {
    let idData = String(event.target.value);
    axios
      .delete(`http://localhost:3000/api/products/${String(idData)}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setFetchStatus(true);
      });
  };

  const handleUpdate = (event) => {
    let idData = String(event.target.value);

    setCurrentId(idData);
    navigate(`/dashboard/list-product/${idData}`);
  };

  const handleLoginSuccess = (receivedToken) => {
    setToken(receivedToken);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setToken("");
    setIsAuthenticated(false); // Set authentication status to false
  };

  let fetchData = () => {
    axios
      .get("http://localhost:3000/api/products", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setData([...res.data]);
      })
      .catch((error) => {});
    setFetchStatus(false);
  };

  let state = {
    data,
    setData,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
    input,
    setInput,
    token,
    isAuthenticated,
  };

  let handleFunction = {
    handleInput,
    handleSubmit,
    handleDelete,
    handleUpdate,
    fetchData,
    handleLoginSuccess,
    handleLogout
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
