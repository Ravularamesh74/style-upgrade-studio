import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import cover from "@/assets/cat-women.jpg";

export const Route = createFileRoute("/women")({
  head: () => ({
    meta: [
      { title: "Women's Streetwear — Style Daddy" },
      { name: "description", content: "Crop hoodies, baby tees, parachute pants, co-ords & more. Bold women's streetwear from Style Daddy." },
      { property: "og:title", content: "Women's Streetwear — Style Daddy" },
      { property: "og:description", content: "Fits that hit, prints that talk." },
    ],
    links: [{ rel: "canonical", href: "/women" }],
  }),
  component: () => (
    <CategoryPage
      title="WOMEN"
      subtitle="Y2K silhouettes, baby tees, and co-ords engineered for the timeline."
      category="women"
      cover={cover}
    />
  ),
});