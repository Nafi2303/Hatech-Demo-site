import React from 'react';

export const BackgroundVideo: React.FC = () => {
  return (
    <div 
      id="video-background-wrapper"
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-50 select-none bg-black"
    >
      {/* Vimeo Background Player */}
      <iframe
        id="bg-vimeo-iframe"
        src="https://player.vimeo.com/video/1219541521?background=1&autoplay=1&loop=1&muted=1&controls=0&autopause=0&byline=0&title=0&portrait=0&quality=1080p"
        className="absolute top-1/2 left-1/2 w-[100vw] min-w-[177.77vh] h-[56.25vw] min-h-[100vh] -translate-x-1/2 -translate-y-1/2 object-cover border-0 scale-105 pointer-events-none"
        allow="autoplay; fullscreen; picture-in-picture"
        title="Horn Africa Tech Background Video"
      />

      {/* Translucent cinematic overlay for maximum text contrast without obscuring the background video */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 pointer-events-none" 
      />
      
      {/* Subtle brand ambient crimson glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#630000]/15 rounded-full blur-[160px] pointer-events-none" 
      />
    </div>
  );
};
