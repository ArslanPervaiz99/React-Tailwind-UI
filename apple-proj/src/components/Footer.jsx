import { footerLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="text-gray font-semibold text-xs">
            More Ways to Shop:{" "}
            <span className="text-blue underline cursor-pointer">
              {" "}
              Find an Apple Store.{" "}
            </span>
            or{" "}
            <span className="text-blue cursor-pointer underline">
              {" "}
              Other Retailers.{" "}
            </span>{" "}
            Near You.
          </p>
          <p className="text-gray font-semibold text-xs">
            or Call us: 0321-689-2146{" "}
          </p>
        </div>
        <div className="w-full my-5 h-[1px] bg-neutral-700" />
        <div className="flex md:flex-row flex-col md:items-center justify-between ">
          <p className="text-gray text-xs font-semibold">
            Copright @ 2024 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, index) => (
              <p
                key={link}
                className="text-blue cursor-pointer text-xs font-semibold"
              >
                {link}{" "}
                {index !== footerLinks.length - 1 && (
                  <span className="mx-2 text-gray-500">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
