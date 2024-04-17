
import './App.css';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Features from './components/Features.js';
import About from './components/About.js'
import Pricing from './components/Pricing.js'
import NewsLetter from './components/NewsLetter.js';
import Footer from './shared/Footer.js'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Features/>
    <About/>
    <Pricing/>
    <NewsLetter/>
    <Footer/>
    </>
  );
}

export default App;
