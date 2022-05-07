import { Link, useNavigate } from "react-router-dom"
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import authService from "../features/auth/authService";

const Header = () => {
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const onLogout = () => {
      authService.logout();
      navigate('/');
      setUser(undefined);
  }

  return (
    <header className="header flex justify-between items-center py-5 px-14 mb-14 border-b border-[#76cc52]">
        <div className="logo">
            <Link className="text-white" to='/'>Home</Link>
        </div>
        <ul className="flex justify-between items-center">
            {
                user ? (
                    <li>
                        <button className="flex items-center justify-between gap-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={onLogout}>
                            <FaSignOutAlt /> <span>Logout</span>
                        </button>
                    </li>
                ) : (
                    <>
                        <li className="ml-5 leading-[2.2]">
                            <Link className="flex items-center text-white hover:text-[#777]" to='/login'>
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li className="ml-5 leading[2.2]">
                            <Link className="flex items-center text-white hover:text-[#777]" to='/register'>
                                <FaUser /> Register
                            </Link>
                        </li>
                    </>
                )
            }
            
        </ul>
    </header>
  )
}

export default Header