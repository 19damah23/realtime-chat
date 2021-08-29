import FooterChat from "./FooterChat"
import HeaderChat from "./HeaderChat"

const ChatRoom = ({ username, status, profile }) => {
  return (
    <>
      <HeaderChat username={username} status={status} profile={profile} />
      <div className="message-body">

      </div>
      <FooterChat />
    </>
  )
}

export default ChatRoom
