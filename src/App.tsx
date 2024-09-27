import React from 'react';
import './index.css';  // Import your Tailwind CSS file
import Header from './components/header/Header';  // Import the Header component
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

const App: React.FC = () => {
  return (
    <>
        <Header />
        <Main/>
        <Footer/>
    
    </>
  );
};

export default App;
