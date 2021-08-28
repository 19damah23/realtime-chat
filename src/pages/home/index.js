import Search from "../../components/base/search";
import People from "../../assets/man.png";
import ListMessage from "../../components/base/listMessage";
import { useState } from "react";

const Home = () => {
  const [message, setMessage] = useState([
    {name: 'Agus', message: 'Hello bro...',status: 2 },
    {name: 'Agus', message: 'Hello bro...',status: 2 },
    {name: 'Agus', message: 'Hello bro...',status: 2 },
    {name: 'Agus', message: 'Hello bro...',status: 2 },
    {name: 'Agus', message: 'Hello bro...',status: 2 },
    {name: 'Agus', message: 'Hello bro...',status: 2 },
    {name: 'Agus', message: 'Hello bro...',status: 2 },
    {name: 'Agus', message: 'Hello bro...',status: 2 },
    {name: 'Agus', message: 'Hello bro...',status: 2 },
    {name: 'Agus', message: 'Hello bro...',status: 2 },
  ])

  return (
    <>
      <div className="flex">
        <div className="h-screen bg-white lg:w-1/4 px-8">
          <div className="h-40">
            <div className="flex justify-between items-center mt-8 text-indigo-400">
              <h3 className="font-medium text-2xl">TELEGRAM</h3>
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </div>

            <Search placeholder="Type your message..." giveClass="mt-12" />
          </div>

          <div className="overflow-y-auto listChat">
            {message && message.map(item => (
              <ListMessage name={item.name} message={item.message} profile={People} badge={item.status} />
            ))}
          </div>
        </div>
        <div className="h-screen lg:w-3/4 bg-gray-50 flex justify-center items-center">
          <span className="">Please select a chat to start messaging</span>
        </div>
      </div>
    </>
  );
};

export default Home;
