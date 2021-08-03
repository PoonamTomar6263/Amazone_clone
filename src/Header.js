import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom"
import { auth } from "./firebase";

//import { ShoppingBasket } from '@material-ui/icons';
import { useStateValue } from './StateProvider';

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();
    console.log(user);
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();

        } else {
            //auth.signIn();
        }
    }
    return (

        <div className="header" >
            <div className="header_left">
                <Link to="/">
                    <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="imgamazonelogo" />
                </Link>
            </div>
            <div className="header_middle">
                <input className="header_input" type="text" ></input>
                <SearchIcon className="searchIcon" />
            </div>

            <div className="header_right">
                <div onClick={handleAuthentication} className="header_nav1">

                    <span className="span1" >Hello,{user ? user.email : 'guest'}</span>
                    <Link to={!user && "/Login"}>
                        <span className="span2">{user ? 'Sign Out' : 'Sign In'}</span>
                    </Link>
                </div>
                <div className="header_nav1">
                    <span className="span1" >Return</span>
                    <span className="span2">& Order</span>
                </div>
                <div className="header_nav1">
                    <span className="span1" >Sign-In </span>
                    <span className="span2">Prime</span>
                </div>
                <div className="addCart">
                    <Link to="/checkout">
                        <ShoppingBasketIcon className="shopping" />
                    </Link>
                    <span>0{basket?.length}</span>
                </div>
            </div>
        </div>

    )
}

export default Header
