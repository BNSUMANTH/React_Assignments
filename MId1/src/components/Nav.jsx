import React from 'react'
import {Link} from "react-router-dom";
export const Nav = () => {
  return (
    <div>
        <Link style={{color:"yellow"}} to="/">HOME  </Link>
        <Link style={{color:"white"}}to="/tasks">tasks </Link>
        <Link style={{color:"green"}}to="/about">about </Link>
    </div>
  )
}
