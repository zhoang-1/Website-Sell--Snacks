import React from "react";
import { AllFriend } from "../../utils/user";
import FriendList from "../../component/friends-ships/FriendList";
const AddFriends = () => {
  const filteredFriends = AllFriend.filter(friend => friend.friendStatus === 'not_friends');
  return (
    <div className=" w-full ">
      <div className="w-full grid mb-2 p-3 h-20">
        <span className="font-bold text-2xl">Gợi Ý Kết Bạn</span>
      </div>

      <div className="flex justify-center   h-screen background">
        <FriendList AllFriend={filteredFriends} />
      </div>
    </div>
  );
};

export default AddFriends;
