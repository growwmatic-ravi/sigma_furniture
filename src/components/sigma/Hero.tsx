import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import hero from "@/assets/hero.jpg";

const ease = [0.22, 1, 0.36, 1] as const;
const lines = ["Made to", "occupy", "space."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.9]);
  const radius = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 4]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[560px] overflow-hidden bg-ink">
      <motion.div style={{ scale, borderRadius: radius }} className="grain absolute inset-0 origin-bottom overflow-hidden">
        <motion.img
          src={hero}
          alt="Oak and bouclé lounge chair in a sunlit concrete Los Angeles interior"
          width={1920}
          height={1152}
          fetchPriority="high"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease }}
          className="h-full w-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-ink/30" />
      </motion.div>

      <motion.div style={{ y: textY, opacity: fade }} className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-[max(2rem,env(safe-area-inset-bottom))] text-bone md:px-10 md:pb-14">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="label-micro mb-6 opacity-80"
        >
          Los Angeles / Collection 04 / 2026
        </motion.p>
        <h1 className="display text-[clamp(3.6rem,min(15vw,17svh),13rem)] uppercase">
          {lines.map((l, i) => (
            <span key={l} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className={`block ${i === 1 ? "italic normal-case pl-[0.6em]" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.3, delay: 0.7 + i * 0.12, ease }}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </h1>
        <div className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, ease }}
            className="max-w-sm text-sm leading-relaxed opacity-85 md:text-base"
          >
            Contemporary furniture for spaces that don't need to explain themselves.
          </motion.p>
          <motion.a
            href="#collection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.9 }}
            className="label-micro group flex min-h-11 items-center gap-4"
          >
            <span className="link-line">Explore collection</span>
            <span className="block h-px w-12 bg-current transition-all duration-700 group-hover:w-20" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
