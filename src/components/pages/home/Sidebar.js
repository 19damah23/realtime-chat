import ListMessage from "../../base/listMessage";
import Menu from "../../base/Menu";
import "react-confirm-alert/src/react-confirm-alert.css";
import Search from "../../base/search";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { change_theme } from "../../../configs/redux/actions/themeActions";

const Sidebar = ({ props }) => {
    const {
        sidebar,
        profile,
        People,
        imgPreview,
        bio,
        phone,
        dataUser,
        setPhone,
        username,
        setUsername,
        setBio,
        query,
        users,
        setSelectedContact,
        chat,
        chats,
        setQuery,
        setDataUser,
        backendApi,
        dispatch,
        getUser,
        setImgPreview,
    } = props;

    const handleChangeSearch = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setDataUser({
            ...dataUser,
            [e.target.name]: e.target.value,
        });
    };

    const updatePhone = () => {
        if (!dataUser.phone) {
            toast.error("Phone cannot be null", {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            const data = { phone: dataUser.phone };
            backendApi
                .patch(`users/phone`, data, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                })
                .then((res) => {
                    setPhone(!phone);
                    dispatch(getUser());
                    toast.success("Phone successfully update!", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                })
                .catch((error) => {
                    console.log(error.response);
                });
        }
    };

    const updateUsername = () => {
        if (!dataUser.username) {
            toast.error("Username cannot be null", {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            const data = { username: `${dataUser.username}` };
            backendApi
                .patch(`users/username`, data, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                })
                .then((res) => {
                    setUsername(!username);
                    dispatch(getUser());
                    toast.success("Username successfully update", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                })
                .catch((error) => {
                    console.log(error.response);
                });
        }
    };

    const updateBio = () => {
        if (!dataUser.bio) {
            toast.error("Bio cannot be null", {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            const data = { bio: dataUser.bio };
            backendApi
                .patch(`users/bio`, data, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                })
                .then((res) => {
                    setBio(!bio);
                    dispatch(getUser());
                    toast.success("Bio successfully update", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                })
                .catch((error) => {
                    console.log(error.response);
                });
        }
    };

    const handleChangeAvatar = (e) => {
        e.preventDefault();
        const files = document.querySelector('input[type="file"]').files[0];
        setImgPreview(URL.createObjectURL(files));
    };

    const handleUpdateAvatar = (e) => {
        e.preventDefault();
        const files = document.querySelector('input[type="file"]').files[0];
        const data = new FormData();
        data.append("avatar", files);

        backendApi
            .patch("users/avatar", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                setImgPreview("");
                dispatch(getUser());
                toast.success("Avatar successfully update", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            })
            .catch((error) => {
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            });
    };

    const handleChangeTheme = (e) => {
        const isChecked = e.target.checked;
        if (isChecked) return dispatch(change_theme("dark"));

        dispatch(change_theme("light"));
    };

    const theme = useSelector((state) => state.theme.theme);

    return (
        <>
            {sidebar ? (
                <>
                    <div className="h-7">
                        <div className="flex justify-start items-center mt-5 text-indigo-400">
                            <label
                                htmlFor="my-drawer"
                                className="drawer-button"
                            >
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
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </label>

                            <h3 className="font-medium text-2xl w-full text-center">
                                {profile.username}
                            </h3>
                        </div>
                    </div>
                    <div className="drawer-side mt-2 h-full self-end">
                        <div className="flex flex-col my-0 py-0">
                            {imgPreview ? (
                                <label htmlFor="avatar">
                                    <img
                                        src={imgPreview}
                                        alt="preview"
                                        className="w-20 h-20 rounded-xl mx-auto"
                                        htmlFor="avatar"
                                    />
                                </label>
                            ) : (
                                <label htmlFor="avatar">
                                    <img
                                        src={
                                            profile.avatar
                                                ? `${process.env.REACT_APP_VERCEL_URL}files/${profile.avatar}`
                                                : People
                                        }
                                        alt="profile"
                                        className="w-20 h-20 rounded-xl mx-auto"
                                    />
                                </label>
                            )}
                            <form
                                encType="multipart/form-data"
                                onSubmit={handleUpdateAvatar}
                                className="text-center mt-1"
                            >
                                <input
                                    type="file"
                                    name="avatar"
                                    id="avatar"
                                    className="hidden"
                                    onChange={handleChangeAvatar}
                                />
                                {imgPreview && (
                                    <button
                                        type="submit"
                                        className="py-1 px-2 border bg-indigo-500 text-xs text-white rounded-lg"
                                    >
                                        save
                                    </button>
                                )}
                            </form>
                            <h5 className="mt-4 text-xl font-bold mx-auto">
                                {profile.name}
                            </h5>
                            <span className="mx-auto">{profile.username}</span>
                            <div className="flex flex-col mt-4 mx-4 h-full">
                                <h3 className="font-medium text-2xl">
                                    Account
                                </h3>
                                {phone === true ? (
                                    <input
                                        type="text"
                                        name="phone"
                                        value={dataUser.phone}
                                        onChange={handleUpdateProfile}
                                        onKeyPress={(e) =>
                                            e.key === "Enter" && updatePhone()
                                        }
                                        className="border-b py-1 mb-1 focus:outline-none bg-base-300 bg-opacity-20 px-2 border-0"
                                    />
                                ) : (
                                    <p>{profile.phone}</p>
                                )}
                                <span
                                    className="text-indigo-400 font-normal text-xs cursor-pointer"
                                    onClick={() => setPhone(!phone)}
                                >
                                    Tap to change phone number
                                </span>
                                <hr className="my-3" />
                                {username === true ? (
                                    <input
                                        type="text"
                                        name="username"
                                        value={dataUser.username}
                                        onChange={handleUpdateProfile}
                                        onKeyPress={(e) =>
                                            e.key === "Enter" &&
                                            updateUsername()
                                        }
                                        className="border-b py-1 mb-1 focus:outline-none bg-base-300 bg-opacity-20 px-2 border-0"
                                    />
                                ) : (
                                    <p>{profile.username}</p>
                                )}
                                <span
                                    className="text-indigo-400 font-normal text-xs cursor-pointer"
                                    onClick={() => setUsername(!username)}
                                >
                                    Username
                                </span>
                                <hr className="my-3" />
                                {bio === true ? (
                                    <input
                                        type="text"
                                        name="bio"
                                        value={dataUser.bio}
                                        onChange={handleUpdateProfile}
                                        onKeyPress={(e) =>
                                            e.key === "Enter" && updateBio()
                                        }
                                        className="border-b py-1 mb-1 focus:outline-none bg-base-300 bg-opacity-20 px-2 border-0"
                                    />
                                ) : (
                                    <p>{profile.bio}</p>
                                )}
                                <span
                                    className="text-indigo-400 font-normal text-xs cursor-pointer"
                                    onClick={() => setBio(!bio)}
                                >
                                    Bio
                                </span>
                                <hr className="my-3" />
                                <h3 className="font-medium text-2xl">
                                    Settings
                                </h3>
                                <p className="text-sm mt-2 font-medium">
                                    Notification and Sounds
                                </p>
                                <p className="text-sm mt-2 font-medium">
                                    Privaty and Security
                                </p>
                                <p className="text-sm mt-2 font-medium">
                                    Data and Stronge
                                </p>
                                <p className="text-sm mt-2 font-medium">
                                    Chat settings
                                </p>
                                <p className="text-sm mt-2 font-medium">
                                    Devices
                                </p>
                                <label className="self-center flex items-center mt-20 pb-20">
                                    Light
                                    <input
                                        type="checkbox"
                                        className="toggle mx-3"
                                        onChange={handleChangeTheme}
                                        checked={theme === "dark"}
                                    />
                                    Dark
                                </label>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="h-40 px-4">
                        <div className="flex justify-between items-center mt-8 text-indigo-400">
                            <h3 className="font-medium text-2xl">TELEGRAM</h3>
                            <Menu />
                        </div>

                        <Search
                            value={query}
                            placeholder="Type your message..."
                            giveClass="mt-12"
                            onChange={handleChangeSearch}
                        />
                    </div>
                    <div className="overflow-y-auto listChat">
                        {users &&
                            users.map((user) => (
                                <li
                                    key={user.id}
                                    className="list-none flex items-center py-3 border-b border-base-200 hover:bg-base-200 hover:bg-opacity-30 px-4"
                                    onClick={() =>
                                        setSelectedContact(() => user)
                                    }
                                >
                                    <ListMessage
                                        users={user}
                                        message={chats}
                                        other={chat}
                                    />
                                </li>
                            ))}
                    </div>
                </>
            )}
        </>
    );
};

export default Sidebar;
