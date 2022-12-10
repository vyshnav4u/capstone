import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Crown } from "../../assets/crown.svg"
import "./Navigation.scss";

const Navigation = () => {
  return (
    <>
    <div className='top-nav'>
        <div className="logo"> <Link to={"/"}>  <Crown /> </Link> </div>
        <div className="nav-conatiner">
            <Link to={"./about"}>
                ABOUT
            </Link>
            <Link to={"./sign-in"}>
                SIGN IN
            </Link>

        </div>
    </div>
        Navigation

        <Outlet />
    </>

  )
}

export default Navigation