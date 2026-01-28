import React from 'react';
import { motion } from 'framer-motion';

const SkillIcon = ({ icon, label, angle }) => {
    return (
        <div className="orbit-icon" style={{ ['--angle']: `${angle}deg` }}>
            <div className="skill-icon">
                <img
                    src={icon}
                    alt={label}
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.src = '/vite.svg';
                    }}
                />
            </div>
        </div>
    );
};

const Skills = () => {
    const tools = [
        {
            label: 'Node.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        {
            label: 'NestJS',
            icon: 'https://cdn.simpleicons.org/nestjs/ffffff'
        },
        {
            label: 'PostgreSQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg'
        },
        {
            label: 'Redis',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg'
        },
        {
            label: 'Docker',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg'
        },
        {
            label: 'AWS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'
        },
        {
            label: 'TypeScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        },
        {
            label: 'n8n',
            icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/n8n.svg'
        }
    ];

    return (
        <section className="relative flex items-center justify-center" style={{ minHeight: '640px', paddingTop: '60px', paddingBottom: '100px', overflow: 'hidden' }}>
            <div className="container relative flex flex-col items-center">
                <p className="skills-caption">
                    I build reliable backend systems with clean APIs, fast data layers, and stable infrastructure.
                </p>

                <div className="skills-stage">
                    <motion.div
                        className="skills-core"
                        animate={{ y: [0, -6, 0], rotate: [0, 2, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        MD
                    </motion.div>

                    <div className="skills-ring ring-inner" />
                    <div className="skills-ring ring-mid" />
                    <div className="skills-ring ring-outer" />

                    <div className="orbit orbit-inner">
                        {tools.slice(0, 4).map((tool, i) => (
                            <SkillIcon key={tool.label} icon={tool.icon} label={tool.label} angle={i * 90} />
                        ))}
                    </div>
                    <div className="orbit orbit-outer">
                        {tools.slice(4, 8).map((tool, i) => (
                            <SkillIcon key={tool.label} icon={tool.icon} label={tool.label} angle={i * 90 + 45} />
                        ))}
                    </div>

                    <div className="skills-platform" />
                </div>
            </div>
        </section>
    );
};

export default Skills;
