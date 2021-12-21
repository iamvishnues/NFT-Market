import React from "react";
import "./Header.css";
import { MdSearch, MdLightMode } from "react-icons/md";

function Header() {
  return (
    <div className="header">
      <img
        className="nftLogo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/NFT_Icon.png/640px-NFT_Icon.png"
      />
      <h2>Market</h2>
      <div className="searchBar">
        <div className="searchIcon">
          <MdSearch />
        </div>
        <input
          className="searchInput"
          placeholder="Collection, Item or User..."
        ></input>
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Market</p>
        <p>Create</p>
      </div>
      <div className="headerActions">
        <div className="themeSwitch">
          <div className="themeIcon">
            <MdLightMode />
          </div>
        </div>
        <div className="loginBtn">GET IN</div>
      </div>
    </div>
  );
}

export default Header;
