import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import siteConfig from "@/config.ts";
import { posts } from "@/util.ts";

export function GET(context: APIContext) {
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: `${context.site!}/${import.meta.env.BASE_URL}`,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `${import.meta.env.BASE_URL}/${post.slug}`,
    })),
  });
}
