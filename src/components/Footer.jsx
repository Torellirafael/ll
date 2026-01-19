import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="footer" className="bg-[#01040f] py-12 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <span className="font-mono text-2xl font-bold text-white tracking-tighter">
                            Atrio<span className="text-brand-orange">X</span>
                        </span>
                        <p className="text-brand-slate/50 text-sm mt-2">
                            Infraestrutura Digital de Alta Performance.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-brand-slate/60 hover:text-brand-orange transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-brand-slate/60 hover:text-brand-orange transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-brand-slate/60 hover:text-brand-orange transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 text-center text-brand-slate/30 text-xs">
                    © 2026 AtrioX. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
