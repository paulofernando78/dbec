//! Layout tokens
// icons
// audio
// bullet
// square
// lineBreak

//! Content tokens
// bold
// italic
// mark
// underline
// boldMark
// phonetics
// portuguese
// example

//! Builders
// baseToken
// content

export type TokenType =
  | "bold"
  | "italic"
  | "stressed"
  | "mark"
  | "underline"
  | "bold-mark"
  | "phonetics"
  | "portuguese"
  | "connector";

export type ContentToken = {
  part?: string;
  type?: TokenType;
  icons?: string[];
  audio?: string;
  bullet?: boolean;
  square?: boolean;
  lineBreak?: boolean;
};

export type BaseTokenProps = {
  icons?: string[];
  audio?: string;
  audioSrc?: string;
  bullet?: boolean;
  parts?: ContentToken[];
  phonetics?: string;
  connector?: string;
  square?: boolean;
  lineBreak?: boolean;
};

//! Layout tokens
export function baseToken({
  icons = [],
  audio,
  audioSrc,
  bullet = true,
  parts = [],
  phonetics,
  connector,
  square = true,
  lineBreak,
}: BaseTokenProps): ContentToken[] {
  const blocks: ContentToken[] = [];

  if (icons.length) {
    blocks.push({ icons });
  }

  if (audio || audioSrc) {
    blocks.push({ audio: audio ?? audioSrc });
  }

  if (bullet) {
    blocks.push({ bullet: true });
  }

  blocks.push(...parts);

  if (phonetics) {
    blocks.push({ part: phonetics, type: "phonetics" });
    blocks.push({ part: " " });
  }

  if (connector) {
    blocks.push({ part: connector, type: "connector" });
  }

  if (square) {
    blocks.push({ part: " " });
    blocks.push({ square: true });
    blocks.push({ part: " " });
  }

  if (lineBreak) {
    blocks.push({ lineBreak: true });
  }

  return blocks;
}

//! Tokens

// Icon
export const icon = (
  name: string
): ContentToken => ({
  icons: [name],
});

// audio
export const audio = (
  src: string
): ContentToken => ({
  audio: src,
});

export const wordAudio = (
  file: string
): string => {
  const first = file?.[0]?.toLowerCase();

  if (!first || !/[a-z]/.test(first)) {
    return `/assets/audio/dictionary/${file}`;
  }

  return `/assets/audio/dictionary/${first}/${file}`;
};

// bold
export const bold = (
  text: string
): ContentToken => ({
  part: text,
  type: "bold",
});

// bold
export const italic = (
  text: string
): ContentToken => ({
  part: text,
  type: "italic",
});

// mark
export const stressed = (
  text: string
): ContentToken => ({
  part: text,
  type: "stressed",
});

// mark
export const mark = (
  text: string
): ContentToken => ({
  part: text,
  type: "mark",
});

// underline
export const underline = (
  text: string
): ContentToken => ({
  part: text,
  type: "underline",
});

// bold mark
export const boldMark = (
  text: string
): ContentToken => ({
  part: text,
  type: "bold-mark",
});

// phonetics
export const phonetics = (
  text: string
): ContentToken => ({
  part: text,
  type: "phonetics",
});

export const example = (
  text: string
): ContentToken => ({
  part: ` ${text}`,
  bullet: true,
  square: false,
});

// portuguese
export const portuguese = (
  text: string
): ContentToken => ({
  part: text,
  type: "portuguese",
});

// portuguese
export const connector = (
  text: string
): ContentToken => ({
  part: text,
  type: "connector",
});

//! Builders
export const content = ({
  icons = [],
  ...opts
}: BaseTokenProps): ContentToken[] =>
  baseToken({
    icons,
    ...opts,
    bullet: false,
    square: false,
  });

export const text = (
  parts: ContentToken[] = []
): ContentToken[] => parts;

export const attention = ({
  icons = [],
  ...opts
}: BaseTokenProps): ContentToken[] =>
  baseToken({
    ...opts,
    icons: ["attention", ...icons],
    bullet: false,
    square: false,
  });

export const word = (
  opts: BaseTokenProps
): ContentToken[] =>
  baseToken({
    ...opts,
    square: false,
  });

export const wordRowList = (
  opts: BaseTokenProps
): ContentToken[] =>
  baseToken({
    bullet: false,
    square: true,
    ...opts,
  });

export const wordColumnList = (
  opts: BaseTokenProps
): ContentToken[] =>
  baseToken({
    ...opts,
    bullet: false,
  });

export type WordComparisonProps = {
  left: BaseTokenProps;
  right: BaseTokenProps;
};

export const wordVariant = ({
  left,
  right,
}: WordComparisonProps): ContentToken[] => [
  ...wordRowList({ ...left, square: false }),
  {
    part: "or ",
    type: "connector",
  },
  ...wordRowList({ ...right, square: false }),
];
export const wordComparison = ({
  left,
  right,
}: WordComparisonProps): ContentToken[] => [
  ...wordRowList({ ...left, square: false }),
  {
    part: "vs. ",
    type: "connector",
  },
  ...wordRowList({ ...right, square: false }),
];

export const dictionary = (
  file: string
): string => {
  const first = file?.[0]?.toLowerCase();

  return `/assets/img/dictionary/${first}/${file}`;
};
