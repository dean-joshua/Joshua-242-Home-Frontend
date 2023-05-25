import React from 'react';
import { Container } from 'react-bootstrap';
import ContentBlock from '../components/EducationContentBlock';

const Education = (props) => {
  const { data } = props;
  return (
    <Container fluid>
      <ContentBlock pageTitle='Education' data={data} />
    </Container>
  );
};

export default Education;
