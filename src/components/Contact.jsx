import React from 'react';
import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="py-20 border-t border-white/5">
            <div className="container">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-4xl font-bold text-white mb-8">Contact</h2>

                    <p className="text-gray-400 text-lg max-w-xl mb-12">
                        I'm currently looking to join a cross-functional team that values improving people's lives
                        through accessible design. or have a project in mind? Let's connected.
                    </p>

                    <a
                        href="mailto:contact@milyndsilva.com"
                        className="text-white text-xl font-medium mb-12 hover:text-purple-400 transition-colors border-b border-purple-500/30"
                    >
                        contact@milyndsilva.com
                    </a>

                    <div className="flex gap-8 mb-20">
                        {[Github, Twitter, Linkedin, Mail, Instagram].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="text-gray-500 hover:text-white transition-colors p-2 glass rounded-xl border border-white/5"
                            >
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>

                    <div className="w-full pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-gray-500 text-sm">
                            © 2024 Milyn Dsilva. All rights reserved.
                        </div>
                        <div className="text-gray-500 text-sm flex gap-8">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
