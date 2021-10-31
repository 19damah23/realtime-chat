import { useHistory } from "react-router";
import Logo from "../../assets/logo2.png";

const Navbar = () => {
  const history = useHistory()

  const logout = (e) => {
    e.preventDefault()

    localStorage.clear()
    history.push('/')
  }

  return (
    <>
      <div className="navbar mb-2 shadow-lg text-base-content fixed w-full bg-base-100 top-0">
        <div className="container mx-auto">
          <div className="w-36 h-12">
            <img src={Logo} alt="logo" className="w-full h-full" />
          </div>
            <button className="ml-auto focus:outline-none" title="logout" onClick={logout}>
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
            </button>
       </div>
      </div>
    </>
  );
};

export default Navbar;
