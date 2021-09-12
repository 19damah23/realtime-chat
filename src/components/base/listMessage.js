import { useEffect, useState } from "react";
import backendApi from "../../configs/api/backendApi";
import People from "../../assets/man.png";

const ListMessage = ({ users, handleClick, message, other }) => {
  const [chats, setChats] = useState([])
  useEffect(() => {
    backendApi.get(`chats/${users.id}`, {
      headers:{
        authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res) => {
      const data = res.data.chats
      setChats(data.reverse())
    })
  }, [message, users, other])

  return (
    <>
      <img
        src={users.avatar != null ? `${process.env.REACT_APP_BACKEND_API}files/${users.avatar}` : People}
        alt="profile"
        className="rounded-md w-12 h-12 border"
      />
      <div className="flex flex-col ml-3 w-44" onClick={handleClick}>
        <p className="text-base font-medium whitespace-nowrap overflow-hidden overflow-ellipsis">{users.name}</p>
        <span className="text-sm text-indigo-400">{chats.length > 0 ? chats[0].message : ''}</span>
      </div>
      {/* {badge ? (
        <span class="text-xs h-4 w-4 font-bold bg-blue-500 text-white rounded-full my-auto mx-auto flex justify-center  items-center">
          {badge}
        </span>
      ) : (
        ""
      )} */}
    </>
  );
};

export default ListMessage;
