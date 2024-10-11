export default {
  title: "Gabe's Blog",
  description:
    "My blog! Covers technical topics, personal updates, and whatever else strikes my fancy.",
  blogRoot: import.meta.env.PROD
    ? "https://ggliv.com/blog"
    : "http://localhost:4321/blog",
};
