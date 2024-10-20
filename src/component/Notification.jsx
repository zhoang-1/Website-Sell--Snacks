import React from "react";
import { Notifications } from "../utils/notification";
import { Link } from "react-router-dom";
const Notification = () => {
  return (
    <div className="">
      <div className="text-[26px] font-medium pb-4 px-4">Notification</div>
      <div className="px-6 h-[30px]">
        {Notifications.map((main, i) => (
          <Link
            to={`${main.link}`}
            className="flex items-center border-b-[1px] border-solid border-black/20 p-4"
          >
            <div className="text-yellow-600 pr-2">{main.image}</div>
            <span>{main.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Notification;
