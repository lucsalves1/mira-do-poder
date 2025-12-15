import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

import { MediaPlayer } from "./components/media-player";
import { PullQuote } from "./components/pull-quote";
import { InteractiveDataSection } from "./components/interactive-data-section";
import { ScrollProgress } from "./components/scroll-progress";
import { JournalistsBackground } from "./components/journalists-background";
import { EditorialImage } from "./components/editorial-image";

// Assets
import brokenLensImg from "../assets/5aad49e17e470f3a8d07c5cad9f62c1dd6d58612.png";
import journalistGasMaskImg from "../assets/c41793bd5119455c52be8646b77f406adeda7d75.png";
import journalistThreatImg from "../assets/59ddcb5c87a23d47301eefd9db75a31ba8f3d941.png";
import censorshipCoverImg from "../assets/0a9a03d449592fa2c2d9be7213a6c9862ae0e9a5.png";

export default function App() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100">
      <ScrollProgress />
      <JournalistsBackground />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-800 via-zinc-900 to-zinc-950">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45" 
          style={{
            backgroundImage: `url(${censorshipCoverImg})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/85 to-black"></div>
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="mb-8 font-sans text-5xl font-bold leading-tight text-white md:text-7xl">
              Na Mira do Poder: A Insegurança e a Proteção do Jornalista no Brasil
            </h1>
          </motion.div>
          
          {/* Scroll Down Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <ChevronDown className="h-12 w-12 text-zinc-400 opacity-60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Article */}
      <article className="relative z-10 mx-auto max-w-4xl px-6 py-20">
        <PullQuote>
          &quot;Quando Araripe Macedo era ministro da Aeronáutica, em 1974, o Coronel Baêta, que era o chefe da comunicação social da Aeronáutica, mandou um ofício para a Folha de São Paulo mandando demitir o repórter José Seabra Neto por insubordinação&quot;.
        </PullQuote>

        <div className="prose prose-invert max-w-none">
          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            José Seabra Neto, jornalista brasiliense, respondeu dessa forma ao ser perguntado sobre uma situação marcante de perseguição jornalística que havia passado. Com certo incômodo ao reviver as memórias, ele respirou fundo, inquieto, e continuou: &quot;Claro que a Folha me demitiu, né? Ia fazer o quê? Eu tinha três anos de Folha, eu acho. Se a Folha não me demitisse, tava lascada. Aí eu fui pro Jornal do Brasil, passei três dias, fui demitido. Fui para O Globo, passei uma semana, fui demitido. Fui pro DCI, passei quase um mês, fui demitido&quot;.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            O episódio, ocorrido no auge da Ditadura Militar, revelou uma sequência de portas fechadas que o acompanhou por meses. Hoje anistiado, José revisita a impotência de não conseguir exercer sua profissão por bloqueios impostos pelo regime. Ele perdeu posses, estabilidade e passou por dificuldades financeiras que só começaram a se reverter após o processo de anistia.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            E ele não está sozinho. Quando a pergunta sobre as experiências de perseguição dos jornalistas surgia nas entrevistas desta pesquisa, todos compartilharam histórias que vivenciaram ou de conhecidos que também sofreram assédio moral dentro da profissão. O caso de José Seabra Neto reflete um período vulnerável da comunicação brasileira da década de 70, durante o regime militar, que se alastra até hoje e invade a realidade de tantos jornalistas que denunciam e usam suas vozes para a mudança. Ainda que de maneira diferente, o Brasil continua despreparado para proteger comunicadores como José e segue como ambiente propício para uma perseguição política, mesmo que implícita, que consome a rotina de quem a vive.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Fazer jornalismo no Brasil nunca foi fácil e, nos últimos anos, os desafios se intensificaram notavelmente. Em meio a pressões políticas, processos judiciais, tentativas de censura e ameaças, a profissão exige não apenas apuração rigorosa, mas também estratégias para garantir a continuidade e a segurança do trabalho. Com dados da Federação Nacional dos Jornalistas (FENAJ) e de organizações internacionais que escancaram que a violência contra jornalistas não só cresceu, como mudou de formato ao sair das ruas para as redes e da força bruta da censura para o assédio judicial, torna-se inevitável ignorar o alvo que o jornalista se torna ao investigar casos políticos. Concomitantemente, as ligações à extrema direita lideram o ranking dos agressores e o Estado, que deveria proteger, se esconde atrás de portas trancadas e critérios arbitrários de sigilo.
          </p>
        </div>
      </article>

      {/* Interactive Data Section */}
      <InteractiveDataSection />

      {/* Continue Article */}
      <article className="relative z-10 mx-auto max-w-4xl px-6 py-20">
        <div className="prose prose-invert max-w-none">
          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Mesmo depois da criação da Lei de Acesso à Informação (LAI), em 2011, que prometia abrir as portas dos órgãos públicos, a realidade seguiu se adaptando a favor de quem mais temia a exposição. Dessa forma, com a ascensão da extrema direita ao poder, a transparência desapareceu, dando lugar a orçamentos secretos, emendas parlamentares ocultas e uma série de outras manobras que dificultam intensamente o trabalho de apuração. A comunicação, especialmente quando coloca luz sobre esquemas de corrupção política, não é apenas uma função profissional: é um dos últimos pilares que sustentam a democracia e o direito à informação. Revelar o que se quer manter escondido exige, para além da técnica, uma coragem para enfrentar pressões, ameaças e abusos de poder. Sem garantias reais de segurança, o risco é que a verdade acabe soterrada pelas consequências diretas do abuso de poder.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Assim, compreender e analisar os riscos enfrentados por comunicadores no Brasil é essencial para criar mecanismos de proteção e fortalecimento da liberdade de imprensa, em busca da garantia de que a verdade chegue ao público sem distorções ou omissões impostas pela repressão. O ressurgimento do conservadorismo no poder mostrou, quase imediatamente, que o ataque à comunicação não viria apenas pelo sufocamento institucional da transparência. Ele atravessou o campo cultural com a mesma brutalidade, desmontando aos poucos tudo que não se encaixava na estética ou na moral do novo governo. O que antes era espaço de circulação de ideias — programas culturais, entrevistas, debates, expressões artísticas — passou a ser tratado como ameaça. E, de repente, o que deveria ser um patrimônio público de pluralidade virou um ambiente onde a divergência não cabia.
          </p>
        </div>

        <MediaPlayer
          type="audio"
          title="Roberto Seabra"
          description="Relato sobre cenário político e insegurança no Governo Bolsonaro"
          src="/media/Beto Casa das Palavras.m4a"
        />

        <div className="mb-16 mt-20">
          <h2 className="mb-8 border-l-4 border-red-600 pl-6 font-sans text-3xl font-bold text-white">
            O Papel das Organizações Independentes e a Violência no 'Brasil Profundo'
          </h2>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Nesse contexto de insegurança, surge a Associação Brasileira de Jornalismo Investigativo (Abraji), criada por um grupo de jornalistas brasileiros interessados em trocar experiências, informações e fortalecer a prática da reportagem investigativa. A Abraji nasce como uma associação auto sustentada que também busca preservar a segurança desses profissionais - missão que ganha força com o Programa Tim Lopes, resposta da entidade à violência contra jornalistas no interior do país e homenagem ao repórter assassinado em 2002, cuja morte inspirou sua própria criação. Portanto, quando o Estado falha em garantir a proteção desses profissionais - sobretudo porque muitas das ações coercitivas partem dos próprios agentes políticos -, são as organizações independentes que ganham motivação e relevância para defender repórteres investigativos, monitorar o cenário jornalístico e compreender como essas manobras podem afetar diretamente quem denuncia. A partir dessa visão ampla, essas instituições conseguem acompanhar as mudanças na atmosfera ideológica do país e identificar os momentos em que o ambiente político se torna mais hostil ao trabalho da imprensa.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Segundo o Repórteres Sem Fronteiras, de 2017 a 2023, 10 jornalistas foram assassinados em função do trabalho. Dentre eles, o jornalista britânico Dom Phillips, do The Guardian, durante uma expedição no Vale do Javari que realizava com o indigenista brasileiro Bruno Pereira. Após seis meses de investigação, a RSF registrou 85 casos de ataques contra a imprensa na região desde o assassinato. Ao lado da Abraji, coletivos de apoio à imprensa como a Amazônia Real, Agência Pública, Rede de Jornalistas Livres e o RSF se tornam antro de proteção e preservação da integridade dos profissionais de comunicação, e constatam dados concisos sobre o aumento do assédio moral desde a onda de conservadorismo que foi incitada pela ascensão do governo de Jair Bolsonaro.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Em 2018, ano que teve mais mortes durante a ascensão do bolsonarismo, quatro comunicadores foram assassinados no país. A Abraji passou a investigar a morte dos radialistas Jairo de Sousa, 43, e Jefferson Pureza, 39, ambos alvos de perseguição após denunciarem autoridades municipais envolvidas em corrupção, que incluíam a influência direta de políticos como José Eduardo Alves da Silva (PR) e o ex-prefeito João Batista Gomes Rodrigues nos crimes. As vítimas registraram ameaças antes do homicídio, com denúncias de perseguição violenta que revela a realidade tortuosa do chamado &quot;Brasil profundo&quot;, onde o exercício do jornalismo se torna proporcionalmente mais perigoso quanto mais perto se chega das estruturas locais de poder.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            A vulnerabilidade que tragicamente cerca o jornalismo é explicitada em situações como as de Jairo e Jefferson, figuras essenciais para a sociedade que denunciavam a corrupção do interior do norte brasileiro. Nas entranhas políticas dos municípios afastados das capitais do Brasil, a comunicação é manejada de forma sagaz e perigosa, assim como demonstram as 60 mortes registradas desde 1998 no RSP. As campanhas políticas contornam e manipulam a forma do fazer comunicacional e da disseminação de informações, além de extinguir a liberdade de imprensa dos profissionais que buscam investigar e promover a verdade através do jornalismo. Os relatos trazem evidências das regiões interioranas como destaque de violências contra jornalistas, e o jornalista Marcílio Brandão compartilha como foi sua experiência no agreste de Pernambuco:
          </p>
        </div>

        <MediaPlayer
          type="video"
          title="Marcílio Brandão"
          description="Experiência no agreste de Pernambuco"
          src="/media/Marcilio-brandao3.mp4"
        />

        <div className="mb-16 mt-20">
          <h2 className="mb-8 border-l-4 border-red-600 pl-6 font-sans text-3xl font-bold text-white">
            O Ângulo de 180º: Pressões Internas e Externas na Rotina do Jornalista
          </h2>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Talvez ao ler páginas de um capítulo ou assistir um documentário não seja suficiente para referenciar e pintar a realidade do impacto que a violência velada causa no dia a dia da profissão. O campo comunicacional tem dois ângulos: o externo e o interno. Ambos, somados, formam um ângulo de 180° de pressões e competições que são difíceis de serem superadas sozinhas. A necessidade de produtividade constante, a polarização de opiniões e ter de lidar com as ameaças, como citou Marcílio Brandão.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Após a sequência de violências vivenciadas no agreste, Marcílio revelou o quanto seu dia a dia foi afetado pela intimidação que sofreu com aquele período sombrio. A tentativa de calar a voz de um jornalista deixa marcas que se tornam irreparáveis à saúde mental do profissional e aponta um reflexo da estrutura incongruente e insegura que assola o jornalismo. De acordo com uma análise da Abraji, que lança o projeto Farol Jornalismo em prol de compreender os desafios da área, o diálogo sobre a saúde mental dos jornalistas reconhece a cultura tóxica, a pressão e o desrespeito que circulam nessa profissão. Essa situação se sobressai quando enxergamos a mudança de cenário com o crescimento da extrema direita e de suas formas de manipulação da informação.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Nos últimos anos, o cenário político brasileiro tem sido marcado pelo conservadorismo e pelo que é descrito por Marcílio como &quot;banditismo velado da extrema direita&quot;. Isso cria um ambiente favorável ao avanço de práticas que dificultam a investigação e limitam o engajamento político de jornalistas. Em um contexto em que a corrupção se disfarça sob discursos religiosos e se protege por meio de mecanismos jurídicos, repórteres investigativos que buscam expor esquemas ilícitos enfrentam não apenas barreiras de acesso à informação, mas também riscos diretos à sua segurança física, psicológica e jurídica. Portanto, com o relato de angústia dos comunicadores que lidam com a coerção frequentemente, instaura-se a narrativa de compressão.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Diante desse panorama hostil à produção jornalística voltada à realidade da política nacional, fruto de um cenário de opressão e abuso de poder, surge o questionamento: Quais são os principais riscos enfrentados por jornalistas no Brasil ao expor esquemas de corrupção política, e quais medidas podem ser adotadas para ampliar sua segurança e proteger a integridade de seu trabalho?. Para responder essa pergunta, Roberto Seabra dialoga sobre a necessidade de plataformas públicas e os impedimentos privativos que envolvem o comunicador. Além de jornalista, Roberto é pesquisador, professor e trabalha na Secretaria de Comunicação da Câmara dos Deputados, em Brasília, o antro político.
          </p>
        </div>

        <MediaPlayer
          type="audio"
          title="Roberto Seabra"
          description="Insegurança e problema regional"
          src="/media/Beto insegurança.m4a"
        />

        <div className="prose prose-invert max-w-none">
          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Com escândalos de corrupção e abuso de poder político como parte da rotina brasileira, nesse contexto, comunicadores cumprem um papel fundamental para garantir que a população tenha acesso a informações que normalmente ficariam escondidas nos bastidores do poder. Ao revelar esquemas e enfrentar interesses poderosos, esses profissionais também se tornam alvo de ameaças, perseguições e tentativas de silenciamento. Discutir essa vulnerabilidade é essencial para refletir sobre os limites da liberdade de imprensa no Brasil, a segurança de quem apura e publica essas denúncias, e os obstáculos que surgem quando o jornalismo bate de frente com estruturas corrompidas e revela que a insegurança não é só dos profissionais como também assola a democracia brasileira.
          </p>
        </div>

        <PullQuote>
          &quot;No Brasil de hoje, a violência policial deu um salto imenso. O crime organizado se espalhou e nunca se elegeu tantos bandidos para o Congresso Nacional como hoje. Podemos dizer que fazer jornalismo investigativo hoje, em nosso país, é continuar a correr alto risco de vida. O repórter Paulo Motoryn, do The Intercept Brasil, em Brasília, por exemplo, vem recebendo ameaças de morte desde que publicou uma reportagem sobre um golpista condenado pelo 8 de janeiro, foragido na Argentina&quot;.
        </PullQuote>

        <div className="font-sans text-sm italic text-zinc-500">
          (O jornalista Marcílio Brandão, em entrevista sobre os principais riscos enfrentados por jornalistas investigativos no Brasil ao expor esquemas de corrupção política).
        </div>

        <div className="prose prose-invert max-w-none mt-12">
          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            A falta de proteção jurídica consistente, somada à fragilidade das instituições de fiscalização e a desvalorização da profissão jornalística, alimenta um ciclo em que a violência contra a imprensa não apenas persiste, mas se torna estratégica para a manutenção de interesses escusos. A ausência de penalidades efetivas encoraja novas violações, aprofundando o risco para quem se dedica a informar a sociedade e calando a voz da democracia brasileira.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            O Brasil, esse território em que a política se mistura ao improviso, em que interesses econômicos subterrâneos se infiltram no cotidiano e onde regiões inteiras são dominadas por facções armadas, tornou-se também o lugar onde investigar pode custar mais do que uma carreira. Pode custar a vida.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Em 1988, quando a Constituição Federal foi promulgada, o país parecia inaugurar uma era de luz depois de duas décadas de sombras e de opacidade. Das restrições do Estado Novo de Getúlio Vargas, por exemplo, ou até mesmo das amarras da ditadura militar. Prometeu-se ali a liberdade de imprensa, o livre exercício profissional e a garantia da pluralidade de ideias. Era o grito oficial de que, enfim, o Brasil teria o direito de contar a si mesmo. Mas a distância entre o teórico e o prático (essa distância sempre tão brasileira) logo se mostrou abissal. A Constituição assegurava o direito de informar; a realidade, não.
          </p>
        </div>

        <EditorialImage 
          src={brokenLensImg}
          alt="Lente de câmera quebrada nas mãos de um jornalista, simbolizando a violência contra profissionais de imprensa"
          caption="A violência contra jornalistas deixa marcas físicas e simbólicas: equipamentos destruídos, vidas ameaçadas."
        />

        <div className="mb-16 mt-20">
          <h2 className="mb-8 border-l-4 border-red-600 pl-6 font-sans text-3xl font-bold text-white">
            O Bastidor Ameaçador: Jornalismo de empresa ou de imprensa?
          </h2>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            No imaginário popular, o jornalismo investigativo sempre carregou a aura de credibilidade e gravidade. No Brasil, então, essa percepção se materializou no formato televisivo: reportagens do Fantástico (1973), denúncias do Jornal Nacional (1969) e mergulhos profundos do Globo Repórter (1973). Essas produções se tornaram pontos de referência nacionais, quase como rituais dominicais ou noturnos de revelação pública. Mas essa vitrine luminosa sempre ocultou o bastidor árduo, arriscado e solitário de profissionais que, longe dos estúdios climatizados, vasculham arquivos mofados, encaram chefes de facção, questionam autoridades resistentes e, muitas vezes, caminham sem saber se voltarão.
          </p>
        </div>

        <MediaPlayer
          type="video"
          title="Marcílio Brandão"
          description="A importância do jornalismo investigativo"
          src="/media/Marcilio-brandao1.mp4"
        />

        <div className="prose prose-invert max-w-none">
          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Essa insegurança persiste em uma rotina que se encontra com mais um obstáculo impeditivo ao comunicar: o jornalismo empresarial. O fazer comunicacional se vê aprisionado por múltiplos fatores, como podemos ver ao longo da pesquisa, e um deles é o falso enquadramento neutro que se esgueira na sociedade com pautas vazias e, muitas vezes, enviesadas a favor do capital que sustenta o veículo. Portanto, quando perguntado sobre as diferenças entre cargos jornalísticos e as dificuldades que cercam a profissão, Roberto Seabra comenta:
          </p>
        </div>

        <MediaPlayer
          type="audio"
          title="Roberto Seabra"
          description="Sobre leis e políticas públicas para fortalecer a segurança de jornalistas"
          src="/media/Políticas publicas e segurança.m4a"
        />

        <div className="prose prose-invert max-w-none">
          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            O jornalismo independente mantém relações sólidas com o dever de informar e se fortifica ao reivindicar temas e lutas entendidas pelos conglomerados midiáticos como desnecessárias e parciais. Quando Roberto comenta sobre o modo que as informações chegam para a população e como a coerção é diferente em casos de redes privadas, ele enxerga essa influência como um todo, e exemplifica suas experiências ao lidar com ameaças quando está no serviço público ou em órgãos privados. Enquanto o poder da informação está aprisionado por políticos e pelo capital, a comunicação continua a depender dos coletivos que visam o pacto social da legitimidade.
          </p>
        </div>

        <MediaPlayer
          type="video"
          title="Marcílio Brandão"
          description="O cenário de luta por uma imprensa livre"
          src="/media/Marcilio-brandao4.mp4"
        />

        <div className="prose prose-invert max-w-none">
          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            A discussão sobre a imprensa privada no Brasil esbarra numa realidade que já virou quase um ditado entre jornalistas: não existe liberdade de imprensa, existe liberdade de empresa. E isso não é apenas uma frase de efeito - é um diagnóstico. Como o próprio Roberto Seabra aponta, quando não temos uma mídia pública forte que equilibre o jogo, quem detém a narrativa são os conglomerados privados, guiados por lógicas que ultrapassam a responsabilidade social da comunicação.
          </p>
        </div>

        <MediaPlayer
          type="video"
          title="Marcílio Brandão"
          description="Análise do contexto midiático brasileiro"
          src="/media/Marcilio-brandao2.mp4"
        />

        <div className="prose prose-invert max-w-none">
          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            É nesse cenário que as observações de Luiz Pereira Júnior entram em evidência, com a compreensão que o jornalista transforma o fato em acontecimento a partir de escolhas (o que pautar, quem ouvir, qual voz legitimar) e quando realizado dentro das redações privadas, essas escolhas são atravessadas por interesses empresariais, alinhamentos políticos e, muitas vezes, por uma ideia de neutralidade que não se sustenta na prática. O mito da imparcialidade vira ferramenta de controle, onde o jornalista tenta mediar, mas o capital decide o alcance.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            E é nesse espaço truncado que a informação se molda. O discurso da neutralidade esconde o fato de que toda notícia é uma versão e, nas grandes empresas, essa versão costuma ser a que menos ameaça os interesses de quem financia o próprio veículo. Enquanto isso, nas margens, coletivos, mídias independentes e comunicadores de periferia tentam romper esse ciclo, produzindo narrativas que o mainstream insiste em ignorar. O contraste revela que quando a comunicação é atravessada pelo capital, a realidade que chega ao público deixa de ser apenas o encadeamento legítimo dos fatos, como propõe Pereira Júnior, e passa a ser aquilo que pode circular sem romper acordos tácitos com o poder.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Enquanto o poder da informação está aprisionado por políticos e pelo capital, a comunicação continua a depender dos coletivos que visam o pacto social da legitimidade. Ao entender como a comunicação é desvalorizada, também é possível perceber como as brechas de segurança são tão bem exploradas pela política corrupta. Ainda que o trabalho no jornalismo não seja o mesmo (seja imprensa, redator ou editor), as opressões e os enquadramentos se esgueiram e atacam de forma dilacerante a vida profissional e pessoal do jornalista.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Investigar, no Brasil, é operar dentro de uma fissura permanente: de um lado, o direito público e constitucional ao acesso à informação; do outro, a reação rápida e, às vezes, violenta daqueles que querem enterrá-la. E essa tensão, que deveria existir apenas como força democrática, tornou-se uma disputa física, digital e política. Porque a violência contra jornalistas nunca cessou; apenas mudou de forma.
          </p>
        </div>

        <PullQuote>
          &quot;Lembro, por exemplo, que quando trabalhava na Veja fui expulso de uma fazenda na Paraíba, onde tinha ido fazer reportagem sobre reforma agrária, por um capataz que me colocou uma 12 nas costas e me expulsou até a porteira da fazenda&quot;.
        </PullQuote>

        <div className="font-sans text-sm italic text-zinc-500">
          (Jornalista Geraldo Seabra em entrevista sobre suas experiências de violências com o jornalismo)
        </div>

        <EditorialImage 
          src={journalistGasMaskImg}
          alt="Jornalista com máscara de gás, representando a atmosfera tóxica da profissão"
          caption="Em meio ao fogo cruzado: jornalistas enfrentam ambientes cada vez mais hostis para exercer a profissão."
        />

        <div className="prose prose-invert max-w-none mt-12">
          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            O país registra, ano após ano, episódios que variam entre assassinatos, ameaças explícitas, censura judicial, sequestros de dados, ataques coordenados e desaparecimentos que atravessam décadas sem resposta. Um levantamento da Fenaj (Federação Nacional dos Jornalistas) mostra que, somente no estado de São Paulo, quase 300 ataques a profissionais foram registrados entre 1982 e 2024. Esses números sobrevivem apesar de subnotificações, medo e silêncios forçados.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Se na década de 1980 e início dos 1990 os perigos estavam, sobretudo, nos confrontos físicos, perseguições e pressões diretas, o avanço da tecnologia transformou o campo de batalha. As redes sociais se tornaram praças digitais onde linchamentos públicos ocorrem em minutos. Às ameaças presenciais, somaram-se novas formas de violência: campanhas massivas de desinformação, bots programados para arruinar reputações, manipulação de dados pessoais, deepfakes, vazamentos, stalking, campanhas de ódio dirigidas por grupos políticos ou por milícias digitais organizadas. O ataque ganhou velocidade, estratégia e escala.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Todas essas faces compõem um mosaico que revela uma contradição profunda: o país que constitucionalmente se comprometeu a garantir a liberdade de imprensa é o mesmo país que, na prática, frequentemente sufoca quem tenta exercê-la.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            E a pergunta que deveria nos guiar é mais simples e mais urgente do que parece: o que significa, hoje, tentar descobrir a verdade em um país que tantas vezes parece não suportá-la?.
          </p>
        </div>

        <div className="mb-16 mt-20">
          <h2 className="mb-8 border-l-4 border-red-600 pl-6 font-sans text-3xl font-bold text-white">
            O paradoxo brasileiro e a internacionalidade
          </h2>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            O Brasil vive um paradoxo profundo: é uma das maiores democracias da América Latina em tamanho territorial, população e diversidade cultural; mas figura, sistematicamente, entre os países em que o exercício da profissão jornalística é mais violento e arriscado. Segundo o The Democracy Index 2024, elaborado pela Economist Intelligence Unit com base em cinco fatores (características do processo eleitoral e pluralismo, funcionamento do governo, participação política, cultura política e liberdades civis), o Brasil ocupa a 57ª posição em um ranking que abrange 165 países e dois territórios.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Essa colocação o coloca atrás de vizinhos como Uruguai, Argentina e Suriname, e representa uma queda de seis posições em relação ao ano anterior, influenciada por episódios de polarização política, tensões institucionais e desafios na gestão das redes sociais na esfera pública. Esse recuo não é um dado isolado, mas parte de um movimento mais amplo: nos últimos anos, a avaliação internacional sobre democracia no Brasil tem registrado sinais de deterioração em elementos-chave que sustentam o jornalismo livre e seguro.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Enquanto índices como o Freedom in the World ainda concluem que o país é &quot;livre&quot; em termos de direitos civis e competição eleitoral, eles apontam para crescentes riscos à integridade dos jornalistas e atores da sociedade civil decorrentes de assédios, violência política e desafios na proteção dos direitos fundamentais.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Quando focamos especificamente na liberdade de imprensa, outra dimensão essencial dessa equação democrática, o retrato também é complexo. No Índice Mundial de Liberdade de Imprensa da Repórteres Sem Fronteiras (RSF) de 2025, o Brasil aparece na 63ª posição entre 180 países. Essa pontuação representa uma melhora em relação a anos anteriores, mas ainda está abaixo do ideal e distante das posições ocupadas por democracias consolidadas. Inclusive, houve um salto de 19 posições se compararmos este ano com o ano anterior, e 47 posições desde 2022, no auge do governo Bolsonaro e numa situação pós-pandêmica. Esse ranking reflete não só a capacidade formal dos meios de comunicar, mas também o ambiente sociopolítico em que essa comunicação se desdobra, incluindo concentração de propriedade dos meios, pressões econômicas, hostilidade política e ameaças à integridade dos jornalistas.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            A distribuição geográfica da violência e da insegurança jornalística dentro do próprio Brasil confirma que não se trata apenas de um problema abstrato ou uniformemente espalhado: ele tem cara, forma e endereço. Relatórios recentes apontam que o Sudeste, especialmente o estado de São Paulo, concentra uma proporção relevante de ataques documentados contra profissionais da imprensa, com dezenas de casos de agressões físicas, ameaças e obstruções ao trabalho investigativo. Isso inclui cidades menores onde a presença do Estado é mais frágil e a mídia local mais vulnerável.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Ao mesmo tempo, regiões como Norte e Nordeste também mostram números preocupantes, não apenas em incidentes, mas em padrões de impunidade e insegurança prolongada que alimentam um ciclo de medo e autocensura. No momento em que observarmos o Brasil neste contexto regional, a complexidade do problema fica ainda mais evidente.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            A América Latina é historicamente a região mais perigosa do mundo para jornalistas, mesmo em tempos de relativa paz formal, porque as coberturas que desafiam o poder (crime organizado, corrupção, política local e direitos humanos) muitas vezes se chocam com estruturas que toleram ou incentivam represálias.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Em 2022, por exemplo, estatísticas do Committee to Protect Journalists (CPJ) revelaram que 30 jornalistas e profissionais de mídia foram mortos na região, quase metade do total mundial de 67 assassinatos naquele ano. Este número superou até as mortes registradas em zonas ativas de conflito, como a Ucrânia. Países como México, Guatemala, Honduras, Colômbia e Haiti figuram entre os mais letais: só no início de 2025 a Repórteres Sem Fronteiras (RSF) já registrou pelo menos 13 assassinatos de jornalistas na América Latina, muitos deles ligados diretamente ao exercício da profissão, cobrindo temas sensíveis como corrupção, crime organizado ou temas ambientais.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Nesse mapa continental de perigo, o Brasil desempenha um papel ambíguo. Não lidera o ranking de mortes, ao contrário de México ou Haiti, mas figura de forma persistente entre os países onde a impunidade é mais alta e os riscos, mais difusos e prolongados. Entre 2011 e 2020, um estudo da RSF mostrou que Brasil, Colômbia, México e Honduras concentraram cerca de 80% dos assassinatos de jornalistas na América Latina, com grande parte das vítimas investigando corrupção, crime ou questões políticas locais. Alguns profissionais foram mortos nos seus locais de trabalho, como redações, mas a maioria (58%) foi atacada em casa ou próximo à ela, principalmente no trajeto casa-trabalho.
          </p>
        </div>

        <EditorialImage 
          src={journalistThreatImg}
          alt="Jornalista sob ameaça, representando a insegurança da profissão"
          caption="A sombra da intimidação: jornalistas vivem sob constante pressão e ameaças."
        />

        <div className="mb-16 mt-20">
          <h2 className="mb-8 border-l-4 border-red-600 pl-6 font-sans text-3xl font-bold text-white">
            No Ecossistema do Ódio: A Profissionalização da Desinformação e o Risco Ampliado
          </h2>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Nesse contexto latino-americano e nacional, surgem iniciativas como o Programa de Proteção aos Defensores de Direitos Humanos, Comunicadores e Ambientalistas (PPDDH) no Brasil. É um mecanismo que, em teoria, busca oferecer proteção a profissionais e ativistas que recebem ameaças por suas atividades. O programa, concebido para atender jornalistas, ambientalistas e defensores de direitos humanos em situação de risco, tem como objetivo garantir medidas como apoio jurídico, assistência psicológica, mudanças temporárias de local de trabalho ou residência e outras intervenções emergenciais.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            De acordo com os dados, o PPDDH tem registrado acolhimentos em vários estados com destaque para Maranhão, Bahia, Minas Gerais, Rio de Janeiro e Pará, onde a proporção de defensores acompanhados é mais alta. Isso, por um lado, reflete maior vulnerabilidade e, por outro, maior demanda por proteção. No entanto, especialistas e reportagens internacionais apontam que os mecanismos de proteção em toda a América Latina, inclusive o brasileiro, ainda enfrentam desafios significativos: subfinanciamento, morosidade na implementação das medidas, falta de conscientização entre os beneficiários e inconsistência na aplicação das salvaguardas oferecidas pelos Estados.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Comparado a programas similares na região, como o Mecanismo Federal de Proteção no México ou iniciativas de proteção implementadas por organizações civis na Colômbia, o modelo brasileiro está ainda em fase de consolidação e depende de participação ativa da sociedade civil e apoio político para se tornar mais eficaz. Tal comparação evidencia que, embora existam tentativas institucionalizadas de proteção, o Brasil ainda precisa fortalecer e integrar políticas que enfrentem de forma sustentável os riscos enfrentados pelos jornalistas investigativos.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            A perseguição ao jornalista investigativo no Brasil e no mundo deixou de ser um fenômeno exclusivamente físico. A violência mudou de lugar: migrou das ruas para as telas. Hoje, antes mesmo de um repórter colocar os pés em campo, ele já pode ser alvo de ataques digitais massivos, muitas vezes anônimos, fabricados e distribuídos em escala industrial. As redes sociais criaram um ecossistema onde a desinformação se profissionalizou, e o jornalista, antes visto como mediador da verdade, tornou-se alvo preferencial de campanhas de ódio que buscam desestabilizar não apenas sua credibilidade, mas sua integridade emocional, sua vida privada e até suas relações familiares.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Contudo, esse movimento se alastra desde a ditadura e se prova como mais uma das marcas deixadas pela repressão na comunicação brasileira. A lacuna libertária foi deixada aos ventos e foi apossada pelo controle do capital. Aqueles que se manifestam contra não detêm o poder necessário para alavancar um discurso que surge contra a desinformação e preza pelo compromisso social e profissional com a verdade.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Em entrevista, o jornalista Geraldo Seabra comentou que, após a democratização, muitos veículos abandonaram a independência que tinham em relação ao governo ou passaram a fazer autocensura, que é o pior dos cenários. Ele afirmou que &quot;Publica-se hoje o que a empresa considera do seu interesse ou do interesse de quem lhe sustenta, deturpando ou produzindo fake news para os seus contrários&quot;. Ele exemplificou: &quot;Veja-se, por exemplo, a posição de muitos jornais em apoio a Bolsonaro mesmo depois dele condenado e preso&quot;.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            A proliferação de fake news não é apenas um problema informativo, mas um instrumento de guerra. Em diversas coberturas delicadas, jornalistas têm suas reportagens imediatamente distorcidas, remixadas e reapresentadas em forma de mentira deliberada. Isso, inclusive, não acontece só na área da informação: Nas últimas eleições da Argentina, que consagraram Javier Milei como presidente, a proliferação de vídeos falsos feitos por inteligência artificial e informações incorretas permearam as mídias internacionais, para desestabilizar seus opositores.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Além disso, as eleições de 2024 dos Estados Unidos, que reafirmaram o poderio direitista na nação com a vitória de Donald Trump, foi muito marcada pela guerra internética e de comunicação entre os partidos e as figuras políticas. Essas manipulações são distribuídas por exércitos de perfis falsos, bots automatizados e contas coordenadas, que fabricam consensos artificiais e constroem narrativas paralelas com velocidade impossível para qualquer redação acompanhar. Essa máquina de desinformação não tem o objetivo de refutar fatos, mas de produzir ruído suficiente para tornar qualquer verdade indistinguível.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Com a popularização das tecnologias de inteligência artificial generativa, uma nova camada de risco emergiu: os deepfakes. Se antes jornalistas eram atacados com montagens amadoras, agora enfrentam vídeos e áudios hiper-realistas, capazes de simular declarações, comportamentos ou crimes jamais cometidos por essas pessoas. Um jornalista pode, de uma hora para outra, aparecer em um vídeo que nunca gravou, dizendo algo que nunca disse, em um contexto que jamais viveu. Essa tecnologia é particularmente cruel porque, mesmo após desmentidos, o dano já está feito: a dúvida permanece, a reputação é arranhada e a circulação do conteúdo original dificilmente é revertida. O objetivo, portanto, não é apenas atacar: é corromper a confiança pública no próprio conceito de realidade.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Outro fenômeno que se intensificou é o doxxing, prática de expor dados pessoais dos jornalistas (como endereço, CPF e parentes) como forma de intimidação. Muitas dessas informações são vazadas deliberadamente em grupos fechados de Telegram - uma plataforma particularmente conhecida por polêmicas que envolvem falta de moderação de atividades ilegais e sem a famosa &quot;criptografia de ponta a ponta&quot; utilizada pelo WhatsApp, para garantir segurança -, fóruns clandestinos ou redes de apoio a figuras políticas e empresariais que querem silenciar investigações. Essa exposição cria um risco concreto para o profissional, que passa a viver sob tensão permanente, revendo rotas, alterando rotinas e às vezes até sendo forçado a deixar o estado ou o país. A violência digital, assim, transborda para o mundo físico, desfazendo a fronteira entre ameaça virtual e ataque real.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            As campanhas de ódio completam esse ecossistema tóxico. Em alguns casos, elas não são espontâneas nem orgânicas: pesquisadores identificam padrões de organização e comportamento coordenado entre contas falsas e influenciadores reais. Esse cenário motivou a criação de iniciativas públicas de enfrentamento. Uma das mais relevantes é a Campanha Nacional de Enfrentamento ao Discurso de Ódio no Brasil, conduzida pelo Ministério dos Direitos Humanos e da Cidadania (MDHC). Lançada com o slogan &quot;Discurso de ódio não é opinião&quot;, a campanha busca conscientizar a sociedade de que liberdade de expressão tem limites legais quando se transforma em violência, perseguição ou discriminação; e que o ódio disseminado nas redes pode desencadear crimes graves, inclusive contra jornalistas.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Em 2023, o ministério entregou o Relatório de Recomendações para o Enfrentamento ao Discurso de Ódio e ao Extremismo no Brasil, produzido por um grupo de trabalho instituído pelo ex-ministro Silvio Almeida, cargo hoje ocupado por Macaé Evaristo. O documento apresenta diagnóstico, diretrizes e recomendações estratégicas para políticas públicas que possam conter o avanço do extremismo digital e fortalecer a proteção de comunicadores e defensores de direitos.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Nesse ambiente de superexposição e beligerância digital, o ataque ao jornalista se torna público, privado, simultâneo e contínuo, difícil de combater porque é fluido, volátil e muitas vezes protegido por anonimato. Não se restringe ao campo simbólico - como o explicado pelo filósofo e sociólogo Pierre Bourdieu em sua obra &quot;As Formas do Capital&quot; (1986), onde ele justifica que é um espaço de disputas sociais, luta pelo poder e reconhecimento. - Envolve, também, a judicialização frágil ou abusiva, com ações estratégicas (SLAPPs), que têm como objetivo impedir, restringir ou penalizar a participação pública e são usadas para intimidar profissionais, além de tentar silenciar investigações.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Comportamentos coordenados nas redes transformam processos em instrumentos de humilhação e perseguição pública, ampliando a pressão psicológica sobre o profissional e reforçando a tentativa de minar sua credibilidade. O resultado é um tipo de perseguição que combina tecnologia, política e violência simbólica - outro termo justificado por Bourdieu. Não é preciso tocar no jornalista para machucá-lo: basta desestabilizar sua imagem, corroer sua credibilidade, invadir sua privacidade, sequestrar sua narrativa e transformá-lo em alvo de uma guerra cultural e estrutural. É nessa nova batalha digital que, a partir da disseminação de ódio, algoritmos recompensam a violência e políticas públicas tentam correr atrás de uma máquina que nunca dorme.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Se a violência contra jornalistas no Brasil assumiu um caráter estrutural, as respostas institucionais também precisam ultrapassar o improviso. Relatórios e análises produzidos por organizações como a Repórteres Sem Fronteiras (RSF) e a UNESCO apontam que países que conseguiram reduzir ataques à imprensa investiram em políticas contínuas, integradas e acompanhadas pelo Estado, e não em ações isoladas acionadas apenas em momentos de crise. O Brasil, que aparece em posições intermediárias no Ranking Mundial da Liberdade de Imprensa da RSF, mostra sinais de recuperação recente após anos de deterioração, mas ainda opera de forma fragmentada, com programas que pouco dialogam entre si, baixa integração federativa e ausência de um sistema nacional de monitoramento permanente da violência contra comunicadores.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Um dos eixos centrais dessa resposta institucional é o Programa de Proteção aos Defensores de Direitos Humanos, Comunicadores e Ambientalistas (PPDDH), vinculado ao Ministério dos Direitos Humanos e da Cidadania. O programa existe como mecanismo formal de proteção a pessoas ameaçadas em razão de sua atuação profissional ou política, incluindo jornalistas que cobrem temas sensíveis como crimes ambientais, conflitos fundiários, milícias, corrupção municipal e violações de direitos humanos. Dados oficiais do próprio ministério indicam que mais de mil defensores e comunicadores estão atualmente sob acompanhamento do programa, com maior concentração de casos nas regiões Norte e Nordeste do país, territórios historicamente marcados por disputas agrárias, violência política e presença frágil do Estado.
          </p>
        </div>

        <MediaPlayer
          type="audio"
          title="Roberto Seabra"
          description="Caso de assédio moral na TV Câmara"
          src="/media/Assédio.m4a"
        />

        <div className="prose prose-invert max-w-none">
          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Ainda assim, avaliações feitas por especialistas, organizações da sociedade civil e reportagens nacionais e internacionais apontam limites estruturais do PPDDH. Entre eles, estão a dependência de convênios estaduais, a desigualdade na implementação das medidas de proteção e a dificuldade de resposta rápida em situações emergenciais. Em países da América Latina com histórico semelhante de violência contra jornalistas, como a Colômbia, programas de proteção mais robustos e com maior institucionalização demonstram que a existência de um mecanismo formal não é suficiente sem orçamento adequado, coordenação interinstitucional e vontade política constante.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Paralelamente à violência física e às ameaças diretas, a perseguição ao jornalismo investigativo passou a se expressar de forma cada vez mais intensa no ambiente digital. Relatórios da Repórteres Sem Fronteiras documentam como a desinformação e os ataques coordenados nas redes sociais se tornaram ferramentas recorrentes para intimidar jornalistas, especialmente aqueles que investigam corrupção, crime organizado e estruturas de poder local. No Brasil, a entidade aponta que campanhas de difamação, ameaças virtuais e tentativas de descredibilização pública têm sido utilizadas como estratégia de silenciamento, muitas vezes com repercussões diretas na segurança física e emocional dos profissionais.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Esse cenário não é exclusivo do Brasil. Um relatório recente da UNESCO sobre jornalistas ambientais revelou que centenas de profissionais e veículos que cobrem temas ligados ao meio ambiente sofreram ataques, ameaças ou assédio em razão de seu trabalho ao longo dos últimos anos. A organização alerta que a desinformação, especialmente em temas sensíveis como mudanças climáticas, exploração de recursos naturais e territórios indígenas, amplia a hostilidade contra jornalistas e enfraquece o debate público informado.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            No campo institucional, o Estado brasileiro deu alguns passos no reconhecimento da gravidade do problema. A Campanha Nacional de Enfrentamento ao Discurso de Ódio, lançada pelo Ministério dos Direitos Humanos e da Cidadania, reforça a noção de que discurso de ódio não se confunde com liberdade de expressão e pode desencadear outros crimes, inclusive contra jornalistas. Em 2023, o ministério também publicou um Relatório de Recomendações para o Enfrentamento ao Discurso de Ódio e ao Extremismo no Brasil, elaborado por um grupo de trabalho intersetorial, que propõe diretrizes como monitoramento contínuo, campanhas educativas, articulação com o Judiciário e fortalecimento de canais de denúncia.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Apesar dessas iniciativas, especialistas apontam que a resposta estatal ainda é insuficiente diante da complexidade do problema. A violência contra jornalistas no Brasil não se manifesta apenas como exceção ou episódio isolado, mas como parte de um ambiente estrutural de hostilidade à imprensa, alimentado por polarização política, uso estratégico da desinformação e altos índices de impunidade. A ausência de um observatório federal com dados abertos e sistematizados sobre ataques à imprensa faz com que grande parte do mapeamento da violência dependa de organizações independentes, como a Abraji, a RSF e coletivos jornalísticos.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            Nesse vácuo institucional, iniciativas da sociedade civil têm cumprido um papel fundamental. Organizações como a Abraji, a RSF e redes de jornalistas independentes oferecem treinamentos, produzem relatórios, acolhem denúncias e criam redes de apoio que ajudam a reduzir o isolamento de profissionais que atuam em regiões de risco. Embora essas ações não substituam políticas públicas de Estado, elas demonstram que a proteção ao jornalismo também passa por solidariedade profissional, circulação de informação e fortalecimento coletivo.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            A história recente do Brasil demonstra que o enfraquecimento da imprensa nunca ocorre de forma abrupta. Ele se instala aos poucos, por meio de intimidações normalizadas, ataques sem punição e silêncios forçados. Proteger jornalistas, portanto, não é uma demanda corporativa, mas uma condição para a própria democracia. Trata-se de garantir que o direito à informação não seja corroído pela violência, pela desinformação e pelo medo. Em um país que já experimentou o apagamento institucional da verdade, proteger quem investiga é impedir que esse passado se repita sob novas formas.
          </p>

          <p className="font-serif text-lg leading-relaxed text-zinc-300">
            A segurança da credibilidade, portanto, não existe. Quando analisamos os relatos de jornalistas sobre a violência na profissão, observamos um padrão que os importuna há tempos. Seja com a perseguição em cargos de redes privadas ao impedir um profissional de exercer seu ofício, com ameaças diretas em locais de trabalho, ligações telefônicas para amedrontar, uso de armas de fogo para coagir, assassinatos e desaparecimentos ou com o recurso mais novo: as redes sociais e a manipulação da informação. Há uma guerra um tanto quanto silenciosa — mesmo que estrondosamente violenta — sendo movida contra a comunicação legítima que não iniciou recentemente, mas que com o avanço político da extrema direita têm inserido o jornalismo em um cenário cada vez mais próximo ao de 64.
          </p>
        </div>
      </article>
    </div>
  );
}
