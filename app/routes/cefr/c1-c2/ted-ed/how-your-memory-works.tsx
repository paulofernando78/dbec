import { Whiteboard } from "@/components/content/Whiteboard";
import { PageSections } from "@/components/content/PageSections";
import { Section } from "@/components/content/Section";
import { Card } from "@/components/ui/Card";
import { Line } from "@/components/content/Line";
import { Paragraph } from "@/components/content/Paragraph";
import { Carousel } from "@/components/ui/Carousel";
import { Guess } from "@/features/exercises/Guess";
import { Radio } from "@/features/exercises/Radio";
import { FillInTheBlanks } from "@/features/exercises/FillInTheBlanks";

import { List } from "@/components/content/List";
import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { content, portuguese } from "@/helpers/content";
import { Collapsible } from "@/components/content/Collapsible";

export const metadata = {
  title: "Advanced | How Your Memory Works",
  description:
    "Advanced listening and discussion practice based on a TED-Ed video about memory, forgetting, and how the brain stores information.",
};

export const script = [
  {
    "en": "Thank you to brilliant dot org for supporting PBS Digital Studios.",
    "pt": "Agradecemos à brilliant.org pelo apoio ao PBS Digital Studios."
  },
  {
    "en": "Sherlock Holmes, the legendary detective, had a theory that the brain is like an attic",
    "pt": "Sherlock Holmes, o lendário detetive, tinha uma teoria de que o cérebro é como um sótão"
  },
  {
    "en": "where a person can only store a limited amount of memories.",
    "pt": "onde uma pessoa só pode armazenar uma quantidade limitada de memórias.  O"
  },
  {
    "en": "Dr. Watson once told him that the Earth travels around the sun, duh, to which Holmes replied,",
    "pt": "Dr. Watson disse-lhe certa vez que a Terra gira em torno do Sol, ora, ao que Holmes respondeu:"
  },
  {
    "en": "“Now that I do know it I shall do my best to forget it.”",
    "pt": "\"Agora que sei disso, farei o possível para esquecer\"."
  },
  {
    "en": "Holmes figured, clutter your attic with random facts and trivia, and you won’t have room",
    "pt": "Holmes concluiu que, se você encher seu sótão com fatos aleatórios e trivialidades, não terá espaço"
  },
  {
    "en": "for the things that matter, like identifying the tiny differences between lethal poisons.",
    "pt": "para as coisas que importam, como identificar as pequenas diferenças entre venenos letais."
  },
  {
    "en": "Was Holmes right?",
    "pt": "Holmes estava certo?"
  },
  {
    "en": "Is our memory limited, like the storage capacity of a computer?",
    "pt": "Será que nossa memória é limitada, como a capacidade de armazenamento de um computador?"
  },
  {
    "en": "Or is our memory unlimited?",
    "pt": "Ou será que nossa memória é ilimitada?"
  },
  {
    "en": "And if we did have perfect memory, what would life be like if you never forgot anything?",
    "pt": "E se tivéssemos memória perfeita, como seria a vida se nunca nos esquecêssemos de nada?"
  },
  {
    "en": "[OPEN]",
    "pt": "[ABERTO]"
  },
  {
    "en": "The animated film Inside Out depicted memories as glowing spheres stacked in the brain, like",
    "pt": "O filme de animação Divertida Mente retratava as memórias como esferas brilhantes empilhadas no cérebro, como"
  },
  {
    "en": "books in a library.",
    "pt": "livros em uma biblioteca."
  },
  {
    "en": "But the reality is a little more complicated.",
    "pt": "Mas a realidade é um pouco mais complicada."
  },
  {
    "en": "There is no one place in the brain that serves as our memory bank.",
    "pt": "Não existe um único local no cérebro que funcione como nosso banco de memórias."
  },
  {
    "en": "Instead, individual memories are scattered all over the brain.",
    "pt": "Em vez disso, as memórias individuais ficam espalhadas por todo o cérebro."
  },
  {
    "en": "Many brain cells, in several different regions, work together to make one memory.",
    "pt": "Muitas células cerebrais, em diversas regiões diferentes, trabalham juntas para formar uma memória."
  },
  {
    "en": "For example, a memory of eating grandma’s apple pie might involve some brain cells to",
    "pt": "Por exemplo, a lembrança de comer a torta de maçã da vovó pode envolver algumas células cerebrais para"
  },
  {
    "en": "help you remember what the pie looked like, others to remember the smell of the cinnamon,",
    "pt": "ajudar a lembrar a aparência da torta, outras para lembrar o cheiro da canela"
  },
  {
    "en": "and even cells to remember the delicious taste – just to name a few.",
    "pt": "e até mesmo células para lembrar o sabor delicioso – só para citar alguns exemplos."
  },
  {
    "en": "In reality, though, a memory isn’t a physical thing that we can find in any given brain",
    "pt": "Na realidade, porém, uma memória não é algo físico que possamos encontrar em qualquer célula cerebral específica"
  },
  {
    "en": "cell.",
    "pt": "."
  },
  {
    "en": "It’s an action, not an object.",
    "pt": "É uma ação, não um objeto."
  },
  {
    "en": "Think of baseball fans doing “the wave”: no single fan IS the wave, the magic only",
    "pt": "Imagine torcedores de beisebol fazendo \"a onda\": nenhum torcedor sozinho É a onda, a mágica só"
  },
  {
    "en": "happens when all the fans are together, doing their thing in a specific order.",
    "pt": "acontece quando todos os torcedores estão juntos, fazendo o que fazem em uma ordem específica."
  },
  {
    "en": "In the same way, a memory only happens when many connected neurons fire in a specific",
    "pt": "Da mesma forma, uma memória só ocorre quando muitos neurônios conectados disparam em um"
  },
  {
    "en": "pattern.",
    "pt": "padrão específico."
  },
  {
    "en": "And because the same cells can fire in many unique patterns, one group of neurons can",
    "pt": "E como as mesmas células podem disparar em muitos padrões únicos, um grupo de neurônios pode"
  },
  {
    "en": "encode multiple memories.",
    "pt": "codificar múltiplas memórias."
  },
  {
    "en": "This increases the memory storage capacity of the brain.",
    "pt": "Isso aumenta a capacidade de armazenamento de memória do cérebro.  Bem"
  },
  {
    "en": "Buried deep in the middle of the brain we find a group of cells shaped like a seahorse,",
    "pt": "no centro do cérebro, encontramos um grupo de células com formato semelhante ao de um cavalo-marinho, razão pela qual os"
  },
  {
    "en": "which is why 18th century scientists named this bit the ‘hippocampus.’",
    "pt": "cientistas do século XVIII deram a essa parte o nome de \"hipocampo\"."
  },
  {
    "en": "Without your seahorse, you might never remember.",
    "pt": "Sem o seu cavalo-marinho, você talvez nunca se lembrasse."
  },
  {
    "en": "We owe a lot of our understanding of memories to one famous patient, known for years only",
    "pt": "Devemos muito da nossa compreensão das memórias a um paciente famoso, conhecido durante anos apenas"
  },
  {
    "en": "by his initials, H.M.",
    "pt": "pelas suas iniciais, H.M."
  },
  {
    "en": "In 1953, H.M. underwent a surgery for epilepsy which demolished most of his hippocampus,",
    "pt": "Em 1953, S.M.  Ele foi submetido a uma cirurgia para epilepsia que destruiu a maior parte do seu hipocampo"
  },
  {
    "en": "and for the rest of his life, he exhibited a severe type of amnesia where he was unable",
    "pt": "e, pelo resto da vida, apresentou um tipo grave de amnésia, na qual era incapaz"
  },
  {
    "en": "to form new memories of facts or events, but, he was still able to remember things he had",
    "pt": "de formar novas memórias de fatos ou eventos, embora ainda conseguisse se lembrar de coisas que havia"
  },
  {
    "en": "learned before the surgery.",
    "pt": "aprendido antes da cirurgia."
  },
  {
    "en": "This showed us that the hippocampus is a key to making memories, but that it isn’t where",
    "pt": "Isso nos mostrou que o hipocampo é fundamental para a formação de memórias, mas não é onde as"
  },
  {
    "en": "memories are stored.",
    "pt": "memórias são armazenadas."
  },
  {
    "en": "So how do experiences become memories?",
    "pt": "Então, como as experiências se transformam em memórias?"
  },
  {
    "en": "If we look inside the brain of a mouse in a maze, we could",
    "pt": "Se observarmos o interior do cérebro de um rato em um labirinto, poderíamos"
  },
  {
    "en": "draw a kind of map, showing which brain cells are active as the mouse experiences something",
    "pt": "desenhar uma espécie de mapa, mostrando quais células cerebrais estão ativas enquanto o rato vivencia algo"
  },
  {
    "en": "[mouse in maze].",
    "pt": "[rato no labirinto]."
  },
  {
    "en": "Later, we would see the mouse's brain cells firing in the same",
    "pt": "Mais tarde, veríamos as células cerebrais do rato disparando nos mesmos"
  },
  {
    "en": "patterns, replaying the experience in fast forward, over and over,",
    "pt": "padrões, reproduzindo a experiência em alta velocidade , repetidamente, para"
  },
  {
    "en": "backwards and forwards, to make the connections between cells stronger.",
    "pt": "trás e para frente, a fim de fortalecer as conexões entre as células."
  },
  {
    "en": "This is called consolidation, and it’s how animals - including humans - commit new memories",
    "pt": "Isso se chama consolidação, e é assim que os animais – incluindo os humanos – fixam novas memórias"
  },
  {
    "en": "to long-term storage.",
    "pt": "no armazenamento de longo prazo."
  },
  {
    "en": "Days or weeks later, a smell might trigger this same pattern of cells nerve firing in",
    "pt": "Dias ou semanas depois, um cheiro pode desencadear esse mesmo padrão de ativação de neurônios"
  },
  {
    "en": "the mouse brain, a recall of the maze memories - just like smelling cinnamon might trigger",
    "pt": "no cérebro do rato, uma recordação das memórias do labirinto - assim como o cheiro de canela pode despertar"
  },
  {
    "en": "memories of grandma for you.",
    "pt": "memórias da sua avó."
  },
  {
    "en": "But the brain’s way of creating memories isn’t foolproof.",
    "pt": "Mas a forma como o cérebro cria memórias não é infalível."
  },
  {
    "en": "Sometimes, our mental replay of something we only imagined can feel as vivid as a real",
    "pt": "Às vezes, a nossa repetição mental de algo que apenas imaginamos pode parecer tão vívida quanto uma"
  },
  {
    "en": "experience.",
    "pt": "experiência real."
  },
  {
    "en": "If you picture all the sights, smells, and sounds of a crime scene from someone’s description,",
    "pt": "Se você imaginar todas as imagens, cheiros e sons de uma cena de crime a partir da descrição de alguém,"
  },
  {
    "en": "you activate similar brain networks as if you had really been there.",
    "pt": "você ativa redes cerebrais semelhantes às que teria se estivesse realmente lá."
  },
  {
    "en": "The more you replay the scene in your mind, the more it feels like a real memory.",
    "pt": "Quanto mais você repassa a cena em sua mente, mais ela parece uma lembrança real.  É por isso que"
  },
  {
    "en": "That’s why a detective who asks leading questions can inadvertently plant a false",
    "pt": "um detetive que faz perguntas tendenciosas pode, inadvertidamente, implantar uma falsa"
  },
  {
    "en": "memory in a witness.",
    "pt": "memória em uma testemunha."
  },
  {
    "en": "We’re able to remember a lot, but we forget even more.",
    "pt": "Somos capazes de nos lembrar de muita coisa, mas esquecemos ainda mais."
  },
  {
    "en": "Some forgetting just happens, but our brains also forget on purpose.",
    "pt": "Às vezes, o esquecimento simplesmente acontece, mas nosso cérebro também esquece de propósito."
  },
  {
    "en": "We have at least three different ways of forgetting.",
    "pt": "Temos pelo menos três maneiras diferentes de esquecer."
  },
  {
    "en": "The first is what happens when a memory fades over time, so-called “passive oblivescence”",
    "pt": "A primeira é o que acontece quando uma memória se desvanece com o tempo, a chamada “oblivescência passiva”"
  },
  {
    "en": "(a term you will probably forget).",
    "pt": "(um termo que você provavelmente esquecerá)."
  },
  {
    "en": "This may happen because the connections between brain cells gradually weaken over time; or",
    "pt": "Isso pode acontecer porque as conexões entre as células cerebrais enfraquecem gradualmente com o tempo;  Ou"
  },
  {
    "en": "perhaps the memory is still there, but you might lose the triggers–sights, sounds,",
    "pt": "talvez a memória ainda esteja lá, mas você pode perder os gatilhos – imagens, sons,"
  },
  {
    "en": "smells–you need to retrieve it.",
    "pt": "cheiros – necessários para recuperá-la."
  },
  {
    "en": "Another idea says memories could theoretically last forever, but when the same neurons get",
    "pt": "Outra ideia diz que as memórias poderiam, teoricamente, durar para sempre, mas quando os mesmos neurônios são"
  },
  {
    "en": "used in other memories, this “interference” disrupts the original memory.",
    "pt": "usados ​​em outras memórias, essa \"interferência\" interrompe a memória original."
  },
  {
    "en": "This slow fade type of forgetting happens to all of us, eventually.",
    "pt": "Esse tipo de esquecimento gradual acontece com todos nós, eventualmente."
  },
  {
    "en": "A second type of forgetting–targeted forgetting–happens at night while we sleep.",
    "pt": "Um segundo tipo de esquecimento – o esquecimento direcionado – ocorre à noite, enquanto dormimos."
  },
  {
    "en": "This is when we clear out random, useless tidbits of information we’ve learned during",
    "pt": "É nesse momento que descartamos informações aleatórias e inúteis que aprendemos durante"
  },
  {
    "en": "the day and erase outdated memories.",
    "pt": "o dia e apagamos memórias obsoletas."
  },
  {
    "en": "For example, if yesterday, you thought Earth was, say, a flat disk supported by three elephants,",
    "pt": "Por exemplo, se ontem você pensava que a Terra era, digamos, um disco plano sustentado por três elefantes,"
  },
  {
    "en": "and today you learned that the Earth is round, your brain needs to purge one of these contradictory",
    "pt": "e hoje descobriu que a Terra é redonda, seu cérebro precisa se livrar de uma dessas"
  },
  {
    "en": "ideas - hopefully, the one about the elephants.",
    "pt": "ideias contraditórias — de preferência, a dos elefantes."
  },
  {
    "en": "In certain stages of sleep, we trim and prune connections between cells and erase unneeded",
    "pt": "Em certos estágios do sono, aparamos e eliminamos conexões entre as células e apagamos"
  },
  {
    "en": "memory circuits.",
    "pt": "circuitos de memória desnecessários."
  },
  {
    "en": "The third type of forgetting is motivated forgetting, something we all wish we could",
    "pt": "O terceiro tipo de esquecimento é o esquecimento motivado, algo que todos nós gostaríamos de poder"
  },
  {
    "en": "do for one thing or another.",
    "pt": "fazer por um motivo ou outro."
  },
  {
    "en": "This is when a person intentionally suppresses unpleasant memories.",
    "pt": "Isso ocorre quando uma pessoa suprime intencionalmente memórias desagradáveis."
  },
  {
    "en": "Forgetting on purpose is a way to regulate our emotions and to focus on what needs to",
    "pt": "Esquecer propositalmente é uma forma de regular nossas emoções e focar no que precisa ser"
  },
  {
    "en": "be done in the present, instead of getting lost in negative memories of the past.",
    "pt": "feito no presente, em vez de nos perdermos em memórias negativas do passado."
  },
  {
    "en": "We may need motivated forgetting to maintain our self-image, to maintain confidence, to",
    "pt": "Podemos precisar de um esquecimento motivado para manter nossa autoimagem, nossa confiança, nosso"
  },
  {
    "en": "stay optimistic about the future, or to be able to maintain relationships with people",
    "pt": "otimismo em relação ao futuro ou para conseguirmos manter relacionamentos com pessoas"
  },
  {
    "en": "who have hurt us.",
    "pt": "que nos magoaram."
  },
  {
    "en": "We don’t know exactly how motivated forgetting happens, but part of our brain seems to step",
    "pt": "Não sabemos exatamente como ocorre o esquecimento motivado , mas parece que parte do nosso cérebro"
  },
  {
    "en": "in and block the troubling memory from being retrieved.",
    "pt": "intervém e impede que a memória problemática seja recuperada."
  },
  {
    "en": "So that even though it’s still somewhere in our brain, eventually we can’t find it.",
    "pt": "Assim, mesmo que ainda esteja em algum lugar do nosso cérebro, eventualmente não conseguimos encontrá-la."
  },
  {
    "en": "Our brains have so many ways to forget because forgetting is one of the most important things",
    "pt": "Nossos cérebros têm muitas maneiras de esquecer porque esquecer é uma das coisas mais importantes que"
  },
  {
    "en": "we do.",
    "pt": "fazemos.  O"
  },
  {
    "en": "Forgetting allows us to move past traumatic life events.",
    "pt": "esquecimento nos permite superar eventos traumáticos da vida."
  },
  {
    "en": "In fact, PTSD may be a problem where someone simply remembers too much.",
    "pt": "Na verdade, o PTSD pode ser um problema em que a pessoa simplesmente se lembra de coisas demais."
  },
  {
    "en": "Forgetting also allows us to clear out junk.",
    "pt": "Esquecer também nos permite nos livrar de coisas inúteis."
  },
  {
    "en": "Imagine every sight, sound, smell, and piece of information your brain processes every",
    "pt": "Imagine cada imagem, som, cheiro e informação que seu cérebro processa todos os"
  },
  {
    "en": "day!",
    "pt": "dias!"
  },
  {
    "en": "If our brains didn’t sweep out the garbage every night, we would soon overflow our neural",
    "pt": "Se nossos cérebros não limpassem o lixo todas as noites, logo sobrecarregaríamos nossas"
  },
  {
    "en": "networks with random useless trivia, just like Sherlock Holmes predicted.",
    "pt": "redes neurais com trivialidades inúteis e aleatórias, exatamente como Sherlock Holmes previu."
  },
  {
    "en": "We also wouldn’t be able to replace things that are no longer true with better information",
    "pt": "Também não seríamos capazes de substituir informações que não são mais verdadeiras por informações melhores"
  },
  {
    "en": "and update our mental models of the world.",
    "pt": "e atualizar nossos modelos mentais do mundo.  Nas"
  },
  {
    "en": "Deep in the scientific literature we find stories of a handful of people who NEVER forget",
    "pt": "profundezas da literatura científica, encontramos histórias de um punhado de pessoas que NUNCA se esquecem de"
  },
  {
    "en": "anything.",
    "pt": "nada."
  },
  {
    "en": "They are so rare that their unforgetfulness has a medical name: hyperthymesia.",
    "pt": "São tão raros que sua capacidade de não esquecer tem um nome médico: hipertimesia."
  },
  {
    "en": "The most famous case is Jill Price, an American woman now in her fifties.",
    "pt": "O caso mais famoso é o de Jill Price, uma americana que agora está na casa dos cinquenta anos."
  },
  {
    "en": "Starting from age 14, Jill’s memory of her life is nearly perfect.",
    "pt": "A partir dos 14 anos, a memória que Jill tem de sua vida é quase perfeita."
  },
  {
    "en": "For any date in the past, she remembers what she wore and had for lunch that day, key historical",
    "pt": "Para qualquer data no passado, ela se lembra do que vestiu e do que comeu no almoço naquele dia, dos principais"
  },
  {
    "en": "events that she paid attention to, and detailed incidents from her life.",
    "pt": "eventos históricos aos quais prestou atenção e de incidentes detalhados de sua vida."
  },
  {
    "en": "She describes memories playing in her mind in vivid detail like a video reel that has",
    "pt": "Ela descreve as memórias que passam pela sua mente com detalhes vívidos, como um filme em película"
  },
  {
    "en": "been enhanced with smells and emotions, whether the events occurred yesterday or decades ago.",
    "pt": "enriquecido com cheiros e emoções, sejam eventos ocorridos ontem ou décadas atrás."
  },
  {
    "en": "This might sound like a blessing, especially if you’re in school, but Jill has described",
    "pt": "Isso pode parecer uma bênção, especialmente se você está na escola, mas Jill descreveu"
  },
  {
    "en": "being haunted by upsetting memories and by regrets, because unlike the rest of us, she",
    "pt": "ser assombrada por memórias perturbadoras e arrependimentos, porque, ao contrário do resto de nós, ela"
  },
  {
    "en": "can clearly remember every choice she made and how it turned out.",
    "pt": "consegue se lembrar claramente de cada escolha que fez e de como tudo terminou."
  },
  {
    "en": "There’s probably something you truly *want* to forget, like that extremely embarrassing",
    "pt": "Provavelmente existe algo que você realmente *quer* esquecer, como aquele momento extremamente constrangedor"
  },
  {
    "en": "moment in high school that always seems to pop up at the worst times.",
    "pt": "do ensino médio que sempre parece ressurgir nos piores momentos.  Será que"
  },
  {
    "en": "Can we erase those unwanted memories somehow?",
    "pt": "podemos apagar essas memórias indesejadas de alguma forma?"
  },
  {
    "en": "In an episode of House, MD, Dr. House treated a patient suffering from painful memories",
    "pt": "Em um episódio de House, MD, o Dr. House tratou um paciente que sofria de memórias dolorosas"
  },
  {
    "en": "by performing something called electroconvulsive therapy: controlled electric shocks to the",
    "pt": "realizando algo chamado terapia eletroconvulsiva: choques elétricos controlados no"
  },
  {
    "en": "brain.",
    "pt": "cérebro.  As"
  },
  {
    "en": "People who undergo ECT do lose some memories – only not necessarily the ones they hope.",
    "pt": "pessoas que se submetem à ECT perdem algumas memórias – mas não necessariamente as que esperavam."
  },
  {
    "en": "When it comes to erasing memories in humans, our best tool still works like a hammer, not",
    "pt": "Quando se trata de apagar memórias em humanos, nossa melhor ferramenta ainda funciona como um martelo, não como"
  },
  {
    "en": "a scalpel.",
    "pt": "um bisturi."
  },
  {
    "en": "It’s no accident that our ability to forget, like our ability to remember, is a complex",
    "pt": "Não é por acaso que nossa capacidade de esquecer, assim como nossa capacidade de lembrar, é um"
  },
  {
    "en": "and finely-tuned mechanism.",
    "pt": "mecanismo complexo e finamente ajustado."
  },
  {
    "en": "If humans couldn’t remember and learn from important events, our species probably wouldn’t",
    "pt": "Se os humanos não fossem capazes de se lembrar e aprender com eventos importantes, nossa espécie provavelmente não teria"
  },
  {
    "en": "have survived.",
    "pt": "sobrevivido."
  },
  {
    "en": "But it seems that being able to forget is just as critical, an elementary part of solving",
    "pt": "Mas parece que ser capaz de esquecer é igualmente crucial, uma parte elementar para desvendar"
  },
  {
    "en": "this great mystery we call life.",
    "pt": "esse grande mistério que chamamos de vida."
  },
  {
    "en": "Stay curious!",
    "pt": "Mantenha-se curioso!"
  },
  {
    "en": "So you probably can’t teach yourself to have perfect memory, and never forget anything.",
    "pt": "Então, provavelmente você não conseguirá treinar a si mesmo para ter uma memória perfeita e nunca esquecer nada."
  },
  {
    "en": "Not without a massive brain injury or something.",
    "pt": "Não sem sofrer uma lesão cerebral grave ou algo do tipo."
  },
  {
    "en": "But is memorization really the best way to learn something?",
    "pt": "Mas será que memorizar é realmente a melhor maneira de aprender algo?"
  },
  {
    "en": "Memorizing can definitely help you get started with a new concept.",
    "pt": "Memorizar definitivamente pode ajudar você a começar a assimilar um novo conceito."
  },
  {
    "en": "However, truly understanding it requires much more - seeing how concepts are related to",
    "pt": "No entanto, compreendê-lo verdadeiramente exige muito mais: perceber como os conceitos se relacionam"
  },
  {
    "en": "each other, looking for different interpretations, dealing with new information.",
    "pt": "entre si, procurar diferentes interpretações e lidar com novas informações."
  },
  {
    "en": "These are the skills that will help you learn anything, and if you’d like to sharpen your",
    "pt": "Essas são as habilidades que te ajudarão a aprender qualquer coisa, e se você quiser aprimorar seu"
  },
  {
    "en": "brain and develop these tools, then Brilliant could be the place to go for that.",
    "pt": "intelecto e desenvolver essas ferramentas, então a Brilliant pode ser o lugar certo para isso."
  },
  {
    "en": "Check out this Brilliant course on logic and deduction [screen recording]",
    "pt": "Confira este curso incrível sobre lógica e dedução [gravação de tela]."
  },
  {
    "en": "It’s got fun and challenging riddles and mind-benders, broken up into bite size pieces,",
    "pt": "Ele contém enigmas divertidos e desafiadores , divididos em partes menores,"
  },
  {
    "en": "and they’ll guide you through the problems until you’re a Sherlock Holmes-level logical",
    "pt": "e os instrutores irão guiá-lo pelos problemas até que você se torne um pensador lógico do nível de Sherlock Holmes"
  },
  {
    "en": "thinker…",
    "pt": "…"
  },
  {
    "en": "To support It’s Okay To Be Smart and learn more about Brilliant, go to brilliant dot",
    "pt": "Para apoiar o projeto It’s Okay To Be Smart e saber mais sobre a Brilliant, acesse brilliant.org/BESMART"
  },
  {
    "en": "org slash BESMART and sign up for free.",
    "pt": "e inscreva-se gratuitamente."
  },
  {
    "en": "And also, the first 200 people that go to that link will get 20% off the annual Premium",
    "pt": "Além disso, as primeiras 200 pessoas que acessarem esse link receberão 20% de desconto na assinatura Premium anual"
  },
  {
    "en": "subscription.",
    "pt": "."
  }
];

