import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/sigma/Nav";
import { Hero } from "@/components/sigma/Hero";
import { Collection } from "@/components/sigma/Collection";
import { Idea, Materials, LosAngeles, Feature, Journal, FinalCta, Footer } from "@/components/sigma/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sigma Furniture — Made to Occupy Space" },
      { name: "description", content: "Sculptural, architectural furniture designed in Los Angeles. Collection 04, 2026." },
      { property: "og:title", content: "Sigma Furniture — Made to Occupy Space" },
      { property: "og:description", content: "Sculptural, architectural furniture designed in Los Angeles." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a href="#main" className="label-micro sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-background focus:p-3">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Idea />
        <Collection />
        <Materials />
        <LosAngeles />
        <Feature />
        <Journal />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
