import { FaArrowRight } from "react-icons/fa";
const HeroSec = () => {
  return (
    <div className="container pt-8   ">
      <div className="grid gap-8 xl:grid-cols-3 xl:grid-rows-2 ">
        <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
          <img
            className="w-full h-full rounded-lg object-cover"
            src="/hero_1.webp"
            alt="hero image"
          />
          <div className="absolute max-w-[470px] ml-8 -translate-y-[50%] sm:ml-14 top-[60%] sm:space-y-4 ">
            <p className="text-2xl hidden sm:block ">100% Orignal Dry Fruits</p>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              Dry Fruits Best Quality{" "}
            </h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-6">Starting At</p>
            <div className="font-medium pb-4 text-red-600 text-2xl sm:text-4xl sm:pb-4">
              $19.99
            </div>
            <div className="flex bg-accent hover:bg-accentDark rounded-full items-center gap-4 w-fit px-4  text-white py-2 sm:px-6 sm:py-3 cursor-pointer text-[12px]  ">
              Shop Now <FaArrowRight />{" "}
            </div>
          </div>
        </div>
        <div className="relative ">
          <img
            src="/hero_2.webp"
            alt="Hero Image"
            className="h-full rounded-lg object-cover w-full"
          />
          <div className="absolute max-w-[470px] sm:ml-7 top-[55%] ml-8 -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl font-bold sm:text-3xl">Best Yummy Pizza</h2>
            <p className="text-xl text-gray-500 pt-3"> Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-4">
              $24.99
            </div>
            <div className="bg-accent hover:bg-accentDark rounded-full text-white flex items-center gap-4 w-fit px-4 py-2 text-[14px] cursor-pointer">
              Shop Now <FaArrowRight />{" "}
            </div>
          </div>
        </div>
        <div className="relative ">
          <img
            src="/hero_3.webp"
            alt="Hero Image"
            className="h-full rounded-lg object-cover w-full"
          />
          <div className="absolute max-w-[470px] sm:ml-7 top-[55%] ml-8 -translate-y-[50%] sm:space-y-2">
            <h2 className="text-2xl font-bold sm:text-3xl">Best Chips</h2>
            <p className="text-xl text-gray-500 pt-3"> Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-4">
              $9.99
            </div>
            <div className="bg-accent hover:bg-accentDark rounded-full text-white flex items-center gap-4 w-fit px-4 py-2 text-[14px] cursor-pointer">
              Shop Now <FaArrowRight />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
