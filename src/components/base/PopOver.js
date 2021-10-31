import React, { useRef } from "react";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverBody from "@material-tailwind/react/PopoverBody";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import Contacts from "../../assets/Contacts.png";

const PopOver = ({ actionClick }) => {
    const buttonRef = useRef();

    return (
        <>
            <button
                ref={buttonRef}
                className="ml-auto text-indigo-400 focus:outline-none"
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
                        strokeWidth="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    ></path>
                </svg>
            </button>

            <Popover placement="bottom" ref={buttonRef}>
                <PopoverContainer>
                    <PopoverBody>
                        <label
                            htmlFor="my-drawer-4"
                            className={`flex gap-2 my-2 cursor-pointer lg:hidden`}
                        >
                            <img
                                src={Contacts}
                                alt="contact"
                                className="w-5 h-5"
                            />
                            Contacts
                        </label>
                        <label
                            className="my-1 cursor-pointer flex gap-2"
                            onClick={actionClick}
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
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                            </svg>
                            Delete chat history
                        </label>
                    </PopoverBody>
                </PopoverContainer>
            </Popover>
        </>
    );
};

export default PopOver;
