import React from 'react';
import { Container } from 'react-bootstrap';
import ContentBlock from '../components/ContactContentBlock';

const Contact = (props) => {
  const { data } = props;
  return (
    <Container fluid>
      <ContentBlock pageTitle='Contact Info' data={data} />
    </Container>
  );
};

export default Contact;
