export type Link = { text: string; path: string };

export type Links = { text: string; path: string }[];

export type NavId = "#hero" | "#about" | "#projects" | "#contact";

export type CircleElement = {
  cx: number;
  cy: number;
  x: number;
  y: number;
  r: number;
  lift: number;
  driftFlag: boolean;
  a: number;
  grd: CanvasGradient;
};

export type Job = {
  title: string;
  description: string;
};

export type Item = {
  name: string;
  icon: string;
};

export type Skill = {
  title: string;
  items: Item[];
};