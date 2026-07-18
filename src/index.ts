export const packageName = "@narthia/toolkit" as const;

export const subpaths = ["oxc-config"] as const;

const fortunes = [
  "The lint passes. The build succeeds. Today is a good deploy.",
  "Have you tried `@narthia/toolkit/oxc-config` lately?",
  "Right tool, right place. That's the toolkit way.",
  "Your imports are sorted. Your semicolons are steadfast.",
] as const;

/** Poke the toolkit. It might poke back with advice. */
export function poke(): string {
  return fortunes[Math.floor(Math.random() * fortunes.length)] ?? fortunes[0];
}
