import { star } from "../assets/icons";

const ReviewCard = ({ customerName, imgURL, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <img
        src={imgURL}
        alt="customer"
        className="object-cover h-[120px] w-[120px] rounded-full"
      />
      <p className="mt-4 max-w-sm text-center info-text">{feedback}</p>
      <div className="flex justify-center mt-3 items-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          className="m-0 object-contain"
          alt=""
        />
        <p className="font-montserrat text-xl text-slate-gray">{rating}</p>
      </div>
      <h3 className="font-palanquin text-3xl text-center mt-1 font-bold ">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
