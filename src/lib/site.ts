import type {
  BrandProfile,
  FAQItem,
  NavigationItem,
  PortfolioItem,
  ProcessStep,
  Service,
  Statistic,
  Testimonial,
  TrustItem,
} from "../types/site";

export const BRAND: BrandProfile = {
  name: "TENDA BOX 8Q",
  tagline: "خبير الإلكترونيات والأنظمة الذكية",
  phone: "+212600000000",
  whatsapp: "212600000000",
  location: "طنجة، المغرب",
  email: "contact@tendabox8q.ma",
  tiktok: "https://www.tiktok.com/@tendabox8q",
  maps: "https://www.google.com/maps/search/?api=1&query=Tangier%2C%20Morocco",
};

export const WHATSAPP_LINK = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(
  "مرحباً TENDA BOX 8Q، أرغب في الاستفسار عن خدماتكم."
)}`;

export const CALL_LINK = `tel:${BRAND.phone}`;

export const NAV_ITEMS: readonly NavigationItem[] = [
  { id: "home", label: "الرئيسية" },
  { id: "why-us", label: "لماذا نحن" },
  { id: "services", label: "خدماتنا" },
  { id: "process", label: "خطواتنا" },
  { id: "portfolio", label: "أعمالنا" },
  { id: "reviews", label: "آراء العملاء" },
  { id: "faq", label: "الأسئلة الشائعة" },
  { id: "contact", label: "تواصل معنا" },
];

export const STATS: readonly Statistic[] = [
  { value: "+12", label: "سنة خبرة" },
  { value: "+3500", label: "عميل راضٍ" },
  { value: "+1800", label: "جهاز تم إصلاحه" },
  { value: "24/7", label: "خدمة طوارئ" },
];

export const SERVICES: readonly Service[] = [
  {
    icon: "Tv",
    title: "إصلاح التلفزيونات",
    desc: "نعيد لتلفزيونك الصورة والصوت كما كانا، بفحص دقيق وإصلاح مدروس يحفظ قيمة جهازك.",
    items: ["مشاكل الصورة", "أعطال الصوت", "لوحات التغذية"],
    img: "/images/hero.jpg",
  },
  {
    icon: "MonitorSmartphone",
    title: "إصلاح Smart TV",
    desc: "نحل مشاكل النظام والتطبيقات والاتصال حتى يعود تلفزيونك الذكي سريعاً وسلساً.",
    items: ["تعليق النظام", "مشاكل Wi-Fi", "تحديث التطبيقات"],
    img: "/images/service-smart-tv.jpg",
  },
  {
    icon: "ScanLine",
    title: "إصلاح LED / OLED / QLED",
    desc: "خبرة متخصصة في التقنيات الحديثة لمعالجة الإضاءة الخلفية واللوحات ومشاكل العرض.",
    items: ["تغيير الإضاءة", "تشخيص اللوحات", "ألوان وصورة دقيقة"],
    img: "/images/service-led-oled.jpg",
  },
  {
    icon: "Cctv",
    title: "تركيب كاميرات المراقبة",
    desc: "نصمم ونركب كاميرات مراقبة واضحة وموثوقة، مع مشاهدة مباشرة من هاتفك أينما كنت.",
    items: ["كاميرات HD/4K", "ربط على الهاتف", "تسجيل ذكي"],
    img: "/images/portfolio-cctv.jpg",
  },
  {
    icon: "ShieldCheck",
    title: "أنظمة الحماية",
    desc: "حلول أمن متكاملة للمنازل والمحلات تمنحك رؤية وتحكماً وطمأنينة على مدار الساعة.",
    items: ["أجهزة تسجيل", "تنبيهات ذكية", "حماية للمحل والمنزل"],
    img: "/images/portfolio-cctv.jpg",
  },
  {
    icon: "Radio",
    title: "تركيب IPTV",
    desc: "نجهز تجربة مشاهدة أنيقة ومستقرة عبر IPTV، مع إعداد كامل للشبكة والمشغل.",
    items: ["تثبيت احترافي", "بث مستقر", "دعم بعد التركيب"],
    img: "/images/portfolio-iptv.jpg",
  },
  {
    icon: "Settings2",
    title: "إعداد الرسيفرات",
    desc: "نبرمج ونضبط أجهزة الاستقبال بدقة لتستمتع بالقنوات والمحتوى بدون تعقيد.",
    items: ["ضبط القنوات", "تهيئة الإشارة", "إعدادات ذكية"],
    img: "/images/service-smart-tv.jpg",
  },
];

export const WHY_CHOOSE: readonly TrustItem[] = [
  {
    icon: "Zap",
    title: "خدمة سريعة",
    desc: "نحترم وقتك. نرد بسرعة ونبدأ بتحديد الحل المناسب دون تأخير غير ضروري.",
  },
  {
    icon: "Search",
    title: "تشخيص احترافي",
    desc: "نفحص العطل بأجهزة دقيقة ونشرح لك الحل والتكلفة بوضوح قبل بدء أي عمل.",
  },
  {
    icon: "BadgeCheck",
    title: "ضمان موثوق",
    desc: "كل إصلاح وتركيب يتم بعناية ويشمله ضمان يمنحك ثقة كاملة في النتيجة.",
  },
  {
    icon: "House",
    title: "خدمة منزلية",
    desc: "نصل إليك داخل طنجة لتشخيص وإصلاح أو تركيب أجهزتك براحة تامة في مكانك.",
  },
];

export const PROCESS: readonly ProcessStep[] = [
  {
    step: "01",
    icon: "MessageCircle",
    title: "تواصل معنا",
    desc: "أرسل صورة أو وصفاً سريعاً للمشكلة عبر واتساب، وسنرد عليك بوضوح.",
  },
  {
    step: "02",
    icon: "Search",
    title: "التشخيص",
    desc: "نحدد مصدر العطل بدقة ونقترح عليك الخيار الأنسب دون مفاجآت.",
  },
  {
    step: "03",
    icon: "CalendarDays",
    title: "تحديد الموعد",
    desc: "ننسق موعداً مرناً لزيارة منزلية أو لاستقبال جهازك في الوقت المناسب.",
  },
  {
    step: "04",
    icon: "Wrench",
    title: "الإصلاح",
    desc: "ينفذ فنيونا الإصلاح أو التركيب بعناية واختبارات كاملة قبل التسليم.",
  },
  {
    step: "05",
    icon: "ShieldCheck",
    title: "الضمان",
    desc: "تستلم خدمة مضمونة مع دعم واضح بعد التنفيذ لراحة بالك.",
  },
];

export const PORTFOLIO: readonly PortfolioItem[] = [
  { img: "/images/hero.jpg", title: "إصلاح شاشة تلفزيون ذكي", cat: "إصلاح تلفزيونات" },
  { img: "/images/portfolio-cctv.jpg", title: "نظام مراقبة لفيلا خاصة", cat: "كاميرات مراقبة" },
  { img: "/images/portfolio-iptv.jpg", title: "إعداد IPTV لصالة عائلية", cat: "أنظمة IPTV" },
  { img: "/images/portfolio-before-after.jpg", title: "قبل وبعد إصلاح الشاشة", cat: "نتيجة الإصلاح" },
];

export const REVIEWS: readonly Testimonial[] = [
  {
    name: "محمد العريبي",
    role: "صاحب محل تجاري — طنجة",
    text: "أصلحوا لي شاشة العرض خلال يوم واحد وبجودة ممتازة. تعامل راقٍ وضمان حقيقي. أنصح بهم بشدة.",
    rating: 5,
  },
  {
    name: "سارة الحمداني",
    role: "عميلة منزلية — طنجة",
    text: "ركّبوا لي كاميرات المراقبة وأربطوها بجوالي. شعور بالأمان لا يقدر بثمن. فريق محترف.",
    rating: 5,
  },
  {
    name: "يوسف القاسمي",
    role: "مدير مقهى — طنجة",
    text: "نظام IPTV شغّال بثبات تام منذ أشهر. دعم سريع وأسعار معقولة. TENDA BOX 8Q الأفضل.",
    rating: 5,
  },
  {
    name: "نور الدين الفاسي",
    role: "عميل — طنجة",
    text: "تعامل راقٍ واحترافية عالية. حلّوا مشكلة الصوت في التلفزيون بدقة وسرعة. شكراً جزيلاً.",
    rating: 5,
  },
];

export const FAQS: readonly FAQItem[] = [
  {
    q: "هل تقدمون خدمة منزلية داخل طنجة؟",
    a: "نعم. نصل إليك في طنجة لتشخيص الأعطال وتركيب الكاميرات وIPTV أو إصلاح ما يمكن إصلاحه في مكانك، ثم ننسق بوضوح إن احتاج الجهاز إلى ورشتنا.",
  },
  {
    q: "هل يوجد ضمان على الإصلاح أو التركيب؟",
    a: "نعم. خدماتنا تشمل ضماناً على العمل والقطع التي نركبها وفق نوع الإصلاح، لأن راحتك وثقتك جزء أساسي من خدمتنا.",
  },
  {
    q: "كم يستغرق إصلاح التلفزيون؟",
    a: "تختلف المدة حسب العطل وتوفر القطعة، لكننا نبدأ بالتشخيص السريع ونخبرك بمدة دقيقة قبل التنفيذ. كثير من الحالات تنجز خلال 24 إلى 48 ساعة.",
  },
  {
    q: "ما هي الماركات والأنواع التي تدعمونها؟",
    a: "ندعم أغلب ماركات التلفزيونات الذكية والشاشات LED وOLED وQLED، إضافة إلى الرسيفرات ومشغلات IPTV وأنظمة المراقبة المنزلية والتجارية.",
  },
  {
    q: "هل يمكن متابعة الكاميرات من الهاتف؟",
    a: "بالتأكيد. نربط نظام الكاميرات بتطبيق آمن على هاتفك ونشرح لك كل خطوة لتتابع موقعك بسهولة من أي مكان.",
  },
];