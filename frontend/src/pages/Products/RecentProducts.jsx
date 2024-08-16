import { products } from "./data";
import { FaStar } from "react-icons/fa";

const RecentProducts = () => {
  return (
    <div className="w-11/12 my-10 flex flex-col gap-2">
      <div className="w-full h-[3rem] px-8 flex items-center justify-between bg-white">
        <h2 className="font-bold text-xl">Latest Products</h2>
        <p>View More</p>
      </div>
      <div className="w-full mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {products.slice(6, 13).map((product) => (
          <div
            key={product}
            className="bg-white h-80 py-4 grid place-content-center"
          >
            <div className="w-full overflow-hidden">
              <img
                src={product.image}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="px-4 flex flex-col items-start gap-2">
              <p className="font-semibold text-wrap">{product.name}</p>

              <p className="flex items-center gap-1">
                <FaStar className="text-green-600" />({product.ratings})
              </p>
              <p className="font-bold">Rs.{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecentProducts;
