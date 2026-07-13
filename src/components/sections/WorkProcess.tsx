import { motion } from "framer-motion";
import {
  CalendarDays,
  MessageCircle,
  Search,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { PROCESS } from "../../lib/site";

const ICONS = { CalendarDays, MessageCircle, Search, ShieldCheck, Wrench };

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function WorkProcess() {
  return (
    <section id="process" className="relative overflow-hidden bg-aurora py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/8 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="كيف نعمل"
          title="من أول رسالة إلى ضمانك في خمس خطوات"
          subtitle="مسار واضح ومريح يحافظ على وقتك ويضعك في الصورة في كل مرحلة من الخدمة."
        />

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {/* Connecting line on desktop */}
          <div className="pointer-events-none absolute right-[10%] left-[10%] top-[37px] hidden h-px bg-gradient-to-l from-transparent via-gold/45 to-transparent lg:block" />

          {PROCESS.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <Reveal key={item.step} delay={index} className="relative">
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="group relative flex flex-col items-center text-center"
                >
                  <span className="relative flex h-[74px] w-[74px] items-center justify-center rounded-full border border-gold/45 bg-night text-gold shadow-gold transition-all duration-500 group-hover:border-gold group-hover:shadow-[0_22px_60px_-12px_rgba(212,175,55,0.55)]">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                    <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full border border-gold/30 bg-gold text-[10px] font-extrabold text-ink shadow-gold">
                      {item.step}
                    </span>
                  </span>
                  <h3 className="mt-7 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-white/60">
                    {item.desc}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
