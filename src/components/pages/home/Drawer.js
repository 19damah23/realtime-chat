import People from "../../../assets/man.png";
import "react-toastify/dist/ReactToastify.css";
import "react-confirm-alert/src/react-confirm-alert.css";

const Drawer = ({ props }) => {
    const { userSelect } = props;
    return (
        <>
            <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
                defaultChecked={true}
            />
            <div className="drawer-side absolute z-10 right-0 h-screen -mr-80">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <div className="flex justify-start items-center mt-5 text-indigo-400">
                        <label htmlFor="my-drawer-4" className="drawer-button">
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
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </label>

                        <h3 className="font-medium text-2xl w-full text-center">
                            {userSelect.username}
                        </h3>
                    </div>
                    <div className="flex flex-col my-0 py-0">
                        <div className="w-20 h-20 object-contain">
                            <img
                                src={
                                    userSelect.avatar
                                        ? `${process.env.REACT_APP_VERCEL_URL}files/${userSelect.avatar}`
                                        : People
                                }
                                alt="profile"
                                className="w-full h-full rounded-xl mx-auto mt-2 object-cover"
                            />
                        </div>
                        <div className="flex flex-col mt-8">
                            <h5 className="mt-4 text-xl font-bold">
                                {userSelect.name}
                            </h5>
                            <span className="text-indigo-400 font-normal text-xs">
                                Online
                            </span>
                            <h3 className="font-medium text-lg mt-4">
                                Phone number
                            </h3>
                            <p>{userSelect.phone}</p>
                        </div>
                    </div>
                </ul>
            </div>
        </>
    );
};

export default Drawer;
