import { motion } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";
import { CALL_LINK } from "../../lib/site";

export default function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <img
        src="/images/hero.jpg"
        alt="فني TENDA BOX 8Q أثناء إصلاح تلفزيون ذكي"
        loading="lazy"
        decoding="async"
        width={1600}
        height={900}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,11,11,0.97),rgba(11,11,11,0.78),rgba(11,11,11,0.95))]" />
      <div className="absolute inset-0 -z-10 bg-gold/5" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-4xl px-5 text-center sm:px-8"
      >
        <p className="text-sm font-bold tracking-[0.18em] text-gold-soft">لا تؤجل الحل</p>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
          عطلك يستحق تشخيصاً صحيحاً <span className="text-gold-gradient">من أول مرة</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          احجز الآن عبر واتساب، وشاركنا تفاصيل جهازك. فريق TENDA BOX 8Q جاهز ليمنحك
          حلاً سريعاً، واضحاً، ومضموناً في طنجة.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="#booking-form"
            className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base"
          >
            <MessageCircle className="h-5 w-5" />
            احجز موعدك عبر واتساب
          </a>
          <a
            href={CALL_LINK}
            className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base"
          >
            <PhoneCall className="h-5 w-5" />
            تحدث مع فني الآن
          </a>
        </div>
      </motion.div>
    </section>
  );
}