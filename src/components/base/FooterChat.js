import InputChat from "./InputChat";

const FooterChat = ({ onChange, onClick, message }) => {
    return (
        <footer className="h-24 flex justify-center items-center bottom-0 border-l border-base-200 border-opacity-50 bg-base-100 px-8">
            <InputChat
                onChange={onChange}
                onClick={onClick}
                message={message}
            />
        </footer>
    );
};

export default FooterChat;
