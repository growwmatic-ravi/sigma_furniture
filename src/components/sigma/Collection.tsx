import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { products } from "./data";
import { Label, Reveal } from "./Reveal";

function ProductCard({ p, eager = false }: { p: (typeof products)[number]; eager?: boolean }) {
  return (
    <article className="group">
      <div className="overflow-hidden bg-muted">
        <img
          src={p.img}
          alt={`${p.name} in ${p.material}`}
          width={1152}
          height={1440}
          loading={eager ? "eager" : "lazy"}
          className="aspect-[4/5] w-full object-cover transition-transform duration-[1.6s] ease-[var(--ease-cine)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-6 border-t pt-4">
        <div>
          <span className="label-micro text-muted-foreground">{p.no} / 05</span>
          <h3 className="display mt-2 text-4xl md:text-5xl">{p.name}</h3>
          <p className="label-micro mt-3 text-muted-foreground">{p.material}</p>
        </div>
        <p className="display text-xl">{p.price}</p>
      </div>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
    </article>
  );
}

export function Collection() {
  const track = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

  return (
    <section id="collection" aria-label="The collection">
      {/* Desktop: vertical scroll drives a horizontal exhibition */}
      <div ref={track} className="relative hidden h-[400vh] lg:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex items-center gap-[6vw] pl-10 pr-[20vw]">
            <div className="w-[28vw] shrink-0">
              <Label>02 / The Collection</Label>
              <h2 className="display mt-6 text-7xl xl:text-8xl">Objects<br />with <em>presence.</em></h2>
              <p className="mt-8 max-w-xs text-sm leading-relaxed text-muted-foreground">Five pieces. Collection 04, designed and finished in Los Angeles.</p>
            </div>
            {products.map((p, i) => (
              <div key={p.no} className={`w-[30vw] shrink-0 ${i % 2 ? "mt-[14vh]" : "-mt-[8vh]"}`}>
                <ProductCard p={p} eager />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile / tablet: vertical editorial sequence */}
      <div className="px-5 py-24 md:px-10 lg:hidden">
        <Label>02 / The Collection</Label>
        <h2 className="display mt-5 text-6xl md:text-7xl">Objects<br />with <em>presence.</em></h2>
        <div className="mt-16 space-y-24">
          {products.map((p) => (
            <Reveal key={p.no}><ProductCard p={p} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
