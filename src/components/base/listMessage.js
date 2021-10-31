import { useEffect, useState } from "react";
import backendApi from "../../configs/api/backendApi";
import People from "../../assets/titikkoma.png";

const ListMessage = ({ users, handleClick, message, other }) => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    backendApi
      .get(`chats/${users.id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const data = res.data.chats;
        setChats(data.reverse());
      });
  }, [message, users, other]);

  return (
    <>
      <div className="object-contain w-12 h-12">
        <img
          src={
            users.avatar != null
              ? `${process.env.REACT_APP_VERCEL_URL}files/${users.avatar}`
              : People
          }
          alt="profile"
          className="rounded-md w-full h-full border object-cover"
        />
      </div>
      <div className="flex flex-col ml-3 w-44" onClick={handleClick}>
        <p className="text-base font-medium whitespace-nowrap overflow-hidden overflow-ellipsis">
          {users.name}
        </p>
        <span className="text-sm text-indigo-400 ">
          {chats.length > 0 ? chats[0].message : ""}
        </span>
      </div>
    </>
  );
};

export default ListMessage;
