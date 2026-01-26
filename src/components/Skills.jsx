import React from 'react';
import { motion } from 'framer-motion';

const SkillIcon = ({ icon, delay, radius, speed }) => {
    return (
        <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
                duration: speed,
                repeat: Infinity,
                ease: "linear",
                delay: delay
            }}
            className="absolute"
            style={{
                width: radius * 2,
                height: radius * 2,
                top: '50%',
                left: '50%',
                marginLeft: -radius,
                marginTop: -radius,
                pointerEvents: 'none'
            }}
        >
            <div
                className="absolute glass bg-white/5 border-white/10 flex items-center justify-center shadow-xl rounded-xl"
                style={{
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '40px',
                    height: '40px',
                    pointerEvents: 'auto'
                }}
            >
                <img
                    src={icon}
                    alt="Tool"
                    style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                />
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const tools = [
        'https://cdn.worldvectorlogo.com/logos/figma-1.svg',
        'https://cdn.worldvectorlogo.com/logos/react-2.svg',
        'https://cdn.worldvectorlogo.com/logos/framer-motion.svg',
        'https://cdn.worldvectorlogo.com/logos/vitejs.svg',
        'https://cdn.worldvectorlogo.com/logos/typescript-2.svg',
        'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
        'https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg',
        'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg'
    ];

    return (
        <section className="relative flex items-center justify-center" style={{ minHeight: '600px', paddingTop: '80px', paddingBottom: '80px', overflow: 'hidden' }}>
            <div className="container relative flex flex-col items-center">

                {/* Orbital System */}
                <div className="relative flex items-center justify-center" style={{ width: '500px', height: '500px' }}>

                    {/* Central Logo */}
                    <div className="relative z-10 w-24 h-24 bg-purple-600 rounded-3xl flex items-center justify-center shadow-xl" style={{ transform: 'rotate(12deg)', boxShadow: '0 0 50px rgba(112,0,255,0.5)' }}>
                        <span className="text-white text-4xl font-bold">Σ</span>
                    </div>

                    {/* Rings */}
                    <div className="absolute border-white/5 rounded-full" style={{ width: '200px', height: '200px', border: '1px solid rgba(255,255,255,0.05)' }} />
                    <div className="absolute border-white/5 rounded-full" style={{ width: '350px', height: '350px', border: '1px solid rgba(255,255,255,0.05)' }} />
                    <div className="absolute border-white/5 rounded-full" style={{ width: '500px', height: '500px', border: '1px solid rgba(255,255,255,0.05)' }} />

                    {/* Orbiting Icons */}
                    {tools.slice(0, 4).map((tool, i) => (
                        <SkillIcon key={i} icon={tool} radius={100} delay={i * 2} speed={20} />
                    ))}
                    {tools.slice(4, 8).map((tool, i) => (
                        <SkillIcon key={i + 4} icon={tool} radius={175} delay={i * 3} speed={30} />
                    ))}
                </div>

                {/* Perspective Lines Design */}
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" style={{ zIndex: -1 }} />
            </div>
        </section>
    );
};

export default Skills;
