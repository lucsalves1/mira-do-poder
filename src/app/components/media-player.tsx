import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Mic } from 'lucide-react';
import { motion } from 'motion/react';
import robertoSeabraImg from "../../assets/f8630495265eea58d909dd623eed5bedf934c32e.png";


interface MediaPlayerProps {
  type: 'audio' | 'video';
  title: string;
  description: string;
  src?: string; // URL do arquivo de mídia (opcional - se não fornecido, usa placeholder)
}

export function MediaPlayer({ type, title, description, src }: MediaPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    const media = type === 'audio' ? audioRef.current : videoRef.current;
    if (!media || !src) return;

    if (isPlaying) {
      media.pause();
    } else {
      media.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const media = type === 'audio' ? audioRef.current : videoRef.current;
    if (!media) return;

    setCurrentTime(media.currentTime);
    if (media.duration) {
      setProgress((media.currentTime / media.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    const media = type === 'audio' ? audioRef.current : videoRef.current;
    if (!media) return;
    setDuration(media.duration);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const media = type === 'audio' ? audioRef.current : videoRef.current;
    if (!media || !media.duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = (clickX / rect.width) * 100;
    const newTime = (newProgress / 100) * media.duration;
    
    media.currentTime = newTime;
    setProgress(newProgress);
    setCurrentTime(newTime);
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Audio player with light theme
  if (type === 'audio') {
    return (
      <motion.div 
        className="my-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-neutral-100 rounded-lg p-8 border border-neutral-200">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-neutral-300">
                <img 
                  src={robertoSeabraImg} 
                  alt="Roberto Seabra"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-neutral-200 text-neutral-700 text-xs uppercase tracking-wider rounded">
                  Áudio
                </span>
              </div>
              
              <h3 className="mb-2 text-neutral-900 font-sans">
                {title}
              </h3>
              
              <p className="text-neutral-600 text-sm mb-4">
                {description}
              </p>
              
              {src ? (
                <>
                  <audio
                    ref={audioRef}
                    src={src}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setIsPlaying(false)}
                    className="hidden"
                  />
                  
                  <div className="bg-white rounded-lg p-4 border border-neutral-300">
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={togglePlay}
                        className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5" />
                        ) : (
                          <Play className="w-5 h-5 ml-0.5" />
                        )}
                      </button>
                      
                      <div className="flex-1">
                        <div 
                          className="h-1.5 bg-neutral-200 rounded-full overflow-hidden cursor-pointer"
                          onClick={handleSeek}
                        >
                          <div 
                            className="h-full bg-red-600 transition-all"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <span className="text-sm text-neutral-500 tabular-nums">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-white rounded-lg p-4 border border-neutral-300">
                  <div className="flex items-center gap-4">
                    <button className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors">
                      <Play className="w-5 h-5 ml-0.5" />
                    </button>
                    
                    <div className="flex-1">
                      <div className="h-1.5 bg-neutral-200 rounded-full overflow-hidden">
                        <div className="h-full w-0 bg-red-600"></div>
                      </div>
                    </div>
                    
                    <span className="text-sm text-neutral-500 tabular-nums">
                      0:00
                    </span>
                  </div>
                  
                  <p className="mt-3 text-xs text-neutral-500 italic">
                    * Adicione o arquivo de mídia usando a propriedade "src"
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Video player keeps dark theme (existing style)
  return (
    <motion.div 
      className="my-12 flex justify-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-3xl">
        <div className="group rounded-lg border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all hover:border-zinc-700 hover:bg-zinc-900/70">
          <div className="flex items-center gap-4">
            <motion.button
              onClick={togglePlay}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-red-900/20 text-red-600 transition-all hover:bg-red-900/30 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? (
                <Pause className="h-8 w-8" fill="currentColor" />
              ) : (
                <Play className="h-8 w-8 translate-x-0.5" fill="currentColor" />
              )}
            </motion.button>
            <div className="flex-1">
              <div className="mb-2 flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-zinc-500">
                <span>Vídeo — Depoimento</span>
              </div>
              <div className="font-sans text-sm text-zinc-400">{title}</div>
              <div className="font-sans text-xs text-zinc-500">{description}</div>
            </div>
          </div>
          
          <div className="mt-6 flex items-center gap-3">
            <div 
              className="group/progress relative h-1 flex-1 cursor-pointer rounded-full bg-zinc-800 hover:h-1.5 transition-all"
              onClick={handleSeek}
            >
              <motion.div 
                className="h-full rounded-full bg-gradient-to-r from-red-700 to-red-600"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-red-500 opacity-0 group-hover/progress:opacity-100 transition-opacity"
                style={{ left: `${progress}%`, marginLeft: '-6px' }}
              />
            </div>
            <div className="font-sans text-xs text-zinc-500 tabular-nums w-12 text-right">
              {formatTime(currentTime)}
            </div>
            <div className="font-sans text-xs text-zinc-700 tabular-nums">
              / {formatTime(duration)}
            </div>
          </div>

          {/* Video element */}
          {src ? (
            <div className="mt-6">
              <video
                ref={videoRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
                className="aspect-video w-full rounded-md bg-zinc-950 border border-zinc-800"
                controls={false}
              />
            </div>
          ) : (
            <div className="mt-6">
              <div className="aspect-video w-full rounded-md bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-sans text-sm text-zinc-600">
                    {isPlaying ? 'Reproduzindo vídeo...' : 'Adicione um arquivo de vídeo'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {!src && (
            <div className="mt-4 text-center font-sans text-xs text-zinc-600 italic">
              Para adicionar mídia, use: src="/media/seu-arquivo.mp4"
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}