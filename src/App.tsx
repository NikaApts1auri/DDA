import React from 'react';
import './index.css';  // Import your Tailwind CSS file
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './components/Layout/layout';
import HomeView from './components/Home/view';
import AboutView from './components/about/view';
import ServicesView from './components/services/view';


const App: React.FC = () => {
  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path="/" 
          element={<Layout/>}>
            <Route path='/' element={<HomeView/>}>
            </Route>
            <Route path='/About' element={<AboutView/>}>
            </Route>
            <Route path='/Services' element={<ServicesView/>}>
            </Route>

        </Route>

       </Routes>
       </BrowserRouter>
    
    </>
  );
};

export default App;
