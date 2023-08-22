import React from 'react';
import Introduction from './components/introduction';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects'

function App() {
  return (
    <div className="bg-black">
      <Introduction />
      <Navbar />
      <About />
      <Projects />
      <div>
        test
      </div>
    </div>
  );
}

export default App;
