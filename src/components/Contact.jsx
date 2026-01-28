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
                    href="mailto:contact@milyndsilva.com"
                    className="contact-email"
                >
                    contact@milyndsilva.com
                </a>

                <div className="contact-icons flex gap-4 mt-6">
                    {[Github, Twitter, Linkedin, Mail, Instagram].map((Icon, i) => (
                        <a
                            key={i}
                            href="#"
                            className="text-gray-500 hover-text-white transition-colors glass"
                        >
                            <Icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Contact;
