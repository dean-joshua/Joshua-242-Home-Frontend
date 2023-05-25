import React from 'react';

import { Container, Navbar, Nav } from 'react-bootstrap'; // Import React Bootstrap components
import portrait from '../img/circle-portrait.png';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header className='shadow'>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container fluid style={{ margin: 0, padding: 15 }}>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                src={portrait}
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt=''
              />
              J Dean | Software Developer
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='navbar-nav' />
          <Navbar.Collapse className='justify-content-end' id='navbar-nav'>
            <Nav className='mr-auto'>
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/education'>
                <Nav.Link>Education</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/experience'>
                <Nav.Link>Work Experience</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/projects'>
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
