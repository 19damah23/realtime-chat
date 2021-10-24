const Search = ({ placeholder, giveClass, onChange, onClick, value }) => {
    return (
        <div className={`flex ${giveClass}`}>
            <input
                className="w-full rounded-full ml-1 border focus:outline-none px-4 bg-base-300 bg-opacity-50 border-0"
                type="text"
                name="search"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />

            <button
                className="text-indigo-400 hover:text-indigo-500"
                onClick={onClick}
            >
                <span className="w-auto flex justify-end items-center p-2">
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
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                    </svg>
                </span>
            </button>
        </div>
    );
};

export default Search;
