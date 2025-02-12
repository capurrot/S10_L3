import { Navbar, Container, Nav, Dropdown, ButtonGroup } from "react-bootstrap";
import { Bell, PersonCircle } from "react-bootstrap-icons";
import Logo from "./LogoComponent";
import SearchForm from "./SearchComponent";

function NavComponent(props) {
  return (
    <Navbar expand="lg" data-bs-theme="dark" variant="dark" style={{ backgroundColor: "#221f1f" }}>
      <Container fluid>
        <Navbar.Brand href="#home" onClick={() => props.updateState({ page: "home" })}>
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {props.type === "home" && (
              <>
                <Nav.Link href="#home" className="fw-bold">
                  Home
                </Nav.Link>
                <Nav.Link href="#shows" className="active fw-bold">
                  TV Shows
                </Nav.Link>
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
          {props.type === "home" && (
            <div className="d-flex align-items-center gap-3">
              <SearchForm searchFilm={props.searchFilm} />
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
                  <Dropdown.Item href="#" onClick={() => props.updateState({ page: "profile" })}>
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#" onClick={() => props.updateState({ page: "settings" })}>
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
