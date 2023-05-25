import React from 'react';
import ContentBlock from '../components/WorkContentBlock';
import { Container } from 'react-bootstrap';

const Experience = (props) => {
  const { data } = props;
  return (
    <Container fluid>
      <ContentBlock pageTitle='Work Experience & Skills' data={data} />
    </Container>
  );
};

export default Experience;
