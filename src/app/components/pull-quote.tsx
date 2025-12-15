import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface PullQuoteProps {
  children: React.ReactNode;
}

export function PullQuote({ children }: PullQuoteProps) {
  return (
    <motion.div 
      className="my-16 border-l-4 border-red-600 bg-red-950/20 py-8 pl-12 pr-8 rounded-r-lg"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <Quote className="mb-4 h-8 w-8 text-red-600/40" />
      </motion.div>
      <div className="font-serif text-xl italic leading-relaxed text-zinc-300">
        {children}
      </div>
    </motion.div>
  );
}