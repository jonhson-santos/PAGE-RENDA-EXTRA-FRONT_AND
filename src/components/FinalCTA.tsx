import React from 'react';
import { Crown, ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
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
          <div className="mb-16">
            <Crown className="w-20 h-20 text-yellow-400 mx-auto mb-12 animate-bounce" />
            
            <div className="text-3xl md:text-4xl text-gray-300 leading-relaxed mb-12 max-w-5xl mx-auto font-bold">
              "Se você chegou até aqui… é porque alguma coisa dentro de você já decidiu."
            </div>
            
            <div className="text-2xl md:text-3xl text-gray-400 leading-relaxed mb-16 max-w-4xl mx-auto font-bold">
              Agora… é clicar…<br />
              E começar a construir a sua nova história.
            </div>
          </div>

          <div className="bg-gradient-to-r from-black/90 to-emerald-900/50 p-16 rounded-3xl border-4 border-emerald-500/50 mb-16 max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Money success" 
                className="w-full h-full object-cover opacity-20 rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 rounded-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-6 mb-12">
                <Sparkles className="w-12 h-12 text-yellow-400 animate-bounce" />
                <Sparkles className="w-16 h-16 text-emerald-400 animate-pulse" />
                <Sparkles className="w-12 h-12 text-yellow-400 animate-bounce delay-500" />
              </div>
              
              <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 leading-tight mb-12 animate-pulse drop-shadow-2xl">
                VOCÊ MERECE MAIS.<br />
                VOCÊ NASCEU PRA VENCER.
              </div>
              
              <div className="text-2xl md:text-3xl font-black text-white mb-16">
                CLICA NO BOTÃO… E VEM PRO TIME DOS QUE FAZEM.
              </div>

              <a 
                href="https://app.pushinpay.com.br/service/pay/9F3DBFAA-C3EC-447B-B3AE-FF779B2A7FE7"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-500 hover:from-emerald-600 hover:via-yellow-600 hover:to-emerald-600 text-black text-2xl md:text-3xl font-black py-12 px-20 rounded-full transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-emerald-500/50 animate-pulse hover:animate-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-500 rounded-full opacity-30 animate-ping"></div>
                <div className="relative flex items-center gap-6">
                  <Crown className="w-12 h-12 animate-bounce" />
                  COMEÇAR MINHA TRANSFORMAÇÃO AGORA!
                  <ArrowRight className="w-12 h-12 group-hover:translate-x-2 transition-transform" />
                </div>
              </a>
            </div>
          </div>

          {/* Success images showcase */}
          <div className="grid md:grid-cols-5 gap-4 mb-12">
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=200" 
                alt="Money" 
                className="w-full h-24 object-cover rounded-xl border-2 border-emerald-500 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
            </div>
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=200" 
                alt="Freedom" 
                className="w-full h-24 object-cover rounded-xl border-2 border-yellow-500 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
            </div>
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=200" 
                alt="Success" 
                className="w-full h-24 object-cover rounded-xl border-2 border-emerald-500 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
            </div>
            <div className="relative group">
              <img 
                src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=200" 
                alt="Wealth" 
                className="w-full h-24 object-cover rounded-xl border-2 border-yellow-500 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
            </div>
            <div className="relative group">
              <img 
                src="https://encurtador.com.br/ODZbt" 
                alt="Digital success" 
                className="w-full h-24 object-cover rounded-xl border-2 border-emerald-500 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"></div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-lg text-gray-500 mb-6 font-bold">
              ⚡ Acesso liberado em segundos • 🔒 Compra 100% segura • 💎 Garantia total
            </div>
            <div className="text-2xl text-emerald-400 font-black animate-pulse">
              Sua nova vida está a um clique de distância.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;