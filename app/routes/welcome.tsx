import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  Clock3,
  Flame,
  Play,
  Sparkles,
  Star,
  Target,
  Volume2,
} from "lucide-react";
import { Link } from "react-router";

import { learningLessons, learningLevels } from "@/data/learning";
import {
  getLearningProgressSummary,
  getLearningStep,
  isLearningLessonCompleted,
} from "@/utils/learning-progress";
import { learningSteps } from "./learn/step/types";

import { Button } from "@/components/ui/Button/Button";

const emojis = [
  {
    img: "/assets/img/emojis/good.gif",
    alt: '"thumb" up emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/g/good.mp3",
        word: "good",
      },
      {
        audio: "/assets/audio/dictionary/w/well.mp3",
        word: "well",
      },
    ],
  },
  {
    img: "/assets/img/emojis/happy.gif",
    alt: '"happy" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/h/happy.mp3",
        word: "happy",
      },
      {
        audio: "/assets/audio/dictionary/g/glad.mp3",
        word: "glad",
      },
    ],
  },
  {
    img: "/assets/img/emojis/sad.gif",
    alt: '"sad" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/s/sad.mp3",
        word: "sad",
      },
      {
        audio: "/assets/audio/dictionary/u/unhappy.mp3",
        word: "unhappy",
      },
    ],
  },
  {
    img: "/assets/img/emojis/angry.gif",
    alt: '"angry" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/a/angry.mp3",
        word: "angry (with)",
      },
      {
        audio: "/assets/audio/dictionary/m/mad.mp3",
        word: "mad (at)",
      },
    ],
  },
  {
    img: "/assets/img/emojis/annoyed.gif",
    alt: '"annoyed" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/a/annoyed.mp3",
        word: "annoyed",
      },
      {
        audio: "/assets/audio/dictionary/i/irritated.mp3",
        word: "irritated",
      },
    ],
  },
  {
    img: "/assets/img/emojis/calm.gif",
    alt: '"calm" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/c/calm.mp3",
        word: "calm",
      },
      {
        audio: "/assets/audio/dictionary/r/relaxed.mp3",
        word: "relaxed",
      },
    ],
  },
  {
    img: "/assets/img/emojis/crazy.gif",
    alt: '"crazy" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/c/crazy.mp3",
        word: "crazy",
      },
      {
        audio: "/assets/audio/dictionary/w/wacky.mp3",
        word: "wacky",
      },
    ],
  },
  {
    img: "/assets/img/emojis/tired.gif",
    alt: '"tired" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/t/tired.mp3",
        word: "tired",
      },
      {
        audio: "/assets/audio/dictionary/e/exhausted.mp3",
        word: "exhausted",
      },
    ],
  },
  {
    img: "/assets/img/emojis/anxious.gif",
    alt: '"anxious" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/a/anxious.mp3",
        word: "anxious",
      },
      {
        audio: "/assets/audio/dictionary/n/nervous.mp3",
        word: "nervous",
      },
    ],
  },
  {
    img: "/assets/img/emojis/bored.gif",
    alt: '"bored" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/b/bored.mp3",
        word: "bored",
      },
      {
        audio: "/assets/audio/dictionary/f/fed-up.mp3",
        word: "fed up (with)",
      },
    ],
  },
  {
    img: "/assets/img/emojis/hot.gif",
    alt: '"hot" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/h/hot.mp3",
        word: "hot",
      },
      {
        audio: "/assets/audio/dictionary/o/overheating.mp3",
        word: "overheating",
      },
    ],
  },
  {
    img: "/assets/img/emojis/in-love.gif",
    alt: '"in love" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/i/in-love.mp3",
        word: "in love",
      },
      {
        audio: "/assets/audio/dictionary/r/romantic.mp3",
        word: "romantic",
      },
    ],
  },
  {
    img: "/assets/img/emojis/loved.gif",
    alt: '"loved" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/l/loved.mp3",
        word: "loved",
      },
      {
        audio: "/assets/audio/dictionary/a/appreciated.mp3",
        word: "appreciated",
      },
    ],
  },
  {
    img: "/assets/img/emojis/heartbroken.gif",
    alt: '"heartbroken" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/h/heartbroken.mp3",
        word: "heartbroken",
      },
      {
        audio: "/assets/audio/dictionary/d/devastated.mp3",
        word: "devastated",
      },
    ],
  },
  {
    img: "/assets/img/emojis/silly.gif",
    alt: '"silly" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/s/silly.mp3",
        word: "silly",
      },
      {
        audio: "/assets/audio/dictionary/g/goofy.mp3",
        word: "goofy",
      },
    ],
  },
  {
    img: "/assets/img/emojis/scared.gif",
    alt: '"scared" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/s/scared.mp3",
        word: "scared (of)",
      },
      {
        audio: "/assets/audio/dictionary/a/afraid.mp3",
        word: "afraid (of)",
      },
    ],
  },
  {
    img: "/assets/img/emojis/thoughtful.gif",
    alt: '"thoughtful" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/t/thoughtful.mp3",
        word: "thoughtful",
      },
      {
        audio: "/assets/audio/dictionary/r/reflective.mp3",
        word: "reflective",
      },
    ],
  },
  {
    img: "/assets/img/emojis/frustrated.gif",
    alt: '"frustrated" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/f/frustrated.mp3",
        word: "frustrated",
      },
      {
        audio: "/assets/audio/dictionary/b/bothered.mp3",
        word: "bothered",
      },
    ],
  },
  {
    img: "/assets/img/emojis/disappointed.gif",
    alt: '"disappointed" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/d/disappointed.mp3",
        word: "disappointed",
      },
      {
        audio: "/assets/audio/dictionary/b/betrayed.mp3",
        word: "betrayed",
      },
    ],
  },
  {
    img: "/assets/img/emojis/embarrassed.gif",
    alt: '"embarrassed" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/e/embarrassed.mp3",
        word: "embarrassed",
      },
      {
        audio: "/assets/audio/dictionary/a/ashamed.mp3",
        word: "ashamed",
      },
    ],
  },
  {
    img: "/assets/img/emojis/sleepy.gif",
    alt: '"sleepy" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/s/sleepy.mp3",
        word: "sleepy",
      },
      {
        audio: "/assets/audio/dictionary/t/tired.mp3",
        word: "tired",
      },
    ],
  },
  {
    img: "/assets/img/emojis/peaceful.gif",
    alt: '"peaceful" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/p/peaceful.mp3",
        word: "peaceful",
      },
      {
        audio: "/assets/audio/dictionary/s/serene.mp3",
        word: "serene",
      },
    ],
  },
  {
    img: "/assets/img/emojis/thankful.gif",
    alt: '"thankful" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/t/thankful.mp3",
        word: "thankful",
      },
      {
        audio: "/assets/audio/dictionary/g/grateful.mp3",
        word: "grateful",
      },
    ],
  },
  {
    img: "/assets/img/emojis/sick.gif",
    alt: '"sick" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/s/sick.mp3",
        word: "sick",
      },
      {
        audio: "/assets/audio/dictionary/i/ill.mp3",
        word: "ill",
      },
    ],
  },
  {
    img: "/assets/img/emojis/i-dont-know.gif",
    alt: '"i-dont-know" emoji',
    words: [
      {
        audio: "/assets/audio/dictionary/i/i-dont-know.mp3",
        word: "I dont know",
      },
    ],
  },
];

