import { Link } from "react-router-dom"
import { FaSignInAlt, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header flex justify-between items-center py-5 px-14 mb-14 border-b border-[#76cc52]">
        <div className="logo">
            <Link to='/'>Home</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt /> Login
                </Link>
            </li>
            <li>
                <Link to='/register'>
                    <FaUser /> Register
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header