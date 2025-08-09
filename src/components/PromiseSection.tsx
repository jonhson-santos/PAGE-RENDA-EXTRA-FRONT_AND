import React from 'react';
import { DollarSign, ArrowRight, Sparkles, Smartphone, TrendingUp } from 'lucide-react';

const PromiseSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-black to-emerald-900/20 relative overflow-hidden">
      {/* Background with money images */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Success" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-6xl font-black text-white mb-8 md:mb-12 leading-tight drop-shadow-2xl px-2">
            Escuta bem o que eu vou te falar...<br />
            <span className="text-emerald-400 animate-pulse">Não é sobre ficar rico da noite pro dia</span><br />
            É sobre <span className="text-yellow-400 animate-pulse">PROVAR PRA VOCÊ MESMO</span> que consegue!
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-900/80 to-yellow-900/80 p-8 md:p-16 rounded-3xl border-2 md:border-4 border-emerald-500/50 mb-8 md:mb-12 relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/3943721/pexels-photo-3943721.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Money" 
                className="w-full h-full object-cover opacity-20 rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 rounded-3xl"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-8 md:mb-12">
                <div className="relative">
                  <DollarSign className="w-16 h-16 md:w-24 md:h-24 text-emerald-400 animate-pulse" />
                  <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4">
                    <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-yellow-400 animate-bounce" />
                  </div>
                </div>
              </div>
              
              <div className="text-lg md:text-3xl text-gray-300 leading-relaxed mb-8 md:mb-12">
                Sabe qual é a diferença entre quem consegue e quem não consegue?<br />
                <span className="text-white font-black text-2xl md:text-4xl">A primeira venda.</span><br />
                Quando você faz seus primeiros <span className="text-emerald-400 font-black text-3xl md:text-5xl animate-pulse">R$100</span>...
              </div>
              
              <div className="text-2xl md:text-6xl font-black text-yellow-400 mb-8 md:mb-12 animate-pulse drop-shadow-2xl">
                "PORRA... EU CONSIGO!"
              </div>
              
              <div className="text-base md:text-2xl text-gray-300 leading-relaxed font-bold">
                É nesse momento que tudo muda...<br />
                Que você percebe que não é sorte...<br />
                <span className="text-emerald-400 font-black text-xl md:text-3xl">É método. É estratégia. É possível.</span>
              </div>
            </div>
          </div>

          {/* Improved money visualization journey */}
          <div className="relative mb-12 md:mb-16">
            <div className="bg-gradient-to-r from-black/90 to-emerald-900/50 p-8 md:p-16 rounded-3xl border-2 md:border-4 border-emerald-500/50 relative overflow-hidden">
              <div className="absolute inset-0">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Success journey" 
                  className="w-full h-full object-cover opacity-20 rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 rounded-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-12 md:mb-16">
                  <div className="text-2xl md:text-4xl font-black text-white mb-6 md:mb-8">
                    Olha como vai ser sua transformação:
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  {/* Step 1 */}
                  <div className="text-center group relative">
                    <div className="bg-gradient-to-b from-emerald-500/30 to-black/80 p-6 md:p-8 rounded-3xl border-2 md:border-4 border-emerald-500/50 hover:scale-105 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0">
                        <img 
                          src="https://images.pexels.com/photos/3943719/pexels-photo-3943719.jpeg?auto=compress&cs=tinysrgb&w=300" 
                          alt="Primeira venda" 
                          className="w-full h-full object-cover opacity-40 rounded-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-3xl"></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 animate-pulse">
                          <DollarSign className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </div>
                        <div className="text-xl md:text-2xl font-black text-emerald-400 mb-3 md:mb-4">DIA 1-3</div>
                        <div className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Você Aplica o Método</div>
                        <div className="text-sm md:text-base text-gray-300 font-bold">
                          Segue o passo a passo, faz sua primeira ação e espera o resultado.
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-12 h-12 text-emerald-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="text-center group relative">
                    <div className="bg-gradient-to-b from-yellow-500/30 to-black/80 p-6 md:p-8 rounded-3xl border-2 md:border-4 border-yellow-500/50 hover:scale-105 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0">
                        <img 
                          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300" 
                          alt="Notificação Pix" 
                          className="w-full h-full object-cover opacity-40 rounded-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-3xl"></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 animate-bounce">
                          <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-black" />
                        </div>
                        <div className="text-xl md:text-2xl font-black text-yellow-400 mb-3 md:mb-4">DIA 4-7</div>
                        <div className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">A Primeira Grana Chega</div>
                        <div className="text-sm md:text-base text-gray-300 font-bold">
                          O celular toca: "Você recebeu R$127,00". Seu coração acelera.
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-12 h-12 text-yellow-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="text-center group">
                    <div className="bg-gradient-to-b from-emerald-500/30 to-yellow-500/30 p-6 md:p-8 rounded-3xl border-2 md:border-4 border-emerald-500/50 hover:scale-105 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute inset-0">
                        <img 
                          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300" 
                          alt="Vida nova" 
                          className="w-full h-full object-cover opacity-40 rounded-3xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-3xl"></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 animate-pulse">
                          <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </div>
                        <div className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-yellow-400 mb-3 md:mb-4">DEPOIS</div>
                        <div className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Você Nunca Mais É o Mesmo</div>
                        <div className="text-sm md:text-base text-gray-300 font-bold">
                          A confiança explode. Agora você sabe que consegue e vai atrás de mais.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12 md:mt-16">
                  <div className="text-2xl md:text-4xl font-black text-white mb-6 md:mb-8">
                    E depois disso…
                  </div>
                  <div className="text-xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 animate-pulse">
                    NÃO TEM MAIS VOLTA. VOCÊ VIRA UMA MÁQUINA DE FAZER DINHEIRO.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center px-4">
            <a 
              href="https://pay.kiwify.com.br/qmLSEgs"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-500 hover:from-emerald-600 hover:via-yellow-600 hover:to-emerald-600 text-black text-base md:text-2xl font-black py-4 px-6 md:py-8 md:px-16 rounded-full transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/50 animate-pulse hover:animate-none w-full md:w-auto max-w-md md:max-w-none mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-500 rounded-full opacity-30 animate-ping"></div>
              <div className="relative flex items-center justify-center gap-2 md:gap-4">
                <DollarSign className="w-5 h-5 md:w-8 md:h-8 animate-bounce flex-shrink-0" />
                <span className="text-center leading-tight">
                  EU QUERO FAZER MINHA PRIMEIRA GRANA ONLINE!
                </span>
                <ArrowRight className="w-5 h-5 md:w-8 md:h-8 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform flex-shrink-0" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;