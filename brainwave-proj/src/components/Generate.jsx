import { loading } from "../assets";

const Generate = ({ className }) => {
  return (
    <div
      className={`flex items-center px-6  h-[3.5rem] rounded-[1.7rem] bg-n-8/80 ${
        className || ""
      } text-base`}
    >
      <img src={loading} alt="loader" className="w-5 h-5 mr-4" /> AI is
      Generating
    </div>
  );
};

export default Generate;
