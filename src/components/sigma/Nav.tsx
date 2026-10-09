import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const links = ["Collection", "Studio", "Materials", "Journal"];
const ease = [0.22, 1, 0.36, 1] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const tone = scrolled || open ? "text-foreground" : "text-bone";

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6, ease }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-700 ${scrolled && !open ? "bg-background/85 backdrop-blur-md border-b" : ""} ${tone}`}
      >
        <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-20 md:px-10">
          <a href="#top" className="display text-2xl tracking-tight" aria-label="Sigma Furniture, home">Sigma</a>
          <ul className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="label-micro link-line">{l}</a></li>
            ))}
          </ul>
          <a href="#inquire" className="label-micro link-line hidden md:inline">Inquire</a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="label-micro -mr-3 flex h-11 items-center gap-3 px-3 md:hidden"
          >
            {open ? "Close" : "Menu"}
            <span className="relative block h-2 w-6">
              <span className={`absolute left-0 h-px w-6 bg-current transition-transform duration-500 ${open ? "top-1 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-px w-6 bg-current transition-transform duration-500 ${open ? "top-1 -rotate-45" : "top-2"}`} />
            </span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-background px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-28 md:hidden"
          >
            <ul className="space-y-2">
              {[...links, "Contact"].map((l, i) => (
                <motion.li
                  key={l}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 + i * 0.07, ease }}
                  className="flex items-baseline gap-4 border-b py-3"
                >
                  <span className="label-micro text-muted-foreground">0{i + 1}</span>
                  <a href={`#${l === "Contact" ? "inquire" : l.toLowerCase()}`} onClick={() => setOpen(false)} className="display text-5xl">{l}</a>
                </motion.li>
              ))}
            </ul>
            <div className="label-micro flex justify-between text-muted-foreground">
              <span>Los Angeles / CA</span>
              <a href="https://instagram.com" className="link-line">Instagram</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
