import { Container, Row, Col, Button } from "react-bootstrap";
import { Paypal, BadgeHdFill, PersonCircle } from "react-bootstrap-icons";

const SettingsComponent = () => {
  return (
    <Container className="py-5 mb-5 text-secondary">
      <h1>Account</h1>
      <hr className="mb-2" />
      <Row>
        <Col md={4}>
          <p>MEMBERSHIP AND BILLING</p>
          <Button variant="secondary" className="rounded-0 text-black">
            Cancel subscription
          </Button>
        </Col>
        <Col md={8}>
          <div className="d-flex justify-content-between">
            <p className="fw-bold">timoteo.capurro@infosyscap.net</p>
            <a href="#">Change account email</a>
          </div>
          <div className="d-flex justify-content-between">
            <p>Password: *********</p>
            <a href="#">Change password</a>
          </div>
          <div className="d-flex justify-content-between">
            <p>Phone: 3339423212</p>
            <a href="#">Change phone number</a>
          </div>
          <hr className="mb-2" />
          <div className="d-flex justify-content-between">
            <div>
              <Paypal className="mx-2" />
              <span className="fw-bold">timoteo.capurro@infosyscap.net</span>
            </div>
            <a href="#">
              Update Billing info <br />
              Billing Details
            </a>
          </div>
          <hr className="mb-2" />
          <Row className="text-end">
            <Col>
              <div>
                <a href="#">Redeem gift card or promo code</a>
              </div>
              <div>
                <a href="#">Where to buy gift cards</a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr className="mt-2 mb-1" />
      <Row>
        <Col>PLAN DETAILS</Col>
        <Col>
          <span className="fw-bold">
            Premium <BadgeHdFill />
          </span>
        </Col>
        <Col className="text-end">
          <a href="#">Change plan</a>
        </Col>
      </Row>
      <hr className="mt-1" />
      <Row>
        <Col md={4}>SETTINGS</Col>
        <Col>
          <a href="#">Parental Control</a>
          <br />
          <a href="#">Test Participation</a>
          <br />
          <a href="#">Manage download devices</a>
          <br />
          <a href="#">Activate a device</a>
          <br />
          <a href="#">Recent device streaming activity</a>
          <br />
          <a href="#">Sign out of all devices</a>
        </Col>
      </Row>
      <hr className="mt-1" />
      <Row>
        <Col md={4}>MY PROFILE</Col>
        <Col md={8}>
          <div className="d-flex justify-content-between">
            <div>
              <PersonCircle className="iconsprofile text-secondary mb-3" />
              <span> Strive Student</span>
            </div>
            <div>
              <div>
                <a href="#">Redeem gift card or promo code</a>
              </div>
              <div>
                <a href="#">Where to buy gift cards</a>
              </div>
            </div>
          </div>
        </Col>
        <Col md={{ span: 8, offset: 4 }} className="mt-4">
          <Row>
            <Col md={6}>
              <div>
                <a href="#">Language</a>
              </div>
              <div>
                <a href="#">Playback Settings</a>
              </div>
              <div>
                <a href="#">Subtitle appearance</a>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <a href="#">Viewing Activity</a>
              </div>
              <div>
                <a href="#">Ratings</a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SettingsComponent;
