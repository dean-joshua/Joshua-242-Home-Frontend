import React from 'react';
import { Container } from 'react-bootstrap';

const CreditsBlock = () => {
  return (
    <main className='d-flex justify-content-center align-items-center'>
      <Container className='shadow p-3 mb-5' style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={{ textAlign: 'center' }}>Credits</h1>
          <hr></hr>
          <p>
            Special thanks to all of the creators who have such amazing talent
            and designs. I am grateful for the content you put out there for us
            to use. This website wouldn't be possible without the following
            creators: Name: MacroGrapix5 URL: cool icons PNG Designed By
            MacroGrapix5 from{' '}
            <a href='https://pngtree.com/so/headphones'>
              headphones png from pngtree.com/
            </a>
          </p>
        </div>
      </Container>
    </main>
  );
};

// Let's try out styling this way instead of using an external sheet
const containerStyle = {
  border: '1px solid rgba(0,0,0,0.3)',
  //boxShadow: '0 2px 4px rgba(0, 0, 0)',
  padding: '2rem',
  background: 'rgba(0,0,0,0.3)',
  borderRadius: '5px',
  color: 'white',
};

const contentStyle = {
  textAlign: 'left',
};

export default CreditsBlock;
