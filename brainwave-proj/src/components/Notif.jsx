import { notification1 } from "../assets";
import { notificationImages } from "../constants";

const Notif = ({ className, title }) => {
  return (
    <div
      className={`${
        className || " "
      } flex items-center backdrop-blur border border-n-1/10 p-4 pr-6 bg-n-9/40 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        width={62}
        height={62}
        alt="Noti1"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 text-base font-semibold ">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, i) => (
              <li
                key={i}
                className="flex w-6 h-6 border-2 rounded-full border-n-12 overflow-hidden"
              >
                <img
                  src={item}
                  alt="item"
                  width={20}
                  height={20}
                  className="w-full"
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13"> 2m ago </div>
        </div>
      </div>
    </div>
  );
};

export default Notif;
