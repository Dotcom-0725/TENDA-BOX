import { ExternalLink, MapPin } from "lucide-react";
import { BRAND } from "../../lib/site";

export default function MapPlaceholder() {
  return (
    <a
      href={BRAND.maps}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="فتح موقع خدمة TENDA BOX 8Q في طنجة على خرائط Google"
      className="group glass relative block min-h-52 overflow-hidden rounded-3xl p-6 shadow-soft"
    >
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.1)_1px,transparent_1px)] [background-size:28px_28px]" />
      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border border-gold/20" />
      <div className="absolute -bottom-14 left-12 h-44 w-44 rounded-full border border-gold/10" />

      <div className="relative flex h-full flex-col justify-between gap-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/45 bg-night/80 text-gold shadow-gold transition-transform duration-300 group-hover:scale-110">
          <MapPin className="h-7 w-7" strokeWidth={1.8} />
        </span>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-white/55">نغطي منطقة</p>
            <p className="mt-1 text-xl font-bold text-white">طنجة، المغرب</p>
            <p className="mt-2 text-sm text-white/60">اضغط لفتح الموقع في Google Maps</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            <ExternalLink className="h-4 w-4" />
          </span>
        </div>
      </div>
    </a>
  );
}