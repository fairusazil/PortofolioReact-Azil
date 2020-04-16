import React from 'react';
import Navigation from './navigation/Navigation'
import Image from './image/Image'
import Footer from './footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Image />
        <Navigation />
        <Footer />
      </header>
    </div>
  );
}

export default App;
