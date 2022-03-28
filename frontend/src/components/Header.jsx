import { Link } from "react-router-dom"
import { FaSignInAlt, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header flex justify-between items-center py-5 px-14 mb-14 border-b border-[#76cc52]">
        <div className="logo">
            <Link className="text-white" to='/'>Home</Link>
        </div>
        <ul className="flex justify-between items-center">
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
        </ul>
    </header>
  )
}

export default Header