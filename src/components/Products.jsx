import React from 'react';
import { Server, Users, Factory, Check } from 'lucide-react';

const Products = () => {
    return (
        <section id="produtos" className="py-20 bg-brand-dark relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-mono font-bold text-white mb-6">Investimento Inteligente</h2>
                    <p className="text-brand-slate text-lg">Escolha o nível de aceleração que seu negócio precisa hoje.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Product A */}
                    <div className="relative group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-slate/30 transition-all flex flex-col">
                        <div className="mb-6">
                            <Server className="w-12 h-12 text-brand-slate mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Site Concierge</h3>
                            <p className="text-brand-slate/60 text-sm min-h-[40px]">Infraestrutura ultra-rápida para quem precisa de presença digital profissional.</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-sm text-brand-slate/50 block mb-1">Investimento</span>
                            <div className="text-3xl font-bold text-white"> 12x de R$ 198</div>
                            <span className="text-xs text-brand-slate/50">ou  R$ 1.980,00 à vista</span>
                        </div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex gap-2 text-sm text-brand-slate">
                                <Check className="w-4 h-4 text-brand-emerald" /> Site Institucional 
                            </li>
                            <li className="flex gap-2 text-sm text-brand-slate">
                                <Check className="w-4 h-4 text-brand-emerald" /> Design exclusivo
                            </li>
                            <li className="flex gap-2 text-sm text-brand-slate">
                                <Check className="w-4 h-4 text-brand-emerald" /> Hospedagem Inclusa
                            </li>
                        </ul>
                        <a href="https://wa.me/5561999999999?text=Tenho%20interesse%20no%20Site%20Concierge" className="block w-full py-3 rounded-lg border border-white/20 text-white font-bold text-center hover:bg-white/10 transition-colors">
                            Selecionar
                        </a>
                    </div>

                    {/* Product B (Featured) */}
                    <div className="relative group bg-brand-orange/5 border border-brand-orange/30 rounded-2xl p-8 hover:border-brand-orange/50 transition-all transform md:-translate-y-4 flex flex-col shadow-[0_0_30px_rgba(234,88,12,0.1)]">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Mais Popular
                        </div>
                        <div className="mb-6">
                            <Users className="w-12 h-12 text-brand-orange mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Growth SDR</h3>
                            <p className="text-brand-slate/60 text-sm min-h-[40px]">Máquina de vendas completa. Tráfego + Qualificação humana.</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-sm text-brand-slate/50 block mb-1">Investimento</span>
                            <div className="text-3xl font-bold text-white">12x de R$ 337</div>
                            <span className="text-xs text-brand-emerald font-bold"> ou R$ 3.890,00 à vista</span>
                        </div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex gap-2 text-sm text-white">
                                <Check className="w-4 h-4 text-brand-orange" /> Lead Quente na hora
                            </li>
                            <li className="flex gap-2 text-sm text-white">
                                <Check className="w-4 h-4 text-brand-orange" /> SDR Humano Dedicado
                            </li>
                            <li className="flex gap-2 text-sm text-white">
                                <Check className="w-4 h-4 text-brand-orange" /> Gestão de Tráfego Pago
                            </li>
                        </ul>
                        <a href="https://wa.me/5561999999999?text=Tenho%20interesse%20no%20Plano%20Growth%20SDR" className="block w-full py-3 rounded-lg bg-brand-orange text-white font-bold text-center hover:bg-orange-600 transition-colors shadow-lg">
                            Contratar Growth
                        </a>
                    </div>

                    {/* Product C */}
                    <div className="relative group bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-slate/30 transition-all flex flex-col">
                        <div className="mb-6">
                            <Factory className="w-12 h-12 text-brand-emerald mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Arquitetura Completa</h3>
                            <p className="text-brand-slate/60 text-sm min-h-[40px]">A solução definitiva. Site, Tráfego e SDR unificados.</p>
                        </div>
                        <div className="mb-6">
                            <span className="text-sm text-brand-slate/50 block mb-1">Investimento</span>
                            <div className="text-3xl font-bold text-white">Sob Análise</div>
                            <span className="text-xs text-brand-slate/50">Setup Completo + Consultoria</span>
                        </div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex gap-2 text-sm text-brand-slate">
                                <Check className="w-4 h-4 text-brand-emerald" /> Site + Tráfego + SDR
                            </li>
                            <li className="flex gap-2 text-sm text-brand-slate">
                                <Check className="w-4 h-4 text-brand-emerald" /> Automação de CRM
                            </li>
                            <li className="flex gap-2 text-sm text-brand-slate">
                                <Check className="w-4 h-4 text-brand-emerald" /> Reunião Agendada
                            </li>
                        </ul>
                        <a href="https://wa.me/5561999999999?text=Tenho%20interesse%20na%20Arquitetura%20Completa" className="block w-full py-3 rounded-lg border border-white/20 text-white font-bold text-center hover:bg-white/10 transition-colors">
                            Falar com Consultor
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Products;
