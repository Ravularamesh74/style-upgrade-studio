import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import cover from "@/assets/cat-kids.jpg";

export const Route = createFileRoute("/kids")({
  head: () => ({
    meta: [
      { title: "Kids Streetwear — Style Daddy" },
      { name: "description", content: "Mini hoodies, graphic tees, joggers & more for the next gen. Comfy, durable, drip." },
      { property: "og:title", content: "Kids Streetwear — Style Daddy" },
      { property: "og:description", content: "Mini Daddies in training." },
    ],
    links: [{ rel: "canonical", href: "/kids" }],
  }),
  component: () => (
    <CategoryPage
      title="KIDS"
      subtitle="Tiny humans, big drip. Comfy fabrics, fearless prints."
      category="kids"
      cover={cover}
    />
  ),
});