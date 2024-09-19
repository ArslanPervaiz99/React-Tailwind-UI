import { LuMailOpen } from "react-icons/lu";
const NewsLetter = () => {
  return (
    <div className="bg-accentDark mt-16">
      <div className="container flex flex-col py-8 md:flex-row justify-between items-center text-white gap-4">
        <div className="flex flex-shrink-0 items-center gap-4">
          <LuMailOpen className="text-[60px]" />
          <div>
            <h3 className=" text-xl sm:text-2xl font-semibold">
              Sign Up for NewsLetter
            </h3>
            <p>and recieve $20 coupon on First Shopping</p>
          </div>
        </div>
        <div className=" relative w-full max-w-[500px]">
          <input
            type="text "
            placeholder="Email"
            className="py-4 px-6 rounded-full w-full"
          />
          <button className="bg-accent hover:bg-accentDark absolute py-2 px-4 rounded-full top-[50%] right-2 translate-y-[-50%]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
