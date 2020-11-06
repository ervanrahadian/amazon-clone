import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="Amazon-Logo"
        />
      </Link>
      <div className="header_loc">
        <LocationOnOutlinedIcon fontSize="medium" />
      </div>
      <div className="header_text">
        <span className="header_LineOne">Deliver to</span>
        <span className="header_LineTwo">Indonesia</span>
      </div>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
        <img
          className="flag_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg"
          alt="Indo-Flag"
        />
      </div>
      <div className="header_nav">
        <Link to={!user && "/signin"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello, {user ? user.email : "Sign in"}
            </span>
            <span className="header_optionLineTwo">Account & Lists</span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingCartOutlinedIcon fontSize="large" />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
