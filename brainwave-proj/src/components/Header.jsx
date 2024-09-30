import React from "react";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import { enablePageScroll, disablePageScroll } from "scroll-lock";

import { HamburgerMenu } from "./design/Header";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";
const Header = () => {
  const myPath = useLocation();

  const [openNavi, setOpenNavi] = useState(false);

  const handleToggleNavi = () => {
    if (openNavi) {
      setOpenNavi(false);
      enablePageScroll();
    } else {
      setOpenNavi(true);
      disablePageScroll();
    }
  };

  //   const handleToggleNavi = () => {
  //     setOpenNavi(!openNavi); // Toggle the navigation state
  //   };

  const handleLinkClick = () => {
    if (!openNavi) return;
    enablePageScroll();
    setOpenNavi(false);
  };

  return (
    <div
      className={`fixed  w-full left-0 top-0 z-50 border-b border-n-6 lg:backdrop-blur-sm ${
        openNavi ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-8 xl:px-10 max-lg:py-4 py-3">
        <a className="block w-[12rem] xl:mr-8 " href="#hero">
          <img src={brainwave} width={190} height={40} alt="brainwave" />
        </a>
        <nav
          className={`${
            openNavi ? "flex" : "hidden"
          } fixed top-[5rem] bg-n-8 right-0 left-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent `}
        >
          <div className="relative z-2 flex flex-col m-auto items-center justify-center lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleLinkClick}
                className={`block relative font-code text-2xl uppercase transition-colors  text-n-1 hover:text-color-1 px-4 py-6 md:py-8 lg:mr-0.25 lg:text-[1rem] lg:font-semibold ${
                  item.onlyMobile ? "lg:hidden" : ""
                } ${
                  item.url === myPath.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 xl:px-12  `}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button mr-8 hidden lg:text-[0.9rem] text-n-1/50 transition-colors hover:text-color-1 lg:block"
        >
          New Account
        </a>
        <Button href="#login" className="hidden lg:text-[0.9rem] lg:flex ">
          Sign in
        </Button>
        <Button
          mobMenu={handleToggleNavi}
          className="ml-auto lg:hidden"
          px="px-3"
        >
          <MenuSvg openNavigation={openNavi} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
