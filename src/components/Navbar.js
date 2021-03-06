import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { NavLink } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar className="navbar" expand="md" light>
          <NavLink className="brand" href="/">
            GeoRandom
          </NavLink>
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="link" href="/">
                Home
              </NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Maps
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem className="link" href="/game">
                  Play Game
                </DropdownItem>
                <DropdownItem className="link" href="/game">
                  Browse Maps
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink
                href="https://github.com/castlenice/GeoRandom"
                target="_blank"
              >
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <Button className="login">Login</Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
