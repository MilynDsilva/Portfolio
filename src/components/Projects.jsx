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
            title: "Example Project",
            description: "A web app for visualized personalized spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
            image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop",
            tags: ["React", "Spotify API", "Node"],
            link: "#",
            github: "#",
            reversed: false
        },
        {
            title: "Example Project",
            description: "A web app for visualized personalized spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
            image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
            tags: ["Figma", "Design", "UI/UX"],
            link: "#",
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
