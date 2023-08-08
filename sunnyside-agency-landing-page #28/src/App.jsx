import React from 'react';
import Header from './components/header';
import Main from './components/Main';
import Services from './components/Services';
import TestimonialContainer from './components/TestimonialContainer';
import Gallery from './components/Gallery';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <main className='max-w-[1440px] mx-auto relative'>
      <Header />
      <Main />
      <Services />
      <TestimonialContainer />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
