import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderLogo from "./logo.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <a href="/">
          <img src={HeaderLogo} alt="logo" />
        </a>
      </div>

      <div className="header_middle">
        <h1>ThriftCity</h1>
      </div>

      <div className="header_right">
        <div className="dropdown_login">
          <AccountCircleIcon className="avatar" />
          <div class="dropdown_content">
          <button>Login</button>
              <button>Sign Up</button>
              <button>Account Settings</button>
            </div>
        </div>
        <a href="#">Help</a>
      </div>
    </div>
  );
}

export default Header;
