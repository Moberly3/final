import './App.css';
import React, { useState } from 'react';
import 'bulma/css/bulma.min.css'; 


import Header from './components/Header'; 
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Login from './Login';
import Registration from './Registration';
import AboutWeb from './AboutWeb';
import AboutMe from './AboutMe';
import Pricing from './Pricelist';
import ContactForm from './Contact';
import MapComponent from './components/MapComponent';

const App = () => {
  const [currentView, setCurrentView] = useState('Home');
  const isLogged = false;

  const renderView = () => {
    switch (currentView) {
      case 'About':
        return <>
        <AboutMe />
        <AboutWeb />;
        </>
      case 'Carousel':
        return <Carousel />;
      case 'Pricing':
        return <Pricing />;
      case 'Login':
        return <Login />;
      case 'Registration':
        return <Registration />;
      case 'Contact':
        return <ContactForm />;
      default:
        return <>
        <h1 className="title is-1">Where are we?</h1>
        <MapComponent />
        </>;
    }
  };

  return (
    <div className="App">
      <Header isLogged={isLogged} setCurrentView={setCurrentView} /> 
      {renderView()}
      <Footer />
    </div>
  );
}

export default App;
