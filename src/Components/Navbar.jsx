import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { useDispatch, connect } from 'react-redux';
import "../css/Navbar.css";
import { Link, useHistory } from "react-router-dom";
import reducer from '../reducer';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';


const Navbar = (props) => {
  const history = useHistory()
  const dispatch = useDispatch(reducer);
  const [userData, setUserData] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [userType, setUserType] = useState("Buyer");
  const [heights, setHeights] = useState("0px");
  const [display1, setDisplay1] = useState("none");
  const [display2, setDisplay2] = useState("block");
  const [disp, setDisp] = useState("none");
  const [locationKeys, setLocationKeys] = useState([])


  const { loginValue } = props

  // console.log(props.match)

  const handleToggle = () => {
    if (disp === "none") {
      setDisp("block")
      setHeights("auto")
    }
    // else if (url == window.location.href) {
    //   setDisp("block")
    // }
    // else if (url !== window.location.href) {
    //   setDisp("none")
    // }
    else {
      setDisp("none")
      setHeights("0px")
    }
  }

  useEffect(() => {
    return history.listen(location => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key])
      }

      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys)

          // Handle forward event
          setDisp("none")

        } else {
          setLocationKeys((keys) => [location.key, ...keys])

          // Handle back event
          setDisp("none")

        }
      }
    })
  }, [locationKeys,])


  // var url = window.location.href;
  useEffect(() => {
    const loginstatus = localStorage.getItem("_trisquarestorage")
    if (loginstatus) {
=======
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
      
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
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
<<<<<<< HEAD

=======
      
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
    } else {
      setUserData(false)
      setAdmin(false)
    }
  }, [loginValue])
<<<<<<< HEAD

=======
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
  const signOut = () => {
    localStorage.removeItem("_trisquarestorage")
    setUserData(false)
    dispatch({
      type: "setUser",
      userIn: false,
      userOut: true,
    })
<<<<<<< HEAD
    history.push("/buyer/login")
    window.location.reload()
  }

  // const dis1 = () => {
  //   setDisplay2("none");
  //   setDisplay1("block")
  // }
  // const dis2 = () => {
  //   setDisplay1("none");
  //   setDisplay2("block")
  // }

  return (
    <div className="navbar">

      <nav className="navbar__components">
        <div className="linksDiv"><div className="marker"></div><Link to='/buyer/' className="navbar__component admin__link">HOME</Link></div>
        {userData ? "" :
          <div className="linksDiv"><div className="marker"></div><a href='https://trisquare.asia/buyer/info/whatwd.html' className="navbar__component admin__link">WHAT WE DO</a></div>}

        {userData ?
          userType === "Seller" ? "" : <div className="linksDiv"><div className="marker"></div><Link to='/buyer/' className="navbar__component admin__link">BUY</Link></div> : <div className="linksDiv"><div className="marker"></div><Link to='/buyer/' className="navbar__component admin__link">BUY</Link></div>}

        {admin ?
          <div className="linksDiv"><div className="marker"></div><Link to='/buyer/admin' className="navbar__component admin__link">ADMIN</Link></div>
          : ""}

        {userData ?
          userType === "Seller" || admin ?
            (<div className="linksDiv"><div className="marker"></div><Link to='/buyer/sellPage' className="navbar__component sell__link">SELL</Link></div>) : ""
          : (<div className="linksDiv"><div className="marker"></div><Link to='/buyer/sellPage' className="navbar__component sell__link">SELL</Link></div>)}

        {admin ? "" : (<div className="linksDiv"><div className="marker"></div><a href='https://trisquare.asia/buyer/info/faq.html' className="navbar__component admin__link">FAQ</a></div>)}

        {userData ?
          <div className="linksDiv"><div className="marker"></div><Link to='/buyer/' className="navbar__component login__link" onClick={signOut}>LOG OUT</Link></div>
          : <div className="linksDiv"><div className="marker"></div><Link to='/buyer/login' className="navbar__component login__link">LOGIN/REGISTER</Link></div>
        }
      </nav>
      {/* {
        disp === "none" ? "" : */}
      <nav className="navbar__componentsCollapsed" style={{ display: `${disp}`, height: `${heights}` }} onClick={handleToggle}>
        <Link to='/buyer/' className="navbar__component1 admin__link1">HOME</Link>
        {userData ? "" :
          <a href='https://trisquare.asia/buyer/info/whatwd.html' className="navbar__component1 admin__link1">WHAT WE DO</a>}

        {userData ?
          userType === "Seller" ? "" : <Link to='/buyer/' className="navbar__component1 admin__link1">BUY</Link> : <Link to='/buyer/' className="navbar__component1 admin__link1">BUY</Link>}

        {admin ?
          <Link to='/buyer/admin' className="navbar__component1 admin__link1">ADMIN</Link>
          : ""}

        {userData ?
          userType === "Seller" || admin ?
            (<Link to='/buyer/sellPage' className="navbar__component1 sell__link1 admin__link1">SELL</Link>) : ""
          : (<Link to='/buyer/sellPage' className="navbar__component1 sell__link1 admin__link1">SELL</Link>)}

        {admin ? "" : (<a href='https://trisquare.asia/buyer/info/faq.html' className="navbar__component1 admin__link1">FAQ</a>)}

        {userData ?
          <Link to='/buyer/' className="navbar__component1 login__link1 admin__link1" onClick={signOut} >LOG OUT</Link>
          : <Link to='/buyer/login' className="navbar__component1 login__link1 admin__link1">LOGIN/REGISTER</Link>
        }
        {/* <h1> This is The Dropdown</h1> */}

      </nav>
      {/* } */}
      <div className="navbar__hamburger" onClick={handleToggle}>
        {
          disp === "none" ? <GiHamburgerMenu className="hamIcon hamburger" /> : <ImCross className="cross" />
        }

      </div>
=======
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
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loginValue: state.login
  }
}
export default connect(mapStateToProps)(Navbar);
