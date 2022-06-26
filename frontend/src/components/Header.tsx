import React, { ReactChild, ReactChildren, ReactNode, SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom"
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useContext } from "react";
import authService from "../features/auth/authService.ts";

const { UserContext } = require("../context/userContext.ts");

type ChildrenType = {
    children: ReactChild | ReactChildren
}

type HeaderProps = {
    isSignedIn: boolean,
    setIsSignedIn: (boolean: boolean) => SetStateAction<boolean>,
    children: ChildrenType
}

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

  console.log(props)

  return (
    <header className="header flex justify-between items-center py-5 px-14 mb-10 border-b border-[#76cc52]">
        <div className="logo">
            <Link className="text-white" to='/'>Home</Link>
        </div>
        <ul className="flex justify-between items-center">
            {
                user || isSignedIn ? (
                    <>
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