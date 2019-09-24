import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import { NavLink as RRNavLink } from 'react-router-dom';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <>
        <Navbar color="light" light expand="md">
          <Container>
            <NavbarBrand to="/" tag={RRNavLink}>
              Tensorflow Playground
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink to="/linear" tag={RRNavLink}>
                    Linear
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/objects" tag={RRNavLink}>
                    Objects Detection
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default TopNav;
