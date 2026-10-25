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

const media = (path: string) =>
  `/media/audio/pronunciation/linking-sounds/${path}?v=1`;

const phoneticsMedia = (group: "vowels" | "consonants", sound: string) =>
  `/media/audio/pronunciation/phonetics/${group}/${sound}.mp3?v=1`;

type PhoneticSound = {
  file: string;
  phoneme: string;
  examples: RichContent[];
};

const vowelSounds: PhoneticSound[] = [
  { file: "i", phoneme: "/i/", examples: [["s", underline("ee")], ["gr", underline("ee"), "n"], ["k", underline("ey")]] },
  { file: "ɪ", phoneme: "/ɪ/", examples: [["s", underline("i"), "t"], ["b", underline("i"), "g"], ["f", underline("i"), "sh"]] },
  { file: "e", phoneme: "/e/", examples: [["b", underline("e"), "d"], ["r", underline("e"), "d"], ["h", underline("ea"), "d"]] },
  { file: "æ", phoneme: "/æ/", examples: [["c", underline("a"), "t"], ["m", underline("a"), "p"], ["bl", underline("a"), "ck"]] },
  { file: "ɑ", phoneme: "/ɑ/", examples: [["c", underline("ar")], ["st", underline("ar")], ["f", underline("a"), "ther"]] },
  { file: "ɔ", phoneme: "/ɔ/", examples: [["l", underline("aw")], ["t", underline("al"), "k"], [underline("aw"), "ful"]] },
  { file: "ʊ", phoneme: "/ʊ/", examples: [["b", underline("oo"), "k"], ["g", underline("oo"), "d"], ["p", underline("u"), "t"]] },
  { file: "u", phoneme: "/u/", examples: [["m", underline("oo"), "n"], ["bl", underline("ue")], ["f", underline("oo"), "d"]] },
  { file: "ʌ", phoneme: "/ʌ/", examples: [["c", underline("u"), "p"], ["s", underline("u"), "n"], ["l", underline("o"), "ve"]] },
  { file: "ə", phoneme: "/ə/", examples: [[underline("a"), "bout"], ["teach", underline("er")], ["sof", underline("a")]] },
  { file: "eɪ", phoneme: "/eɪ/", examples: [["d", underline("ay")], ["n", underline("a"), "me"], ["r", underline("ai"), "n"]] },
  { file: "aɪ", phoneme: "/aɪ/", examples: [["t", underline("i"), "me"], ["m", underline("y")], ["l", underline("igh"), "t"]] },
  { file: "ɔɪ", phoneme: "/ɔɪ/", examples: [["b", underline("oy")], ["c", underline("oi"), "n"], ["v", underline("oi"), "ce"]] },
  { file: "aʊ", phoneme: "/aʊ/", examples: [["n", underline("ow")], ["h", underline("ou"), "se"], ["cl", underline("ou"), "d"]] },
  { file: "oʊ", phoneme: "/oʊ/", examples: [["g", underline("o")], ["h", underline("o"), "me"], ["b", underline("oa"), "t"]] },
];

const consonantSounds: PhoneticSound[] = [
  { file: "b", phoneme: "/b/", examples: [[underline("b"), "ook"], ["ca", underline("b")], ["ru", underline("bb"), "er"]] },
  { file: "d", phoneme: "/d/", examples: [[underline("d"), "og"], ["ma", underline("d"), "e"], ["la", underline("dd"), "er"]] },
  { file: "dʒ", phoneme: "/dʒ/", examples: [[underline("j"), "ob"], [underline("g"), "iant"], ["bri", underline("dge")]] },
  { file: "f", phoneme: "/f/", examples: [[underline("f"), "ish"], [underline("ph"), "one"], ["lau", underline("gh")]] },
  { file: "g", phoneme: "/g/", examples: [[underline("g"), "o"], ["bi", underline("gg"), "er"], ["ba", underline("g")]] },
  { file: "h", phoneme: "/h/", examples: [[underline("h"), "at"], ["a", underline("h"), "ead"], [underline("h"), "ome"]] },
  { file: "j", phoneme: "/j/", examples: [[underline("y"), "es"], [underline("u"), "se"], ["m", underline("u"), "sic"]] },
  { file: "k", phoneme: "/k/", examples: [[underline("c"), "at"], [underline("k"), "ey"], ["ba", underline("ck")]] },
  { file: "l", phoneme: "/l/", examples: [[underline("l"), "eg"], ["be", underline("ll")], [underline("l"), "ight"]] },
  { file: "m", phoneme: "/m/", examples: [[underline("m"), "an"], ["su", underline("mm"), "er"], ["ti", underline("m"), "e"]] },
  { file: "n", phoneme: "/n/", examples: [[underline("n"), "o"], ["di", underline("nn"), "er"], ["su", underline("n")]] },
  { file: "p", phoneme: "/p/", examples: [[underline("p"), "en"], ["ha", underline("pp"), "y"], ["cu", underline("p")]] },
  { file: "r", phoneme: "/r/", examples: [[underline("r"), "ed"], ["ca", underline("rr"), "y"], [underline("r"), "ight"]] },
  { file: "s", phoneme: "/s/", examples: [[underline("s"), "ee"], [underline("c"), "ity"], ["bu", underline("s")]] },
  { file: "t", phoneme: "/t/", examples: [[underline("t"), "ea"], ["le", underline("tt"), "er"], ["ca", underline("t")]] },
  { file: "tʃ", phoneme: "/tʃ/", examples: [[underline("ch"), "air"], ["tea", underline("ch"), "er"], ["wa", underline("tch")]] },
  { file: "v", phoneme: "/v/", examples: [[underline("v"), "an"], ["se", underline("v"), "en"], ["lo", underline("v"), "e"]] },
  { file: "w", phoneme: "/w/", examples: [[underline("w"), "e"], [underline("qu"), "ick"], [underline("o"), "ne"]] },
  { file: "z", phoneme: "/z/", examples: [[underline("z"), "oo"], ["ea", underline("s"), "y"], ["no", underline("s"), "e"]] },
  { file: "ð", phoneme: "/ð/", examples: [[underline("th"), "is"], ["mo", underline("th"), "er"], ["brea", underline("th"), "e"]] },
  { file: "ŋ", phoneme: "/ŋ/", examples: [["si", underline("ng")], ["si", underline("ng"), "er"], ["lo", underline("ng")]] },
  { file: "ʃ", phoneme: "/ʃ/", examples: [[underline("sh"), "e"], ["na", underline("ti"), "on"], ["spe", underline("ci"), "al"]] },
  { file: "ʒ", phoneme: "/ʒ/", examples: [["vi", underline("s"), "ion"], ["mea", underline("s"), "ure"], ["bei", underline("ge")]] },
  { file: "θ", phoneme: "/θ/", examples: [[underline("th"), "ink"], ["ba", underline("th")], ["heal", underline("th"), "y"]] },
];

