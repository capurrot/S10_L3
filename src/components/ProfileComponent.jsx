import { Row, Col, Button, Form, Dropdown, DropdownButton } from "react-bootstrap";
import { PersonCircle } from "react-bootstrap-icons";

const ProfileComponent = (props) => {
  return (
    <div className="text-light pb-5 profile-container" data-bs-theme="dark">
      <h1 className="display-5 fw-bold mb-0 text-white">Edit Profile</h1>
      <hr />
      <Row>
        <Col lg={4}>
          <PersonCircle className="iconsprofile" />
        </Col>
        <Col lg={8}>
          <Form>
            <fieldset disabled>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="My Profile" className="bg-secondary" />
              </Form.Group>
            </fieldset>
          </Form>
          <p className="mb-1">Language:</p>
          <DropdownButton title="English" variant="dark" className="px-2 py-0">
            <Dropdown.Item href="#">Italian</Dropdown.Item>
            <Dropdown.Item href="#">Spanish</Dropdown.Item>
            <Dropdown.Item href="#">Russian</Dropdown.Item>
          </DropdownButton>
          <hr />
          <p className="lead">Maturity Settings</p>
          <Button variant="dark" className="fw-bold mb-2" disabled>
            ALL MATURITY RATINGS
          </Button>
          <p className="lead text-white">
            Show titles of <span style={{ fontWeight: 600 }}>all maturity settings</span> for this profile
          </p>
          <Button variant="dark" className="mb-2 btn-sm px-3" style={{ fontSize: "10px" }}>
            EDIT
          </Button>
          <hr className="mb-3" />
          <p className="fs-4 mb-1">Autoplay Controls</p>
          <Form.Check type="checkbox" id="apEpi" label="Autoplay episode on a series on all devices" />
          <Form.Check type="checkbox" id="apPre" label="Autoplay previews while browsing on all devices" />
        </Col>
      </Row>
      <hr className="mb-3" />
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button
          variant="light"
          className="fw-bold rounded-0 border px-4"
          /* Per ora imposto lo spostamento su home fino a che non servirà per altro */
          onClick={() => props.updateState({ page: "home" })}
        >
          SAVE
        </Button>
        <Button variant="dark" className="rounded-0 border px-3" onClick={() => props.updateState({ page: "home" })}>
          CANCEL
        </Button>
        <Button variant="dark" className="rounded-0 border px-3">
          DELETE PROFILE
        </Button>
      </div>
    </div>
  );
};

export default ProfileComponent;
