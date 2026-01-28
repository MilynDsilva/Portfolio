import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Globe, Zap, Cpu } from 'lucide-react';

const ExperienceCard = ({ title, description, icon: Icon, gradientClass }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="relative rounded-3xl"
            style={{ overflow: 'hidden', padding: '1px' }}
        >
            <div className={`absolute inset-0 ${gradientClass}`} style={{ opacity: 0.18 }} />
            <div
                className="relative glass rounded-3xl h-full flex flex-col items-start"
                style={{ padding: '28px', background: 'rgba(15, 9, 28, 0.88)' }}
            >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-xl ${gradientClass}`}>
                    <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">{description}</p>
                <button className="btn-small">
                    View work <ExternalLink size={14} />
                </button>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const experiences = [
        {
            title: "CIB on the Mobile",
            description: "Take your business to the next level with our unified banking solution.",
            icon: Star,
            gradientClass: "bg-gradient-purple"
        },
        {
            title: "CIB on the Mobile",
            description: "Take your business to the next level with our unified banking solution.",
            icon: Globe,
            gradientClass: "bg-gradient-pink"
        },
        {
            title: "CIB on the Mobile",
            description: "Take your business to the next level with our unified banking solution.",
            icon: Zap,
            gradientClass: "bg-gradient-blue"
        },
        {
            title: "CIB on the Mobile",
            description: "Take your business to the next level with our unified banking solution.",
            icon: Cpu,
            gradientClass: "bg-gradient-dark"
        }
    ];

    return (
        <section id="about" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
            <div className="container">
                <h2 className="text-3xl font-bold text-white mb-12">Work Experience</h2>
                <div className="experience-grid">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </div>

                <div className="text-center mb-12" style={{ marginTop: '60px' }}>
                    <p className="text-gray-400 text-lg" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        I'm currently looking to join a <span className="text-purple-400">cross-functional</span> team
                        that values improving people's lives through accessible design.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Experience;
