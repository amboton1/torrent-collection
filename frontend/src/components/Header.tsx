import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useContext } from "react";
import authService from "../features/auth/authService.ts";

const { UserContext } = require("../context/userContext.ts");

const Header = () => {
  const {loggedState, setLoggedState} = useContext(UserContext);
  const navigate = useNavigate();

  const onLogout = () => {
      authService.logout();
      navigate('/');
      setLoggedState(false);
  }

  return (
    <header className="header flex justify-between items-center py-5 px-14 mb-10 border-b border-[#76cc52]">
        <div className="logo">
            <Link className="text-white" to='/'>Home</Link>
        </div>
        <ul className="flex justify-between items-center">
            {
                loggedState ? (
                    <>
                    <form action="" className="relative mr-7 w-max">
                        <input type="search" className="peer cursor-pointer transition duration-300 relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none border-indigo-600 focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </form>
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