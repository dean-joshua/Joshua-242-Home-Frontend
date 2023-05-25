import React from 'react';
import { Container } from 'react-bootstrap';

const ContentBlock = (props) => {
  // eslint-disable-next-line
  const { pageTitle, data } = props;
  // eslint-disable-next-line
  const { skills, internship, workExperience, volunteerWork } = data;
  return (
    <main className='d-flex justify-content-center align-items-center'>
      <Container className='shadow p-3 mb-5' style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={{ textAlign: 'center' }}>{props.pageTitle}</h1>
          <hr></hr>
          <h2 style={{ fontStyle: 'Italic' }}>Skills</h2>
          <div style={skillsDiv}>
            {skills.strong.map((item) => {
              return <p style={skillPStrong}>{item}</p>;
            })}
            {skills.solid.map((item) => {
              return <p style={skillPSolid}>{item}</p>;
            })}
            {skills.basic.map((item) => {
              return <p style={skillPBasic}>{item}</p>;
            })}
          </div>
          <hr></hr>
          <h2 style={{ fontStyle: 'Italic' }}>Internship</h2>
          <p>{internship.orgName}</p>
          <p style={{ fontStyle: 'Italic' }}>{internship.position}</p>
          <p style={{ fontStyle: 'Italic' }}>
            {internship.startDate} - {internship.endDate}
          </p>
          <p>{internship.description}</p>
          <hr></hr>
          <h2 style={{ fontStyle: 'Italic' }}>Current Position</h2>
          <p>{workExperience.orgName}</p>
          <p style={{ fontStyle: 'Italic' }}>
            {workExperience.currentPosition}
          </p>
          <p style={{ fontStyle: 'Italic' }}>
            {workExperience.startDate} - {workExperience.endDate}
          </p>
          <p>{workExperience.description}</p>
          <hr></hr>
          <h2 style={{ fontStyle: 'Italic' }}>Volunteer Work</h2>
          <p>{volunteerWork.orgName}</p>
          <p style={{ fontStyle: 'Italic' }}>{volunteerWork.location}</p>
          <p style={{ fontStyle: 'Italic' }}>
            {volunteerWork.startDate} - {volunteerWork.endDate}
          </p>
          <p>{volunteerWork.description}</p>
          {/* <p>{volunteerWork}</p> */}
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

const skillsDiv = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '.5rem',
  alignItems: 'center',
};

const skillPStrong = {
  textAlign: 'center',
  background: 'rgba(123,182,98,0.5)',
  width: 'fit-content',
  padding: '.5rem',
  border: '1px solid rgba(123,182,98,0.3)',
  borderRadius: '.5rem',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const skillPSolid = {
  textAlign: 'center',
  background: 'rgba(132,236,201,0.5)',
  width: 'fit-content',
  padding: '.5rem',
  border: '1px solid rgba(132,236,201,0.3)',
  borderRadius: '.5rem',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const skillPBasic = {
  textAlign: 'center',
  background: 'rgba(234,119,172,0.5)',
  width: 'fit-content',
  padding: '.5rem',
  border: '1px solid rgba(234,119,172,0.3)',
  borderRadius: '.5rem',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default ContentBlock;
