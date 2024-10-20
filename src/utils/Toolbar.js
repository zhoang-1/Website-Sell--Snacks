import { MdHome, MdGroups } from "react-icons/md";
import { FaUserFriends, FaUserCircle   } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
export const Toolbar = [
    {
        name: 'Home',
        icon: <MdHome />,
        link: '/'
    },{
        name: 'friend',
        icon: <FaUserFriends />,
        link: 'friend'
    },{
        name: 'Group',
        icon: <MdGroups />,
        link: 'group'
    },{
        name:'individual',
        icon:<FaUserCircle  />,
        link: 'user'
    },{
        name: 'Notification',
        icon:<IoMdNotifications />,
        link: 'notification'
    }
]
// export const right_toolbar = [
//     {
//         name: 'Message',
//         link: 'message',
//         icon: <IoMdChatboxes />
//     },
//     {
//         name: 'User',
//         link: 'user',
//         icon: <FaRegUserCircle/>
//     }
// ]

export const user = [
    {
        name: 'Trang cá nhân',
        link:'trang-ca-nhan',
    },
    {
        name: 'Cài Đặt quyền riêng tư',
        link: 'cai-dat-quyen-rieng-tu'
    },
    {
        name : 'đăng xuất',
        link: 'dang-xuat'
    },
    
]