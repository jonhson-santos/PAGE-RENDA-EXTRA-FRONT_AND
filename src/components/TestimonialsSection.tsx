import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Lucas",
      age: "19 anos",
      testimonial: "Cara, em 4 dias fiz R$132 vendendo como afiliado. Eu achava que era papo furado, mas funcionou mesmo!",
      earnings: "R$132 em 4 dias",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Larissa",
      age: "23 anos", 
      testimonial: "Fiz R$90 só com tarefas online no tempo livre. Agora não preciso mais pedir dinheiro pros meus pais!",
      earnings: "R$90 primeira semana",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Matheus",
      age: "17 anos",
      testimonial: "Tava desempregado e desesperado. Agora já tô fazendo minhas primeiras vendas e minha mãe não acredita!",
      earnings: "Primeiras vendas",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-emerald-900/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Success background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
            <span className="text-emerald-400 animate-pulse">Olha Só</span><br />
            Quem Já Saiu do Zero e Fez Acontecer
          </h2>
          <div className="text-2xl md:text-3xl text-gray-300 font-bold">
            Pessoas normais, como você, que decidiram mudar de vida
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-b from-emerald-900/50 to-black p-10 rounded-3xl border-4 border-emerald-500/30 hover:border-emerald-500/60 transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div className="absolute inset-0">
                <img 
                  src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Money background" 
                  className="w-full h-full object-cover opacity-10 rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-pulse" />
                  ))}
                </div>
                
                <div className="flex items-center gap-6 mb-8">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full border-4 border-emerald-500 object-cover"
                  />
                  <div>
                    <div className="text-emerald-400 font-black text-xl">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 font-bold">
                      {testimonial.age}
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <Quote className="w-10 h-10 text-emerald-400 mb-6" />
                  <p className="text-white text-xl leading-relaxed mb-6 font-bold">
                    "{testimonial.testimonial}"
                  </p>
                </div>
                
                <div className="bg-emerald-500/30 px-6 py-4 rounded-2xl border-2 border-emerald-500/50 text-center">
                  <div className="text-emerald-400 font-black text-2xl animate-pulse">
                    {testimonial.earnings}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-900/80 to-yellow-900/80 p-12 rounded-3xl border-4 border-emerald-500/50 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Success" 
                className="w-full h-full object-cover opacity-20 rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent rounded-3xl"></div>
            </div>
            <div className="relative z-10">
              <div className="text-2xl md:text-3xl font-black text-white leading-tight mb-6">
                Eles eram iguais a você há poucos dias atrás...
              </div>
              <div className="text-3xl md:text-5xl font-black text-emerald-400 animate-pulse">
                Agora é a SUA vez de brilhar!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;