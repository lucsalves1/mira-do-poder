import { Ban, Gavel, Hand, MessageSquareWarning, Megaphone } from 'lucide-react';
import { ViolenceStatCard } from './violence-stat-card';

export function InlineStatCards() {
  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <ViolenceStatCard
          icon={MessageSquareWarning}
          value="156"
          label="Ameaças Online"
          description="Casos registrados de intimidação, assédio e ameaças através de redes sociais e plataformas digitais"
          color="red"
        />
        
        <ViolenceStatCard
          icon={Gavel}
          value="89"
          label="Processos Judiciais"
          description="Ações judiciais movidas contra jornalistas como forma de intimidação e censura indireta"
          color="red"
        />
        
        <ViolenceStatCard
          icon={Hand}
          value="43"
          label="Agressões Físicas"
          description="Casos documentados de violência física contra profissionais de imprensa em contextos de cobertura jornalística"
          color="red"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        <ViolenceStatCard
          icon={Ban}
          value="67"
          label="Censura"
          description="Tentativas diretas de censura, incluindo bloqueio de publicações e impedimento de cobertura jornalística"
          color="red"
        />
        
        <ViolenceStatCard
          icon={Megaphone}
          value="124"
          label="Intimidação"
          description="Casos de intimidação psicológica, perseguição e pressões institucionais contra jornalistas"
          color="red"
        />
      </div>
      
      <p className="text-xs text-zinc-500 text-center mt-6">
        Dados referentes ao período de 2023-2024, segundo a FENAJ
      </p>
    </div>
  );
}