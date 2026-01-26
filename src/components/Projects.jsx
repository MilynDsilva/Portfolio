import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, image, tags, link, github, reversed }) => {
    return (
        <div className={`flex flex-col ${reversed ? 'md-flex-row-rev' : 'md-flex-row'} items-center gap-12 mb-20`}>
            {/* Project Image */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full md-w-60 relative"
            >
                <div className="absolute inset-0 bg-purple-600 glow-blur" style={{ opacity: 0.1, zIndex: -1 }} />
                <div className="rounded-3xl overflow-hidden glass border-white/5 shadow-xl">
                    <img src={image} alt={title} className="w-full h-full" style={{ objectFit: 'cover', aspectRatio: '16/10' }} />
                </div>
            </motion.div>

            {/* Project Info */}
            <div className={`w-full md-w-40 flex flex-col ${reversed ? 'items-start text-left' : 'items-end text-right'}`}>
                <p className="text-purple-500 font-bold text-sm mb-2 uppercase tracking-widest">Featured Project</p>
                <h3 className="text-3xl font-bold text-white mb-6" style={{ textDecoration: 'underline', textDecorationColor: 'rgba(112,0,255,0.2)', textUnderlineOffset: '10px' }}>{title}</h3>

                <div className="glass bg-[#110a1f] p-8 rounded-3xl border-white/10 mb-6 relative shadow-xl" style={{ zIndex: 10 }}>
                    <p className="text-gray-300" style={{ lineHeight: '1.6' }}>
                        {description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8" style={{ justifyContent: reversed ? 'flex-start' : 'flex-end' }}>
                    {tags.map((tag, i) => (
                        <span key={i} className="text-gray-400 text-xs font-medium bg-white/5 border-white/10 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                </div>

                <div className="flex gap-6 text-gray-500">
                    <a href={github} className="hover:text-purple-400 transition-all"><Github size={20} /></a>
                    <a href={link} className="hover:text-purple-400 transition-all"><ExternalLink size={20} /></a>
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
