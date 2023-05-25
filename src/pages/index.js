import React from 'react';
import ContentBlock from '../components/HomeContentBlock';
import { Container } from 'react-bootstrap';
import PhotoBlock from '../components/PhotoBlock';
import CreditsBlock from '../components/CreditsBlock';

const Home = (props) => {
  // eslint-disable-next-line
  const { data } = props;
  return (
    <Container fluid>
      <ContentBlock pageTitle='About' data={data} />
      <PhotoBlock />
      <CreditsBlock />
    </Container>
  );
};

export default Home;
