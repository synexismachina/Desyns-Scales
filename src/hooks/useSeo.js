import { useEffect } from "react";

const SITE = "https://www.desynsscales.com";

function upsert(tag, attrs, valueAttr, value, undo) {
  const selector = `${tag}${Object.entries(attrs)
    .map(([k, v]) => `[${k}="${v}"]`)
    .join("")}`;
  let el = document.head.querySelector(selector);

  if (el) {
    const prev = el.getAttribute(valueAttr);
    el.setAttribute(valueAttr, value);
    undo.push(() => (prev === null ? el.removeAttribute(valueAttr) : el.setAttribute(valueAttr, prev)));
  } else {
    el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    el.setAttribute(valueAttr, value);
    document.head.appendChild(el);
    undo.push(() => el.remove());
  }
}

/**
 * Per-page SEO for a client-rendered React app.
 * Sets title, description, canonical, Open Graph / Twitter tags and JSON-LD,
 * then restores whatever was there before when the page unmounts.
 */
export default function useSeo({ title, description, path, type = "website", noindex = false, jsonLd }) {
  useEffect(() => {
    const undo = [];
    const url = `${SITE}${path}`;

    const prevTitle = document.title;
    document.title = title;
    undo.push(() => {
      document.title = prevTitle;
    });

    upsert("meta", { name: "description" }, "content", description, undo);
    upsert("link", { rel: "canonical" }, "href", url, undo);
    upsert("meta", { property: "og:title" }, "content", title, undo);
    upsert("meta", { property: "og:description" }, "content", description, undo);
    upsert("meta", { property: "og:url" }, "content", url, undo);
    upsert("meta", { property: "og:type" }, "content", type, undo);
    upsert("meta", { property: "og:locale" }, "content", "en_ZA", undo);
    upsert("meta", { name: "twitter:card" }, "content", "summary", undo);
    upsert("meta", { name: "twitter:title" }, "content", title, undo);
    upsert("meta", { name: "twitter:description" }, "content", description, undo);
    if (noindex) upsert("meta", { name: "robots" }, "content", "noindex, follow", undo);

    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
      undo.push(() => script.remove());
    }

    return () => {
      undo.reverse().forEach((fn) => fn());
    };
  }, [title, description, path, type, noindex, jsonLd]);
}
