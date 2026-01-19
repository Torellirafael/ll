import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Sobre', href: '#sobre' },
        { name: 'Soluções', href: '#produtos' },
        { name: 'Contato', href: '#footer' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-sm border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="#" className="font-mono text-2xl font-bold text-white tracking-tighter hover:text-brand-orange transition-colors">
                        Atrio<span className="text-brand-orange">X</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-brand-slate hover:text-brand-orange font-medium text-sm transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#produtos"
                            className="px-5 py-2.5 bg-brand-orange text-white font-bold rounded hover:bg-orange-700 transition-colors shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)]"
                        >
                            Começar Agora
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-md border-b border-white/5 animate-fade-in-down">
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg text-brand-slate hover:text-brand-orange font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#produtos"
                                onClick={() => setIsOpen(false)}
                                className="px-8 py-3 bg-brand-orange text-white font-bold rounded text-lg shadow-[0_0_15px_rgba(234,88,12,0.3)]"
                            >
                                Começar Agora
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
