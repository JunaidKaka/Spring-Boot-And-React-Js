import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";


const NavigationBar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const guestLinks = (
    <>
      <div className="mr-auto"></div>
      <Nav className="navbar-right">
        <Link to={"register"} className="nav-link">
          <FontAwesomeIcon icon={faUserPlus} /> Register
        </Link>
        <Link to={"login"} className="nav-link">
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </Link>
      </Nav>
    </>
  );
  const userLinks = (
    <>
      <Nav className="mr-auto">
        <Link to={"register"} className="nav-link">
          Add User
        </Link>
        <Link to={"users"} className="nav-link">
          User List
        </Link>
      </Nav>

    </>
  );

  return (
    <Navbar bg="dark" variant="dark">

      {userLinks}
    </Navbar>
  );
};

export default NavigationBar;
