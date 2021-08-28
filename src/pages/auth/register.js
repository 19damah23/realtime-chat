import Button from '../../components/base/button'
import Input from '../../components/base/input'
import Back from '../../assets/back.png';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth bg-white mx-auto py-10 mt-10 rounded-lg h-full flex flex-col px-16">
      <div className="flex gap-32">
        <Link href="/login">
          <img src={Back} alt="back" />
        </Link>
        <h3 className="text-center font-rubic text-2xl font-medium text-indigo-300">Register</h3>
      </div>
      <span className="font-rubic text-sm font-normal my-8">Hi, Welcome back!</span>
      <Input name="name" type="text" placeholder="Name" giveClass="border-b mb-4" label="Name" />
      <Input name="email" type="email" placeholder="Email" giveClass="border-b my-4" label="Email" />
      <Input name="password" type="password" placeholder="Password" giveClass="border-b mt-4" label="Password" />
      <Button type="button" title="Register" giveClass="mt-6" buttonClass="bg-indigo-400 hover:bg-indigo-500 focus:outline-none text-white text-base" />
      <p className="bg-white text-black text-center">Register with</p>
      <Button type="button" title="Google" giveClass="mt-6" logo buttonClass="focus:outline-none hover:bg-gray-200 text-base border text-indigo-400" />
    </div>
  )
}

export default Register
