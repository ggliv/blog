import { getCollection } from "astro:content";
const posts = await getCollection("blog");

export const formatDate = (date: Date) => {
  const month = new Intl.DateTimeFormat("en", {
    timeZone: "UTC",
    month: "long",
  }).format(date);
  const day = new Intl.DateTimeFormat(undefined, {
    timeZone: "UTC",
    day: "2-digit",
  }).format(date);
  const year = date.getUTCFullYear();
  return `${day} ${month} ${year}`;
};

export const tags: string[] = Array.from(
  new Set<string>(
    posts
      .map((p) => p.data.tags)
      .filter((t) => t != undefined)
      .reduce((acc, val) => acc.concat(val), []),
  ),
);

export const postsWithTag = (tag: string) =>
  posts.filter((p) => p.data.tags?.includes(tag));
