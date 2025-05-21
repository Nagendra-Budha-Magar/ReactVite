import { FaCartPlus } from "react-icons/fa";

import { LOGO_URL } from "../utils/constants.js";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-3 text-2xl">
      <div>
        <img src={LOGO_URL} alt="" className="w-20 h-20" />
      </div>
      <div className="flex justify-between list-none w-96">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </div>
      <button className="mt-4 flex items-center justify-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-lg font-medium text-base hover:bg-blue-600 cursor-pointer transition-colors">
        <FaCartPlus />
      </button>
    </nav>
  );
};
export default Navbar;
