import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Zap, Play } from 'lucide-react';

const VideoPlayer = ({ src, thumbnail, title, className = "", borderColor }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    
    if (!video) return;

    // Configure video
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    
    // Try to load video metadata
    video.load();
    
    // Handle video events
    const handleCanPlay = () => {
      if (hasUserInteracted) {
        video.play().then(() => {
          setIsPlaying(true);
          setShowThumbnail(false);
        }).catch((error) => {
          console.log('Autoplay failed:', error);
        });
      }
    };
    
    const handlePlay = () => {
      setIsPlaying(true);
      setShowThumbnail(false);
    };
    
    const handlePause = () => {
      setIsPlaying(false);
      setShowThumbnail(true);
    };
    
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Intersection Observer for auto-play when in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5 && hasUserInteracted) {
            if (video.readyState >= 3) { // HAVE_FUTURE_DATA
              video.play().catch(() => {
                // Autoplay failed, keep thumbnail
              });
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      observer.disconnect();
    };
  }, [hasUserInteracted]);

  // Enable user interaction on first click anywhere on the page
  useEffect(() => {
    const enableInteraction = () => {
      setHasUserInteracted(true);
    };

    document.addEventListener('click', enableInteraction, { once: true });
    document.addEventListener('touchstart', enableInteraction, { once: true });

    return () => {
      document.removeEventListener('click', enableInteraction);
      document.removeEventListener('touchstart', enableInteraction);
    };
  }, []);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (video) {
      setHasUserInteracted(true);
      video.play().then(() => {
        setIsPlaying(true);
        setShowThumbnail(false);
      }).catch((error) => {
        console.log('Play failed:', error);
      });
    }
  };

  return (
    <div ref={containerRef} className="relative group">
      <div className={`relative w-full h-40 md:h-48 rounded-2xl border-4 ${borderColor} group-hover:scale-105 transition-transform duration-500 shadow-2xl overflow-hidden`}>
        {/* Thumbnail */}
        {showThumbnail && (
          <div className="absolute inset-0 z-20">
            <img 
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button 
                onClick={handlePlayClick}
                className="w-12 h-12 md:w-16 md:h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group"
              >
                <Play className="w-6 h-6 md:w-8 md:h-8 text-black ml-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        )}
        
        {/* Video */}
        <video 
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
          loop
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white font-bold text-lg md:text-xl z-10">{title}</div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background with money/success images */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
        
        {/* Money rain effect */}
        <div className="absolute top-10 left-10 w-8 h-8 bg-emerald-400 rounded-full animate-bounce opacity-80"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-yellow-400 rounded-full animate-pulse delay-500 opacity-80"></div>
        <div className="absolute top-40 left-1/4 w-4 h-4 bg-green-400 rounded-full animate-ping delay-1000 opacity-80"></div>
        <div className="absolute bottom-40 right-10 w-10 h-10 bg-emerald-400 rounded-full animate-bounce delay-700 opacity-80"></div>
        <div className="absolute bottom-60 left-20 w-5 h-5 bg-yellow-400 rounded-full animate-pulse delay-300 opacity-80"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Headline */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 md:mb-8 drop-shadow-2xl">
              VOCÊ NÃO NASCEU
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 animate-pulse">
                PRA SER SÓ MAIS UM
              </span>
            </h1>
            <div className="text-lg md:text-4xl text-emerald-400 font-black mb-8 md:mb-12 drop-shadow-xl animate-pulse px-2">
              VOCÊ NASCEU PRA SER LIVRE. PRA TER DINHEIRO. PRA VIVER GRANDE.
            </div>
          </div>

          {/* Money videos showcase with original thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 px-2">
            <VideoPlayer
              src="https://vidagold.fun/wp-content/uploads/2025/06/d7701178426db81b6b23e6f1f4a34c42.mp4"
              title="💰 SUA GRANA"
              borderColor="border-emerald-500"
            />
            
            <VideoPlayer
              src="https://vidagold.fun/wp-content/uploads/2025/06/7e46d69c3d25d73f83391b6c31ee5bf3-Copia.mp4"
              thumbnail="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=400"
             title="💎 SUA LIBERDADE"
              borderColor="border-yellow-500"
            />
            
            <VideoPlayer
              src="https://vidagold.fun/wp-content/uploads/2025/06/dotsave_app_08d0ba01b46bc9a44b6a324c852dd1fb.mp4"
              thumbnail="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=400"
              title="🚀 SEU SUCESSO"
            />
          </div>

          {/* Subheadline */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16 px-4">
            <p className="text-base md:text-2xl text-gray-300 leading-relaxed mb-6 md:mb-8">
              Quantas vezes você já foi dormir olhando pro teto…<br />
              Com aquela sensação de que a vida tá passando…<br />
              Que os dias tão iguais…<br />
              E que você tá ficando pra trás…
            </p>
            <div className="text-2xl md:text-5xl font-black text-white drop-shadow-xl">
              Hoje… Isso acaba.
            </div>
          </div>

          {/* CTA Button - Otimizado para mobile */}
          <div className="px-4">
            <a 
              href="https://pay.kiwify.com.br/qmLSEgs"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-500 hover:from-emerald-600 hover:via-yellow-600 hover:to-emerald-600 text-black text-base md:text-2xl font-black py-4 px-6 md:py-8 md:px-16 rounded-full transition-all duration-500 transform hover:scale-105 animate-pulse hover:animate-none shadow-2xl hover:shadow-emerald-500/50 w-full md:w-auto max-w-md md:max-w-none mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-yellow-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-emerald-500 via-yellow-500 to-emerald-500 rounded-full opacity-30 animate-ping"></div>
              <div className="relative flex items-center justify-center gap-2 md:gap-4">
                <Zap className="w-5 h-5 md:w-8 md:h-8 animate-bounce flex-shrink-0" />
                <span className="text-center leading-tight">
                  SIM! EU QUERO MUDAR DE VIDA AGORA!
                </span>
                <ArrowRight className="w-5 h-5 md:w-8 md:h-8 group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform flex-shrink-0" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 md:w-8 md:h-12 border-2 md:border-4 border-emerald-400 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 md:w-2 md:h-4 bg-emerald-400 rounded-full mt-1 md:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;