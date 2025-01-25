import React from 'react';
import ProfileCard from './ProfileCard';

const FriendList = ({ AllFriend }) => {
    return (
        <ul className=" flex flex-wrap justify-center  w-fit max-h-[120px]">
            {AllFriend.map((item, index) => (
                <li key={index} className='p-2'   >
                    <ProfileCard 
                        avatar={item.avatar} 
                        name={item.name} 
                        commonFriends={item.commonFriends} 
                        friendStatus={item.friendStatus}
                    />
                </li>
            ))}
        </ul>
    );
};

export default FriendList;