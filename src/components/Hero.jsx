import React from 'react';
import { motion } from 'framer-motion';
import heroAvatar from '../assets/hero_avatar.png';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-layout">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hero-media"
                >
                    <div className="relative">
                        <div className="hero-avatar glass">
                            <img
                                src={heroAvatar}
                                alt="Avatar"
                                onError={(e) => {
                                    e.target.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Milyn';
                                }}
                            />
                        </div>
                        <div className="hero-badge">
                            Hello! I'm <span className="text-purple-400 font-bold">Milyn</span>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="hero-copy"
                    >
                        <p className="hero-label">A Backend Developer who</p>
                        <h1>
                            Judges a book <br />
                            by its <span>cover</span>...
                        </h1>
                        <p className="hero-subtitle">
                            Because if the cover does not look good, you won't even open it.
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            <div className="container hero-intro">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    I'm a Backend Developer.
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="hero-role"
                >
                    <span>Currently, I'm a Backend Developer & Automation Engineer at CodeCraft Technologies Pvt Ltd</span>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="hero-bio"
                >
                    A backend developer focused on building reliable APIs, scalable services,
                    and data systems that keep products fast, secure, and dependable.
                </motion.p>
            </div>

            {/* Background radial glow */}
            <div
                className="absolute top-1/2 left-1/2 glow-blur"
                style={{ width: '600px', height: '600px', background: 'rgba(112,0,255,0.06)', zIndex: -10, transform: 'translate(-50%, -50%)' }}
            />
        </section>
    );
};

export default Hero;
