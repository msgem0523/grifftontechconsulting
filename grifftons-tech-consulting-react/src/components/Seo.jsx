import { useEffect } from "react";

function Seo({ title, description, image = "/og-image.png" }) {
  useEffect(() => {
    document.title = title;

    const upsertMeta = (attribute, key, content) => {
      let meta = document.querySelector(`meta[${attribute}="${key}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    const pageUrl = window.location.href;
    const imageUrl = new URL(image, window.location.origin).href;

    upsertMeta("name", "description", description);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:url", pageUrl);
    upsertMeta("property", "og:type", "website");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
  }, [title, description, image]);

  return null;
}

export default Seo;