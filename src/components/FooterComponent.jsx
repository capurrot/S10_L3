import { Row, Col, Button, Container } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const FooterComponent = () => {
  return (
    <footer className="my-5">
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={6}>
            <Row>
              <Col className="mb-2">
                <Facebook className="footer-icon me-2" />
                <Instagram className="footer-icon me-2" />
                <Twitter className="footer-icon me-2" />
                <Youtube className="footer-icon" />
              </Col>
            </Row>
            <Row xs={2} md={4} lg={4}>
              <Col>
                <div className="footer-links">
                  <p>
                    <a href="#">Audio and Subtitles</a>
                  </p>
                  <p>
                    <a href="#">Media Center</a>
                  </p>
                  <p>
                    <a href="#">Privacy</a>
                  </p>
                  <p>
                    <a href="#">Contact us</a>
                  </p>
                </div>
              </Col>
              <Col>
                <div className="footer-links">
                  <p>
                    <a href="#">Audio Description</a>
                  </p>
                  <p>
                    <a href="#">Investor Relations</a>
                  </p>
                  <p>
                    <a href="#">Legal Notices</a>
                  </p>
                </div>
              </Col>
              <Col>
                <div className="footer-links">
                  <p>
                    <a href="#">Help Center</a>
                  </p>
                  <p>
                    <a href="#">Jobs</a>
                  </p>
                  <p>
                    <a href="#">Cookie Preferences</a>
                  </p>
                </div>
              </Col>
              <Col>
                <div className="footer-links">
                  <p>
                    <a href="#">Gift Cards</a>
                  </p>
                  <p>
                    <a href="#">Terms of Use</a>
                  </p>
                  <p>
                    <a href="#">Corporate Information</a>
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <Button size="sm" className="footer-button rounded-0 mt-3">
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2 copyright">&copy; 1997-2025 Netflix, Inc.</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
