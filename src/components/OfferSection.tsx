import React from 'react';
import { Zap, ArrowRight, Clock, Shield } from 'lucide-react';

const OfferSection = () => {
  return (
    <section className="py-16 md:py-20 bg-black relative overflow-hidden">
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
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white mb-6 md:mb-8 leading-tight drop-shadow-2xl px-2">
            Pelo Preço de <span className="text-yellow-400 animate-pulse">Um Lanche</span>…<br />
            Você Vai Comprar uma <span className="text-emerald-400 animate-pulse">Nova Realidade.</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6 md:mb-12 font-bold px-2">
              Esse treinamento poderia custar fácil <span className="line-through text-red-400 text-lg sm:text-xl md:text-2xl lg:text-3xl">R$97… R$147…</span>
            </div>
            
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-6 md:mb-12 font-bold px-2">
              Mas não é sobre isso.<br />
              É sobre alcance.<br />
              <span className="text-emerald-400 font-black text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">É sobre mudar vidas.</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-900/80 to-yellow-900/80 p-6 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl border-2 md:border-4 border-emerald-500/50 mb-12 md:mb-16 relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Money offer" 
                className="w-full h-full object-cover opacity-20 rounded-2xl md:rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 rounded-2xl md:rounded-3xl"></div>
            </div>
            
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6">
              <div className="bg-red-500 text-white px-2 py-1 sm:px-3 sm:py-2 md:px-6 md:py-3 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-black animate-pulse border-2 border-white">
                OFERTA LIMITADA
              </div>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 md:mb-8 font-bold px-2">Por isso, hoje:</div>
              
              <div className="mb-6 md:mb-12">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-emerald-400 mb-3 md:mb-6 animate-pulse drop-shadow-2xl">
                  R$27<span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">,00</span>
                </div>
                <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-yellow-400 font-black px-2">
                  Com acesso imediato. Sem taxas escondidas. Sem mensalidade.
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-16">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-black/80 p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-emerald-500/50 hover:scale-105 transition-transform duration-500">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-emerald-400 animate-pulse flex-shrink-0" />
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">Acesso Imediato</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-black/80 p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-emerald-500/50 hover:scale-105 transition-transform duration-500">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-emerald-400 animate-pulse flex-shrink-0" />
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">Garantia Total</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-black/80 p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-emerald-500/50 hover:scale-105 transition-transform duration-500 sm:col-span-2 md:col-span-1">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-emerald-400 animate-pulse flex-shrink-0" />
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">Resultados em 7 dias</span>
                </div>
              </div>

              <div className="px-4">
                <a 
                  href="https://app.pushinpay.com.br/service/pay/9F3DBFAA-C3EC-447B-B3AE-FF779B2A7FE7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-500 hover:from-emerald-600 hover:via-yellow-600 hover:to-emerald-600 text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-black py-3 px-4 sm:py-4 sm:px-6 md:py-6 md:px-12 lg:py-8 lg:px-16 xl:py-10 xl:px-20 rounded-full transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/50 animate-pulse hover:animate-none w-full sm:w-auto max-w-sm sm:max-w-md md:max-w-none mx-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 sm:-inset-2 md:-inset-4 bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-500 rounded-full opacity-30 animate-ping"></div>
                  <div className="relative flex items-center justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 animate-bounce flex-shrink-0" />
                    <span className="text-center leading-tight">
                      EU QUERO AGORA! QUERO A MINHA MUDANÇA!
                    </span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform flex-shrink-0" />
                  </div>
                </a>
              </div>

              <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 mt-4 md:mt-8 font-bold px-2">
                🔒 Pagamento 100% seguro • Garantia de 7 dias
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;