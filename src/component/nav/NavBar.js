import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { slide as Menu } from "react-burger-menu";
import Nav from "react-bootstrap/Nav";
import "./nav.css"

const NavBar = ({
  logo,
  isMobileOrTablet,
  isBurgerMenuOpen,
  setBurgerMenuOpen,
  closeBurgerMenu,
}) => {
  return (
    <Navbar className="navig" sticky="top" bg="primary" data-bs-theme="dark" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img className="logo" src={logo} alt={"Logo"} />
          </Navbar.Brand>
        </Link>
        {isMobileOrTablet ? (
          <>
            <Menu
              isOpen={isBurgerMenuOpen}
              onStateChange={({ isOpen }) => setBurgerMenuOpen(isOpen)}
            >
              <Link onClick={closeBurgerMenu} to="/home" className="nav-link">
                Home
              </Link>
              <Link
                onClick={closeBurgerMenu}
                to="/project"
                className="nav-link"
              >
                Projects
              </Link>
              <Link onClick={closeBurgerMenu} to="/about" className="nav-link">
                About
              </Link>
              <Link
                onClick={closeBurgerMenu}
                to="/experience"
                className="nav-link"
              >
                Experience
              </Link>
              <Link
                onClick={closeBurgerMenu}
                to="/portfolio"
                className="nav-link"
              >
                Portfolio
              </Link>
              <Link
                onClick={closeBurgerMenu}
                to="/services"
                className="nav-link"
              >
                Services
              </Link>
              <Link
                onClick={closeBurgerMenu}
                to="/contact"
                className="nav-link"
              >
                Contact Me
              </Link>
            </Menu>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => setBurgerMenuOpen(!isBurgerMenuOpen)}
            />
          </>
        ) : (
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/home" className="nav-link">
                Home
              </Link>
              <Link to="/project" className="nav-link">
                Projects
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/experience" className="nav-link">
                Experience
              </Link>
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
              <Link to="/services" className="nav-link">
                Services
              </Link>
              <Link to="/contact" className="nav-link">
                Contact Me
              </Link>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
