import React from 'react';
import { Crown, ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Background effects with luxury images */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Luxury background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
        
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-emerald-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="mb-12 md:mb-16">
            <Crown className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-yellow-400 mx-auto mb-6 md:mb-12 animate-bounce" />
            
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-gray-300 leading-relaxed mb-6 md:mb-12 max-w-5xl mx-auto font-bold px-2">
              "Se você chegou até aqui… é porque alguma coisa dentro de você já decidiu."
            </div>
            
            <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-400 leading-relaxed mb-8 md:mb-16 max-w-4xl mx-auto font-bold px-2">
              Agora… é clicar…<br />
              E começar a construir a sua nova história.
            </div>
          </div>

          <div className="bg-gradient-to-r from-black/90 to-emerald-900/50 p-6 md:p-12 lg:p-16 rounded-2xl md:rounded-3xl border-2 md:border-4 border-emerald-500/50 mb-8 md:mb-16 max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Money success" 
                className="w-full h-full object-cover opacity-20 rounded-2xl md:rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 rounded-2xl md:rounded-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-12">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-yellow-400 animate-bounce" />
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-emerald-400 animate-pulse" />
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-yellow-400 animate-bounce delay-500" />
              </div>
              
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 leading-tight mb-6 md:mb-12 animate-pulse drop-shadow-2xl px-2">
                VOCÊ MERECE MAIS.<br />
                VOCÊ NASCEU PRA VENCER.
              </div>
              
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-white mb-8 md:mb-16 px-2">
                CLICA NO BOTÃO… E VEM PRO TIME DOS QUE FAZEM.
              </div>

              <div className="px-4">
                <a 
                  href="https://app.pushinpay.com.br/service/pay/9F3DBFAA-C3EC-447B-B3AE-FF779B2A7FE7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-500 hover:from-emerald-600 hover:via-yellow-600 hover:to-emerald-600 text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-black py-3 px-4 sm:py-4 sm:px-6 md:py-6 md:px-12 lg:py-8 lg:px-16 xl:py-10 xl:px-18 2xl:py-12 2xl:px-20 rounded-full transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/50 animate-pulse hover:animate-none w-full sm:w-auto max-w-sm sm:max-w-md md:max-w-none mx-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 sm:-inset-2 md:-inset-4 lg:-inset-6 bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-500 rounded-full opacity-30 animate-ping"></div>
                  <div className="relative flex items-center justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6">
                    <Crown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 animate-bounce flex-shrink-0" />
                    <span className="text-center leading-tight">
                      COMEÇAR MINHA TRANSFORMAÇÃO AGORA!
                    </span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform flex-shrink-0" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 mb-3 md:mb-6 font-bold px-2">
              ⚡ Acesso liberado em segundos • 🔒 Compra 100% segura • 💎 Garantia total
            </div>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-400 font-black animate-pulse px-2">
              Sua nova vida está a um clique de distância.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;