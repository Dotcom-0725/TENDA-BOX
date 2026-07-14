import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { useScrollThreshold } from "../../hooks/useScrollThreshold";
import { NAV_ITEMS } from "../../lib/site";

function Logo() {
  return (
    <a
      href="#home"
      aria-label="TENDA BOX 8Q - الرئيسية"
      className="group flex items-center gap-3"
    >
      <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 shadow-gold transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2.5" y="4" width="19" height="13" rx="2.5" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <circle cx="12" cy="10.5" r="2.4" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-wide text-white">
          TENDA <span className="text-gold">BOX</span> 8Q
        </span>
        <span className="mt-1 text-[10px] font-medium tracking-widest text-white/45">
          ELECTRONICS & SMART SYSTEMS
        </span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const scrolled = useScrollThreshold(24);
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  // Lock body scroll without causing a scroll jump that could shift the
  // header's state mid-click. `position: fixed` on <body> keeps the viewport
  // frozen so the hamburger always receives its click event reliably.
  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.overflow = "hidden";
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-gold/15 bg-night/95 py-3 shadow-soft backdrop-blur-xl supports-[backdrop-filter]:bg-night/80"
            : "bg-gradient-to-b from-night/70 via-night/30 to-transparent py-5"
        }`}
      >
        <nav
          aria-label="التنقل الرئيسي"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8"
        >
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-colors duration-300 hover:text-gold-soft"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#booking-form"
              className="btn-gold hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm lg:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              احجز الآن
            </a>
            <button
              type="button"
              onClick={toggle}
              aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-colors hover:border-gold/40 hover:text-gold-soft lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Drawer & backdrop live OUTSIDE the header so `position: fixed`
          resolves against the viewport — never against the header's
          transform/backdrop-filter containing block. */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={close}
              aria-hidden="true"
              className="fixed inset-0 z-40 bg-night/95 backdrop-blur-xl lg:hidden"
            />

            <motion.nav
              key="nav-drawer"
              id="mobile-navigation"
              aria-label="القائمة المتنقلة"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto overscroll-contain bg-ink lg:hidden"
            >
              <div className="mx-auto flex min-h-full max-w-md flex-col gap-6 px-6 pb-10 pt-6">
                <p className="text-xs font-bold tracking-[0.22em] text-gold-soft">
                  القائمة الرئيسية
                </p>

                <ul className="flex flex-col divide-y divide-white/5 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
                  {NAV_ITEMS.map((item, idx) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={close}
                        className="group flex items-center justify-between px-5 py-4 text-lg font-bold text-white/85 transition-colors hover:bg-gold/10 hover:text-gold-soft"
                      >
                        <span>{item.label}</span>
                        <span className="text-xs font-semibold text-white/30 transition-colors group-hover:text-gold">
                          0{idx + 1}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="rounded-3xl border border-gold/20 bg-gold/[0.06] p-5">
                  <p className="text-sm text-white/60">جاهزون لخدمتك الآن</p>
                  <p className="mt-1 text-base font-bold text-white">
                    طنجة · على مدار الساعة
                  </p>
                </div>

                <a
                  href="#booking-form"
                  onClick={close}
                  className="btn-gold flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-base"
                >
                  <MessageCircle className="h-5 w-5" />
                  احجز الآن
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
