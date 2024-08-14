import { FaRegHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
    <div className="sticky top-0 w-full h-[4rem] border-b-2 px-20 flex items-center justify-between bg-white shadow-sm">
      <h2 className=" font-extrabold text-2xl">
        <span className="text-violet-600">Y</span>kart
      </h2>
      <div className="flex gap-8">
        <Search />
        <ul className="flex text-2xl gap-8 items-center">
          <li>
            <FaRegHeart className="hover:text-neutral-600 link" />
          </li>
          <li>
            <IoMdCart className="hover:text-neutral-600 text-3xl link" />
          </li>
          <li>
            <FaRegCircleUser className="hover:text-neutral-600 link" />
          </li>
        </ul>
        <Link
          to="/login"
          className="text-md font-semibold hover:bg-violet-600 px-6 text-white bg-violet-500 flex items-center justify-center"
        >
          Login
        </Link>
      </div>
    </div>
  );
};
export default Header;
