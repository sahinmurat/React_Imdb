import React from "react";
import { StyledNavbar } from "./Navbar.style";
import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <StyledNavbar>


            <NavLink
                to="/"
                activeStyle={{
                    fontWeight: "bold",
                    color: "blue",
                    textDecoration: "none",
                }}
            >
                HOME
            </NavLink>
            <NavLink
                to="/hahahay/"
                activeStyle={{
                    fontWeight: "bold",
                    color: "blue",
                    textDecoration: "none",
                }}
            >
                ABOUT
      </NavLink>
        </StyledNavbar >
    );
}
