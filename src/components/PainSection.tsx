import React from 'react';
import { AlertTriangle, TrendingDown, Clock } from 'lucide-react';

const PainSection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Stress" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
            Tá cansado de ser <span className="text-red-500 animate-pulse">mais um na multidão</span>?<br />
            De ver todo mundo crescendo <span className="text-red-500 animate-pulse">menos você</span>?
          </h2>
          
          <div className="text-2xl md:text-3xl text-gray-300 font-bold mb-12">
            Eu sei exatamente como você se sente...
          </div>
          
          <div className="text-3xl md:text-4xl text-red-500 font-black mb-12 animate-pulse">
            Porque eu já passei por isso:
          </div>
        </div>

        {/* Pain points with images */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="relative bg-gradient-to-b from-red-900/50 to-black p-8 rounded-3xl border-2 border-red-500/30 hover:border-red-500/60 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 rounded-3xl">
              <img 
                src="https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Conta vazia" 
                className="w-full h-full object-cover rounded-3xl opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-3xl"></div>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="w-10 h-10 text-red-400" />
                <div className="text-red-400 text-2xl font-bold">😰</div>
              </div>
              <p className="text-white text-xl leading-relaxed font-bold">
                Você acorda todo dia pensando: <span className="text-red-400 font-black text-2xl">"Como vou pagar as contas esse mês?"</span>
              </p>
            </div>
          </div>

          <div className="relative bg-gradient-to-b from-red-900/50 to-black p-8 rounded-3xl border-2 border-red-500/30 hover:border-red-500/60 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 rounded-3xl">
              <img 
                src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Extrato bancário" 
                className="w-full h-full object-cover rounded-3xl opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent rounded-3xl"></div>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <TrendingDown className="w-10 h-10 text-red-400" />
                <div className="text-red-400 text-2xl font-bold">📱</div>
              </div>
              <p className="text-white text-xl leading-relaxed font-bold">
                Você olha o saldo no banco e pensa: <span className="text-red-400 font-black text-2xl">"Meu Deus, só isso?"</span>
              </p>
            </div>
          </div>

          <div className="relative bg-gradient-to-b from-red-900/50 to-black p-8 rounded-3xl border-2 border-red-500/30 hover:border-red-500/60 transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 rounded-3xl">
              <img 
                src="https://images.pexels.com/photos/3943725/pexels-photo-3943725.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Redes sociais" 
                className="w-full h-full object-cover rounded-3xl opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent rounded-3xl"></div>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-10 h-10 text-red-400" />
                <div className="text-red-400 text-2xl font-bold">⏰</div>
              </div>
              <p className="text-white text-xl leading-relaxed font-bold">
                Você vê os outros postando viagens, compras, conquistas... <span className="text-red-400 font-black text-2xl">E você só assistindo de longe.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-red-900/80 to-black p-12 rounded-3xl border-4 border-red-500/50 max-w-5xl mx-auto mb-12 relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/3943728/pexels-photo-3943728.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Frustration" 
                className="w-full h-full object-cover opacity-20 rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-2xl md:text-3xl text-gray-300 mb-8 font-bold">
                E aí você pensa:
              </div>
              
              <div className="text-xl md:text-2xl text-red-400 mb-12 max-w-4xl mx-auto leading-relaxed font-bold">
                "Será que eu vou ficar a vida toda assim? Será que nunca vou conseguir sair dessa?"
              </div>

              <div className="text-3xl md:text-4xl font-black text-white mb-8">
                EU TENHO UMA NOTÍCIA PRA VOCÊ:
              </div>

              <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 leading-tight animate-pulse drop-shadow-2xl">
                VOCÊ VAI CONSEGUIR SIM.<br />
                E VAI SER MAIS RÁPIDO DO QUE IMAGINA.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;