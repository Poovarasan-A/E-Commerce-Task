import { BsLaptop } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { IoTvSharp } from "react-icons/io5";
import { BsCamera2 } from "react-icons/bs";
import { GiWashingMachine } from "react-icons/gi";
import { PiGameControllerFill } from "react-icons/pi";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";

const Category = () => {
  const categories = [
    {
      icon: <BsLaptop />,
      name: "Laptops",
    },
    {
      icon: <CiMobile3 />,
      name: "Mobiles",
    },
    {
      icon: <IoTvSharp />,
      name: "Electronics",
    },
    {
      icon: <BsCamera2 />,
      name: "Camera",
    },
    {
      icon: <GiWashingMachine />,
      name: "Appliances",
    },
    {
      icon: <PiGameControllerFill />,
      name: "Gaming",
    },
    {
      icon: <GiBookshelf />,
      name: "Books",
    },
    {
      icon: <MdOutlineSportsVolleyball />,
      name: "Sports",
    },
  ];
  return (
    <div className="w-full flex justify-evenly py-10 bg-white ">
      {categories.map((category) => (
        <div key={category} className="flex flex-col items-center gap-2">
          <div className="w-24 h-24 bg-black/5 rounded-full flex flex-col items-center justify-center cursor-pointer">
            <span className="text-4xl text-black/80">{category.icon}</span>
          </div>
          <p className="text-sm font-semibold">{category.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Category;
