import React from 'react';
import { ArrowRight, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-emerald/5 rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,#020617_100%)]" />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-emerald text-xs font-bold mb-8 uppercase tracking-wide">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-emerald"></span>
                        </span>
                        Alta Performance Disponível
                    </div>

                    <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                        Infraestrutura Digital de <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-slate to-white">Elite para Empreendedores.</span>
                    </h1>

                    <p className="font-sans text-lg md:text-xl text-brand-slate/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Democratizamos a tecnologia de grandes startups e entregando a você mais que um Site de alta performance,
                        uma Arquiterua Digital Completa.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a
                            href="#produtos"
                            className="group relative flex items-center gap-3 px-8 py-4 bg-brand-orange text-white font-bold rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,88,12,0.4)] hover:shadow-[0_0_30px_rgba(234,88,12,0.6)]"
                        >
                            <span>Quero minha Arquitetura Digital</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="#sobre"
                            className="px-8 py-4 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 border border-white/5 transition-all"
                        >
                            Entender o modelo
                        </a>
                    </div>

                    {/* Stats / Trust Indicators */}
                    <div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-left md:text-center">
                        <div className="flex flex-col md:items-center">
                            <div className="flex items-center gap-2 text-brand-slate mb-1">
                                <Zap className="w-5 h-5 text-brand-orange" />
                                <span className="font-bold text-white">Hyper Fast</span>
                            </div>
                            <p className="text-sm text-gray-500">Google PageSpeed 99+</p>
                        </div>
                        <div className="flex flex-col md:items-center">
                            <div className="flex items-center gap-2 text-brand-slate mb-1">
                                <TrendingUp className="w-5 h-5 text-brand-emerald" />
                                <span className="font-bold text-white">Growth Ready</span>
                            </div>
                            <p className="text-sm text-gray-500">Otimizado para conversão</p>
                        </div>
                        <div className="flex flex-col md:items-center">
                            <div className="flex items-center gap-2 text-brand-slate mb-1">
                                <ShieldCheck className="w-5 h-5 text-blue-400" />
                                <span className="font-bold text-white">Segurança Total</span>
                            </div>
                            <p className="text-sm text-gray-500">Proteção DDoS & SSL</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
