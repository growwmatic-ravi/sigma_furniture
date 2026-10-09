import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { materials } from "./data";
import { Label, Reveal } from "./Reveal";
import la from "@/assets/la.jpg";
import monolith from "@/assets/monolith.jpg";
import journal from "@/assets/journal.jpg";
import sable from "@/assets/sable.jpg";
import form from "@/assets/form.jpg";

export function Idea() {
  return (
    <section id="studio" className="mx-auto grid max-w-[1600px] gap-10 px-5 py-28 md:grid-cols-12 md:px-10 md:py-48">
      <Label className="md:col-span-3">01 / The Idea</Label>
      <div className="md:col-span-9">
        <Reveal>
          <h2 className="display text-[clamp(2.6rem,7vw,7rem)]">
            Furniture shouldn't fill a room. <em className="text-muted-foreground">It should define it.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-12 max-w-md text-base leading-relaxed text-muted-foreground md:ml-[40%]">
            Sigma creates contemporary furniture for people who understand that the spaces we inhabit shape the way we live.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Materials() {
  const [active, setActive] = useState(0);
  return (
    <section id="materials" className="bg-ink py-28 text-bone md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <p className="label-micro opacity-60">03 / Materials</p>
        <Reveal>
          <h2 className="display mt-6 text-[clamp(2.8rem,8vw,8rem)] uppercase">The material<br />is part of<br /><em className="normal-case">the object.</em></h2>
        </Reveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <div className="grain relative hidden aspect-square overflow-hidden lg:col-span-6 lg:block">
            {materials.map((m, i) => (
              <img
                key={m.name}
                src={m.img}
                alt={`${m.name} macro texture`}
                width={1152}
                height={1152}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1.4s] ease-[var(--ease-cine)] ${active === i ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
              />
            ))}
          </div>
          <ul className="lg:col-span-5 lg:col-start-8">
            {materials.map((m, i) => (
              <li key={m.name} className="border-t border-bone/15 last:border-b">
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="w-full py-8 text-left"
                  aria-pressed={active === i}
                >
                  <div className="flex items-baseline justify-between">
                    <span className={`display text-4xl transition-opacity duration-500 md:text-6xl ${active === i ? "opacity-100" : "opacity-35"}`}>{m.name}</span>
                    <span className="label-micro opacity-50">0{i + 1}</span>
                  </div>
                  <div className={`grid transition-all duration-700 ease-[var(--ease-cine)] ${active === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <img src={m.img} alt="" width={1152} height={1152} loading="lazy" className="mt-6 aspect-[4/3] w-full object-cover lg:hidden" />
                      <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-70">{m.copy}</p>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function LosAngeles() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="grain relative h-[80svh] overflow-hidden md:h-[110vh]">
        <motion.img style={{ y }} src={la} alt="Concrete modernist house cantilevered over the Los Angeles hills at golden hour" width={1920} height={1152} loading="lazy" className="absolute inset-0 h-[116%] w-full -top-[8%] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/60" />
      </div>
      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-24 md:grid-cols-12 md:px-10 md:py-36">
        <div className="md:col-span-7">
          <Label>04 / Los Angeles — 34.0522° N, 118.2437° W</Label>
          <Reveal>
            <h2 className="display mt-6 text-[clamp(2.6rem,6.5vw,6.5rem)] uppercase">Los Angeles<br />changes how<br /><em className="normal-case">we see space.</em></h2>
          </Reveal>
        </div>
        <Reveal className="self-end md:col-span-4 md:col-start-9" delay={0.15}>
          <p className="text-base leading-relaxed text-muted-foreground">
            Designed in Los Angeles, where architecture, light and landscape constantly reshape the way interiors are imagined.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const specs = [
  ["Width", "280 cm"],
  ["Depth", "94 cm"],
  ["Height", "72 cm"],
  ["Material", "Italian Leather / Walnut"],
];

export function Feature() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.35, 1]);
  const pos = useTransform(scrollYProgress, [0, 1], ["70% 60%", "50% 50%"]);
  return (
    <section ref={ref} className="relative h-[220vh] bg-ink text-bone">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <motion.img style={{ scale, objectPosition: pos }} src={monolith} alt="Monolith sofa in cognac leather on a walnut plinth" width={1920} height={1152} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/40" />
        <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-between px-5 pb-10 pt-24 md:px-10 md:pb-14 md:pt-32">
          <div className="flex justify-between">
            <p className="label-micro opacity-75">05 / The Monolith</p>
            <p className="label-micro opacity-75">02 / 05</p>
          </div>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <h2 className="display text-[clamp(3.2rem,9vw,9rem)]">Monolith<br /><em>Sofa</em></h2>
              <p className="label-micro mt-5 opacity-75">Italian Leather / Walnut — $4,800</p>
            </div>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-6 md:col-span-4 md:col-start-9">
              {specs.map(([k, v], i) => (
                <Reveal key={k} delay={i * 0.1} className={k === "Material" ? "col-span-2" : ""}>
                  <dt className="label-micro opacity-60">{k}</dt>
                  <dd className="display mt-1 border-t border-bone/20 pt-2 text-2xl">{v}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

const posts = [
  { no: "01", title: "Why objects matter", img: journal, meta: "Essay / 6 min" },
  { no: "02", title: "The quiet language of material", img: sable, meta: "Material / 4 min" },
  { no: "03", title: "Los Angeles / Light / Space", img: form, meta: "Place / 8 min" },
];

export function Journal() {
  return (
    <section id="journal" className="mx-auto max-w-[1600px] px-5 py-28 md:px-10 md:py-40">
      <div className="flex items-end justify-between border-b pb-6">
        <h2 className="display text-5xl md:text-7xl">The Journal</h2>
        <Label>06 / Writing</Label>
      </div>
      <div className="mt-12 grid gap-14 md:grid-cols-3 md:gap-8">
        {posts.map((p, i) => (
          <Reveal key={p.no} delay={i * 0.1}>
            <a href="#journal" className="group block">
              <div className="overflow-hidden">
                <img src={p.img} alt="" width={1152} height={1440} loading="lazy" className="aspect-[4/5] w-full object-cover grayscale-[35%] transition-all duration-[1.4s] ease-[var(--ease-cine)] group-hover:scale-[1.04] group-hover:grayscale-0" />
              </div>
              <div className="mt-5 flex gap-5">
                <span className="display text-xl text-muted-foreground">{p.no}</span>
                <div>
                  <h3 className="display text-3xl leading-tight">{p.title}</h3>
                  <p className="label-micro mt-3 text-muted-foreground">{p.meta}</p>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="inquire" className="bg-ink-soft px-5 py-32 text-bone md:px-10 md:py-52">
      <div className="mx-auto max-w-[1600px]">
        <p className="label-micro opacity-60">07 / Inquire</p>
        <Reveal>
          <h2 className="display mt-8 text-[clamp(3rem,10vw,11rem)] uppercase">
            Make space<br />for something<br /><em className="normal-case">unforgettable<span className="text-earth">.</span></em>
          </h2>
        </Reveal>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          <a href="#collection" className="label-micro flex min-h-14 items-center justify-center bg-bone px-10 text-ink transition-colors duration-500 hover:bg-earth hover:text-bone">View collection</a>
          <a href="mailto:studio@sigmafurniture.com" className="label-micro flex min-h-14 items-center justify-center border border-bone/30 px-10 transition-colors duration-500 hover:border-bone">Inquire</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-20 text-bone md:px-10">
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="display text-4xl">Sigma Furniture</p>
          <p className="label-micro mt-3 opacity-60">Los Angeles / California</p>
        </div>
        <ul className="label-micro space-y-3 md:col-span-3">
          {["Collection", "Studio", "Materials", "Journal"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="link-line opacity-80">{l}</a></li>
          ))}
          <li><a href="#inquire" className="link-line opacity-80">Contact</a></li>
        </ul>
        <div className="label-micro md:col-span-3 md:text-right">
          <a href="https://instagram.com" className="link-line opacity-80">Instagram</a>
        </div>
      </div>
      <div className="label-micro mx-auto mt-24 flex max-w-[1600px] justify-between border-t border-bone/15 pt-6 opacity-50">
        <span>© 2026 Sigma Furniture</span>
        <span>Designed to stay.</span>
      </div>
    </footer>
  );
}
