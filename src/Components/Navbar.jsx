import React, { useEffect, useState } from "react";
import { useDispatch, connect } from 'react-redux'
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import reducer from '../reducer'


const Navbar = (loginValue) => {
  const dispatch = useDispatch(reducer)
  const [userData, setUserData] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [userType, setUserType] = useState("Buyer")
  
  useEffect(() => {
    const loginstatus = localStorage.getItem("_trisquarestorage")
    if (loginstatus) {
      
      const newValue = JSON.parse(loginstatus)
      if (newValue.data.message) {
        alert("user is not valid");
      } else {
        setUserData(true)
        newValue.data[0].email === "buyer@trisquare.asia" ? setAdmin(true) : setAdmin(false);
        setUserType(newValue.data[0].user_type)
        dispatch({
          type: "setUser",
          userIn: true,
          userOut: false,
        })
      }
      
    } else {
      setUserData(false)
      setAdmin(false)
    }
  }, [loginValue])
  const signOut = () => {
    localStorage.removeItem("_trisquarestorage")
    setUserData(false)
    dispatch({
      type: "setUser",
      userIn: false,
      userOut: true,
    })
  }

  return (
    <div className="navbar">
      <nav className="navbar__components">
        <div className="linksDiv"><div className="marker"></div><a href='https://trisquare.asia/en/' className="navbar__component admin__link">HOME</a></div>

        <div className="linksDiv"><div className="marker"></div><Link to='/buyer' className="navbar__component admin__link">BUY</Link></div>
        {admin ? <div className="linksDiv"><div className="marker"></div><Link to='/buyer/admin' className="navbar__component admin__link">ADMIN</Link></div> : ""}
        {userData ? userType === "Buyer" ? "" : (<div className="linksDiv"><div className="marker"></div><Link to='/buyer/sellPage' className="navbar__component sell__link">SELL</Link></div>) : ""}
        {userData ? <div className="linksDiv"><div className="marker"></div><Link to='/buyer' className="navbar__component login__link" onClick={signOut}>LOG OUT</Link></div> : <div className="linksDiv"><div className="marker"></div><Link to='/buyer/login' className="navbar__component login__link">LOGIN</Link></div>}
      </nav>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loginValue: state.login
  }
}
export default connect(mapStateToProps)(Navbar);
