'use client';

import { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  url: string;
  title: string;
}

export default function VideoPlayer({ url, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Función para manejar la carga del video
    const handleLoad = () => {
      video.play().catch(error => {
        console.log('Error al reproducir el video:', error);
      });
    };

    // Función para limpiar
    const cleanup = () => {
      if (video) {
        video.pause();
        video.currentTime = 0;
        video.removeEventListener('loadeddata', handleLoad);
      }
    };

    // Agregar event listener para cuando el video esté listo
    video.addEventListener('loadeddata', handleLoad);

    // Limpiar cuando el componente se desmonte
    return () => {
      cleanup();
    };
  }, [url]); // Re-ejecutar cuando cambie la URL

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Contenedor del video con aspect ratio responsivo */}
      <div className="relative w-full pt-[56.25%] bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          controls
          playsInline
          preload="metadata"
        >
          <source src={url} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        
        {/* Overlay con título */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6">
          <h3 className="text-white text-base sm:text-lg md:text-xl font-medium line-clamp-2">
            {title}
          </h3>
        </div>
      </div>

      {/* Controles adicionales para móviles */}
      <div className="mt-2 flex items-center justify-between px-2 sm:hidden">
        <button
          onClick={() => videoRef.current?.requestFullscreen()}
          className="text-gray-600 hover:text-pink-600 transition-colors p-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
          </svg>
        </button>
      </div>
    </div>
  );
} 