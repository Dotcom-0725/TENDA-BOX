import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, PhoneCall } from "lucide-react";
import WhatsAppIcon from "../ui/WhatsAppIcon";
import { useScrollThreshold } from "../../hooks/useScrollThreshold";
import { CALL_LINK, WHATSAPP_LINK } from "../../lib/site";

export default function FloatingActions() {
  const showTop = useScrollThreshold(600);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed bottom-5 left-5 z-40 flex flex-col gap-3">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل عبر واتساب"
          className="group relative flex items-center gap-2 rounded-full border border-gold/40 bg-gold/95 px-4 py-3.5 text-ink shadow-gold transition-transform duration-300 hover:scale-105"
        >
          <span className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-full bg-gold/40" />
          <WhatsAppIcon className="h-5 w-5" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:max-w-[120px] focus-visible:max-w-[120px]">
            واتساب
          </span>
        </a>
        <a
          href={CALL_LINK}
          aria-label="اتصل الآن بفريق TENDA BOX 8Q"
          className="group flex items-center gap-2 rounded-full border border-white/20 bg-ink/85 px-4 py-3.5 text-white shadow-soft backdrop-blur transition-all duration-300 hover:scale-105 hover:border-gold/60 hover:text-gold-soft"
        >
          <PhoneCall className="h-5 w-5 text-gold" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:max-w-[120px] focus-visible:max-w-[120px]">
            اتصل الآن
          </span>
        </a>
      </div>

      {/* Scroll to top - bottom right */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 10 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            aria-label="العودة للأعلى"
            className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-ink/70 text-white backdrop-blur transition-colors hover:border-gold/60 hover:text-gold"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
