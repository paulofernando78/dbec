import { underline, type RichContent } from "@/helpers/content";

export type PronunciationExample = {
  english?: string | RichContent;
  translation?: string;
  audio?: string;
};

export type PronunciationItem = {
  title?: string;
  english?: string | RichContent;
  translation?: string;
  phoneme?: string | string[];
  audio?: string | string[];
  group?: PronunciationExample[];
};

export type PronunciationSection = {
  title: string;
  items: PronunciationItem[];
};

const media = (path: string) => `/media/pronunciation/linking-sounds/${path}`;

const phoneticsMedia = (group: "vowels" | "consonants", sound: string) =>
  `/media/pronunciation/phonetics/${group}/${sound}.mp3`;

const consonantSounds = [
  "b",
  "d",
  "dʒ",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "r",
  "s",
  "t",
  "tʃ",
  "v",
  "w",
  "z",
  "ð",
  "ŋ",
  "ʃ",
  "ʒ",
  "θ",
] as const;

const vowelSounds = [
  { file: "i", phoneme: "/i/" },
  { file: "ɪ", phoneme: "/ɪ/" },
  { file: "e", phoneme: "/e/" },
  { file: "æ", phoneme: "/æ/" },
  { file: "ɑ", phoneme: "/ɑ/" },
  { file: "ɔ", phoneme: "/ɔ/" },
  { file: "ʊ", phoneme: "/ʊ/" },
  { file: "u", phoneme: "/u/" },
  { file: "ʌ", phoneme: "/ʌ/" },
  { file: "ə", phoneme: "/ə/" },
  { file: "eɪ", phoneme: "/eɪ/" },
  { file: "aɪ", phoneme: "/aɪ/" },
  { file: "ɔɪ", phoneme: "/ɔɪ/" },
  { file: "aʊ", phoneme: "/aʊ/" },
  { file: "oʊ", phoneme: "/oʊ/" },
] as const;

export const phoneticSections = [
  {
    title: "Vowels",
    sounds: vowelSounds.map(({ file, phoneme }) => ({
      phoneme,
      audio: phoneticsMedia("vowels", file),
    })),
  },
  {
    title: "Consonants",
    sounds: consonantSounds.map((sound) => ({
      phoneme: `/${sound}/`,
      audio: phoneticsMedia("consonants", sound),
    })),
  },
] as const;

