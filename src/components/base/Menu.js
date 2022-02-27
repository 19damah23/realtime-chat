/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverBody from "@material-tailwind/react/PopoverBody";
import { Link, useHistory } from "react-router-dom";
import Settings from "../../assets/Settings.png";
import Bookmarks from "../../assets/bookmarks.png";
import Contacts from "../../assets/Contacts.png";
import InviteFriends from "../../assets/Invite friends.png";
import FAQ from "../../assets/FAQ.png";

const PopOver = () => {
    const buttonRef = useRef();
    const history = useHistory();

    const logout = (e) => {
        e.preventDefault();

        localStorage.clear();
        history.push("/");
    };
    return (
        <>
            <button
                ref={buttonRef}
                className="ml-auto text-indigo-400 focus:outline-none"
            >
                <svg
                    width={24}
                    height={24}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
                        stroke="#818CF8"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <Popover placement="bottom" ref={buttonRef}>
                <PopoverContainer>
                    <PopoverBody>
                        <label
                            htmlFor="my-drawer"
                            className="flex gap-2 mb-2 cursor-pointer"
                        >
                            <img
                                src={Settings}
                                alt="setting"
                                className="w-5 h-5"
                            />
                            Settings
                        </label>
                        <label
                            htmlFor="my-drawer-4"
                            className={`gap-2 my-2 cursor-pointer hidden lg:flex`}
                        >
                            <img
                                src={Contacts}
                                alt="contact"
                                className="w-5 h-5"
                            />
                            Contacts
                        </label>
                        <label
                            onClick={logout}
                            className="flex gap-2 mt-1 cursor-pointer"
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
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                />
                            </svg>
                            Logout
                        </label>
                    </PopoverBody>
                </PopoverContainer>
            </Popover>
        </>
    );
};

export default PopOver;
