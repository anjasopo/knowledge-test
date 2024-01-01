import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="container p-4 mx-auto mt-10 bg-white rounded-lg md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link to={"/"} className="hover:underline">
            Anjas Susetya
          </Link>{" "}
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to={"/"} className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link to={"/"} className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
