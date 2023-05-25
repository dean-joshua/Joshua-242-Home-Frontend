import React from 'react';
import { Container } from 'react-bootstrap';
import ContentBlock from '../components/ProjectsContentBlock';

const Projects = (props) => {
  const { data } = props;
  return (
    <Container fluid>
      <ContentBlock pageTitle='Projects' data={data} />
    </Container>
  );
};

export default Projects;
