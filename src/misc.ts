import { MarkdownInstance } from "astro";

export interface Frontmatter {
  layout: string;
  title: string;
  date: string;
  image?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  image7?: string;
  image8?: string;
  image9?: string;
  image10?: string;
  image11?: string;
  image12?: string;
  image13?: string;
  imageDescription?: string;
  description: string;
  draft?: boolean;
}

export function sortDateDescending(arg: MarkdownInstance<Frontmatter>[]) {
  return arg.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function capitalizeString(arg: string) {
  return arg[0].toUpperCase() + arg.slice(1);
}
