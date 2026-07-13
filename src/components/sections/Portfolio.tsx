import { motion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { PORTFOLIO } from "../../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-aurora py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="أعمالنا"
          title="مشاريع أنجزناها بفخر"
          subtitle="لمحة عن أحدث أعمالنا في إصلاح التلفزيونات، تركيب الكاميرات وأنظمة IPTV لعملاء في طنجة."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO.map((item, idx) => (
            <Reveal key={idx} delay={idx % 3}>
              <motion.figure
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="group glass relative overflow-hidden rounded-3xl shadow-soft"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    width={960}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full border border-gold/40 bg-ink/60 px-3 py-1 text-xs font-semibold text-gold-soft backdrop-blur">
                    {item.cat}
                  </span>
                </div>
                <figcaption className="flex items-center justify-between gap-3 p-5">
                  <p className="text-base font-bold text-white">{item.title}</p>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpLeft className="h-4 w-4" />
                  </span>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
