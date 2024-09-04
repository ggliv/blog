import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import siteConfig from "../config.ts";

export async function GET(context: APIContext) {
  const blog = await getCollection("blog");
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: `${context.site!}/${import.meta.env.BASE_URL}`,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `${import.meta.env.BASE_URL}/${post.slug}`,
    })),
  });
}
