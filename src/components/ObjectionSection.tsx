import React from 'react';
import { Shield, Target, Play, MapPin, X, CheckCircle2 } from 'lucide-react';

const ObjectionSection = () => {
  const objections = [
    {
      icon: <Target className="w-8 h-8 text-red-400" />,
      objection: "Nunca consegui ganhar dinheiro online…",
      response: "Porque você nunca teve um método simples e direto como este. Aqui você aprende do zero, sem complicação.",
      solution: "Método passo a passo para iniciantes"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      objection: "Tenho medo de perder dinheiro…",
      response: "Por R$27 você não perde nada, mas pode ganhar muito. Além disso, tem garantia total de 7 dias.",
      solution: "Investimento baixo + Garantia total"
    },
    {
      icon: <Play className="w-8 h-8 text-red-400" />,
      objection: "E se não funcionar pra mim…",
      response: "Funciona para quem aplica. Mais de 500 pessoas já mudaram de vida com este método.",
      solution: "Mais de 500 casos de sucesso"
    },
    {
      icon: <MapPin className="w-8 h-8 text-red-400" />,
      objection: "Não sei por onde começar…",
      response: "Eu te pego pela mão desde o primeiro vídeo. Tudo explicado de forma simples e clara.",
      solution: "Suporte completo do início ao fim"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Overcoming obstacles" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
            Eu Sei Exatamente<br />
            <span className="text-red-400 animate-pulse">O Que Você Está Pensando…</span>
          </h2>
          <div className="text-2xl md:text-3xl text-gray-300 font-bold max-w-4xl mx-auto">
            E vou quebrar cada uma dessas desculpas agora mesmo.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {objections.map((item, index) => (
            <div key={index} className="group relative">
              <div className="bg-gradient-to-r from-slate-900/90 to-red-900/30 p-10 rounded-3xl border-2 border-red-500/30 hover:border-red-500/60 transition-all duration-500 hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0">
                  <img 
                    src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Solution" 
                    className="w-full h-full object-cover opacity-10 rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-3xl"></div>
                </div>
                
                <div className="relative z-10">
                  {/* Objection */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center border-2 border-red-500/50">
                      <X className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-red-400 text-xl font-bold mb-2">
                        DESCULPA:
                      </div>
                      <div className="text-red-300 text-lg font-bold">
                        "{item.objection}"
                      </div>
                    </div>
                  </div>
                  
                  {/* Response */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center border-2 border-emerald-500/50">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-emerald-400 text-xl font-bold mb-2">
                        REALIDADE:
                      </div>
                      <div className="text-white text-lg font-bold leading-relaxed">
                        {item.response}
                      </div>
                    </div>
                  </div>

                  {/* Solution highlight */}
                  <div className="bg-emerald-500/20 p-6 rounded-2xl border-2 border-emerald-500/40">
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <div className="text-emerald-400 font-black text-lg">
                        ✅ {item.solution}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-black/90 to-emerald-900/50 p-16 rounded-3xl border-4 border-emerald-500/50 max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Success mindset" 
                className="w-full h-full object-cover opacity-20 rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-3xl md:text-4xl font-black text-white leading-tight mb-8">
                Olha só a diferença:
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-red-500/50">
                    <X className="w-10 h-10 text-red-400" />
                  </div>
                  <div className="text-2xl font-black text-red-400 mb-4">QUEM FAZ DESCULPAS</div>
                  <div className="text-gray-300 font-bold text-lg">
                    Continua na mesma situação, reclamando, esperando um milagre que nunca vem.
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-emerald-500/50 animate-pulse">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-black text-emerald-400 mb-4">QUEM TOMA AÇÃO</div>
                  <div className="text-white font-bold text-lg">
                    Investe R$27, aplica o método e em 7 dias já está fazendo dinheiro online.
                  </div>
                </div>
              </div>

              <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 animate-pulse">
                QUAL VOCÊ VAI ESCOLHER SER?
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionSection;