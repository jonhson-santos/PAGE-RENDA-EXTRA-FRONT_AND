import React from 'react';
import { Smartphone, DollarSign, ArrowRight, Zap } from 'lucide-react';

const DreamSection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background with luxury lifestyle images */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Luxury lifestyle" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-12 leading-tight drop-shadow-2xl">
            Agora fecha os olhos e imagina...<br />
            <span className="text-emerald-400 animate-pulse">Daqui a 7 dias</span>…<br />
            Você acordando com <span className="text-yellow-400 animate-pulse">dinheiro na conta</span>…
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-black/90 to-emerald-900/50 p-16 rounded-3xl border-4 border-emerald-500/50 mb-12 relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/3943720/pexels-photo-3943720.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Money background" 
                className="w-full h-full object-cover opacity-20 rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 rounded-3xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <div className="text-2xl md:text-3xl text-gray-300 leading-relaxed mb-12 font-bold">
                  Você pega o celular de manhã…<br />
                  Olha as notificações…<br />
                  E vê isso:
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="bg-black/80 p-10 rounded-3xl border-4 border-emerald-500/30 relative overflow-hidden hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0">
                    <img 
                      src="https://images.pexels.com/photos/3943722/pexels-photo-3943722.jpeg?auto=compress&cs=tinysrgb&w=400" 
                      alt="Pix notification" 
                      className="w-full h-full object-cover opacity-30 rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-3xl"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-8">
                      <Smartphone className="w-12 h-12 text-emerald-400 animate-pulse" />
                      <div className="text-emerald-400 text-2xl font-bold">📲</div>
                    </div>
                    <div className="text-white text-2xl font-black bg-emerald-500/30 p-6 rounded-2xl border-2 border-emerald-500/50">
                      "Você recebeu R$127,00 de comissão"
                    </div>
                  </div>
                </div>

                <div className="bg-black/80 p-10 rounded-3xl border-4 border-yellow-500/30 relative overflow-hidden hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0">
                    <img 
                      src="https://images.pexels.com/photos/3943724/pexels-photo-3943724.jpeg?auto=compress&cs=tinysrgb&w=400" 
                      alt="Money received" 
                      className="w-full h-full object-cover opacity-30 rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-3xl"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-8">
                      <DollarSign className="w-12 h-12 text-yellow-400 animate-pulse" />
                      <div className="text-yellow-400 text-2xl font-bold">💰</div>
                    </div>
                    <div className="text-white text-2xl font-black bg-yellow-500/30 p-6 rounded-2xl border-2 border-yellow-500/50">
                      "Pix recebido: R$105,00"
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-12 animate-pulse">
                  E sabe o que é mais incrível?
                </div>

                <div className="grid md:grid-cols-4 gap-8 mb-16">
                  <div className="text-center group">
                    <div className="relative mb-6">
                      <img 
                        src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300" 
                        alt="Pessoa usando celular" 
                        className="w-20 h-20 object-cover rounded-full mx-auto border-4 border-emerald-500 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute -top-2 -right-2 text-2xl animate-bounce">✅</div>
                    </div>
                    <div className="text-white font-bold text-lg">Você fez tudo pelo celular</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="relative mb-6">
                      <img 
                        src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300" 
                        alt="Pessoa comum trabalhando" 
                        className="w-20 h-20 object-cover rounded-full mx-auto border-4 border-emerald-500 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute -top-2 -right-2 text-2xl animate-bounce">✅</div>
                    </div>
                    <div className="text-white font-bold text-lg">Sem precisar de milhares de seguidores</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="relative mb-6">
                      <img 
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300" 
                        alt="Pessoa aprendendo no computador" 
                        className="w-20 h-20 object-cover rounded-full mx-auto border-4 border-emerald-500 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute -top-2 -right-2 text-2xl animate-bounce">✅</div>
                    </div>
                    <div className="text-white font-bold text-lg">Sem ser expert em nada</div>
                  </div>
                  
                  <div className="text-center group">
                    <div className="relative mb-6">
                      <img 
                        src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=300" 
                        alt="Moedas e dinheiro pequeno investimento" 
                        className="w-20 h-20 object-cover rounded-full mx-auto border-4 border-emerald-500 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute -top-2 -right-2 text-2xl animate-bounce">✅</div>
                    </div>
                    <div className="text-white font-bold text-lg">Sem investir uma fortuna</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-500/30 to-yellow-500/30 p-12 rounded-3xl border-4 border-emerald-500/50 mb-12">
                  <div className="flex items-center justify-center gap-6 mb-8">
                    <Zap className="w-16 h-16 text-yellow-400 animate-bounce" />
                  </div>
                  <div className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-bold mb-6">
                    Nesse momento você vai pensar:
                  </div>
                  <div className="text-white font-black text-4xl md:text-5xl animate-pulse drop-shadow-2xl">
                    "CARAMBA... EU CONSEGUI!"
                  </div>
                </div>

                <div className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-bold">
                  E a partir daí… meu amigo…<br />
                  <span className="text-white font-black text-4xl animate-pulse">Sua vida nunca mais vai ser a mesma.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamSection;