import { Dropdown, ButtonGroup } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

const GenreComponent = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex align-items-center">
        <h2 className="mb-0">TV Shows</h2>
        <Dropdown as={ButtonGroup} className="ms-4 mt-1" data-bs-theme="dark">
          <Dropdown.Toggle variant="secondary" size="sm" className="rounded-0" style={{ backgroundColor: "#221f1f" }}>
            Genres
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ backgroundColor: "#221f1f" }}>
            <Dropdown.Item href="#">Comedy</Dropdown.Item>
            <Dropdown.Item href="#">Drama</Dropdown.Item>
            <Dropdown.Item href="#">Thriller</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <Grid className="icons me-2" />
        <Grid3x3 className="icons" />
      </div>
    </div>
  );
};

export default GenreComponent;
