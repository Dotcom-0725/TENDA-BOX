import { motion } from "framer-motion";
import { BadgeCheck, House, Search, ShieldCheck, Zap } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { WHY_CHOOSE } from "../../lib/site";

const ICONS = { BadgeCheck, House, Search, ShieldCheck, Zap };

export default function WhyChoose() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="لماذا TENDA BOX 8Q"
          title="لأن جهازك يستحق خدمة تثق بها"
          subtitle="نجمع بين الخبرة التقنية، وضوح التواصل، والاهتمام بالتفاصيل لنحول العطل إلى حل مطمئن وسريع."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {WHY_CHOOSE.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <Reveal key={item.title} delay={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group relative px-1 sm:px-5 lg:min-h-60 lg:border-l lg:border-white/10 lg:first:border-l-0"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{item.desc}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}