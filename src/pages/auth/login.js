import Button from '../../components/base/button'
import Input from '../../components/base/input'
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../configs/redux/actions/userActions';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleInput = (e) => {
    e.preventDefault()
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = () => {
    dispatch(login(form, history))
  }

  return (
    <div className="pt-10">
      <ToastContainer draggable={false} transition={Zoom} autoClose={4000} />
      <div className="auth bg-white mx-auto py-10 rounded-lg h-full flex flex-col px-16">
        <h3 className="text-center font-rubic text-2xl font-medium text-indigo-300">Login</h3>
        <span className="font-rubic text-sm font-normal my-8">Hi, Welcome back!</span>
        <Input name="email" type="email" placeholder="Email" giveClass="border-b my-4" label="Email" onChange={handleInput} />
        <Input name="password" type="password" placeholder="Password" giveClass="border-b mt-4" label="Password" onChange={handleInput} />
        <Button type="button" title="Login" giveClass="mt-6" buttonClass="bg-indigo-400 hover:bg-indigo-500 focus:outline-none text-white text-base" onClick={handleLogin} />
        <p className="bg-white text-black text-center">Login with</p>
        <Button type="button" title="Google" giveClass="mt-6" logo buttonClass="focus:outline-none hover:bg-gray-200 text-base border text-indigo-400" />
        <p className="mt-8 font-rubic text-sm font-medium">Don’t have an account? <Link to="/register" className="text-indigo-400 font-normal">Sign Up</Link></p>
      </div>
    </div>
  )
}

export default Login
