/* import { useState } from "react"; */
import { Navbar, Container, Nav, Dropdown, ButtonGroup } from "react-bootstrap";
import { Bell, PersonCircle } from "react-bootstrap-icons";
import Logo from "./LogoComponent";
import SearchForm from "./SearchComponent";
import { NavLink } from "react-router";

function NavComponent({ type, searchFilm, updateState }) {
  const handleNavigation = (page) => {
    updateState({ page });
  };

  return (
    <Navbar expand="lg" data-bs-theme="dark" variant="dark" style={{ backgroundColor: "#221f1f" }}>
      <Container fluid>
        <Navbar.Brand href="#home" onClick={() => handleNavigation("home")}>
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {type === "home" && (
              <>
                <NavLink className="nav-link fw-bold" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link fw-bold" to="/tv-shows">
                  TV Shows
                </NavLink>
                <Nav.Link href="#movies" className="fw-bold">
                  Movies
                </Nav.Link>
                <Nav.Link href="#added" className="fw-bold">
                  Recently Added
                </Nav.Link>
                <Nav.Link href="#list" className="fw-bold">
                  My List
                </Nav.Link>
              </>
            )}
          </Nav>
          {type === "home" && (
            <div className="d-flex align-items-center gap-3">
              <SearchForm searchFilm={searchFilm} />
              <span className="fw-bold text-white">KIDS</span>
              <Bell className="icons" />

              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  size="sm"
                  className="rounded-0 no-triangle p-0"
                  style={{ backgroundColor: "#221f1f", border: "none" }}
                >
                  <PersonCircle className="icons" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-end" style={{ backgroundColor: "#221f1f" }}>
                  <Dropdown.Item href="#" onClick={() => handleNavigation("profile")}>
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#" onClick={() => handleNavigation("settings")}>
                    Settings
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
