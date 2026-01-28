import React from 'react';
import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="contact">
            <div className="container">
                <h2 className="contact-title">Contact</h2>
                <p className="contact-text">
                    I'm currently looking to join a cross-functional team that values improving people's lives
                    through accessible design. Have a project in mind? Let's connect.
                </p>
                <a
                    href="mailto:milyng.dsilva@gmail.com"
                    className="contact-email"
                >
                    milyng.dsilva@gmail.com
                </a>

                <div className="contact-icons flex gap-4 mt-6">
                    <a
                        href="https://github.com/MilynDsilva"
                        className="text-gray-500 hover-text-white transition-colors glass"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/milyn-dsilva"
                        className="text-gray-500 hover-text-white transition-colors glass"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="mailto:contact@milyndsilva.com"
                        className="text-gray-500 hover-text-white transition-colors glass"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
