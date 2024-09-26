import React from 'react';
import './index.css';  // Import your Tailwind CSS file
import Header from './components/header/Header';  // Import the Header component
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <>
        <Header />
        <main className='h-[100vh]'>

        </main>
        <Footer/>
    
    </>
  );
};

export default App;
