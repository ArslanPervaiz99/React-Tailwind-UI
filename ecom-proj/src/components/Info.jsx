import InfoCard from "./InfoCard";
import { infoData } from "./products";

const Info = () => {
  return (
    <div className=" container pt-12 pb-10">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
        {infoData.map((data) => (
          <InfoCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};

export default Info;
