import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import img1 from '../img/circle-portrait.png';
import img2 from '../img/wedding-collage.webp';
import img3 from '../img/wife-and-i.webp';

const PhotoBlock = () => {
  return (
    <main className='d-flex justify-content-center align-items-center'>
      <Container className='shadow p-3 mb-5' style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={{ textAlign: 'center' }}>Photos</h1>
          <hr></hr>
          <Carousel slide touch>
            <Carousel.Item>
              <img
                style={{ borderRadius: '50%', margin: 'auto' }}
                className='d-block w-80 mh-50 shadow'
                src={img1}
                alt='First slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ margin: 'auto' }}
                className='d-block w-80 mh-50 shadow rounded'
                src={img2}
                alt='Second slide'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ margin: 'auto' }}
                className='d-block w-80 mh-50 shadow rounded'
                src={img3}
                alt='Third slide'
              />
            </Carousel.Item>
          </Carousel>
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

const labelStyle = {
  color: 'rgba(157,59,23,0.5)',
};

export default PhotoBlock;
