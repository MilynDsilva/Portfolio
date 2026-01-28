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
                className="skill-icon"
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
        <section className="relative flex items-center justify-center" style={{ minHeight: '640px', paddingTop: '60px', paddingBottom: '100px', overflow: 'hidden' }}>
            <div className="container relative flex flex-col items-center">
                <p className="skills-caption">
                    I design meaningful interfaces and systems that balance clarity, motion, and detail.
                </p>

                <div className="skills-stage">
                    <div className="skills-core">
                        Σ
                    </div>

                    <div className="skills-ring" style={{ width: '200px', height: '200px' }} />
                    <div className="skills-ring" style={{ width: '340px', height: '340px' }} />
                    <div className="skills-ring" style={{ width: '480px', height: '480px' }} />

                    {tools.slice(0, 4).map((tool, i) => (
                        <SkillIcon key={i} icon={tool} radius={100} delay={i * 2} speed={18} />
                    ))}
                    {tools.slice(4, 8).map((tool, i) => (
                        <SkillIcon key={i + 4} icon={tool} radius={170} delay={i * 3} speed={26} />
                    ))}

                    <div className="skills-platform" />
                </div>
            </div>
        </section>
    );
};

export default Skills;
