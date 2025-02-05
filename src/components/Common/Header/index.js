import React from "react";

import "./styles.css";
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import { Link } from "react-router-dom";

function Header() {

    return (
        <div className="header">
            <h1>
                CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
            </h1>
            <div className="links">
                <Link to="/">
                    <p className="link">Home</p>
                </Link>
                <Link to="/Compare">
                    <p className="link">Compare</p>
                </Link>
                <Link to="/Watchlist">
                    <p className="link">WatchList</p>
                </Link>
                <Link to="/DashBoard">
                    <Button
                        text={"Dashboard"}
                        outlined={true}
                        onClick={() => console.log("button clicked")}
                    />
                </Link>
            </div>
            <div className="drawer-component">
                <TemporaryDrawer />
            </div>
        </div>
    );
}

export default Header;