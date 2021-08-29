import PopOver from "./PopOver"

const HeaderChat = ({ profile, username, status }) => {
  return (
    <div className="flex h-24 bg-white items-center px-8">
      <img src={profile} alt="profile" className="w-12 h-12" />
      <div className="flex flex-col ml-4">
        <p className="font-medium text-lg">{username}</p>
        <span className="text-sm font-normal text-indigo-400">{status}</span>
      </div>
      <PopOver />
    </div>
  )
}

export default HeaderChat
