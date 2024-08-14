import { products } from "./data";
import { FaStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

const FeaturedProducts = () => {
  return (
    <div className="w-full my-10 flex flex-col gap-2">
      <div className="w-full h-[3rem] px-8 flex items-center justify-between bg-white">
        <h2 className="font-bold text-xl">Featured Products</h2>
        <p>View More</p>
      </div>
      <div className=" flex gap-2">
        {products.slice(0, 6).map((product) => (
          <div
            key={product}
            className="bg-white w-[20%] h-[20rem] py-4 flex flex-col items-center"
          >
            <div className="w-[12rem] h-[12rem] overflow-hidden">
              <img
                src={product.image}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="px-4 w-full flex flex-col items-center gap-2">
              <p className="font-semibold text-wrap">{product.name}</p>
              <div className="flex justify-between w-full">
                <p className="flex items-center gap-1">
                  <FaStar className="text-green-600" />({product.ratings})
                </p>
                <p className="font-bold">Rs.{product.price}</p>
              </div>
              <div className="w-full flex gap-1">
                <button className="w-[20%] py-2 bg-black/10 center">
                  <MdAddShoppingCart className="text-xl" />
                </button>
                <button className="w-[80%] py-2 bg-violet-300 center">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturedProducts;
