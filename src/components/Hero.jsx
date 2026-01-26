import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative" style={{ minHeight: '70vh', paddingTop: '160px', paddingBottom: '40px', overflow: 'hidden' }}>
            <div className="container flex flex-col items-center text-center">

                {/* Avatar Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative mb-6"
                >
                    <div className="absolute inset-0 bg-purple-500 glow-blur opacity-20 rounded-full" style={{ zIndex: -1 }} />
                    <div className="rounded-full overflow-hidden glass border-white/10" style={{ width: '192px', height: '192px' }}>
                        <img
                            src="/src/assets/hero_avatar.png"
                            alt="Avatar"
                            className="w-full h-full"
                            style={{ objectFit: 'cover' }}
                            onError={(e) => {
                                e.target.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Milyn';
                            }}
                        />
                    </div>
                    <div className="absolute bg-[#1a0b36] border border-white/10 px-4 py-1 rounded-full text-xs" style={{ top: '-16px', right: '-16px' }}>
                        Hello! I'm <span className="text-purple-400 font-bold">Milyn</span>
                    </div>
                </motion.div>

                {/* Title Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <h2 className="text-white text-5xl font-bold tracking-tight mb-4" style={{ lineHeight: '1.1' }}>
                        Judges a book <br />
                        by its <span className="text-purple-500 italic">cover</span>...
                    </h2>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-10">
                        Because if the cover does not look good, you won't even open it.
                    </p>
                </motion.div>

                {/* Status Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{ maxWidth: '640px' }}
                >
                    <h1 className="text-4xl font-bold mb-6">
                        I'm a <span className="text-white">Software Engineer.</span>
                    </h1>
                    <div className="flex items-center justify-center gap-2 mb-8 text-gray-500">
                        <span>Currently, I'm a Software Engineer at</span>
                        <span className="flex items-center gap-2 text-blue-400 font-bold" style={{ color: '#1877F2' }}>
                            <span style={{ background: '#1877F2', borderRadius: '4px', padding: '2px 6px', color: 'white', fontSize: '10px' }}>f</span>
                            Facebook
                        </span>
                    </div>
                    <p className="text-gray-400 text-lg" style={{ lineHeight: '1.6' }}>
                        A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                        I make meaningful and delightful digital products that create an equilibrium
                        between user needs and business goals.
                    </p>
                </motion.div>
            </div>

            {/* Background radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glow-blur"
                style={{ width: '600px', height: '600px', background: 'rgba(112,0,255,0.05)', zIndex: -10 }} />
        </section>
    );
};

export default Hero;
