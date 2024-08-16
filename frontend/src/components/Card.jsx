import { BsFillBagFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Card = ({ image, name, ratings, prevPrice, newPrice }) => {
  return (
    <section className="w-48 h-64 shadow-sm text-sm bg-white rounded-lg">
      <div className="w-[90%] h-[65%] mx-auto overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h3 className="font-semibold">{name}</h3>
        <div className="flex gap-2 items-center">
          <FaStar className="text-green-500" />
          {ratings}
        </div>
        <div>
          <div className="font-bold">
            <del className="text-black/50">Rs.{prevPrice} </del>
            {newPrice}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Card;
