import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
            </main>

            {/* Background Glows */}
            <div className="fixed pointer-events-none"
                style={{ top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'rgba(112,0,255,0.05)', filter: 'blur(120px)', zIndex: -10 }} />
            <div className="fixed pointer-events-none"
                style={{ bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'rgba(112,0,255,0.05)', filter: 'blur(120px)', zIndex: -10 }} />
        </div>
    );
}

export default App;
