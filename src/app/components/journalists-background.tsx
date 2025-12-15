import { motion, useScroll, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const journalists = [
  { name: "AJURICABA MONASSA", date: "24/07/2006" },
  { name: "CLÁUDIO MOLEIRO DE SOUZA", date: "12/10/2013" },
  { name: "DJALMA SANTOS DA CONCEIÇÃO", date: "22/05/2015" },
  { name: "DÉCIO SÁ", date: "23/04/2012" },
  { name: "EDNALDO FIGUEIRA", date: "15/06/2011" },
  { name: "EDUARDO CARVALHO", date: "21/11/2012" },
  { name: "EVANY JOSÉ METZKER", date: "18/05/2015" },
  { name: "FRANCISCO GOMES DE MEDEIROS", date: "18/10/2010" },
  { name: "GELSON DOMINGOS", date: "06/11/2011" },
  { name: "GERARDO CEFERINO SERVÍAN CORONEL", date: "04/03/2015" },
  { name: "GLEYDSON CARVALHO", date: "06/08/2015" },
  { name: "ISRAEL GONÇALVES SILVA", date: "10/11/2015" },
  { name: "JOSÉ CÂNDIDO AMORIM PINTO", date: "01/07/2005" },
  { name: "JOSÉ ROBERTO ORNELAS DE LEMOS", date: "11/06/2013" },
  { name: "JOSÉ CARLOS MESQUITA", date: "10/03/1998" },
  { name: "JOÃO VALDECIR DE BORBA", date: "10/03/2016" },
  { name: "LUIZ ANTÔNIO COSTA", date: "19/08/2003" },
  { name: "LUIZ CARLOS BARBOM FILHO", date: "05/05/2007" },
  { name: "LUÍS GUSTAVO DA SILVA", date: "14/06/2017" },
  { name: "MAFALDO BEZERRA GOES", date: "22/02/2013" },
  { name: "MARCOS DE BARROS LEOPOLDO GUERRA", date: "23/12/2014" },
  { name: "MAURÍCIO CAMPOS ROSA", date: "17/08/2016" },
  { name: "MÁRIO RANDOLFO MARQUES LOPES", date: "09/02/2012" },
  { name: "NICANOR LINHARES BATISTA", date: "30/06/2003" },
  { name: "PAULO ROBERTO CARDOSO RODRIGUES", date: "12/02/2012" },
  { name: "PEDRO PALMA", date: "13/02/2014" },
  { name: "RODRIGO NETO DE FARIA", date: "08/03/2013" },
  { name: "SANTIAGO ILÍDIO ANDRADE", date: "10/02/2014" },
  { name: "VALDERLEI CANUTO LEANDRO", date: "01/09/2011" },
  { name: "VALÉRIO LUIZ DE OLIVEIRA", date: "05/07/2012" },
  { name: "WALGNEY ASSIS CARVALHO", date: "14/04/2013" },
  { name: "ÍTALO EDUARDO DINIZ BARROS", date: "13/11/2015" },
  { name: "ARISTEU GUIDA DA SILVA", date: "12/05/1995" },
  { name: "DOM PHILLIPS", date: "05/06/2022" },
  { name: "EDGAR LOPES DE FARIA", date: "29/10/1997" },
  { name: "GIVANILDO OLIVEIRA", date: "07/02/2022" },
  { name: "JAIRO SOUSA", date: "21/06/2018" },
  { name: "JEFFERSON PUREZA LOPES", date: "17/01/2018" },
  { name: "JOSÉ MARIA RAMOS DA SILVA", date: "26/10/2005" },
  { name: "JOSÉ CARLOS ARAÚJO", date: "24/04/2004" },
  { name: "JOÃO MIRANDA DO CARMO", date: "24/07/2016" },
  { name: "MANOEL LEAL DE OLIVEIRA", date: "14/01/1998" },
  { name: "MARCOS BORGES RIBEIRO", date: "01/05/1995" },
  { name: "MARLON DE CARVALHO ARAÚJO", date: "16/08/2018" },
  { name: "REINALDO COUTINHO DA SILVA", date: "29/08/1995" },
  { name: "ROBSON GIORNO", date: "25/05/2019" },
  { name: "ROMÁRIO SILVA BARROS", date: "18/06/2019" },
  { name: "SAMUEL ROMAN", date: "20/04/2004" },
  { name: "SÁVIO BRANDÃO", date: "30/09/2002" },
  { name: "TIM LOPES", date: "02/06/2002" },
  { name: "UELITON BRIZON", date: "16/01/2018" },
  { name: "ZAQUEU DE OLIVEIRA", date: "21/03/1995" },
  { name: "ZEZINHO CAZUZA", date: "13/03/2000" },
  { name: "ÁQUILA BRUNO SILVA", date: "10/08/2020" },
];

// Função para embaralhar array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function JournalistsBackground() {
  const { scrollYProgress } = useScroll();
  const [sectionStarted, setSectionStarted] = useState(false);
  const [currentCycle, setCurrentCycle] = useState(0);
  const [shuffledJournalists, setShuffledJournalists] = useState(journalists);
  const [visibleCount, setVisibleCount] = useState(0);

  // Monitor se a seção de violência está visível
  useEffect(() => {
    const checkSection = () => {
      const section = document.getElementById('violence-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        setSectionStarted(isVisible);
      }
    };

    window.addEventListener('scroll', checkSection);
    checkSection();

    return () => window.removeEventListener('scroll', checkSection);
  }, []);

  // Controle baseado no scroll - tanto para visibilidade quanto para ciclos
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (!sectionStarted) {
        setVisibleCount(0);
        setCurrentCycle(0);
        return;
      }

      // Calcula quantos nomes devem estar visíveis baseado no scroll
      const totalNames = journalists.length;
      const namesToShow = Math.min(
        Math.floor(latest * totalNames * 2),
        totalNames
      );
      
      setVisibleCount(namesToShow);

      // Troca o ciclo (embaralha) a cada 20% de progresso no scroll
      const cycleProgress = latest * 100;
      const newCycle = Math.floor(cycleProgress / 20);
      
      if (newCycle !== currentCycle) {
        setCurrentCycle(newCycle);
        setShuffledJournalists(shuffleArray(journalists));
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, sectionStarted, currentCycle]);

  // Distribui posições para os nomes
  const positions = shuffledJournalists.map((_, index) => {
    const isLeft = index % 2 === 0;
    const verticalPosition = (Math.floor(index / 2)) * 180;
    
    return {
      side: isLeft ? 'left' : 'right',
      top: `${verticalPosition}px`,
      delay: (index * 0.08) % 0.8,
    };
  });

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <AnimatePresence mode="sync">
        {shuffledJournalists.map((journalist, index) => {
          const position = positions[index];
          const isVisible = sectionStarted && index < visibleCount;
          
          return (
            <motion.div
              key={`journalist-${currentCycle}-${index}`}
              className="absolute font-sans text-xs tracking-wide"
              style={{
                top: position.top,
                [position.side]: '20px',
                maxWidth: '200px',
              }}
              initial={{ 
                opacity: 0, 
                x: position.side === 'left' ? -50 : 50,
                scale: 0.9
              }}
              animate={{
                opacity: isVisible ? 0.6 : 0,
                x: isVisible ? 0 : (position.side === 'left' ? -50 : 50),
                scale: isVisible ? 1 : 0.9
              }}
              exit={{ 
                opacity: 0, 
                x: position.side === 'left' ? -50 : 50,
                scale: 0.9
              }}
              transition={{
                duration: 2.5,
                delay: position.delay,
                ease: "easeInOut",
              }}
            >
              <div className={position.side === 'left' ? 'text-left' : 'text-right'}>
                <div className="font-semibold text-zinc-400/70">{journalist.name}</div>
                <div className="mt-0.5 text-[10px] text-zinc-400/70">{journalist.date}</div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}