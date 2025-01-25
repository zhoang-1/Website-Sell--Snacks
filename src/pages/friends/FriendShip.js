import React from "react";
import AddFriend from "./AddFriends";
import SuggestFriend from "./SuggestFriend";
import Friends from "./Friends";
const FriendShip = () => {
  return (
    <div className="container px-8 w-full">
      <div className=" items-center w-[25%] ">
        <Friends/>
      </div>
      <div className="w-[48%] flex-1 flex flex-col items-center ">
        <AddFriend />
      </div>
      <div className=" items-center  w-[25%]">
        <SuggestFriend />
      </div>
    </div>
  );
};

export default FriendShip;
