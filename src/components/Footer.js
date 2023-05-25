import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-dark text-light shadow'>
      <Container className='d-flex flex-column'>
        <Row className='mt-3'>
          <Col className='text-center'>
            <p>
              © .:: 2023 Joshua Dean Personal Site. All rights reserved. ::.
            </p>
          </Col>
          <Col className='text-center'>
            <a
              href='https://www.linkedin.com/in/joshua-dean-a10143206/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin size={24} className='me-3 footer-icon' />
            </a>
            <a
              href='https://github.com/dean-joshua?tab=repositories'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub size={24} className='footer-icon' />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
