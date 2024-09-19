import { AiFillStar, AiOutlineStar, AiOutlineShopping } from "react-icons/ai";
const DairyBreakfastProductCard = ({ img, name, price }) => {
  return (
    <div className="relative border rounded-lg hover:border-gray-300 border-gray-400 hover:scale-95 transition-transform pb-5">
      <img src={img} alt={name} />
      <div className="relative p-4 space-y-2">
        <div className="text-yellow-400 flex gap-[2px] text-[20px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
        <h3 className="text-lg font-medium">{name}</h3>
        <h3 className="text-red-500 font-medium text-2xl">{price}</h3>
        <div className="absolute grid place-items-center -top-4 right-2 cursor-pointer rounded-full bg-accent hover:bg-accentDark text-white text-[20px] w-[45px] h-[45px]">
          <AiOutlineShopping />
        </div>
      </div>
    </div>
  );
};

export default DairyBreakfastProductCard;
