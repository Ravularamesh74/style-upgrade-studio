import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import cover from "@/assets/cat-men.jpg";

export const Route = createFileRoute("/men")({
  head: () => ({
    meta: [
      { title: "Men's Streetwear — Style Daddy" },
      { name: "description", content: "Oversized tees, cargos, hoodies, jackets & more for men. Shop the latest streetwear drops at Style Daddy." },
      { property: "og:title", content: "Men's Streetwear — Style Daddy" },
      { property: "og:description", content: "Bold streetwear for the modern man." },
    ],
    links: [{ rel: "canonical", href: "/men" }],
  }),
  component: () => (
    <CategoryPage
      title="MEN"
      subtitle="Oversized fits, bold prints, and the heaviest fabrics. Built for the streets of Hyderabad."
      category="men"
      cover={cover}
    />
  ),
});