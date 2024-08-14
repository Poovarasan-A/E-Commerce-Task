import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className="bg-neutral-200/80 w-[25rem] h-[2.3rem] flex items-center justify-center px-2 rounded-3xl">
      <input
        type="text"
        placeholder="Search Products"
        className="bg-transparent outline-none w-full px-4"
      />
      <IoSearchSharp className="text-2xl cursor-pointer" />
    </div>
  );
};
export default Search;
