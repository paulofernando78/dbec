// import styles from "./Emoji.module.css";

import { Image } from "@/components/ui/Image";
import { Audio } from "@/components/ui/Audio";
import { Line } from "@/components/content/Line";

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
  return (
    <>
      <div className="my-8 text-center">
        <h2 className="mb-2 text-3xl font-bold">Welcome</h2>
        <h3 className="text-2xl font-bold">How are you feeling today?</h3>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,9rem)] gap-2 justify-center">
        {emojis.map((emoji, emojiIndex) => (
          <div key={emojiIndex}>
            <div className="p-1 flex flex-col border border-gray-300 rounded-lg">
              <Image src={emoji.img} alt={emoji.alt} width={60} height={60} />
              {emoji.words &&
                emoji.words.map((word, wordIndex) => (
                  <div key={wordIndex} className="flex items-center gap-2">
                    {word.audio && <Audio src={word.audio} />}
                    <span key={wordIndex} className="">
                      {word.word}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
