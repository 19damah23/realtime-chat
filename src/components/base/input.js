import React from "react";

const Input = ({ id, type, name, giveClass, placeholder, label, onChange }) => {
    return (
        <div className={`md-input-main ${giveClass}`}>
            <div className="md-input-box">
                <input
                    id={id}
                    name={name}
                    type={type}
                    className="md-input"
                    placeholder=""
                    onChange={onChange}
                />
                <label htmlFor={placeholder} className="md-label">
                    {label}
                </label>
                <div className="md-input-underline" />
            </div>
        </div>
    );
};

export default Input;
