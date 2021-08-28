import { Link } from "react-router-dom";

const ListMessage = ({ profile, name, message, badge }) => {
  return (
    <li className="list-none flex items-center py-3 border-b">
      <img
        src={profile}
        alt="profile"
        className="rounded-md w-12 h-12 border"
      />
      <div className="flex flex-col ml-3 w-44">
        <Link to="/" className="text-base font-medium">
          {name}
        </Link>
        <span className="text-sm text-indigo-400">{message}</span>
      </div>
      {badge ? (
        <span class="text-xs h-4 w-4 font-bold bg-blue-500 text-white rounded-full my-auto mx-auto flex justify-center  items-center">
          {badge}
        </span>
      ) : (
        ""
      )}
    </li>
  );
};

export default ListMessage;
