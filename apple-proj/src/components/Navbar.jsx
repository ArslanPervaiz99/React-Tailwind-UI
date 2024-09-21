import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
const Navbar = () => {
  return (
    <header className="w-full p-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img
          src={appleImg}
          alt="apple"
          width={22}
          height={22}
          className="cursor-pointer"
        />
        <div className="flex flex-1  justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className=" px-7 text-2xl cursor-pointer text-gray hover:text-white transition-all"
            >
              {" "}
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          {" "}
          <img
            className="cursor-pointer"
            src={searchImg}
            alt="Search"
            width={22}
            height={22}
          />
          <img
            src={bagImg}
            alt="Search"
            width={22}
            height={22}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
