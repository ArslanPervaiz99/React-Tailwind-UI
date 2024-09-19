import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import CartCount from "./CartCount";
import LoginStatus from "./LoginStatus";
const Nav = () => {
  return (
    <div className="container hidden lg:block pr-5 pl-5">
      <div className="flex justify-between items-center pt-6">
        {/* <h3 className="text-4xl font-medium">Logo</h3> */}
        <img
          src="/logo.png"
          className="w-[300px] h-[110px] cursor-pointer"
          alt="logo"
        />

        <div className="relative w-full max-w-[500px]">
          <input
            type="text "
            placeholder="Search"
            className="w-full bg-[#f2f3f5] border-none outline-none rounded-[25px] px-6 py-3"
          />
          <CiSearch className="absolute top-0 mt-3 mr-5 right-0 text-gray-500 text-2xl cursor-pointer " />
        </div>
        <div className="flex gap-4">
          <div className="icon_wraper relative">
            <FaRegUser />
            <LoginStatus status="10px" />
          </div>
          <div className="icon_wraper relative">
            <BsCart />
            <CartCount size="20px" count={7} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
