import Button from "../../components/base/button";
import Input from "../../components/base/input";
import Back from "../../assets/back.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import backendApi from "../../configs/api/backendApi";
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = () => {
    backendApi.post(`auth/register`, form)
      .then((res) => {
        toast.success('Register success, verify your email now!', { position: toast.POSITION.TOP_RIGHT })
      })
      .catch((err) => {
        toast.error(err.response.data.message, { position: toast.POSITION.TOP_RIGHT })
      })
  }

  return (
    <div className="pt-10">
      <ToastContainer draggable={false} transition={Zoom} autoClose={4000} />
      <div className="auth bg-white mx-auto py-10 rounded-lg h-full flex flex-col px-16">
        <div className="flex gap-32">
          <Link to="/login">
            <img src={Back} alt="back" />
          </Link>
          <h3 className="text-center font-rubic text-2xl font-medium text-indigo-300">
            Register
          </h3>
        </div>
        <span className="font-rubic text-sm font-normal my-8">
          Let’s create your account!
        </span>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          giveClass="border-b mb-4"
          label="Name"
          onChange={handleInput}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          giveClass="border-b my-4"
          label="Email"
          onChange={handleInput}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          giveClass="border-b mt-4"
          label="Password"
          onChange={handleInput}
        />
        <Button
          type="button"
          title="Register"
          giveClass="mt-6"
          buttonClass="bg-indigo-400 hover:bg-indigo-500 focus:outline-none text-white text-base"
          onClick={handleRegister}
        />
        <p className="bg-white text-black text-center">Register with</p>
        <Button
          type="button"
          title="Google"
          giveClass="mt-6"
          logo
          buttonClass="focus:outline-none hover:bg-gray-200 text-base border text-indigo-400"
        />
      </div>
    </div>
  );
};

export default Register;
