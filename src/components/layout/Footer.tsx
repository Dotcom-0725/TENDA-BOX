import { MessageCircle, Phone, MapPin, Mail, Music2, Map } from "lucide-react";
import { BRAND, NAV_ITEMS, SERVICES, WHATSAPP_LINK } from "../../lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink/60">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-gold" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2.5" y="4" width="19" height="13" rx="2.5" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                  <circle cx="12" cy="10.5" r="2.4" />
                </svg>
              </span>
              <span className="text-lg font-extrabold tracking-wide text-white">
                TENDA <span className="text-gold">BOX</span> 8Q
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              خبير في إصلاح وتركيب التلفزيونات والكاميرات وأنظمة IPTV بمدينة طنجة.
              حلول احترافية تبني الثقة وتدوم.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest text-gold-soft">
              روابط سريعة
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-white/60 transition-colors hover:text-gold-soft"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest text-gold-soft">
              خدماتنا
            </h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 transition-colors hover:text-gold-soft"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-widest text-gold-soft">
              تواصل معنا
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold-soft"
                >
                  <Phone className="h-4 w-4 text-gold" /> {BRAND.phone}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold-soft"
                >
                  <MessageCircle className="h-4 w-4 text-gold" /> واتساب
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-gold" /> {BRAND.location}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 text-gold" /> {BRAND.email}
              </li>
              <li>
                <a
                  href={BRAND.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold-soft"
                >
                  <Music2 className="h-4 w-4 text-gold" /> TikTok
                </a>
              </li>
              <li>
                <a
                  href={BRAND.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-gold-soft"
                >
                  <Map className="h-4 w-4 text-gold" /> Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-start">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} TENDA BOX 8Q. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-white/40">
            صُمم بعناية لخدمة عملاء طنجة بأعلى معايير الجودة.
          </p>
        </div>
      </div>
    </footer>
  );
}
