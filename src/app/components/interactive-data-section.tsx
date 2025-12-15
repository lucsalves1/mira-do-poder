import { useState } from 'react';
import { motion } from 'motion/react';

export function InteractiveDataSection() {
  return (
    <div 
      id="violence-section"
      className="relative my-20 py-20"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-sans text-3xl font-bold text-white">
            Violência Contra Jornalistas no Brasil
          </h2>
          <p className="font-sans text-zinc-400">
            Panorama da situação em números
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <StatCard
            value="300"
            label="Ataques registrados"
            sublabel="São Paulo (1982-2024)"
            source="Fenaj"
            delay={0.1}
          />
          <StatCard
            value="60"
            label="Mortes documentadas"
            sublabel="Desde 1998"
            source="RSF"
            delay={0.2}
          />
          <StatCard
            value="10"
            label="Jornalistas assassinados em função do trabalho"
            sublabel="2017-2023"
            source="RSF"
            delay={0.3}
          />
          <StatCard
            value="63º"
            label="Ranking de liberdade"
            sublabel="Entre 180 países (2025)"
            source="RSF"
            delay={0.4}
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ value, label, sublabel, source, delay }: { 
  value: string; 
  label: string; 
  sublabel: string;
  source: string;
  delay: number;
}) {
  return (
    <motion.div 
      className="group cursor-pointer rounded-lg border border-red-900/40 bg-zinc-900/40 backdrop-blur-sm p-8 shadow-sm transition-all hover:border-red-700/60 hover:bg-zinc-800/60 hover:shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
    >
      <motion.div 
        className="mb-2 font-sans text-5xl font-bold text-red-500"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, type: "spring" }}
      >
        {value}
      </motion.div>
      <div className="mb-1 font-sans text-base font-medium text-zinc-300">{label}</div>
      <div className="mb-2 font-sans text-sm text-zinc-500">{sublabel}</div>
      <div className="mt-4 pt-3 border-t border-zinc-800 font-sans text-xs text-zinc-600">
        Fonte: {source}
      </div>
    </motion.div>
  );
}