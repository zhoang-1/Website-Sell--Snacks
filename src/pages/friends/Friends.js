import React from "react";
import { AllFriend } from "../../utils/user";
import FriendList from "../../component/friends-ships/FriendList";
const Friend = () => {
  const filteredFriends = AllFriend.filter(friend => friend.friendStatus === 'friends');
  return (
    <div className=" w-full ">
      <div className=" w-full grid mb-2 p-3 h-20 ">
        <span className="font-bold text-2xl">Bạn Bè</span>
        <span className="text-[14px]">Tất cả bạn bè</span>
      </div>

      <div className="flex justify-start   h-screen background">
        <FriendList AllFriend={filteredFriends} />
      </div>
    </div>
  );
};

export default Friend;
