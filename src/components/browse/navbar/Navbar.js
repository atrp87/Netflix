import { FaCaretDown, FaSearch } from 'react-icons/fa'
import { BsFillBellFill } from 'react-icons/bs'
import { useState } from "react";
import Netflix from '../../../assets/logo_netflix.svg'
import Avatar from '../../../assets/users/1.png'
import { AiOutlineUser } from 'react-icons/ai'
import { BiHelpCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  const navScrollHandler = () => {
    window.scrollY >= 70 ? setIsScrolled(true) : setIsScrolled(false)
  }

  window.addEventListener('scroll', navScrollHandler)

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left_navbar">
          <img
            src={Netflix}
            alt="Netflix logo red text"
          />
          <div className="monitor_links">
            <span>
              <Link to='/films'>Films</Link>
            </span>
            <span>
              <Link to='/series'>Series</Link>
            </span>
            <span>
              <Link to='/mylist'>My List</Link>
            </span>
          </div>
          <div className="browse_links">
            <span>
              Browse
              <FaCaretDown />
            </span>
            <div className="media_options">
              <span>
                <Link to='/films'>Films</Link>
              </span>
              <span>
                <Link to='/series'>Series</Link>
              </span>
              <span>
                <Link to='/mylist'>My List</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="right_navbar">
          <FaSearch className="icon search_icon" />
          <span className='mobile_responsive_up'>Children</span>
          <BsFillBellFill className="icon" />
          <div className="profile">
            <img
              src={Avatar}
              alt="User Avatar"
            />
            <FaCaretDown className="icon mobile_responsive_up" />
            <div className="options">
              <span>
                <img src={Avatar} alt="User Avatar" />
                Username
              </span>
              <span>
                <AiOutlineUser className="icon" />
                Account
              </span>
              <span>
                <BiHelpCircle className="icon" />
                Help Center
              </span>
              <span>Sign out of Netflix</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

