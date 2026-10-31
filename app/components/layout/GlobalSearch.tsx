import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import { CircleX, Search, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { levels } from "@/data/course";
import { authenticContentTedEdLessons } from "@/data/authentic-content/ted-ed/ted-ed-lessons-card-data";
import { authenticContentsTedEdRoutes } from "@/data/authentic-content/ted-ed";
import { lessonRegistry } from "@/data/course/lesson-registry";
import { DictionaryWordCard } from "@/features/Dictionary/DictionaryWordCard";
import {
  flattenDictionaryDefinitions,
  loadDictionaryLetter,
  type DictionaryDefinition,
} from "@/utils/loadDictionaryWord";

type SearchItem = {
  title: string;
  category: string;
  description: string;
  href: string;
  keywords?: string;
  fullText?: string;
};

type SearchResult = SearchItem & { snippet: string };

const ignoredContentKeys = new Set([
  "audio",
  "component",
  "href",
  "image",
  "poster",
  "src",
  "video",
]);

const extractText = (value: unknown, seen = new WeakSet<object>()): string[] => {
  if (typeof value === "string") return [value];
  if (value == null || typeof value !== "object") return [];
  if (seen.has(value)) return [];
  seen.add(value);

  if (Array.isArray(value)) {
    return value.flatMap((item) => extractText(item, seen));
  }

  return Object.entries(value).flatMap(([key, item]) =>
    ignoredContentKeys.has(key) ? [] : extractText(item, seen),
  );
};

const cleanText = (parts: readonly string[]) =>
  parts.join(" ").replace(/\s+/g, " ").trim();

const pageItems: readonly SearchItem[] = [
  { title: "Course", category: "Page", description: "English courses from A1 to C1.", href: "/course", keywords: "levels lessons units" },
  { title: "Authentic Content", category: "Page", description: "Authentic videos and real-world topics.", href: "/authentic-content" },
  { title: "Travel", category: "Page", description: "English for common travel situations.", href: "/travel" },
  { title: "Vocabulary", category: "Page", description: "Commonly confused English words.", href: "/vocabulary" },
  { title: "Expressions", category: "Page", description: "Common English expressions organized by theme.", href: "/expressions" },
  { title: "Grammar", category: "Page", description: "English grammar forms and structures.", href: "/grammar" },
  { title: "Pronunciation", category: "Page", description: "English sounds, stress, and intonation.", href: "/pronunciation" },
  { title: "Songs", category: "Page", description: "Learn English through songs.", href: "/songs" },
  { title: "Games", category: "Page", description: "Learn and explore through games.", href: "/games" },
  { title: "CEFR", category: "Page", description: "The Common European Framework of Reference.", href: "/cefr" },
  { title: "Hear vs. Listen", category: "Vocabulary", description: "Receiving a sound versus paying attention to it.", href: "/vocabulary#hear-vs-listen", keywords: "ouvir escutar sound" },
  { title: "Speak vs. Say vs. Tell", category: "Vocabulary", description: "Speaking and giving information.", href: "/vocabulary#speak-vs-say-vs-tell", keywords: "falar dizer contar" },
  { title: "Quick vs. Fast", category: "Vocabulary", description: "Short duration versus high speed.", href: "/vocabulary#quick-vs-fast", keywords: "quickly fastly rápido velocidade" },
  { title: "Frozen vs. Frostbite", category: "Vocabulary", description: "Being frozen versus an injury caused by extreme cold.", href: "/vocabulary#frozen-vs-frostbite", keywords: "frostbitten congelado frio lesão" },
  { title: "Future Forms", category: "Grammar", description: "Will, be going to, and the present continuous.", href: "/grammar#future-forms", keywords: "will going to future futuro" },
  { title: "Maybe vs. May be", category: "Grammar", description: "An adverb versus the modal may followed by be.", href: "/grammar#modal-verbs", keywords: "perhaps might possibility possibilidade" },
];

const expressionData = [
  ["Better late than never", "É melhor fazer algo com atraso do que nunca fazer.", "everyday-conversation", "antes tarde do que nunca"],
  ["So far, so good", "Até agora, tudo está indo bem.", "everyday-conversation", "até agora tudo bem"],
  ["Speak of the devil", "Usada quando a pessoa de quem você falava aparece.", "everyday-conversation", "falando no diabo falando nele"],
  ["If the shoe fits, wear it", "Se uma crítica se aplica a você, aceite-a.", "opinions-and-agreement", "se a carapuça serve"],
  ["You can say that again", "Concordo totalmente.", "opinions-and-agreement", "nem me fale com certeza"],
  ["To each their own", "Cada pessoa tem seus próprios gostos.", "opinions-and-agreement", "cada um com seu gosto"],
  ["Bite the bullet", "Enfrentar uma situação difícil com coragem.", "problems-and-decisions", "encarar enfrentar"],
  ["Back to square one", "Voltar ao início após uma tentativa falhar.", "problems-and-decisions", "estaca zero recomeçar"],
  ["It's not the end of the world", "O problema não é tão grave quanto parece.", "problems-and-decisions", "não é o fim do mundo"],
  ["Get the ball rolling", "Começar uma atividade ou processo.", "work-and-progress", "começar dar início"],
  ["Learn the ropes", "Aprender como um trabalho funciona.", "work-and-progress", "aprender pegar o jeito"],
  ["Go the extra mile", "Fazer mais do que o esperado.", "work-and-progress", "esforço extra"],
  ["Break the ice", "Iniciar uma conversa e deixar as pessoas à vontade.", "feelings-and-relationships", "quebrar o gelo"],
  ["On the same wavelength", "Ter pensamentos ou opiniões semelhantes.", "feelings-and-relationships", "estar em sintonia"],
  ["Give someone the benefit of the doubt", "Acreditar na pessoa quando não há provas contra ela.", "feelings-and-relationships", "benefício da dúvida"],
] as const;

const expressionItems: readonly SearchItem[] = expressionData.map(
  ([title, description, section, keywords]) => ({
    title,
    category: "Expression",
    description,
    href: `/expressions#${section}`,
    keywords,
  }),
);

const authenticContentItems: readonly SearchItem[] =
  authenticContentTedEdLessons.map((lesson) => ({
    title: lesson.label,
    category: "Authentic Content · TED-Ed",
    description: lesson.description,
    href: lesson.href,
    keywords: [
      lesson.objective,
      lesson.usefulLanguage,
      lesson.vocabulary,
      lesson.skills,
      lesson.finalTask,
      lesson.date,
    ].join(" "),
  }));

const courseItems: readonly SearchItem[] = Object.values(levels).flatMap((level) =>
  level.units.flatMap((unit) => [
    {
      title: `${level.code} · Unit ${unit.number}: ${unit.title}`,
      category: "Course unit",
      description: unit.description,
      href: `/course/${level.slug}`,
      keywords: `${level.name} ${level.subtitle}`,
    },
    ...unit.lessons.slice(0, 2).map((lesson, index) => ({
      title: lesson.title,
      category: `${level.code} · Unit ${unit.number} · Lesson ${index + 1}`,
      description: lesson.description,
      href: `/course/${level.slug}/unit/${unit.number}/lesson/${index + 1}`,
      keywords: `${unit.title} ${unit.description}`,
    })),
  ]),
);

const courseStepItems: readonly SearchItem[] = Object.entries(lessonRegistry)
  .filter(([key]) => /^(a1|a2|a2-b1|b1|b2|c1)\//.test(key))
  .flatMap(([key, lesson]) => {
    const [level, unit, lessonNumber] = key.split("/");
    return lesson.steps.map((step) => {
      const fullText = cleanText([
        lesson.unit.title,
        lesson.lesson.title,
        step.label,
        ...extractText(step),
      ]);

      return {
        title: lesson.lesson.title,
        category: `${level.toUpperCase()} · Unit ${unit} · ${step.label}`,
        description: fullText,
        fullText,
        href: `/course/${level}/unit/${unit}/lesson/${lessonNumber}/${step.slug}`,
      };
    });
  });

const authenticStepSlugs: Record<string, string> = {
  beforeWatching: "before-watching",
  vocabulary: "vocabulary",
  gist: "gist",
  details: "details",
  script: "details",
  practice: "practice",
  followUpDiscussion: "follow-up-discussion",
};

const authenticStepItems: readonly SearchItem[] = Object.entries(
  authenticContentsTedEdRoutes,
).flatMap(([slug, lesson]) => {
  const card = authenticContentTedEdLessons.find(
    (item) => item.href === `/authentic-content/ted-ed/${slug}`,
  );
  const title = card?.label ?? slug;

  return Object.entries(lesson.sections).map(([section, content]) => {
    const stepSlug = authenticStepSlugs[section] ?? section;
    const fullText = cleanText([title, section, ...extractText(content)]);

    return {
      title,
      category: `Authentic Content · ${stepSlug.replaceAll("-", " ")}`,
      description: fullText,
      fullText,
      href: `/authentic-content/ted-ed/${slug}/${stepSlug}`,
    };
  });
});

const searchItems = [
  ...pageItems,
  ...expressionItems,
  ...authenticContentItems,
  ...authenticStepItems,
  ...courseItems,
  ...courseStepItems,
];
const normalize = (value: string) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const createSnippet = (text: string, terms: readonly string[]) => {
  const normalizedText = normalize(text);
  const positions = terms
    .map((term) => normalizedText.indexOf(term))
    .filter((position) => position >= 0);
  const matchAt = positions.length ? Math.min(...positions) : 0;
  const start = Math.max(0, matchAt - 70);
  const end = Math.min(text.length, matchAt + 150);
  const prefix = start > 0 ? "…" : "";
  const suffix = end < text.length ? "…" : "";
  return `${prefix}${text.slice(start, end).trim()}${suffix}`;
};

function HighlightedSnippet({ text, query }: { text: string; query: string }) {
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  const normalizedText = normalize(text);
  const matches = terms
    .map((term) => ({ term, index: normalizedText.indexOf(term) }))
    .filter((match) => match.index >= 0)
    .sort((first, second) => first.index - second.index);
  const match = matches[0];

  if (!match) return text;

  return (
    <>
      {text.slice(0, match.index)}
      <mark className="rounded bg-yellow-200 px-0.5 text-inherit dark:bg-yellow-700">
        {text.slice(match.index, match.index + match.term.length)}
      </mark>
      {text.slice(match.index + match.term.length)}
    </>
  );
}

export function GlobalSearch({ closeNavBar }: { closeNavBar: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [shortcutLabel, setShortcutLabel] = useState<string | null>(null);
  const [dictionaryEntry, setDictionaryEntry] =
    useState<DictionaryDefinition | null>(null);
  const [isDictionaryLoading, setIsDictionaryLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const searchedWord = normalize(query).trim();
    const firstLetter = searchedWord[0];

    if (!searchedWord || !firstLetter || !/[a-z]/.test(firstLetter)) {
      setDictionaryEntry(null);
      setIsDictionaryLoading(false);
      return;
    }

    let cancelled = false;
    setIsDictionaryLoading(true);

    loadDictionaryLetter(firstLetter)
      .then((data) => {
        if (cancelled) return;

        const definitions = flattenDictionaryDefinitions(data);
        const exactMatch = definitions.find(
          (entry) => normalize(entry.word).trim() === searchedWord,
        );
        const prefixMatch = definitions.find((entry) =>
          normalize(entry.word).trim().startsWith(searchedWord),
        );
        setDictionaryEntry(exactMatch ?? prefixMatch ?? null);
      })
      .catch(() => {
        if (!cancelled) setDictionaryEntry(null);
      })
      .finally(() => {
        if (!cancelled) setIsDictionaryLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [query]);

  const results = useMemo<SearchResult[]>(() => {
    const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    return searchItems
      .filter((item) => {
        const text = normalize(`${item.title} ${item.category} ${item.fullText ?? item.description} ${item.keywords ?? ""}`);
        return terms.every((term) => text.includes(term));
      })
      .map((item) => ({
        ...item,
        snippet: createSnippet(
          item.fullText ?? `${item.description} ${item.keywords ?? ""}`,
          terms,
        ),
      }))
      .slice(0, 12);
  }, [query]);

  const close = () => {
    setIsOpen(false);
    setQuery("");
    setActiveIndex(0);
    setDictionaryEntry(null);
  };

  const selectResult = (item: SearchItem) => {
    navigate(item.href);
    close();
    closeNavBar();
  };

  useEffect(() => {
    const browserNavigator = navigator as Navigator & {
      userAgentData?: { mobile?: boolean; platform?: string };
    };
    const isTouchMac =
      /Mac/.test(browserNavigator.platform) && browserNavigator.maxTouchPoints > 1;
    const isMobile =
      browserNavigator.userAgentData?.mobile === true ||
      /Android|iPhone|iPad|iPod|Mobile/i.test(browserNavigator.userAgent) ||
      isTouchMac;

    if (isMobile) {
      setShortcutLabel(null);
      return;
    }

    const platform =
      browserNavigator.userAgentData?.platform ?? browserNavigator.platform;
    setShortcutLabel(/Mac/.test(platform) ? "⌘ K" : "Ctrl + K");
  }, []);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsOpen((current) => !current);
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => setActiveIndex(0), [query]);

  return (
    <>
      <div className="mb-2 flex items-center gap-2">
        <Button ariaLabel="Search" icon={<Search />} onClick={() => setIsOpen(true)} className="size-10! p-0.75!" />
        <span className="font-bold uppercase">Search</span>
        {shortcutLabel && (
          <kbd className="ml-auto rounded bg-[var(--background)] px-1.5 py-0.5 text-xs">
            {shortcutLabel}
          </kbd>
        )}
      </div>

      {isOpen && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/45 p-4 backdrop-blur-[2px]">
          <section
            role="dialog"
            aria-modal="true"
            aria-label="Global search"
            className="flex h-[min(70vh,600px)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-[var(--surface)] shadow-2xl ring-1 ring-slate-300"
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                if (query) {
                  setQuery("");
                  inputRef.current?.focus();
                } else {
                  close();
                }
              }
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setActiveIndex((index) => Math.min(index + 1, results.length - 1));
              }
              if (event.key === "ArrowUp") {
                event.preventDefault();
                setActiveIndex((index) => Math.max(index - 1, 0));
              }
              if (event.key === "Enter" && results[activeIndex]) selectResult(results[activeIndex]);
            }}
          >
            <div className="flex items-center gap-3 border-b border-slate-200 p-3 dark:border-slate-700">
              <Search className="size-5 shrink-0 text-slate-400" />
              <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search lessons, vocabulary, expressions..." aria-label="Search all content" className="min-w-0 flex-1 bg-transparent py-2 text-lg outline-none placeholder:text-slate-400" />
              {query && (
                <Button
                  ariaLabel="Clear search"
                  icon={<CircleX />}
                  onClick={() => {
                    setQuery("");
                    inputRef.current?.focus();
                  }}
                  className="size-10! p-0.75!"
                />
              )}
              <Button
                ariaLabel="Close search"
                icon={<X />}
                onClick={close}
                className="size-10! p-0.75!"
              />
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto p-2">
              {!query.trim() && <p className="p-6 text-center text-slate-500">Type any word to search across the site.</p>}
              {query.trim() && isDictionaryLoading && (
                <p className="px-4 py-2 text-sm text-slate-500">Checking Dictionary…</p>
              )}
              {dictionaryEntry && (
                <section className="mb-3">
                  <h2 className="px-2 pb-2 text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Dictionary
                  </h2>
                  <DictionaryWordCard entry={dictionaryEntry} />
                </section>
              )}
              {query.trim() && !isDictionaryLoading && !dictionaryEntry && !results.length && (
                <p className="p-6 text-center text-slate-500">No results found.</p>
              )}
              {!!results.length && (
                <h2 className="px-2 pb-1 pt-2 text-xs font-black uppercase tracking-wider text-slate-500">
                  Pages and lessons
                </h2>
              )}
              {results.map((item, index) => (
                <Button
                  key={`${item.href}-${item.category}-${item.title}-${index}`}
                  ariaLabel={`Open ${item.title}`}
                  variant="list"
                  pressed={index === activeIndex}
                  onClick={() => selectResult(item)}
                  className={`p-3! ${index === activeIndex ? "bg-[var(--background)]" : ""}`}
                >
                  <span onMouseEnter={() => setActiveIndex(index)} className="block w-full">
                    <span className="mb-1 block text-xs font-black uppercase tracking-wide text-blue-600 dark:text-blue-400">{item.category}</span>
                    <span className="block font-black text-[var(--text-color)]">{item.title}</span>
                    <span className="mt-1 block text-sm font-normal whitespace-normal text-slate-500">
                      <HighlightedSnippet text={item.snippet} query={query} />
                    </span>
                  </span>
                </Button>
              ))}
            </div>
          </section>
        </div>, document.body,
      )}
    </>
  );
}
