import React from 'react';
import { Shield, MessageCircle, ArrowLeft } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
            Se Você Não Gostar…<br />
            <span className="text-emerald-400">Eu Não Quero o Seu Dinheiro.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-900/50 to-slate-800/50 p-12 rounded-3xl border border-emerald-500/30">
            <div className="text-center mb-12">
              <Shield className="w-20 h-20 text-emerald-400 mx-auto mb-8" />
              
              <div className="text-2xl md:text-3xl font-bold text-white mb-8">
                Simples assim.
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-slate-800 p-6 rounded-xl border border-emerald-500/20 mb-4">
                  <div className="text-3xl mb-2">👀</div>
                  <div className="text-white font-bold">Assiste.</div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-slate-800 p-6 rounded-xl border border-emerald-500/20 mb-4">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="text-white font-bold">Aplica.</div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-slate-800 p-6 rounded-xl border border-red-500/20 mb-4">
                  <div className="text-3xl mb-2">🤔</div>
                  <div className="text-white font-bold">Se não gostar…</div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-slate-800 p-6 rounded-xl border border-emerald-500/20 mb-4">
                  <MessageCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <div className="text-white font-bold">Me chama no WhatsApp.</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-emerald-500/20 p-8 rounded-2xl border border-emerald-500/30 mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <ArrowLeft className="w-8 h-8 text-emerald-400" />
                  <div className="text-2xl">💰</div>
                </div>
                <div className="text-xl md:text-2xl font-bold text-emerald-400 leading-tight">
                  Dinheiro de volta. Sem desculpas. Sem enrolação.
                </div>
              </div>

              <div className="text-lg md:text-xl text-gray-300">
                É assim que eu trabalho. Com <span className="text-emerald-400 font-bold">confiança total</span> no que entrego.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;