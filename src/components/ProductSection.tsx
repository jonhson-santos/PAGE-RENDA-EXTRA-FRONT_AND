import React from 'react';
import { Smartphone, Clock, Zap, CheckCircle2, Target } from 'lucide-react';

const ProductSection = () => {
  const features = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
      text: "Como fazer dinheiro com tarefas online (sem gastar nada)"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
      text: "Como vender como afiliado (sem precisar aparecer)"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
      text: "Como revender produtos (sem estoque)"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-400" />,
      text: "Como prestar pequenos serviços online (sem experiência)"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Success background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
            O <span className="text-emerald-400">Método dos 7 Dias</span> Que Já Transformou<br />
            Centenas de Pessoas Comuns em<br />
            <span className="text-yellow-400">Máquinas de Fazer Dinheiro Online</span>
          </h2>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Um treinamento direto, sem enrolação, feito para quem quer resultado RÁPIDO.
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800 p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-colors text-center relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Mobile" 
                className="w-full h-full object-cover opacity-10 rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 to-transparent rounded-2xl"></div>
            </div>
            <div className="relative z-10">
              <Smartphone className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
              <div className="text-xl font-bold text-white mb-4">📲 Tudo pelo seu celular</div>
              <div className="text-gray-300">Não precisa de computador, escritório ou nada complicado.</div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-colors text-center relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Time" 
                className="w-full h-full object-cover opacity-10 rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 to-transparent rounded-2xl"></div>
            </div>
            <div className="relative z-10">
              <Clock className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
              <div className="text-xl font-bold text-white mb-4">⏱️ Menos de 1 hora de conteúdo</div>
              <div className="text-gray-300">Direto ao ponto. Sem enrolação. Só o que funciona.</div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-colors text-center relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/3943720/pexels-photo-3943720.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Impact" 
                className="w-full h-full object-cover opacity-10 rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 to-transparent rounded-2xl"></div>
            </div>
            <div className="relative z-10">
              <Zap className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
              <div className="text-xl font-bold text-white mb-4">💥 Impacto para a vida toda</div>
              <div className="text-gray-300">Uma vez que você aprende, nunca mais esquece.</div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Você vai descobrir:
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0">
                  <img 
                    src="https://images.pexels.com/photos/3943721/pexels-photo-3943721.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Feature background" 
                    className="w-full h-full object-cover opacity-10 rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 to-transparent rounded-xl"></div>
                </div>
                <div className="relative z-10 flex items-center gap-4">
                  {feature.icon}
                  <span className="text-white text-lg font-bold">{feature.text}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-yellow-900/50 to-emerald-900/50 p-8 rounded-2xl border border-yellow-500/30 text-center relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/3943722/pexels-photo-3943722.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Mindset" 
                className="w-full h-full object-cover opacity-20 rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-2xl"></div>
            </div>
            <div className="relative z-10">
              <Target className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
              <div className="text-xl md:text-2xl text-white font-bold mb-4">
                E o mais importante de tudo:
              </div>
              <div className="text-lg md:text-xl text-yellow-400 font-bold">
                👉 Como quebrar de uma vez por todas essa crença limitante que te faz pensar que "ganhar dinheiro online não é pra você".
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;