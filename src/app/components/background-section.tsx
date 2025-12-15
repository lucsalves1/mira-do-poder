import { ReactNode } from 'react';

interface BackgroundSectionProps {
  children: ReactNode;
  imageUrl: string;
  overlay?: 'dark' | 'red' | 'black';
}

export function BackgroundSection({ children, imageUrl, overlay = 'dark' }: BackgroundSectionProps) {
  const overlayClasses = {
    dark: '',
    red: '',
    black: '',
  };

  return (
    <div 
      className="relative overflow-hidden border-y border-red-950/30"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay removido - imagens 100% visíveis */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}