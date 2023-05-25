import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css';

const Loading = () => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
      <Spinner animation='border' role='status' className='custom-spinner'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
