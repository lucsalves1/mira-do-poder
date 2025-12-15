import { motion } from 'motion/react';

interface InlineStatHighlightProps {
  value: string;
  label: string;
  description: string;
}

export function InlineStatHighlight({ value, label, description }: InlineStatHighlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-8 mx-auto max-w-2xl"
    >
      <div className="relative overflow-hidden rounded-xl border border-red-900/40 bg-gradient-to-br from-red-950/30 via-zinc-900/60 to-zinc-950/80 p-6 backdrop-blur-sm">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10 opacity-50"></div>
        
        <div className="relative flex items-center gap-6">
          {/* Value section */}
          <div className="flex-shrink-0">
            <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-red-600/20 backdrop-blur-sm border border-red-500/30">
              <span className="font-sans text-3xl font-bold text-red-400">
                {value}
              </span>
            </div>
          </div>
          
          {/* Text section */}
          <div className="flex-1 min-w-0">
            <h3 className="font-sans text-xl font-bold text-white mb-1">
              {label}
            </h3>
            <p className="font-sans text-sm text-zinc-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        {/* Decorative accent */}
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-red-600/10 blur-2xl"></div>
        <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-red-600/10 blur-2xl"></div>
      </div>
    </motion.div>
  );
}
