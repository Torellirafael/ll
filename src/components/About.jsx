import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="sobre" className="py-20 md:py-32 bg-brand-dark relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* The Problem */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/0 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl opacity-50"></div>
                        <div className="relative border border-white/5 bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <XCircle className="text-red-500" />
                                O Pesadelo Atual
                            </h3>
                            <ul className="space-y-4 text-brand-slate/80">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500/50 mt-1">●</span>
                                    Perder horas tentando aprender Wix ou Wordpress.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500/50 mt-1">●</span>
                                    Sites lentos e sem profissionalismo espantam possíveis clientes.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500/50 mt-1">●</span>
                                    Agências que cobram valores absurdos e não entregam o prometido.
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500/50 mt-1">●</span>
                                    Alterações ou erros que demandam mais tempo mesmo depois do site finalizado.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* The Solution */}
                    <div>
                        <div className="inline-block px-3 py-1 rounded bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-bold text-xs uppercase tracking-widest mb-4">
                            A Solução AtrioX
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Você não monta seu carro. <br />
                            <span className="text-brand-orange">Por que montaria seu site?</span>
                        </h2>
                        <p className="text-lg text-brand-slate mb-8 leading-relaxed">
                            Introduzindo o modelo <strong className="text-white">Concierge Digital</strong>: Você foca no seu negócio, nós cuidamos de 100% da infraestrutura.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-brand-emerald/10 p-3 rounded-lg h-fit">
                                    <CheckCircle className="text-brand-emerald w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Zero Curva de Aprendizado</h4>
                                    <p className="text-brand-slate/70 text-sm">Apenas nos envie textos e fotos brutos. Nós entregamos pronto para conversão.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-brand-emerald/10 p-3 rounded-lg h-fit">
                                    <CheckCircle className="text-brand-emerald w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Performance de Elite</h4>
                                    <p className="text-brand-slate/70 text-sm">Stack moderna (React/Vite/Tailwind) carregando em milissegundos.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-brand-emerald/10 p-3 rounded-lg h-fit">
                                    <CheckCircle className="text-brand-emerald w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Site Otimizado no Google</h4>
                                    <p className="text-brand-slate/70 text-sm">Tenha seu site bem ranqueado nas pesquisas do google ae aumente seus agendamentos.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
