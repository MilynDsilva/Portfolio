import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, image, tags, link, github, reversed }) => {
    return (
        <div className={`project-card ${reversed ? 'reverse' : ''}`}>
            <motion.div whileHover={{ scale: 1.02 }}>
                <div className="project-image">
                    <img src={image} alt={title} className="w-full h-full" style={{ objectFit: 'cover', aspectRatio: '16/10' }} />
                </div>
            </motion.div>

            <div className="flex flex-col items-start">
                <p className="project-label">Featured Project</p>
                <h3 className="project-title">{title}</h3>

                <div className="project-panel">
                    <p className="text-gray-400" style={{ lineHeight: '1.6' }}>
                        {description}
                    </p>
                </div>

                <div className="project-tags mb-6">
                    {tags.map((tag, i) => (
                        <span key={i} className="project-tag">{tag}</span>
                    ))}
                </div>

                <div className="flex gap-6 text-gray-500">
                    <a href={github} className="hover-text-purple transition-all"><Github size={20} /></a>
                    <a href={link} className="hover-text-purple transition-all"><ExternalLink size={20} /></a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "RestoreMe Dashboard",
            description: "Built and maintained backend services for the RestoreMe dashboard while leading the web team. Focused on reliable APIs, secure data flows, and performance for daily operations.",
            image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop",
            tags: ["Backend", "APIs", "Team Lead"],
            link: "https://dashboard.restoreme.care/download",
            github: "#",
            reversed: false
        },
        {
            title: "Digital Anatomy Atlas",
            description: "Architected and led backend development for a serverless AWS environment, translating client requirements into scalable services and reliable data workflows.",
            image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
            tags: ["AWS", "Serverless", "Backend Architecture"],
            link: "https://play.google.com/store/apps/details?id=com.focusmedica.digitalanatomy",
            github: "#",
            reversed: true
        }
    ];

    return (
        <section id="lab" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <div className="container">
                {projects.map((proj, index) => (
                    <ProjectCard key={index} {...proj} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