export default function HowYourMemoryWorks() {
  return (
    <>
      <Whiteboard
        title="Advanced"
        subtitle="How Your Memory Works"
        description="Watch the video, understand how memory works, and discuss why forgetting is important."
      />
      <div>
        <PageSections>
          <Section id="introduction" heading={3}>
            <Card>
              <Paragraph
                value={[
                  ...content({
                    parts: [
                      "In this lesson, you will watch a TED-Ed video that explains how memory works, why forgetting is important, and how the brain stores information. You will also discuss questions, practice vocabulary, and complete exercises to improve your understanding of the topic.",
                    ],
                  }),
                ]}
              />
            </Card>
            <List
              instruction="Discuss these questions."
              ordered
              items={[
                {
                  value: [
                    ...content({
                      parts: ["Why do people forget important information?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["Would you like to remember everything forever?"],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: ["What techniques help you remember things?"],
                    }),
                  ],
                },
              ]}
            />
          </Section>

          <Section id="Vocabulary Guess" heading={3}>
            <Carousel
              instruction="Describe what you see."
              imgs={[
                { word: "memory", img: 0 },
                { word: "brain", img: 0 },
                { word: "forget", img: 0 },
                { word: "neuron", img: 0 },
                { word: "information", img: 0 },
                { word: "learning", img: 0 },
                { word: "recall", img: 0 },
                { word: "storage", img: 0 },
              ]}
            />
          </Section>

          <Section id="gist" heading={3}>
            <VideoPlayer
              videoId="TqFtWwQCzFI"
              title="How Your Memory Works"
              instruction="Watch the video."
            />
            <Radio
              score={false}
              instruction="Now choose the correct answer."
              exercise={{
                questions: [
                  {
                    question: "What is the video mainly about?",
                    options: [
                      {
                        option: "How to become a professional doctor.",
                        isCorrect: false,
                      },
                      {
                        option:
                          "How the brain remembers and forgets information.",
                        isCorrect: true,
                      },
                      {
                        option: "How computers store files.",
                        isCorrect: false,
                      },
                    ],
                  },
                ],
              }}
            />
            <Collapsible title="Script">
              {script.map((line, index) => (
                <div key={index} className="mb-4">
                  <Line
                    value={[
                      ...content({
                        parts: [line.en],
                      }),
                    ]}
                  />

                  <Line
                    value={[
                      ...content({
                        parts: [portuguese(line.pt)],
                      }),
                    ]}
                  />
                </div>
              ))}
            </Collapsible>
          </Section>

          <Section id="details" heading={3}>
            <Radio
              instruction="Watch again and listen for specific information."
              exercise={{
                questions: [
                  {
                    question: "What helps create stronger memories?",
                    options: [
                      {
                        option: "Sleeping less.",
                        isCorrect: false,
                      },
                      {
                        option: "Ignoring information.",
                        isCorrect: false,
                      },
                      {
                        option: "Repeated use of neural pathways.",
                        isCorrect: true,
                      },
                    ],
                  },

                  {
                    question: "Why is forgetting useful?",
                    options: [
                      {
                        option: "It removes unnecessary information.",
                        isCorrect: true,
                      },
                      {
                        option: "It damages the brain.",
                        isCorrect: false,
                      },
                      {
                        option: "It prevents learning.",
                        isCorrect: false,
                      },
                    ],
                  },

                  {
                    question: "What is one way to improve memory?",
                    options: [
                      {
                        option: "Avoiding practice.",
                        isCorrect: false,
                      },
                      {
                        option: "Reviewing information regularly.",
                        isCorrect: true,
                      },
                      {
                        option: "Studying only once.",
                        isCorrect: false,
                      },
                    ],
                  },
                ],
              }}
            />
          </Section>

          <Section id="practice" heading={3}>
            <Guess
              words={[
                { word: "brain", img: 0 },
                { word: "storage", img: 0 },
                { word: "recall", img: 0 },
                { word: "neuron", img: 0 },
                { word: "memory", img: 0 },
                { word: "information", img: 0 },
                { word: "forget", img: 0 },
                { word: "learning", img: 0 },
              ]}
            />
            <FillInTheBlanks
              showWordBank={false}
              instruction="Fill in the blanks with the words from previous exercises."
              numbered={true}
              exercise={{
                blocks: [
                  {
                    block: [
                      { text: "The " },
                      { blank: "brain" },
                      { text: " stores information." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Good " },
                      { blank: "memory" },
                      { text: " helps people learn." },
                    ],
                    lineBreak: true,
                  },

                  {
                    block: [
                      { text: "A " },
                      { blank: "neuron" },
                      { text: " sends signals in the nervous system." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Trying to " },
                      { blank: "recall" },
                      { text: " information strengthens memory." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "People sometimes " },
                      { blank: "forget" },
                      { text: " unnecessary details." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Information can remain in long-term " },
                      { blank: "storage" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Practice improves " },
                      { blank: "learning" },
                      { text: "." },
                    ],
                    lineBreak: true,
                  },
                  {
                    block: [
                      { text: "Neural " },
                      { blank: "pathway" },
                      { text: " connections become stronger with use." },
                    ],
                    lineBreak: true,
                  },
                ],
              }}
            />
          </Section>

          <Section
            id="follow-up-discussion"
            label="Follow-up Discussion"
            heading={3}
          >
            <List
              instruction="Discuss the questions below."
              ordered
              items={[
                {
                  value: [
                    ...content({
                      parts: [
                        "Would it be a good thing to remember everything forever?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "Why do you think the brain forgets information?",
                      ],
                    }),
                  ],
                },
                {
                  value: [
                    ...content({
                      parts: [
                        "How could understanding memory help students learn better?",
                      ],
                    }),
                  ],
                },
              ]}
            />
          </Section>
        </PageSections>
      </div>
    </>
  );
}