export const phoneticSections = [
  {
    title: "Vowels",
    sounds: vowelSounds.map(({ file, phoneme, examples }) => ({
      phoneme,
      audio: phoneticsMedia("vowels", file),
      examples,
    })),
  },
  {
    title: "Consonants",
    sounds: consonantSounds.map(({ file, phoneme, examples }) => ({
      phoneme,
      audio: phoneticsMedia("consonants", file),
      examples,
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
            // Make it.
          {
            english: ["Mak", underline("(e) i"), "(t)."],
            translation: "Faça",
            audio: media("consonant-vowel/k-ɪ/make-it.mp3"),
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
          // Turn off the lights.
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
          // Use it.
          {
            english: ["U", underline("s(e) i"), "(t)."],
            translation: "Use.",
            audio: media("consonant-vowel/z-ɪ/use-it.mp3"),
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
      // /v/ + /ɪ/
      {
        phoneme: "/v/ + /ɪ/",
        audio: [
          phoneticsMedia("consonants", "v"),
          phoneticsMedia("vowels", "ɪ"),
        ],
        group: [
          // Have a seat, please.
          {
            english: ["I lo", underline("v(e) i"), " (t)."],
            translation: "Eu amo.",
            audio: media("consonant-vowel/v-ɪ/i-love-it.mp3"),
          }
        ],
      },
      // Flap T - /t/ + /ə/
      {
        title: "Flat T",
        phoneme: "/t/ + /ə/",
        audio: [
          phoneticsMedia("consonants", "t"),
          phoneticsMedia("vowels", "ə"),
        ],
        group: [
          // I like it a lot.
          {
            english: ["I lik(e) i", underline("t a"), " lo(t)."],
            translation: "Eu gosto muito.",
            audio: media("consonant-vowel/t-ə/i-like-it-a-lot.mp3"),
          },
          // I’m out of time.
          {
            english: ["I’m ou", underline("t o"), "f tim(e)."],
            translation: "Estou sem tempo.",
            audio: media("consonant-vowel/t-ə/im-out-of-time.mp3"),
          },
          // Get a job.
          {
            english: ["Ge", underline("t a"), " jo(b)."],
            translation: "Arranje um emprego.",
            audio: media("consonant-vowel/t-ə/get-a-job.mp3"),
          },
          // Pick it up.
          {
            english: ["Pick i", underline("t u"), "(p)."],
            translation: "Pegue.",
            audio: media("consonant-vowel/t-ə/pick-it-up.mp3"),
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
          // Did you like i(t)?
          {
            english: "Did you like i(t)?",
            translation: "Você gostou?",
            audio: media("d+y/did-you-like-it.mp3"),
          },
          // Did you eat?
          {
            english: "Did you ea(t)?",
            translation: "Você comeu?",
            audio: media("d+y/did-you-eat.mp3"),
          },
          // Do you know what I mean?
          {
            english: "D(o) you know what I mean?",
            translation: "Você me entende?",
            audio: media("d+y/do-you-know-what-I-mean.mp3"),
          },
          // Would you like i(t)?
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
          // What’s your name?
          {
            english: "What’(s) your name?",
            translation: "Qual é o seu nome?",
            audio: media("t+y/whats-your-name.mp3"),
          },
          // Dont’t you like it?
          {
            english: "Don’t you like it?",
            translation: "Você não gosta?",
            audio: media("t+y/dont-you-like-it.mp3"),
          },
          // Dont’t you want it?
          {
            english: "Don’t you want it?",
            translation: "Você não quer?",
            audio: media("t+y/dont-you-want-it.mp3"),
          },
          // Didn’t you like it?
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
          // This year I wanna learn Spanish.
          {
            english: "This year I wanna learn Spanish.",
            translation: "Este ano eu quero aprender espanhol.",
            audio: media("s+y/ʃ/this-year-i-wanna-learn-spanish.mp3"),
          },
        ],
      },
      // /ʒ/
      {
        phoneme: "/ʒ/",
        audio: phoneticsMedia("consonants", "ʒ"),
        group: [
          // How’s your family?
          {
            english: "How’s your family?",
            translation: "Como está a sua família?",
            audio: media("s+y/ʒ/hows-your-family.mp3"),
          },
          // Where’s your phone?
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
