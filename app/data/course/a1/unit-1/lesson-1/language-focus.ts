import type { LanguageFocusData } from "../../../lesson-step-types";

const audio = (accent: "us" | "uk", file: string) =>
  `/media/course/a1/unit-1/lesson-1-hello/language-focus/${accent}/${file}`;

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Greet someone, introduce yourself, ask and spell someone's name, and end a conversation.",
  items: [
    ["Hello! / Hi!", "Use these expressions to greet someone.", "/həˈləʊ/ — /haɪ/", "Greeting", { us: audio("us", "hello-hi.mp3"), uk: audio("uk", "hello-hi.mp3") }, "Olá! / Oi!"],
    ["My name is Laura.", "Use this expression to tell someone your name.", "/maɪ ˈneɪm ɪz ˈlɔːrə/", "My name is + name", { us: audio("us", "my-names-laura.mp3"), uk: audio("uk", "my-names-laura.mp3") }, "Meu nome é Laura."],
    ["I'm Eric.", "This is a shorter way to tell someone your name.", "/aɪm ˈerɪk/", "I'm + name", { us: audio("us", "Im-eric.mp3"), uk: audio("uk", "Im-eric.mp3") }, "Eu sou Eric."],
    ["What's your name?", "Use this question to ask another person's name.", "/wɒts jə ˈneɪm/", "What + is + your + name?", { us: audio("us", "whats-your-name.mp3"), uk: audio("uk", "whats-your-name.mp3") }, "Qual é o seu nome?"],
    ["What's your first name?", "Use this question to ask for someone's given name.", "/wɒts jə ˈfɜːst neɪm/", "What + is + your + first name?", undefined, "Qual é o seu primeiro nome?"],
    ["What's your last name?", "Use this question to ask for someone's family name.", "/wɒts jə ˈlɑːst neɪm/", "What + is + your + last name?", { us: audio("us", "whats-your-last-name.mp3"), uk: audio("uk", "whats-your-last-name.mp3") }, "Qual é o seu sobrenome?"],
    ["How do you spell it?", "Use this question to ask how a name or word is spelled.", "/haʊ də juː ˈspel ɪt/", "How + do + you + spell + it?", { us: audio("us", "how-do-you-spell-it-1.mp3"), uk: audio("uk", "how-do-you-spell-it.mp3") }, "Como se soletra?"],
    ["Nice to meet you.", "Use this expression after someone introduces themselves.", "/naɪs tə ˈmiːt juː/", "Fixed expression", { us: audio("us", "nice-to-meet-you-1.mp3"), uk: audio("uk", "nice-to-meet-you.mp3") }, "Prazer em conhecer você."],
    ["Nice meeting you.", "Use this expression when ending a conversation with someone you have just met.", "/naɪs ˈmiːtɪŋ juː/", "Fixed expression", { uk: audio("uk", "nice-to-meeting-you.mp3") }, "Foi um prazer conhecer você."],
    ["Thanks.", "Use this expression to thank someone.", "/θæŋks/", "Fixed expression", { us: audio("us", "thanks.mp3"), uk: audio("uk", "thanks.mp3") }, "Obrigado. / Obrigada."],
    ["See you.", "Use this expression when saying goodbye.", "/siː juː/", "Fixed expression", { us: audio("us", "see-you.mp3"), uk: audio("uk", "see-you.mp3") }, "Até mais."],
  ],
} satisfies LanguageFocusData;
