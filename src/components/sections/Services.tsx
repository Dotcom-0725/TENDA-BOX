import { motion } from "framer-motion";
import {
  Tv,
  Cctv,
  Radio,
  MonitorSmartphone,
  ScanLine,
  ShieldCheck,
  Settings2,
  PlugZap,
  SatelliteDish,
  Check,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { SERVICES } from "../../lib/site";

const ICONS: Record<string, typeof Tv> = {
  Tv,
  Cctv,
  Radio,
  MonitorSmartphone,
  ScanLine,
  ShieldCheck,
  Settings2,
  PlugZap,
  SatelliteDish,
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="خدماتنا"
          title="كل ما تحتاجه لشاشة ذكية وحماية أذكى"
          subtitle="إصلاح دقيق، تركيب أنيق، ودعم واضح لأجهزة التلفزيون وأنظمة الحماية والبث في طنجة."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => {
            const Icon = ICONS[service.icon] ?? Tv;
            return (
              <Reveal key={service.title} delay={idx % 3} className="h-full">
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="group relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-soft"
                >
                  {/* Background image */}
                  <img
                    src={service.img}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    width={900}
                    height={700}
                    className="absolute inset-0 h-full w-full object-cover opacity-35 transition-all duration-[1100ms] ease-out group-hover:scale-110 group-hover:opacity-55"
                  />
                  {/* Dark gradient overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-night via-night/92 to-night/55" />
                  {/* Side gold accent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-bl from-gold/0 via-gold/0 to-gold/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  {/* Fine inner ring */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-gold/10" />

                  <div className="relative flex h-full flex-col p-7">
                    <span className="flex h-14 w-14 items-center justify-center self-start rounded-2xl border border-gold/40 bg-night/70 text-gold shadow-gold backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-7 w-7" strokeWidth={1.8} />
                    </span>

                    <div className="mt-auto pt-8">
                      <h3 className="text-2xl font-bold leading-tight text-white">
                        {service.title}
                      </h3>
                      <div className="mt-3 h-px w-12 bg-gradient-to-l from-gold to-transparent transition-all duration-500 group-hover:w-20" />
                      <p className="mt-4 text-sm leading-relaxed text-white/75">
                        {service.desc}
                      </p>

                      <ul className="mt-5 grid grid-cols-1 gap-2">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-white/80"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold ring-1 ring-gold/30">
                              <Check className="h-3 w-3" strokeWidth={3} />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
