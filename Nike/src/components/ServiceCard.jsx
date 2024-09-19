const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-9 py-12">
      <div className="flex w-11 h-11 justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={20} height={20} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal">{label}</h3>
      <p className="mt-3 break-words text-slate-gray font-montserrat text-lg leading-normal">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
