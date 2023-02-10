import React,{useEffect} from 'react'
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Footer from './components/Footer';
import FrontPage from './components/FrontPage';
import Kit from './components/Kit'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './components/Contact';
import About from './components/About'


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
        <FrontPage />
        <About />
        <Shop />
        <Kit />
        <Contact />
        <Footer/>
    </div>
  );
}

export default App;
