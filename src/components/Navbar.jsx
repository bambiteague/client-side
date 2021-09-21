import React from "react";
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return <div>
    <nav>
      <li><NavLink to ='/users/new'>Sign Up</NavLink></li>
      <li><NavLink to='/home'>Home</NavLink></li>
      <li><NavLink to='/posts'>Posts</NavLink></li>
      <li><NavLink to='/posts/new'>Write Post</NavLink></li>
    </nav>
  </div>;
}

export default NavBar;
