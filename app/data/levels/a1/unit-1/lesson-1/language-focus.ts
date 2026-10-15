import type { LanguageFocusData } from "../../../lesson-step-types";

export const languageFocus = {
  type: "language-focus",
  slug: "language-focus",
  label: "Language focus",
  instruction:
    "Greet someone, introduce yourself, ask and spell someone's name, and end a conversation.",
  items: [
    ["Hello! / Hi!", "Use these expressions to greet someone.", "/həˈləʊ/ — /haɪ/", "Greeting"],
    ["My name is Laura.", "Use this expression to tell someone your name.", "/maɪ ˈneɪm ɪz ˈlɔːrə/", "My name is + name"],
    ["I'm Eric.", "This is a shorter way to tell someone your name.", "/aɪm ˈerɪk/", "I'm + name"],
    ["What's your name?", "Use this question to ask another person's name.", "/wɒts jə ˈneɪm/", "What + is + your + name?"],
    ["What's your first name?", "Use this question to ask for someone's given name.", "/wɒts jə ˈfɜːst neɪm/", "What + is + your + first name?"],
    ["What's your last name?", "Use this question to ask for someone's family name.", "/wɒts jə ˈlɑːst neɪm/", "What + is + your + last name?"],
    ["Nice to meet you.", "Use this expression after someone introduces themselves.", "/naɪs tə ˈmiːt juː/", "Fixed expression"],
    ["Nice meeting you.", "Use this expression when ending a conversation with someone you have just met.", "/naɪs ˈmiːtɪŋ juː/", "Fixed expression"],
    ["Thanks.", "Use this expression to thank someone.", "/θæŋks/", "Fixed expression"],
    ["See you.", "Use this expression when saying goodbye.", "/siː juː/", "Fixed expression"],
  ],
} satisfies LanguageFocusData;
