import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero Section/Hero';
import About from './components/About/About';
import Technologies from './components/Technologies/Technologies';
import ProjectsGrid from './components/Projects Section/ProjectsGrid';
import Testimonials from './components/Testimonials/TestimonialsList';
import Quote from './components/Quote/Quote';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      {/* <Technologies /> */}
      {/* <ProjectsGrid /> */}
      {/* <Testimonials /> */}
      <Quote />
      <Footer />
    </div>
  );
}

export default App;