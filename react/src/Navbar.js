import React from "react";
import { NavbarConsumer } from "./NavbarContext";
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <NavbarConsumer>
            {(navTarget) => {
                return (
                    <>
                        <ul>
                            {Object.keys(navTarget).map(
                                key =>

                                    <li className="navbar-List" key={key}>
                                        <Link className="navbar-Link" to={navTarget[key].link}>{navTarget[key].item}</Link>
                                    </li>


                            )}
                        </ul>
                    </>
                );
            }}
        </NavbarConsumer>
    );
}

export default Navbar;