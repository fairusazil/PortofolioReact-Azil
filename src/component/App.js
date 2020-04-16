import React from 'react';
import Navigation from './navigation/Navigation'
import Image from './image/Image'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Image />
        <Navigation />
      </header>
    </div>
  );
}

export default App;
