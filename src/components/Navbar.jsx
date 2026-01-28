import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
            style={{
                height: '80px',
                background: scrolled ? 'rgba(5, 2, 20, 0.98)' : 'rgba(5, 2, 20, 0.85)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(139, 92, 246, 0.15)',
                display: 'flex',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%'
            }}
        >
            {/* Logo - Perfectly Centered in Viewport */}
            <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 20,
                pointerEvents: 'auto'
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                        textShadow: '0 0 25px rgba(112, 0, 255, 0.7)'
                    }}
                >
                    <span className="text-white" style={{ fontSize: '38px', fontFamily: 'serif', fontWeight: 'bold' }}>Σ</span>
                </motion.div>
            </div>

            {/* Navigation Container */}
            <div className="container" style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
                zIndex: 10,
                margin: '0 auto',
                maxWidth: '1200px',
                padding: '0 40px'
            }}>
                <div style={{ display: 'flex', gap: '56px' }}>
                    {['Home', 'About', 'Lab'].map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase() === 'lab' ? 'lab' : item.toLowerCase() === 'about' ? 'about' : 'home'}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="nav-link"
                            style={{
                                textDecoration: 'none',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
