const InputChat = ({ onChange, onClick, message }) => {
    const handleEnter = (e) => {
        if (e.charCode === 13) onClick();
    };
    return (
        <>
            <div className="relative flex w-full">
                <input
                    onKeyPress={handleEnter}
                    name="message"
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={onChange}
                    className="w-full py-2 px-3 rounded-lg focus:outline-none bg-base-300 bg-opacity-50 border-0"
                />
                <span className="flex text-indigo-400 gap-5 absolute right-6 top-2">
                    {/* plane */}
                    <button type="button" onClick={onClick}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            ></path>
                        </svg>
                    </button>
                </span>
            </div>
        </>
    );
};

export default InputChat;
