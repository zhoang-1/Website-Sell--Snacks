import React from 'react';


const ProfileCard = ({ avatar, name, commonFriends, friendStatus }) => {
    return (
        <div className="flex items-center bg-white rounded-lg shadow-md p-4 w-80 h-[84px] my-2">
            <img 
                src={avatar} 
                alt="Profile" 
                className="rounded-full w-15 h-15 mr-4 object-cover" 
            />
            <div className="flex-1">
                <p className="font-bold text-lg">{name}</p>
                {commonFriends && <p className="text-gray-500">{commonFriends} bạn chung</p>}
            </div>
            <div className="flex items-center space-x-2">
                {friendStatus === 'friends' ? (
                    <button className="cursor-pointer text-gray-400 text-2xl">...</button>
                ) : friendStatus === 'pending' ? (
                    <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">
                        Chấp Nhận
                    </button>
                ) : friendStatus === 'unblock' ? (
                    <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600">
                        Bỏ chặn
                    </button>
                ) : (
                    <button className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">
                        Thêm
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProfileCard;