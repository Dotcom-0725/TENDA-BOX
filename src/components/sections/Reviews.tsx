import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { REVIEWS } from "../../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-gold/30 to-gold/5 text-base font-bold text-gold-soft">
      {initials}
    </span>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="آراء العملاء"
          title="ثقة عملائنا هي قيمتنا الحقيقية"
          subtitle="تقييمات حقيقية من عملاء أثقوا بـ TENDA BOX 8Q لخدماتهم المنزلية والتجارية."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {REVIEWS.map((r, idx) => (
            <Reveal key={r.name} delay={idx % 2}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="glass relative h-full overflow-hidden rounded-3xl p-7 shadow-soft"
              >
                <Quote className="absolute left-6 top-6 h-10 w-10 text-gold/15" />
                <div className="relative">
                  <div className="flex gap-1">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-white/80">
                    “{r.text}”
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <Avatar name={r.name} />
                    <div>
                      <p className="font-bold text-white">{r.name}</p>
                      <p className="text-xs text-white/50">{r.role}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
