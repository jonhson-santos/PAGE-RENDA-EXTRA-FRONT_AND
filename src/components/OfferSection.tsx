import React from 'react';
import { Zap, ArrowRight, Clock, Shield } from 'lucide-react';

const OfferSection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background with money images */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Money background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
            Pelo Preço de <span className="text-yellow-400 animate-pulse">Um Lanche</span>…<br />
            Você Vai Comprar uma <span className="text-emerald-400 animate-pulse">Nova Realidade.</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 font-bold">
              Esse treinamento poderia custar fácil <span className="line-through text-red-400 text-3xl">R$97… R$147…</span>
            </div>
            
            <div className="text-2xl md:text-3xl text-gray-300 mb-12 font-bold">
              Mas não é sobre isso.<br />
              É sobre alcance.<br />
              <span className="text-emerald-400 font-black text-4xl">É sobre mudar vidas.</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-900/80 to-yellow-900/80 p-16 rounded-3xl border-4 border-emerald-500/50 mb-16 relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Money offer" 
                className="w-full h-full object-cover opacity-20 rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 rounded-3xl"></div>
            </div>
            
            <div className="absolute top-6 right-6">
              <div className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-black animate-pulse border-2 border-white">
                OFERTA LIMITADA
              </div>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="text-2xl text-gray-300 mb-8 font-bold">Por isso, hoje:</div>
              
              <div className="mb-12">
                <div className="text-8xl md:text-9xl font-black text-emerald-400 mb-6 animate-pulse drop-shadow-2xl">
                  R$27<span className="text-4xl">,00</span>
                </div>
                <div className="text-2xl text-yellow-400 font-black">
                  Com acesso imediato. Sem taxas escondidas. Sem mensalidade.
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="flex items-center gap-4 bg-black/80 p-6 rounded-2xl border-2 border-emerald-500/50 hover:scale-105 transition-transform duration-500">
                  <Clock className="w-8 h-8 text-emerald-400 animate-pulse" />
                  <span className="text-white font-bold text-xl">Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-4 bg-black/80 p-6 rounded-2xl border-2 border-emerald-500/50 hover:scale-105 transition-transform duration-500">
                  <Shield className="w-8 h-8 text-emerald-400 animate-pulse" />
                  <span className="text-white font-bold text-xl">Garantia Total</span>
                </div>
                <div className="flex items-center gap-4 bg-black/80 p-6 rounded-2xl border-2 border-emerald-500/50 hover:scale-105 transition-transform duration-500">
                  <Zap className="w-8 h-8 text-emerald-400 animate-pulse" />
                  <span className="text-white font-bold text-xl">Resultados em 7 dias</span>
                </div>
              </div>

              <a 
                href="https://app.pushinpay.com.br/service/pay/9F3DBFAA-C3EC-447B-B3AE-FF779B2A7FE7"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-500 hover:from-emerald-600 hover:via-yellow-600 hover:to-emerald-600 text-black text-2xl md:text-3xl font-black py-10 px-20 rounded-full transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-emerald-500/50 animate-pulse hover:animate-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-500 rounded-full opacity-30 animate-ping"></div>
                <div className="relative flex items-center gap-6">
                  <Zap className="w-10 h-10 animate-bounce" />
                  EU QUERO AGORA! QUERO A MINHA MUDANÇA!
                  <ArrowRight className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
                </div>
              </a>

              <div className="text-lg text-gray-400 mt-8 font-bold">
                🔒 Pagamento 100% seguro • Garantia de 7 dias
              </div>
            </div>
          </div>

          {/* Additional money images showcase */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Money 1" 
                className="w-full h-32 object-cover rounded-2xl border-2 border-emerald-500 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-2 left-2 text-white font-bold">💰</div>
            </div>
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Money 2" 
                className="w-full h-32 object-cover rounded-2xl border-2 border-yellow-500 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-2 left-2 text-white font-bold">💵</div>
            </div>
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Freedom" 
                className="w-full h-32 object-cover rounded-2xl border-2 border-emerald-500 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-2 left-2 text-white font-bold">🏖️</div>
            </div>
            <div className="relative group">
              <img 
                src="https://encurtador.com.br/ODZbt" 
                alt="Success" 
                className="w-full h-32 object-cover rounded-2xl border-2 border-yellow-500 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-2 left-2 text-white font-bold">🚀</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;