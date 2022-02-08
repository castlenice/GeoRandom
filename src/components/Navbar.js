import {
  Navbar,
  NavbarBrand,
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
        <NavbarBrand>
          <NavLink className="brand" href="/">
            GeoRandom
          </NavLink>
        </NavbarBrand>
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
                <DropdownItem>Browse Maps</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="https://github.com/castlenice" target="_blank">
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
