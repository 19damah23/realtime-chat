import { useEffect, useState } from "react";
import ChatRoom from "../../components/base/ChatRoom";
import io from "socket.io-client";
import backendApi from "../../configs/api/backendApi";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import People from "../../assets/man.png";
import { getUser } from "../../configs/redux/actions/userActions";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Sidebar from "../../components/pages/home/Sidebar";
import Drawer from "../../components/pages/home/Drawer";

const Home = () => {
    const dispatch = useDispatch();
    const [selectedContact, setSelectedContact] = useState("");
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");
    const [message, setMessage] = useState("");
    const [socket, setSocket] = useState(null);
    const [chat, setChat] = useState([]);
    const [chats, setChats] = useState([]);
    const [sidebar, setSidebar] = useState(false);
    const [phone, setPhone] = useState(false);
    const [username, setUsername] = useState(false);
    const [bio, setBio] = useState(false);
    const [imgPreview, setImgPreview] = useState("");
    const [userSelect, setUserSelect] = useState({});
    const role = localStorage.getItem('role');

    const setupSocket = () => {
        const resultSocket = io("http://localhost:4000", {
            query: {
                token: localStorage.getItem("token"),
            },
        });
        setSocket(resultSocket);
    };

    useEffect(() => {
        dispatch(getUser());
        const token = localStorage.getItem("token");
        if (token && !socket) {
            setupSocket();
        }
    }, [socket, dispatch]);

    useEffect(() => {
        if (socket) {
            socket.off("newMessage");
            socket.on("newMessage", (data) => {
                if (data.sender === selectedContact.id) {
                    setChat((currentValue) => [...currentValue, data]);
                } else {
                    toast.info("new message", {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                    backendApi
                        .get(`chats/${users.id}`, {
                            headers: {
                                authorization: `Bearer ${localStorage.getItem(
                                    "token"
                                )}`,
                            },
                        })
                        .then((res) => {
                            const data = res.data.chats;
                            setChats(data);
                        });
                }
            });
        }
    }, [socket, selectedContact, users]);

    useEffect(() => {
        backendApi
            .get(`users/users/${role}?search=${query}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                setUsers(res.data.users);
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, [role, query]);

    useEffect(() => {
        if (selectedContact) {
            backendApi
                .get(`chats/${selectedContact.id}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                })
                .then((res) => {
                    const result = res.data.chats;
                    setChat(result);
                });

            backendApi
                .get(`users/user/${selectedContact.id}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                })
                .then((res) => {
                    const result = res.data.user[0];
                    setUserSelect(result);
                });
        }
    }, [selectedContact]);

    const handleInput = (e) => {
        e.preventDefault();
        setMessage(e.target.value);
    };

    const sendMessage = () => {
        if (socket && message) {
            socket.emit(
                "sendMessage",
                {
                    receiver: selectedContact.id,
                    message: message,
                },
                (data) => {
                    setChat((currentValue) => [
                        ...currentValue,
                        {
                            receiver: data.receiver,
                            message: data.message,
                            createdAt: data.createdAt,
                        },
                    ]);
                }
            );
            setMessage("");
        }
    };

    const { profile } = useSelector((state) => state.user);
    const [dataUser, setDataUser] = useState({
        phone: profile.phone,
        username: profile.username,
        bio: profile.bio,
    });

    const confirm = (id) => {
        confirmAlert({
            title: "Are you sure?",
            message: "You want to delete this chat?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => handleDeleteHistoryChat(id),
                },
                {
                    label: "No",
                    onClick: () =>
                        toast.error("Cancelled!", {
                            position: toast.POSITION.TOP_RIGHT,
                        }),
                },
            ],
        });
    };

    const handleDeleteHistoryChat = (id) => {
        backendApi
            .delete(`chats/${id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then(() => {
                backendApi
                    .get(`chats/${id}`, {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`,
                        },
                    })
                    .then((res) => {
                        const result = res.data.chats;
                        setChat(result);
                        toast.success("Chat deleted!", {
                            position: toast.POSITION.TOP_RIGHT,
                        });
                    });
            })
            .catch((error) => {
                toast.error(error.response.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            });
    };

    return (
        <>
            <ToastContainer
                draggable={false}
                transition={Zoom}
                autoClose={4000}
            />
            <div className="grid grid-cols-4 grid-rows-1 h-screen relative overflow-x-hidden bg-base-200">
                <div
                    className={`bg-base-100 overflow-y-auto lg:col-span-1 lg:block ${
                        selectedContact !== "" ? "hidden" : "col-span-4"
                    }`}
                >
                    <input
                        id="my-drawer"
                        type="checkbox"
                        className="drawer-toggle"
                        onClick={() => setSidebar(!sidebar)}
                    />
                    <Sidebar
                        props={{
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
                        }}
                    />
                </div>

                <div
                    className={`lg:col-span-3 lg:block col-span-4 bg-base-200 items-center ${
                        selectedContact !== "" ? "col-span-4" : "hidden"
                    }`}
                >
                    {selectedContact ? (
                        <ChatRoom
                            data={selectedContact}
                            chat={chat}
                            onChange={handleInput}
                            onClick={sendMessage}
                            message={message}
                            actionClick={() => confirm(selectedContact.id)}
                            handleSetSelected={() => setSelectedContact("")}
                        />
                    ) : (
                        <span className="grid place-content-center h-full w-full">
                            Please select a chat to start messaging
                        </span>
                    )}
                </div>
                <Drawer props={{ userSelect }} />
            </div>
        </>
    );
};

export default Home;
