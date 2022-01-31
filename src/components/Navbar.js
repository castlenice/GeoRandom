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

const NavbarComponent = () => {
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand>
          <NavLink className="link" href="/">
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
              <DropdownMenu right>
                <DropdownItem className="link" href="/game">
                  Play Game
                </DropdownItem>
                <DropdownItem>Browse Maps</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="https://github.com/castlenice" target="_blank">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <Button>Login</Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
