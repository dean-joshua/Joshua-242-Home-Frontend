import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container } from 'react-bootstrap'; // Import React Bootstrap components
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import Footer from './components/Footer';
import Home from './pages';
import Work from './pages/Experience';
import Projects from './pages/Projects';
import School from './pages/Education';
import Contact from './pages/Contact';

const App = () => {
  // We are gonna be using a state for our fetched data and to check if we are loading
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Lets create a fetch request so that we can get data from our api
  // Notice how this is in our parent component, we need it here
  // in order to pass the data into our other components
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://two42-home-api.onrender.com/personalData'
        );
        const data = await response.json();
        setData(data[0]);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    // We are using router and routes to set up our page navigation
    <Router>
      <Container fluid style={{ padding: 0 }}>
        <Header />
      </Container>
      <Container fluid style={{ padding: 0 }}>
        <Routes>
          <Route
            exact
            path='/'
            element={
              isLoading ? (
                <Loading />
              ) : (
                <main>
                  {' '}
                  <Home data={data} />{' '}
                </main>
              )
            } // If it is still loading we want to display our loading component
          />
          <Route
            path='/experience'
            element={
              isLoading ? (
                <Loading />
              ) : (
                <main>
                  {' '}
                  <Work data={data} />{' '}
                </main>
              )
            }
          />
          <Route
            path='/contact'
            element={
              isLoading ? (
                <Loading />
              ) : (
                <main>
                  {' '}
                  <Contact data={data} />{' '}
                </main>
              )
            }
          />
          <Route
            path='/projects'
            element={
              isLoading ? (
                <Loading />
              ) : (
                <main>
                  {' '}
                  <Projects data={data} />{' '}
                </main>
              )
            }
          />
          <Route
            path='/education'
            element={
              isLoading ? (
                <Loading />
              ) : (
                <main>
                  {' '}
                  <School data={data} />{' '}
                </main>
              )
            }
          />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
