import React from 'react'
import {User} from "../utils/user"
const Message = () => {
  return (
    <div>
      <div className='text-[26px] font-medium pb-4'>Chats</div>
      <div>
      {
        User.map((main, i) => (
            <div className='flex items-center py-[6px] '>
              <img src={`${main.imageProfile}`} alt="" className='w-10 h-10 rounded-full p-0 '/>
              <span>{main.myProfile}</span>
            </div>

        ))
      }</div>
    </div>
  )
}

export default Message