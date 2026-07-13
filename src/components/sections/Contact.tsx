import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  Send,
  Music2,
  Map,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import MapPlaceholder from "./MapPlaceholder";
import { BRAND, WHATSAPP_LINK } from "../../lib/site";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const INFO = [
  {
    icon: Phone,
    label: "اتصل بنا",
    value: BRAND.phone,
    href: `tel:${BRAND.phone}`,
  },
  {
    icon: MessageCircle,
    label: "واتساب",
    value: "متاح 24/7",
    href: WHATSAPP_LINK,
  },
  {
    icon: MapPin,
    label: "طنجة",
    value: "خدمة منزلية داخل المدينة",
    href: BRAND.maps,
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: Music2,
    label: "TikTok",
    value: "تابع نصائحنا التقنية",
    href: BRAND.tiktok,
  },
  {
    icon: Map,
    label: "Google Maps",
    value: "اعرض موقعنا في طنجة",
    href: BRAND.maps,
  },
];

type ContactForm = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

type ContactField = keyof ContactForm;
type FormErrors = Partial<Record<ContactField, string>>;

const SERVICE_OPTIONS = [
  "إصلاح تلفزيون أو Smart TV",
  "إصلاح شاشة LED / OLED / QLED",
  "تركيب كاميرات مراقبة أو نظام حماية",
  "تركيب IPTV أو إعداد رسيفر",
  "استشارة أو خدمة أخرى",
];

function validateForm(form: ContactForm): FormErrors {
  const errors: FormErrors = {};
  const phone = form.phone.replace(/[\s()-]/g, "");

  if (form.name.trim().length < 2) {
    errors.name = "يرجى كتابة اسمك الكامل بشكل صحيح.";
  }
  if (!/^(\+212|0)[5-7]\d{8}$/.test(phone)) {
    errors.phone = "يرجى إدخال رقم مغربي صالح، مثل 06XXXXXXXX أو +2126XXXXXXXX.";
  }
  if (!form.service) {
    errors.service = "يرجى اختيار الخدمة التي تحتاجها.";
  }
  if (form.message.trim().length < 10) {
    errors.message = "يرجى إضافة وصف مختصر من 10 أحرف على الأقل.";
  }

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    const field = name as ContactField;
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const nextErrors = { ...current };
      delete nextErrors[field];
      return nextErrors;
    });
    setSubmitted(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const text = `مرحباً TENDA BOX 8Q، أرغب في طلب خدمة.\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nالخدمة: ${form.service}\nالتفاصيل: ${form.message}`;
    setSubmitted(true);
    window.open(
      `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="تواصل معنا"
          title="دعنا نعيد لجهازك أفضل أداء"
          subtitle="اتصل، راسلنا، أو أرسل طلبك الآن. سنرشدك إلى الحل الأسرع والأكثر أماناً لجهازك في طنجة."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Info cards */}
          <Reveal>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {INFO.map((info) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="glass flex flex-col gap-3 rounded-3xl p-6 shadow-soft"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </span>
                      <div>
                        <p className="text-sm text-white/50">{info.label}</p>
                        <p className="mt-1 font-bold text-white">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
              <MapPlaceholder />
              <div className="glass-gold relative overflow-hidden rounded-3xl p-6">
                <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gold/20 blur-2xl" />
                <p className="relative text-lg font-bold text-white">خدمة طوارئ سريعة</p>
                <p className="relative mt-2 text-sm leading-relaxed text-white/65">
                  نرتب لك أقرب موعد متاح ونوضح لك الخطوات قبل البدء. ثق بفريق
                  TENDA BOX 8Q للحصول على جودة تدوم وراحة بال حقيقية.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={1}>
            <form
              id="booking-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="نموذج حجز الخدمة"
              className="glass flex h-full scroll-mt-28 flex-col gap-4 rounded-3xl p-7 shadow-soft"
            >
              <div aria-live="polite" className="sr-only">
                {Object.keys(errors).length > 0
                  ? "يرجى مراجعة الحقول التي تحتوي على أخطاء."
                  : submitted
                    ? "تم تجهيز طلبك وفتح واتساب لإرساله."
                    : ""}
              </div>
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-white/70">
                  الاسم الكامل
                </label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={updateField}
                  type="text"
                  placeholder="اكتب اسمك"
                  aria-required="true"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={`w-full rounded-2xl border bg-white/5 px-4 py-3.5 text-white placeholder-white/30 outline-none transition-colors focus:border-gold/60 ${errors.name ? "border-red-400/80" : "border-white/10"}`}
                />
                {errors.name && <FieldError id="contact-name-error" message={errors.name} />}
              </div>
              <div>
                <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-white/70">
                  رقم الهاتف
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={updateField}
                  type="tel"
                  inputMode="tel"
                  placeholder="06XXXXXXXX"
                  aria-required="true"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                  className={`w-full rounded-2xl border bg-white/5 px-4 py-3.5 text-white placeholder-white/30 outline-none transition-colors focus:border-gold/60 ${errors.phone ? "border-red-400/80" : "border-white/10"}`}
                />
                {errors.phone && <FieldError id="contact-phone-error" message={errors.phone} />}
              </div>
              <div>
                <label htmlFor="contact-service" className="mb-2 block text-sm font-medium text-white/70">
                  الخدمة المطلوبة
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={updateField}
                  aria-required="true"
                  aria-invalid={Boolean(errors.service)}
                  aria-describedby={errors.service ? "contact-service-error" : undefined}
                  className={`w-full appearance-none rounded-2xl border bg-[#161616] px-4 py-3.5 text-white outline-none transition-colors focus:border-gold/60 ${errors.service ? "border-red-400/80" : "border-white/10"}`}
                >
                  <option value="">اختر الخدمة التي تحتاجها</option>
                  {SERVICE_OPTIONS.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                {errors.service && <FieldError id="contact-service-error" message={errors.service} />}
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-white/70">
                  تفاصيل الطلب
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows={4}
                  placeholder="صف المشكلة أو الخدمة التي تحتاجها..."
                  aria-required="true"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className={`w-full resize-none rounded-2xl border bg-white/5 px-4 py-3.5 text-white placeholder-white/30 outline-none transition-colors focus:border-gold/60 ${errors.message ? "border-red-400/80" : "border-white/10"}`}
                />
                {errors.message && <FieldError id="contact-message-error" message={errors.message} />}
              </div>
              {submitted && (
                <p className="flex items-center gap-2 text-sm text-emerald-300" role="status">
                  <CheckCircle2 className="h-4 w-4" />
                  تم تجهيز طلبك وفتح واتساب لإرساله.
                </p>
              )}
              <button
                type="submit"
                className="btn-gold mt-1 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-base"
              >
                <Send className="h-5 w-5" />
                إرسال الطلب عبر واتساب
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} role="alert" className="mt-2 flex items-start gap-1.5 text-xs leading-relaxed text-red-300">
      <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
      {message}
    </p>
  );
}
