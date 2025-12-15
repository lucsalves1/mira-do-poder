import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ViolenceStatCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  description?: string;
  color?: 'red' | 'orange' | 'yellow';
}

export function ViolenceStatCard({ 
  icon: Icon, 
  value, 
  label, 
  description,
  color = 'red'
}: ViolenceStatCardProps) {
  const colorClasses = {
    red: {
      border: 'border-red-900/40 hover:border-red-700/60',
      bg: 'bg-zinc-900/60',
      icon: 'text-red-500',
      value: 'text-red-400',
      glow: 'group-hover:shadow-red-900/20'
    },
    orange: {
      border: 'border-orange-900/40 hover:border-orange-700/60',
      bg: 'bg-zinc-900/60',
      icon: 'text-orange-500',
      value: 'text-orange-400',
      glow: 'group-hover:shadow-orange-900/20'
    },
    yellow: {
      border: 'border-yellow-900/40 hover:border-yellow-700/60',
      bg: 'bg-zinc-900/60',
      icon: 'text-yellow-500',
      value: 'text-yellow-400',
      glow: 'group-hover:shadow-yellow-900/20'
    }
  };

  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`group my-8 rounded-lg border ${colors.border} ${colors.bg} backdrop-blur-sm p-6 shadow-lg transition-all ${colors.glow}`}
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 ${colors.icon} transition-transform group-hover:scale-110`}>
          <Icon className="h-8 w-8" />
        </div>
        <div className="flex-1">
          <motion.div 
            className={`mb-1 font-sans text-4xl font-bold ${colors.value}`}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            {value}
          </motion.div>
          <div className="mb-2 font-sans text-base font-semibold text-zinc-300">
            {label}
          </div>
          {description && (
            <div className="font-sans text-sm text-zinc-500 leading-relaxed">
              {description}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
