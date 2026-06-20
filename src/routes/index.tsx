import { createFileRoute } from "@tanstack/react-router";
import siteHtml from "../../public/site.html?raw";

export const Route = createFileRoute("/")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(siteHtml, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        });
      },
    },
  },
  head: () => ({
    meta: [
      { title: "Syed Zohaib Ali — Local SEO Expert Lahore" },
      { name: "description", content: "Local SEO Expert in Lahore." },
    ],
  }),
  component: Index,
});

function Index() {
  return null;
}
