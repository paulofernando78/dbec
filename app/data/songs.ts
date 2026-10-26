export type SongLine = {
  english: string;
  portuguese: string;
};

export type Song = {
  slug: string;
  title: string;
  album: string;
  year: number;
  youtubeUrl: string;
  lines: SongLine[];
};

export type Band = {
  slug: string;
  name: string;
  description?: string;
  songs: Song[];
};

// Add new bands and songs here. Keep slugs lowercase and separated by hyphens.
export const bands: Band[] = [
  {
    slug: "pink-floyd",
    name: "Pink Floyd",
    description: "English progressive rock band formed in London.",
    songs: [
      {
        slug: "pigs-three-different-ones",
        title: "Pigs (Three Different Ones)",
        album: "Animals",
        year: 1977,
        youtubeUrl: "https://www.youtube.com/watch?v=ZUEGeWYWbuU",
        lines: [
          { english: "Big man, pig man", portuguese: "Grandalhão, homem-porco" },
          { english: "Ha, ha, charade you are", portuguese: "Ha, ha, você é uma farsa" },
          { english: "You well heeled big wheel", portuguese: "Seu figurão endinheirado" },
          { english: "Ha, ha, charade you are", portuguese: "Ha, ha, você é uma farsa" },
          { english: "And when your hand is on your heart", portuguese: "E quando sua mão está sobre o coração" },
          { english: "You're nearly a good laugh", portuguese: "Você é quase uma boa piada" },
          { english: "Almost a joker", portuguese: "Quase um palhaço" },
          { english: "With your head down in the pig bin", portuguese: "Com a cabeça enfiada no chiqueiro" },
          { english: "Saying 'Keep on digging'", portuguese: "Dizendo: ‘Continue cavando’" },
          { english: "Pig stain on your fat chin", portuguese: "Uma mancha de porco no seu queixo gordo" },
          { english: "What do you hope to find", portuguese: "O que você espera encontrar" },
          { english: "Down in the pig mine?", portuguese: "Lá embaixo, na mina dos porcos?" },
          { english: "You're nearly a laugh", portuguese: "Você é quase uma piada" },
          { english: "You're nearly a laugh", portuguese: "Você é quase uma piada" },
          { english: "But you're really a cry", portuguese: "Mas você é mesmo de dar pena" },
          { english: "Bus stop rat bag", portuguese: "Ratazana de ponto de ônibus" },
          { english: "Ha, ha, charade you are", portuguese: "Ha, ha, você é uma farsa" },
          { english: "You fucked up old hag", portuguese: "Sua velha bruxa fodida" },
          { english: "Ha, ha, charade you are", portuguese: "Ha, ha, você é uma farsa" },
          { english: "You radiate cold shafts of broken glass", portuguese: "Você irradia frios feixes de vidro quebrado" },
          { english: "You're nearly a good laugh", portuguese: "Você é quase uma boa piada" },
          { english: "Almost worth a quick grin", portuguese: "Quase merece um sorriso rápido" },
          { english: "You like the feel of steel", portuguese: "Você gosta da sensação do aço" },
          { english: "You're hot stuff with a hatpin", portuguese: "Você se acha poderosa com um alfinete de chapéu" },
          { english: "And good fun with a hand gun", portuguese: "E se diverte bastante com uma arma na mão" },
          { english: "You're nearly a laugh", portuguese: "Você é quase uma piada" },
          { english: "You're nearly a laugh", portuguese: "Você é quase uma piada" },
          { english: "But you're really a cry", portuguese: "Mas você é mesmo de dar pena" },
          { english: "Hey you, Whitehouse", portuguese: "Ei, você, Whitehouse" },
          { english: "Ha, ha, charade you are", portuguese: "Ha, ha, você é uma farsa" },
          { english: "You house proud town mouse", portuguese: "Sua ratinha urbana orgulhosa da casa" },
          { english: "Ha, ha, charade you are", portuguese: "Ha, ha, você é uma farsa" },
          { english: "You're trying to keep our feelings off the street", portuguese: "Você está tentando manter nossos sentimentos longe das ruas" },
          { english: "You're nearly a real treat", portuguese: "Você é quase um verdadeiro encanto" },
          { english: "All tight lips and cold feet", portuguese: "Só lábios cerrados e covardia" },
          { english: "And do you feel abused?", portuguese: "E você se sente maltratada?" },
          { english: "You got to stem the evil tide", portuguese: "Você precisa conter a maré do mal" },
          { english: "And keep it all on the inside", portuguese: "E manter tudo isso lá dentro" },
          { english: "Mary you're nearly a treat", portuguese: "Mary, você é quase um encanto" },
          { english: "Mary you're nearly a treat", portuguese: "Mary, você é quase um encanto" },
          { english: "But you're really a cry", portuguese: "Mas você é mesmo de dar pena" },
        ],
      },
      {
        slug: "dogs",
        title: "Dogs",
        album: "Animals",
        year: 1977,
        youtubeUrl: "https://www.youtube.com/watch?v=tq3bYPLBcA4",
        lines: [],
      },
      {
        slug: "money",
        title: "Money",
        album: "The Dark Side of the Moon",
        year: 1973,
        youtubeUrl: "https://www.youtube.com/watch?v=q9NtWkikVAE",
        lines: [],
      },
      {
        slug: "us-and-them",
        title: "Us and Them",
        album: "The Dark Side of the Moon",
        year: 1973,
        youtubeUrl: "https://www.youtube.com/watch?v=5wth9BScmGY",
        lines: [],
      },
      {
        slug: "in-the-flesh-question-mark",
        title: "In the Flesh?",
        album: "The Wall",
        year: 1979,
        youtubeUrl: "https://www.youtube.com/watch?v=uzsEmI61Xas",
        lines: [],
      },
      {
        slug: "in-the-flesh",
        title: "In the Flesh",
        album: "The Wall",
        year: 1979,
        youtubeUrl: "https://www.youtube.com/watch?v=6Z6Je2QM6lE",
        lines: [],
      },
    ],
  },
  {
    slug: "david-bowie",
    name: "David Bowie",
    description: "English singer-songwriter and influential rock artist.",
    songs: [
      {
        slug: "suffragette-city",
        title: "Suffragette City",
        album: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
        year: 1972,
        youtubeUrl: "https://www.youtube.com/watch?v=QIBDX9ldplY",
        lines: [
          { english: "Hey man, oh, leave me alone you know", portuguese: "Ei, cara, ah, me deixe em paz, você sabe" },
          { english: "Hey man, oh Henry, get off the phone, I gotta", portuguese: "Ei, cara, ah, Henry, saia do telefone, eu preciso..." },
          { english: "Hey man, I gotta straighten my face", portuguese: "Ei, cara, preciso recompor o rosto" },
          { english: "This mellow thighed chick just put my spine out of place", portuguese: "Essa garota de coxas macias acabou de tirar minha coluna do lugar" },
          { english: "Hey man, my schooldays insane", portuguese: "Ei, cara, meus tempos de escola são uma loucura" },
          { english: "Hey man, my work's down the drain", portuguese: "Ei, cara, meu trabalho foi por água abaixo" },
          { english: "Hey man, well she's a total blam-blam", portuguese: "Ei, cara, bem, ela é um arraso total" },
          { english: "She said she had to squeeze it but she then she", portuguese: "Ela disse que precisava apertar, mas então ela..." },
          { english: "Oh, don't lean on me, man, 'cause you can't afford the ticket", portuguese: "Ah, não se apoie em mim, cara, porque você não pode pagar o ingresso" },
          { english: "I'm back on Suffragette City", portuguese: "Estou de volta à Suffragette City" },
          { english: "Oh, don't lean on me, man", portuguese: "Ah, não se apoie em mim, cara" },
          { english: "'Cause you ain't got time to check it", portuguese: "Porque você não tem tempo para conferir" },
          { english: "You know my Suffragette City", portuguese: "Você conhece minha Suffragette City" },
          { english: "Is outta sight she's all right", portuguese: "É incrível, ela está ótima" },
          { english: "Hey man, oh Henry, don't be unkind, go away", portuguese: "Ei, cara, ah, Henry, não seja desagradável, vá embora" },
          { english: "Hey man, I can't take you this time, no way", portuguese: "Ei, cara, não posso aceitar você desta vez, de jeito nenhum" },
          { english: "Hey man, droogie don't crash here", portuguese: "Ei, cara, drugue, não fique por aqui" },
          { english: "There's only room for one and here she comes, here she comes", portuguese: "Só há espaço para uma pessoa, e aí vem ela, aí vem ela" },
          { english: "Oh, don't lean on me, man, 'cause you can't afford the ticket", portuguese: "Ah, não se apoie em mim, cara, porque você não pode pagar o ingresso" },
          { english: "I'm back on Suffragette City", portuguese: "Estou de volta à Suffragette City" },
          { english: "Oh, don't lean on me, man", portuguese: "Ah, não se apoie em mim, cara" },
          { english: "'Cause you ain't got time to check it", portuguese: "Porque você não tem tempo para conferir" },
          { english: "You know my Suffragette City", portuguese: "Você conhece minha Suffragette City" },
          { english: "Is outta sight she's all right", portuguese: "É incrível, ela está ótima" },
          { english: "Oh, hit me", portuguese: "Ah, manda ver" },
          { english: "Oh, don't lean on me, man, 'cause you can't afford the ticket", portuguese: "Ah, não se apoie em mim, cara, porque você não pode pagar o ingresso" },
          { english: "I'm back on Suffragette City", portuguese: "Estou de volta à Suffragette City" },
          { english: "Oh, don't lean on me, man", portuguese: "Ah, não se apoie em mim, cara" },
          { english: "'Cause you ain't got time to check it", portuguese: "Porque você não tem tempo para conferir" },
          { english: "You know my Suffragette City", portuguese: "Você conhece minha Suffragette City" },
          { english: "Oh, don't lean on me, man, 'cause you can't afford the ticket", portuguese: "Ah, não se apoie em mim, cara, porque você não pode pagar o ingresso" },
          { english: "I'm back on Suffragette City", portuguese: "Estou de volta à Suffragette City" },
          { english: "Don't lean on me, man, 'cause you ain't got time to check it", portuguese: "Não se apoie em mim, cara, porque você não tem tempo para conferir" },
          { english: "You know my Suffragette City", portuguese: "Você conhece minha Suffragette City" },
          { english: "Is outta sight she's all right", portuguese: "É incrível, ela está ótima" },
          { english: "A Suffragette City, a Suffragette City", portuguese: "Uma Suffragette City, uma Suffragette City" },
          { english: "I'm back on Suffragette City, I'm back on Suffragette City", portuguese: "Estou de volta à Suffragette City, estou de volta à Suffragette City" },
          { english: "Ooh, Suffragette City, ooh, Suffragette City", portuguese: "Ooh, Suffragette City, ooh, Suffragette City" },
          { english: "Ooh-how, Suffragette City, ooh-how, Suffragette City", portuguese: "Ooh-how, Suffragette City, ooh-how, Suffragette City" },
          { english: "Ohhh, wham bam thank you ma'am", portuguese: "Ohhh, wham, bam, obrigado, senhora" },
          { english: "A Suffragette City, a Suffragette City", portuguese: "Uma Suffragette City, uma Suffragette City" },
          { english: "Quite all right", portuguese: "Muito bem" },
          { english: "A Suffragette City", portuguese: "Uma Suffragette City" },
          { english: "Too fine", portuguese: "Boa demais" },
          { english: "A Suffragette City, ooh, a Suffragette City", portuguese: "Uma Suffragette City, ooh, uma Suffragette City" },
          { english: "Oh, my Suffragette City, oh my Suffragette City", portuguese: "Ah, minha Suffragette City, ah, minha Suffragette City" },
          { english: "Oh, Suffragette", portuguese: "Ah, Suffragette" },
          { english: "Suffragette", portuguese: "Suffragette" },
        ],
      },
    ],
  },
];

export const findBand = (slug?: string) =>
  bands.find((band) => band.slug === slug);

export const findSong = (band: Band, slug?: string) =>
  band.songs.find((song) => song.slug === slug);
