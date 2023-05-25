import React from 'react';
import { Container } from 'react-bootstrap';

const ContentBlock = (props) => {
  // eslint-disable-next-line
  const { pageTitle, data } = props;
  // eslint-disable-next-line
  const {
    professionalName,
    hometown,
    interests,
    primaryDescriptionIntro,
    primaryDescriptionBody,
    aboutMeDescription,
  } = data;
  console.log('Hi');
  console.log(data);
  return (
    <main className='d-flex justify-content-center align-items-center'>
      <Container className='shadow p-3 mb-5' style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={{ textAlign: 'center' }}>{props.pageTitle}</h1>
          <hr></hr>
          <p>Name: {professionalName}</p>
          <p>Home Town: {hometown}</p>
          <div style={interestDiv}>
            Interests:
            {interests.map((interest) => {
              return <p style={interestP}>{interest}</p>;
            })}
          </div>
          <p>{primaryDescriptionIntro}</p>
          <p>{aboutMeDescription}</p>
          <p>{primaryDescriptionBody}</p>
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

const interestDiv = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '.5rem',
  alignItems: 'center',
};

const interestP = {
  textAlign: 'center',
  background: 'rgba(132,236,201,0.5)',
  width: 'fit-content',
  padding: '.5rem',
  border: '1px solid rgba(132,236,201,0.3)',
  borderRadius: '.5rem',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default ContentBlock;
