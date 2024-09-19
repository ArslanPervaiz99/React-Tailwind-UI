const InfoCard = ({ title, icon }) => {
  return (
    <div className=" flex items-center gap-4">
      <div className="grid w-[50px] h-[50px] bg-gray-300 text-accentDark place-items-center text-[22px] cursor-pointer rounded-full">
        {icon}{" "}
      </div>
      <div>
        <h3 className="font-xl text-accent font-medium cursor-pointer">
          {title}
        </h3>
        <p className="text-[14px] text-gray-500">Lorem ipsum dolor.</p>
      </div>
    </div>
  );
};

export default InfoCard;
