import React from 'react';
import { Container } from 'react-bootstrap';

const ContentBlock = (props) => {
  // eslint-disable-next-line
  const { pageTitle, data } = props;
  // eslint-disable-next-line
  const {} = data;
  return (
    <main className='d-flex justify-content-center align-items-center'>
      <Container className='shadow p-3 mb-5' style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={{ textAlign: 'center' }}>{props.pageTitle}</h1>
          <hr></hr>
          <p>Currently Under Construction</p>
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

export default ContentBlock;