export const pronunciationSections: PronunciationSection[] = [
  {
    title: "Vowel + Vowel",
    items: [
      // /w/
      {
        phoneme: "/w/",
        audio: phoneticsMedia("consonants", "w"),
        group: [
          // Go on.
          {
            english: ["G", underline("o o"), "n."],
            translation: "Vá em frente.",
            audio: media("vowel-vowel/w/go-on.mp3"),
          },
          // Do it again.
          {
            english: ["D", underline("o i"), "t again."],
            translation: "Faça novamente.",
            audio: media("vowel-vowel/w/do-it-again.mp3"),
          },
          // Get used to it.
          {
            english: ["Ge(t) used t", underline("o i"), "(t)"],
            translation: "Se acostumar.",
            audio: media("vowel-vowel/w/get-used-to-it.mp3"),
          },
        ],
      },
      // /j/
      {
        phoneme: "/j/",
        audio: phoneticsMedia("consonants", "j"),
        group: [
          // I agree wth you.
          {
            english: [underline("I a"), "gree with you."],
            translation: "Eu concordo com você.",
            audio: media("vowel-vowel/j/i-agree-with-you.mp3"),
          },
          // She asked me a question.
          {
            english: [
              "Sh",
              underline("e a"),
              "sked m",
              underline("e a"),
              " question.",
            ],
            translation: "Ela me fez uma pergunta.",
            audio: media("vowel-vowel/j/she-asked-me-a-question.mp3"),
          },
        ],
      },
    ],
  },
  // Consonanet + Vowel
  {
    title: "Consonant + Vowel",
    items: [
      // /k/ + /ə/
      {
        phoneme: ["/k/", "/ə/"],
        audio: [
          phoneticsMedia("consonants", "k"),
          phoneticsMedia("vowels", "ə"),
        ],
        group: [
          // Take a look!
          {
            english: ["Ta", underline("k(e) a"), " look!"],
            translation: "Dê uma olhada.",
            audio: media("consonant-vowel/k-ə/take-a-look.mp3"),
          },
        ],
      },
      // /k/ + /ɪ/
      {
        phoneme: "/k/ + /ɪ/",
        audio: [
          phoneticsMedia("consonants", "k"),
          phoneticsMedia("vowels", "ɪ"),
        ],
        group: [
          // I like it.
          {
            english: ["I lik", underline("(e) i"), "(t)."],
            translation: "Eu gosto.",
            audio: media("consonant-vowel/k-ɪ/i-like-it.mp3"),
          },
          // Pick it up.
          {
            english: ["Pic", underline("k i"), "t u(p)."],
            translation: "Pegue.",
            audio: media("consonant-vowel/t-ə/pick-it-up.mp3"),
          },
        ],
      },
      // /n/ + /ɑː/
      {
        phoneme: "/n/ + /ɑː/",
        audio: [
          phoneticsMedia("consonants", "n"),
          phoneticsMedia("vowels", "ɑ"),
        ],
        group: [
          {
            english: ["Tur", underline("n o"), "ff the lights."],
            translation: "Apague as luzes.",
            audio: media("consonant-vowel/n-ɑ/turn-off-the-lights.mp3"),
          },
        ],
      },
      // /n/ + /iː/
      {
        phoneme: "/n/ + /iː/",
        audio: [
          phoneticsMedia("consonants", "n"),
          phoneticsMedia("vowels", "i"),
        ],
        group: [
          // It doesn’t even matter.
          {
            english: ["i(t) does", underline("n’t e"), "ven matter."],
            translation: "Não importa.",
            audio: media("consonant-vowel/n-i/it-doesnt-even-matter.mp3"),
          },
          // An easy task.
          {
            english: ["A", underline("n ea"), "sy task."],
            translation: "Uma tarefa fácil.",
            audio: media("consonant-vowel/n-i/an-easy-task.mp3"),
          },
        ],
      },
      // /n/ + /ɪ/
      {
        phoneme: ["/n/", "/ɪ/"],
        audio: [
          phoneticsMedia("consonants", "n"),
          phoneticsMedia("vowels", "ɪ"),
        ],
        group: [
          // An incredibe memory.
          {
            english: ["A", underline("n i"), "ncredibl(e) memory."],
            translation: "Uma memória incrível.",
            audio: media("consonant-vowel/n-ɪ/an-incredible-memory.mp3"),
          },
        ],
      },
      // /m/ + /aʊ/
      {
        phoneme: "/m/ + /aʊ/",
        audio: [
          phoneticsMedia("consonants", "m"),
          phoneticsMedia("vowels", "aʊ"),
        ],
        group: [
          {
            english: ["I’", underline("m o"), "u(t)."],
            translation: "Estou fora.",
            audio: media("consonant-vowel/m-aʊ/im-out.mp3"),
          },
        ],
      },
      // /z/ + /ɪ/
      {
        phoneme: "/z/ + /ɪ/",
        audio: [
          phoneticsMedia("consonants", "z"),
          phoneticsMedia("vowels", "ɪ"),
        ],
        group: [
          {
            english: ["U", underline("s(e) i"), "(t)."],
            translation: "Use.",
            audio: media("consonant-vowel/z-ɪ/use-it.mp3"),
          },
          {
            english: ["Ta", underline("k(e) i"), "t())."],
            translation: "Pegue.",
            audio: media("consonant-vowel/k-ɪ/take-it.mp3"),
          },
        ],
      },
      // /v/ + /ə/
      {
        phoneme: "/v/ + /ə/",
        audio: [
          phoneticsMedia("consonants", "v"),
          phoneticsMedia("vowels", "ə"),
        ],
        group: [
          // Have a seat, please.
          {
            english: ["Ha", underline("v(e) a"), " sea(t), please."],
            translation: "Sente-se, por favor.",
            audio: media("consonant-vowel/v-ə/have-a-seat-please.mp3"),
          },
          // I've always wanted it.
          {
            english: ["I’", underline("v(e) a"), "lways wanted it."],
            translation: "Eu sempre quis.",
            audio: media("consonant-vowel/v-ə/Ive-always-wanted-it.mp3"),
          },
        ],
      },
      // Flap T
      {
        title: "Flat T",
        phoneme: "/t/ + /ə/",
        audio: [
          phoneticsMedia("consonants", "t"),
          phoneticsMedia("vowels", "ə"),
        ],
        group: [
          {
            english: ["I lik(e) i", underline("t a"), " lo(t)."],
            translation: "Eu gosto muito.",
            audio: media("flap-t/i-like-it-a-lot.mp3"),
          },
          {
            english: ["I’m ou", underline("t o"), "f tim(e)."],
            translation: "Estou sem tempo.",
            audio: media("consonant-vowel/t-ə/im-out-of-time.mp3"),
          },
          {
            english: ["Ge", underline("t a"), " jo(b)."],
            translation: "Arranje um emprego.",
            audio: media("consonant-vowel/t-ə/get-a-job.mp3"),
          },
          {
            english: ["Pick i", underline("t u"), "(p)."],
            translation: "Pegue.",
            audio: media("consonant-vowel/t-ə/pick-it-up.mp3"),
          },
        ],
      },
      // Misc
      {
        title: "Misc",
        group: [
          {
            english: "Embark on an extraordinary journey.",
            translation: "Embarque em uma jornada extraordinária.",
            audio: media(
              "consonant-vowel/n-æ/embark-on-an-extraordinary-journey.mp3",
            ),
          },
        ],
      },
    ],
  },
  // d + y
  {
    title: "d + y",
    items: [
      // /dʒ/
      {
        phoneme: "/dʒ/",
        audio: phoneticsMedia("consonants", "dʒ"),
        group: [
          {
            english: "Did you like i(t)?",
            translation: "Você gostou?",
            audio: media("d+y/did-you-like-it.mp3"),
          },
          {
            english: "Did you ea(t)?",
            translation: "Você comeu?",
            audio: media("d+y/did-you-eat.mp3"),
          },
          {
            english: "D(o) you know what I mean?",
            translation: "Você me entende?",
            audio: media("d+y/do-you-know-what-I-mean.mp3"),
          },
          {
            english: "Would you like i(t)?",
            translation: "Você gostaria?",
            audio: media("d+y/would-you-like-it.mp3"),
          },
        ],
      },
    ],
  },
  // t + y
  {
    title: "t + y",
    items: [
      {
        phoneme: "/tʃ/",
        audio: phoneticsMedia("consonants", "tʃ"),
        group: [
          {
            english: "What’(s) your name?",
            translation: "Qual é o seu nome?",
            audio: media("t+y/whats-your-name.mp3"),
          },
          {
            english: "Don’t you like it?",
            translation: "Você não gosta?",
            audio: media("t+y/dont-you-like-it.mp3"),
          },
          {
            english: "Don’t you want it?",
            translation: "Você não quer?",
            audio: media("t+y/dont-you-want-it.mp3"),
          },
          {
            english: "Didn’t you like it?",
            translation: "Você não gostou?",
            audio: media("t+y/didnt-you-like-it.mp3"),
          },
        ],
      },
    ],
  },
  // s + y
  {
    title: "s + y",
    items: [
      {
        phoneme: "/ʃ/",
        audio: phoneticsMedia("consonants", "ʃ"),
        group: [
          {
            english: "This year I wanna learn Spanish.",
            translation: "Este ano eu quero aprender espanhol.",
            audio: media("s+y/ʃ/this-year-i-wanna-learn-spanish.mp3"),
          },
        ],
      },
      {
        phoneme: "/ʒ/",
        audio: phoneticsMedia("consonants", "ʒ"),
        group: [
          {
            english: "How’s your family?",
            translation: "Como está a sua família?",
            audio: media("s+y/ʒ/hows-your-family.mp3"),
          },
          {
            english: "Where’s your phone?",
            translation: "Cadê o seu telefone?",
            audio: media("s+y/ʒ/wheres-your-phone.mp3"),
          },
        ],
      },
    ],
  },
  // Multiple Linking
  {
    title: "Multiple Linking",
    items: [
      {
        group: [
          // I work in an office.
          {
            english: ["I wor", underline("k in an o"), "ffic(e)."],
            translation: "Trabalho em um escritório.",
            audio: media("multiple-linking/i-work-in-an-office.mp3"),
          },
          // He works n an office.
          {
            english: ["He work", underline("s in an o"), "ffic(e)."],
            translation: "Ele trabalha em um escritório.",
            audio: media("multiple-linking/he-works-in-an-office.mp3"),
          },
          // He’s on an adventure.
          {
            english: ["He’", underline("s on an a"), "dventure."],
            translation: "Ele está em uma aventura.",
            audio: media("multiple-linking/hes-on-an-adventure.mp3"),
          },
        ],
      },
    ],
  },
];
