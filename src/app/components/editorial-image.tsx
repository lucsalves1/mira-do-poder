import { motion } from 'motion/react';

interface EditorialImageProps {
  src: string;
  alt: string;
  caption?: string;
  position?: 'full' | 'left' | 'right';
}

export function EditorialImage({ src, alt, caption, position = 'full' }: EditorialImageProps) {
  const positionClasses = {
    full: 'w-full',
    left: 'md:float-left md:w-1/2 md:mr-8 mb-8',
    right: 'md:float-right md:w-1/2 md:ml-8 mb-8',
  };

  return (
    <motion.figure
      className={`my-12 ${positionClasses[position]}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="overflow-hidden rounded-lg border border-zinc-800/50 bg-zinc-900/30">
        <motion.img
          src={src}
          alt={alt}
          className="h-auto w-full object-cover"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      {caption && (
        <motion.figcaption
          className="mt-4 px-2 font-sans text-sm italic text-zinc-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {caption}
        </motion.figcaption>
      )}
    </motion.figure>
  );
}
