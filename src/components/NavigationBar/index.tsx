import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SessionManager from "../../utils/sessionManager";
import Emoji from "../Emoji";

const NavigationBar = () => {
  const username = SessionManager.getSession()?.username;

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Cologne Delivery</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <span className="navbar-text" style={{ color: "#000000"}}>
                <Emoji symbol="👋" /> {`Hi ${username}!`}
              </span>
              <Nav.Link href="/login">Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
