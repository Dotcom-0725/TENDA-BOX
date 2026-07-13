import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { CALL_LINK } from "../../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: EASE },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[760px] items-end overflow-hidden bg-night pt-28 pb-18 sm:min-h-[820px] sm:pb-24"
    >
      <img
        src="/images/hero.jpg"
        alt="فني محترف من TENDA BOX 8Q يصلح تلفزيوناً ذكياً"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width={1600}
        height={900}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,11,11,0.98)_0%,rgba(11,11,11,0.88)_42%,rgba(11,11,11,0.35)_72%,rgba(11,11,11,0.5)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(11,11,11,0.84),transparent_45%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <motion.h1
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl font-black tracking-wide text-gold-gradient sm:text-6xl md:text-7xl"
          >
            TENDA BOX 8Q
          </motion.h1>
          <motion.h2
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 text-3xl font-extrabold leading-[1.2] text-white sm:text-4xl md:text-5xl"
          >
            خبير في إصلاح وتركيب التلفزيونات والكاميرات وأنظمة IPTV
          </motion.h2>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            نقدم حلولاً احترافية وسريعة لإصلاح جميع أنواع التلفزيونات، تركيب كاميرات
            المراقبة وإعداد خدمات IPTV بمدينة طنجة.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#booking-form"
              className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base"
            >
              <MessageCircle className="h-5 w-5" />
              احجز عبر واتساب
            </a>
            <a
              href={CALL_LINK}
              className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base"
            >
              <Phone className="h-5 w-5" />
              اتصل الآن
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
