---
permalink: /
layout: base
title: Index
---

# {{ page.title }}

This page is very much a work in progress. It may or may not grow into what you would expect of a typical blog. For now, I'm writing for myself. Enjoy!

{% if site.posts.size > 0 %}
{%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
{% for post in site.posts %}
- [{{ post.title | escape }}]({{ post.url | relative_url }}) ({{ post.date | date: date_format }})
{% endfor %}
{% endif %}

Blog content is [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Code examples are [MIT](https://choosealicense.com/licenses/mit/).
