import { underline, type RichContent } from "@/helpers/content";

export type PronunciationItem = {
  english?: string | RichContent;
  translation?: string;
  phoneme?: string | string[];
  audio?: string | string[];
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
      {
        phoneme: "/w/",
        audio: phoneticsMedia("consonants", "w"),
      },
      {
        english: ["G", underline("o o"), "n."],
        translation: "Vá em frente.",
        audio: media("vowel-vowel/w/go-on.mp3"),
      },
      {
        english: ["D", underline("o i"), "t again."],
        translation: "Faça novamente.",
        audio: media("vowel-vowel/w/do-it-again.mp3"),
      },
      {
        english: ["Ge(t) used t", underline("o i"), "(t)"],
        translation: "Se acostumar.",
        audio: media("vowel-vowel/w/get-used-to-it.mp3"),
      },
      { phoneme: "/j/", audio: phoneticsMedia("consonants", "j") },
      {
        english: [underline("I a"), "gree with you."],
        translation: "Eu concordo com você.",
        audio: media("vowel-vowel/j/i-agree-with-you.mp3"),
      },
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
  {
    title: "Consonant + Vowel",
    items: [
      {
        phoneme: ["/k/", "/ə/"],
        audio: [
          phoneticsMedia("consonants", "k"),
          phoneticsMedia("vowels", "ə"),
        ],
      },
      {
        english: ["Ta", underline("k(e) a"), " look!"],
        translation: "Dê uma olhada.",
        audio: media("consonant-vowel/k-ə/take-a-look.mp3"),
      },
      {
        phoneme: "/k/ + /ɪ/",
        audio: [
          phoneticsMedia("consonants", "k"),
          phoneticsMedia("vowels", "ɪ"),
        ],
      },
      {
        english: ["I lik", underline("(e) i"), "(t)."],
        translation: "Eu gosto.",
        audio: media("consonant-vowel/k-ɪ/i-like-it.mp3"),
      },
      {
        phoneme: "/n/ + /ɑː/",
        audio: [
          phoneticsMedia("consonants", "n"),
          phoneticsMedia("vowels", "ɑ"),
        ],
      },
      {
        english: ["Tur", underline("n o"), "ff the lights."],
        translation: "Apague as luzes.",
        audio: media("consonant-vowel/n-ɑ/turn-off-the-lights.mp3"),
      },
      {
        phoneme: "/n/ + /iː/",
        audio: [
          phoneticsMedia("consonants", "n"),
          phoneticsMedia("vowels", "i"),
        ],
      },
      {
        english: ["i(t) does", underline("n’t e"), "ven matter."],
        translation: "Não importa.",
        audio: media("consonant-vowel/n-i/it-doesnt-even-matter.mp3"),
      },
      {
        english: "Pick it u(p).",
        translation: "Pegue.",
        audio: media("consonant-vowel/t-ə/pick-it-up.mp3"),
      },
      {
        english: "It’s an easy task.",
        translation: "É uma tarefa fácil.",
        audio: media("consonant-vowel/n-i/its-an-easy-task.mp3"),
      },
      {
        english: "I’m out of time.",
        translation: "Estou sem tempo.",
        audio: media("consonant-vowel/t-ə/im-out-of-time.mp3"),
      },
      {
        english: "I work in an offic(e).",
        translation: "Trabalho em um escritório.",
        audio: media("consonant-vowel/i-work-in-an-office.mp3"),
      },
      {
        english: "He works in an offic(e).",
        translation: "Ele trabalha no escritório.",
        audio: media("consonant-vowel/he-works-in-an-office.mp3"),
      },
      {
        english: "Embark on an extraordinary journey.",
        translation: "Embarque em uma jornada extraordinária.",
        audio: media(
          "consonant-vowel/n-æ/embark-on-an-extraordinary-journey.mp3",
        ),
      },
      {
        phoneme: "/z/ + /ɪ/",
        audio: [
          phoneticsMedia("consonants", "z"),
          phoneticsMedia("vowels", "ɪ"),
        ],
      },
      {
        english: ["U", underline("s(e) i"), "t."],
        translation: "Use.",
        audio: media("consonant-vowel/z-ɪ/use-it.mp3"),
      },
      {
        english: ["Ta", underline("k(e) (i)"), "t."],
        translation: "Pegue.",
        audio: media("consonant-vowel/k-ɪ/take-it.mp3"),
      },
      {
        phoneme: "/v/ + /ə/",
        audio: [
          phoneticsMedia("consonants", "v"),
          phoneticsMedia("vowels", "ə"),
        ],
      },
      {
        english: "it’s an incredible memory.",
        translation: "",
      },
      {
        english: "You hav(e) an incredible memory.",
        translation: "Você tem uma memória incrível.",
        audio: media(
          "consonant-vowel/v-ə/you-have-an-incredible-memory.mp3",
        ),
      },
      {
        english: ["Ha", underline("v(e) a"), " sea(t), please."],
        translation: "Sente-se, por favor.",
        audio: media("consonant-vowel/v-ə/have-a-seat-please.mp3"),
      },
      {
        english: "I’v(e) always wanted it.",
        translation: "Eu sempre quis.",
        audio: media("consonant-vowel/v-ə/Ive-always-wanted-it.mp3"),
      },
    ],
  },
  {
    title: "d + y",
    items: [
      { phoneme: "/dʒ/" },
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
  {
    title: "t + y",
    items: [
      { phoneme: "/tʃ/" },
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
  {
    title: "s + y",
    items: [
      { phoneme: "/ʃ/" },
      {
        english: "This year I wanna learn Spanish.",
        translation: "Este ano eu quero aprender espanhol.",
        audio: media("s+y/ʃ/this-year-i-wanna-learn-spanish.mp3"),
      },
      { phoneme: "/ʒ/" },
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
  {
    title: "Flap T",
    items: [
      {
        phoneme: "/t/ + /ə/",
        audio: [
          phoneticsMedia("consonants", "t"),
          phoneticsMedia("vowels", "ə"),
        ],
      },
      {
        english: ["I lik(e) i", underline("t a"), " lo(t)."],
        translation: "Eu gosto muito.",
        audio: media("flap-t/i-like-it-a-lot.mp3"),
      },
      {
        english: "I nee(d) to get a better job.",
        translation: "Preciso de um emprego melhor.",
        audio: media("consonant-vowel/t-ə/i-need-to-get-a-better-job.mp3"),
      },
    ],
  },
];
