import React from 'react';
import ProfileCard from './ProfileCard';

const AddFriendList = ({ AllFriend }) => {
    return (
        <ul className=" grid grid-cols-2  w-fit max-h-[120px]">
            {AllFriend.map((item, index) => (
                <li key={index} className='p-2 '   >
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

export default AddFriendList;