export default function Welcome() {
  const [selectedFeeling, setSelectedFeeling] = useState<
    (typeof emojis)[number] | null
  >(null);
  const [currentLesson, setCurrentLesson] = useState(learningLessons[0]);
  const [progressSummary, setProgressSummary] = useState({
    completedLessons: 0,
    streak: 0,
    totalXp: 0,
  });

  useEffect(() => {
    setCurrentLesson(
      learningLessons.find((lesson) => !isLearningLessonCompleted(lesson.id)) ??
        learningLessons[learningLessons.length - 1],
    );
    setProgressSummary(getLearningProgressSummary(learningLessons));
  }, []);

  const currentUnitLessons = learningLessons.filter(
    (lesson) =>
      lesson.level === currentLesson.level &&
      lesson.unitId === currentLesson.unitId,
  );
  const currentLessonPosition =
    currentUnitLessons.findIndex((lesson) => lesson.id === currentLesson.id) +
    1;
  const currentProgress =
    (currentLessonPosition / currentUnitLessons.length) * 100;
  const isCurrentLevelA1 = currentLesson.level === "a1";
  const currentLevel =
    learningLevels[currentLesson.level as keyof typeof learningLevels];
  const currentStep =
    learningSteps[
      Math.min(getLearningStep(currentLesson.id), learningSteps.length - 1)
    ] ?? learningSteps[0];

  const hour = new Date().getHours();

  const greetings =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  const playFeeling = (audio: string) => {
    new Audio(audio).play();
  };

  return (
    <main className="mx-auto w-[calc(100%_-_24px)] max-w-[980px] pt-6 pb-20 text-slate-800 dark:text-slate-100">
      <header className="mb-7 flex items-end justify-between gap-5 max-[620px]:items-start">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-[.13em] text-green-700 dark:text-lime-400">
            <Sparkles size={15} /> YOUR DAILY ENGLISH
          </span>
          <h1 className="mt-2 text-[clamp(2rem,6vw,3.4rem)] leading-none font-black">
            {greetings}, Paulo!
          </h1>
        </div>
      </header>

      <section className="mb-6 grid grid-cols-[1.6fr_1fr] gap-5 max-[760px]:grid-cols-1">
        <article
          className={`relative overflow-hidden rounded-3xl bg-linear-to-br px-6 py-4 max-[520px]:p-5 ${isCurrentLevelA1 ? "from-yellow-400 to-amber-600 text-slate-900" : "from-red-500 to-red-700 text-white"}`}
        >
          <div className="absolute -top-12 -right-10 size-48 rounded-full bg-white/10" />
          <div className="absolute right-20 -bottom-20 size-40 rounded-full bg-white/10" />
          <div className="relative">
            <h2 className="mt-2 text-3xl font-extrabold">
              {currentLevel.label.replace(" ", " · ")}
            </h2>
            <h3 className="mt-2 text-2xl font-black">{currentLesson.title}</h3>
            <p className="mt-2 max-w-[490px] opacity-90">
              {currentLesson.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-950/20">
                <span
                  className="block h-full rounded-full bg-white"
                  style={{ width: `${currentProgress}%` }}
                />
              </div>
              <span className="text-sm font-extrabold">
                {currentLessonPosition} / {currentUnitLessons.length}
              </span>
            </div>
            <Button
              variant={isCurrentLevelA1 ? "answer" : "danger"}
              className="mt-6 mb-4"
              to={`/learn/${currentLesson.level}/${currentLesson.unitId}/${currentLesson.slug}/${currentStep}`}
            >
              Continue learning
            </Button>
          </div>
        </article>

        <article className="rounded-[24px] border-2 border-slate-200 bg-white p-6 dark:border-slate-600 dark:bg-slate-800">
          <div className="flex items-center justify-between">
            <div className="grid size-11 place-items-center rounded-xl bg-sky-100 text-sky-600 dark:bg-sky-950 dark:text-sky-300">
              <Target />
            </div>
            <span className="text-xs font-black tracking-[.1em] text-slate-400">
              DAILY GOAL
            </span>
          </div>
          <h2 className="mt-5 text-2xl font-black">6 of 10 minutes</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
            You're more than halfway there.
          </p>
          <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <span className="block h-full w-3/5 rounded-full bg-sky-500" />
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm font-bold text-sky-700 dark:text-sky-300">
            <Clock3 size={16} /> 4 minutes to go
          </div>
        </article>
      </section>

      <section className="mb-6 grid grid-cols-3 gap-4 max-[620px]:grid-cols-1">
        {[
          {
            icon: Flame,
            value: String(progressSummary.streak),
            label: "day streak",
            color: "text-orange-500 bg-orange-50 dark:bg-orange-950",
          },
          {
            icon: Star,
            value: String(progressSummary.totalXp),
            label: "total XP",
            color: "text-amber-500 bg-amber-50 dark:bg-amber-950",
          },
          {
            icon: Check,
            value: String(progressSummary.completedLessons),
            label: "lessons done",
            color: "text-green-600 bg-green-50 dark:bg-green-950",
          },
        ].map(({ icon: Icon, value, label, color }) => (
          <article
            className="flex items-center gap-3 rounded-[18px] border-2 border-slate-200 bg-white p-4 dark:border-slate-600 dark:bg-slate-800"
            key={label}
          >
            <div
              className={`grid size-11 shrink-0 place-items-center rounded-xl ${color}`}
            >
              <Icon size={22} />
            </div>
            <div>
              <strong className="block text-xl font-black">{value}</strong>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {label}
              </span>
            </div>
          </article>
        ))}
      </section>

      <section className="mb-6 rounded-3xl border-2 border-slate-200 bg-white p-6 max-[520px]:p-4 dark:border-slate-600 dark:bg-slate-800">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs font-black tracking-[.12em] text-sky-600 dark:text-sky-400">
              QUICK PRACTICE
            </span>
            <h2 className="mt-1 text-2xl font-black">
              How are you feeling today?
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] place-items-center gap-4">
          {emojis.map((feeling) => {
            const label = feeling.words[0]?.word ?? "Feeling";
            const selected = selectedFeeling?.img === feeling.img;
            return (
              <button
                className={`flex h-30 w-35 flex-col items-center justify-center rounded-[15px] border-0 px-3 py-4 font-extrabold capitalize transition-[transform,box-shadow,background-color,color] active:translate-y-[3px] ${selected ? "bg-sky-100 text-sky-700 shadow-[0_3px_0_#38bdf8] dark:bg-sky-950 dark:text-sky-300 dark:shadow-[0_3px_0_#0284c7]" : "bg-slate-50 text-slate-600 shadow-[0_5px_0_#d7dce0] hover:bg-sky-50 hover:text-sky-700 active:shadow-[0_2px_0_#d7dce0] dark:bg-slate-700 dark:text-slate-200 dark:shadow-[0_5px_0_#334155]"}`}
                key={feeling.img}
                onClick={() => setSelectedFeeling(feeling)}
              >
                <img
                  className="mb-2 size-16 object-contain"
                  src={feeling.img}
                  alt=""
                />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
        {selectedFeeling && (
          <div className="mt-6 flex flex-wrap items-center gap-4 rounded-[16px] bg-sky-50 p-4 text-sky-800 dark:bg-sky-950 dark:text-sky-200">
            <img
              className="size-16 object-contain"
              src={selectedFeeling.img}
              alt={selectedFeeling.alt}
            />
            <div className="mr-auto">
              <span className="text-xs font-black tracking-[.1em]">
                LISTEN AND REPEAT
              </span>
              <p className="font-extrabold">How are you feeling today?</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {selectedFeeling.words.map((word) => (
                <button
                  className="flex items-center gap-2 rounded-[13px] border-0 bg-white px-4 py-3 font-extrabold text-sky-700 shadow-[0_4px_0_#bae6fd] active:translate-y-[2px] active:shadow-[0_2px_0_#bae6fd] dark:bg-slate-800 dark:text-sky-300 dark:shadow-[0_4px_0_#075985]"
                  key={word.word}
                  onClick={() => playFeeling(word.audio)}
                  aria-label={`Listen to ${word.word}`}
                >
                  <Volume2 size={18} /> {word.word}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between">
          <div>
            <span className="text-xs font-black tracking-[.12em] text-green-700 dark:text-lime-400">
              KEEP PRACTICING
            </span>
            <h2 className="mt-1 text-2xl font-black">
              What do you want to do?
            </h2>
          </div>
          <Link
            className="flex items-center gap-1 text-sm font-extrabold text-green-700 no-underline dark:text-lime-400"
            to="/learn"
          >
            View path <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4 max-[620px]:grid-cols-1">
          {[
            {
              icon: BookOpen,
              title: "Review vocabulary",
              detail: "8 words ready",
            },
            {
              icon: Volume2,
              title: "Practice speaking",
              detail: "5 quick phrases",
            },
            { icon: Star, title: "Earn more XP", detail: "Complete a lesson" },
          ].map(({ icon: Icon, title, detail }) => (
            <Link
              className="group flex items-center gap-3 rounded-[18px] border-2 border-slate-200 bg-white p-4 text-slate-700 no-underline shadow-[0_4px_0_#e2e8f0] transition-transform hover:-translate-y-0.5 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:shadow-[0_4px_0_#334155]"
              to="/learn"
              key={title}
            >
              <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-lime-100 text-green-700 dark:bg-green-950 dark:text-lime-400">
                <Icon size={21} />
              </div>
              <div>
                <strong className="block text-sm font-extrabold">
                  {title}
                </strong>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {detail}
                </span>
              </div>
              <ArrowRight
                className="ml-auto text-slate-300 transition-transform group-hover:translate-x-1"
                size={18}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
