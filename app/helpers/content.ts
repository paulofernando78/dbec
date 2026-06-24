//! Layout tokens
// icons
// audio
// bullet
// lineBreak

//! Content tokens`
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
  lineBreak?: boolean;
};

export type ContentValue = string | ContentToken;

export type BaseTokenProps = {
  icons?: string[];
  audio?: string;
  audioSrc?: string;
  bullet?: boolean;
  parts?: ContentValue[];
  phonetics?: string;
  connector?: string;
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
  lineBreak,
}: BaseTokenProps): ContentValue[] {
  const blocks: ContentValue[] = [];

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

  if (lineBreak) {
    blocks.push({ lineBreak: true });
  }

  return blocks;
}

//! Tokens

// Icon
export const icon = (name: string): ContentToken => ({
  icons: [name],
});

// audio
export const audio = (src: string): ContentToken => ({
  audio: src,
});

export const wordAudio = (file: string): string => {
  const first = file?.[0]?.toLowerCase();

  if (!first || !/[a-z]/.test(first)) {
    return `/assets/audio/dictionary/${file}`;
  }

  return `/assets/audio/dictionary/${first}/${file}`;
};

// bold
export const bold = (text: string): ContentToken => ({
  part: text,
  type: "bold",
});

// bold
export const italic = (text: string): ContentToken => ({
  part: text,
  type: "italic",
});

// mark
export const stressed = (text: string): ContentToken => ({
  part: text,
  type: "stressed",
});

// mark
export const mark = (text: string): ContentToken => ({
  part: text,
  type: "mark",
});

// underline
export const underline = (text: string): ContentToken => ({
  part: text,
  type: "underline",
});

// bold mark
export const boldMark = (text: string): ContentToken => ({
  part: text,
  type: "bold-mark",
});

// phonetics
export const phonetics = (text: string): ContentToken => ({
  part: text,
  type: "phonetics",
});

export const example = (text: string): ContentToken => ({
  part: ` ${text}`,
  bullet: true,
});

// portuguese
export const portuguese = (text: string): ContentToken => ({
  part: text,
  type: "portuguese",
});

// portuguese
export const connector = (text: string): ContentToken => ({
  part: text,
  type: "connector",
});

//! Builders
export const content = ({
  icons = [],
  ...opts
}: BaseTokenProps): ContentValue[] =>
  baseToken({
    icons,
    ...opts,
    bullet: false,
  });

export const text = (parts: ContentValue[] = []): ContentValue[] => parts;

export const attention = ({
  icons = [],
  ...opts
}: BaseTokenProps): ContentValue[] =>
  baseToken({
    ...opts,
    icons: ["attention", ...icons],
    bullet: false,
  });

export const word = (opts: BaseTokenProps): ContentValue[] =>
  baseToken({
    ...opts,
  });

export const wordRowList = (opts: BaseTokenProps): ContentValue[] =>
  baseToken({
    bullet: true,
    ...opts,
  });

export const wordColumnList = (opts: BaseTokenProps): ContentValue[] =>
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
}: WordComparisonProps): ContentValue[] => [
  ...wordRowList({ ...left, bullet: false }),
  {
    part: "or ",
    type: "connector",
  },
  ...wordRowList({ ...right, bullet: false }),
];
export const wordComparison = ({
  left,
  right,
}: WordComparisonProps): ContentValue[] => [
  ...wordRowList({ ...left, bullet: false }),
  {
    part: "vs. ",
    type: "connector",
  },
  ...wordRowList({ ...right, bullet: false }),
];

export const dictionary = (file: string): string => {
  const first = file?.[0]?.toLowerCase();

  return `/assets/img/dictionary/${first}/${file}`;
};

export const lineBreak = (): ContentToken => ({
  lineBreak: true,
});

export const space = () =>
  ({
    type: "space",
  }) as const;
