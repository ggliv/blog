import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import siteConfig from "@/config.ts";
import { posts, slugify } from "@/util.ts";

export function GET(_: APIContext) {
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: siteConfig.blogRoot,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: slugify(post.data.date, post.slug),
    })),
  });
}
