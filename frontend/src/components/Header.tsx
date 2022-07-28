import React, { ReactChild, ReactChildren, ReactNode, SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom"
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useContext } from "react";
import authService from "../features/auth/authService.ts";
import { HeaderProps } from "../types/types";

const { UserContext } = require("../context/userContext.ts");

const Header = (props: HeaderProps) => {
  const { children, isSignedIn, setIsSignedIn } = props;
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const onLogout = () => {
      authService.logout();
      navigate('/');
      setUser(null);
      setIsSignedIn(false);
  }

  return (
    <header className="header flex justify-between items-center py-5 px-14 mb-10 border-b border-[#76cc52]">
        <div className="logo">
            <Link className="text-white" to='/'>Home</Link>
        </div>
        <ul className="flex justify-between items-center">
            {
                user || isSignedIn ? (
                    <>
                    <Link className="rounded-md mr-9 border-2 border-indigo-600 hover:border-green-500 active:bg-amber-700 ease-out duration-700 hover:duration-700 cursor-pointer p-3 flex items-center text-white" to='/covers'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg> Images
                    </Link>
                    {children}
                    <li>
                        <button className="flex items-center justify-between gap-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={onLogout}>
                            <FaSignOutAlt /> <span>Logout</span>
                        </button>
                    </li>
                    </>
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