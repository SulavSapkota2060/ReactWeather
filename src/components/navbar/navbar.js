import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const style = {
        backgroundColor:"white",
        padding:"20px",
        width:"200px",
        margin:"auto",
    }
  return (
    <nav style={style}>
      <Link to="/">Home</Link>&nbsp;|&nbsp;
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Nav;
