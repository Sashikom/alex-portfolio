import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-900 text-white">
        <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://vite.dev " target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} alt="Vite logo" className="logo w-24 h-24" />
            </a>
            <a href="https://react.dev " target="_1blank" rel="noopener noreferrer">
              <img src={reactLogo} alt="React logo" className="logo react w-24 h-24" />
            </a>
          </div>


          <div className="text-center mb-8">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded shadow-md transition duration-300 transform hover:scale-105">
              Ты нажал {count} раз(а)
            </button>
          </div>
        </div>

        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;