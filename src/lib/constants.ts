import type {
  CourseInfo,
  LearningOutcome,
  CurriculumClass,
  FAQItem,
} from "@/types";

export const COURSE_INFO: CourseInfo = {
  name: "Speak To Win",
  shortName: "STW",
  mentor: "Seenjoy Saha",
  dates: "৮ ও ৯ মে, ২০২৬",
  time: "রাত ৮:০০ টা",
  price: 880,
  originalPrice: 1500,
  currency: "BDT",
  platform: "Zoom",
  language: "বাংলা",
  durationPerClass: "২.৫ ঘন্টা",
  totalClasses: 2,
  zoomLink: "https://zoom.us/j/placeholder",
};

export const LEARNING_OUTCOMES: LearningOutcome[] = [
  {
    icon: "Mic",
    title: "আত্মবিশ্বাসী বক্তৃতা",
    description: "কিভাবে নিজের ভয়েজকে সঠিকভাবে ব্যবহার করা হয়।",
  },
  {
    icon: "User",
    title: "শ্রোতাকে মুগ্ধ করা",
    description: "কীভাবে নিজের শারীরিক ভাষাকে আকর্ষণীয় করে তোলা যায়।",
  },
  {
    icon: "BookOpen",
    title: "বক্তৃতার কাঠামো",
    description: "সুন্দরভাবে গল্প বলা ও বক্তব্য গঠন করার নিয়ম জানবেন।",
  },
  {
    icon: "Shield",
    title: "স্টেজ ফ্রাইট জয়",
    description: "কিভাবে মানুষের সামনে দাঁড়িয়ে কথা বলার ভয়কে জয় করতে হয়।",
  },
  {
    icon: "Magnet",
    title: "প্রভাব ও নেতৃত্ব",
    description: "আরও থাকছে কোন জিনিসগুলো করলে মানুষ আপনার কথা শুনবেই।",
  },
];

export const CURRICULUM: CurriculumClass[] = [
  {
    classNumber: "ক্লাস ০১",
    title: "Build The Foundation",
    subtitle: "মাইন্ডসেট, মৌখিক ভিত্তি ও আত্মবিশ্বাস",
    topics: [
      { text: "মাইন্ডসেট পরিবর্তন — চিন্তাভাবনার খোরাক" },
      { text: "মৌখিক ভিত্তি ও টোনালিটি (কথা বলার স্বর ও ছন্দ)" },
      { text: "নন-ভার্বাল কমিউনিকেশন ও বডি ল্যাঙ্গুয়েজ" },
      { text: "মঞ্চ ও দৈনন্দিন কথোপকথনে আত্মবিশ্বাস গড়ে তোলা" },
    ],
  },
  {
    classNumber: "ক্লাস ০২",
    title: "Command Any Stage",
    subtitle: "গল্প, কাঠামো, প্রভাব ও স্মরণীয় উপস্থিতি",
    topics: [
      { text: "মাস্টার স্টোরিটেলিং" },
      { text: "সঠিক বক্তৃতার কাঠামো (Speech Structures)" },
      { text: "কথার মাধ্যমে বিশ্বাস ও প্রভাব ফেলা" },
      { text: "ভালো হিউমার ডেভেলপ করা" },
      { text: "শ্রোতার মনে স্মরণীয় থেকে যাওয়া" },
    ],
  },
];

export const MENTOR_INFO = {
  name: "Seenjoy Saha",
  tagline: "পাবলিক স্পিকার ও কন্টেন্ট ক্রিয়েটর",
  credentials: [
    "পুরস্কারপ্রাপ্ত ইনফোটেইনমেন্ট কনটেন্ট ক্রিয়েটর",
    "নিজের কণ্ঠ ও জ্ঞানভিত্তিক কনটেন্টের মাধ্যমে কোটি-কোটি মানুষের কাছে পৌঁছেছেন",
    "১০০+ শো ও প্রোগ্রাম সঞ্চালনার বাস্তব অভিজ্ঞতা",
  ],
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "ক্লাসগুলো কি রেকর্ডেড নাকি লাইভ?",
    answer:
      "Zoom এ লাইভ মাস্টারক্লাস করানো হবে।",
  },
  {
    question: "ক্লাসগুলো কি বাংলায় হবে?",
    answer:
      "হ্যা। ক্লাসগুলো বাংলায় হবে।",
  },
  {
    question: "লাইভ মাস্টারক্লাসটি কি Beginner Friendly?",
    answer:
      "হ্যাঁ। আপনি যেই স্তরেই থাকুন না কেনো এই লাইভ মাস্টারক্লাসের মাধ্যমে আপনি উপকৃত হবেন।",
  },
  {
    question: "ক্লাস রেকর্ডিং কি দেয়া হবে?",
    answer:
      "হ্যাঁ, দেওয়া হবে।  লাইভ ক্লাস মিস করলে বা আবার দেখতে চাইলে ৪৮ ঘণ্টার জন্য ক্লাস রেকর্ডিং দেখা যাবে।",
  },
  {
    question: "ক্লাস শেষে সার্টিফিকেট থাকবে?",
    answer:
      "হ্যাঁ থাকবে। কিন্তু তার জন্য আপনাকে অবশ্যই আমার দেওয়া ২টি হোমওয়ার্ক সাবমিট করতে হবে।",
  },
  {
    question: "কোর্সের ফি কি রিফান্ডযোগ্য?",
    answer: "কোর্সের ফি রিফান্ডযোগ্য নয়।",
  },
  {
    question: "পেমেন্ট করার পর কী হবে?",
    answer:
      "পেমেন্ট সফল হলে আপনার ইমেইলে একটি কনফার্মেশন মেসেজ পাঠানো হবে। ক্লাসের আগের দিন Zoom লিংক পাঠানো হবে।",
  },
];

// UI Text strings
export const NAV = {
  logo: "SEENJOY ACADEMY",
  ctaText: "এখনই ভর্তি হোন",
};

export const HERO = {
  badge: "🔴 লাইভ মাস্টারক্লাস",
  headline: "কথায় জিতুন,\nজীবনে এগিয়ে যান",
  subHeadline:
    "আপনি অনেক কিছু জানেন, কিন্তু ঠিকঠাক বলতে না পারার কারণে পিছিয়ে পড়ছেন? মানুষের সামনে দাঁড়িয়ে কথা বলতে গেলেই গলা শুকিয়ে যাচ্ছে? ",
  description:
    "JOIN Speak To Win. মাত্র ২দিনের Live Zoom Class এর মাধ্যমে আপনে শিখবেন Public Speaking, Storytelling এবং Powerful Communication Techniques.",
  ctaText: "এখনই ভর্তি হোন",
  urgency: "Live Masterclass and Community হওয়ায় সিট সংখ্যা সিমিত",
  videoLabel: "কোর্স প্রিভিউ ভিডিও",
};

export const SECTIONS = {
  whatYouLearn: {
    title: "কী শিখবেন এই মাস্টারক্লাসে?",
    subtitle:
      "মাত্র ২টি লাইভ ক্লাসে আপনি যে দক্ষতাগুলো অর্জন করবেন তা আপনার জীবন বদলে দেবে",
    cta: "সম্পূর্ণ কারিকুলাম দেখুন ↓",
  },
  curriculum: {
    title: "মাস্টারক্লাসের কাঠামো",
    subtitle:
      "প্রতিটি ক্লাস সাবধানে সাজানো হয়েছে সর্বোচ্চ শেখার অভিজ্ঞতার জন্য",
    homeworkNote:
      "হোমওয়ার্ক জমা: অনুশীলনের জন্য আপনাকে কাজ দেয়া হবে। মনে রাখবেন, অনুশীলন ছাড়া কেউ দারুণ বক্তা হতে পারে না।",
    platformNote: "Zoom-এ লাইভ: বাংলা ভাষায়, প্রতি ক্লাস ২.৫ ঘন্টা",
    ctaText: "এখনই ভর্তি হোন",
  },
  mentor: {
    title: "আপনার মেন্টর",
    subtitle: "যার কাছ থেকে শিখবেন",
  },
  faq: {
    title: "সাধারণ জিজ্ঞাসা",
    subtitle: "আপনার মনে যে প্রশ্নগুলো আসছে",
  },
  finalCta: {
    title: "আর দেরি না করে আজই শুরু করুন",
    subtitle: "সীমিত আসন — যত দ্রুত নিশ্চিত করবেন, তত ভালো",
    originalPriceLabel: "নিয়মিত মূল্য",
    currentPriceLabel: "Early Bird Discount",
    ctaText: `এখনই ভর্তি হোন — ৳${COURSE_INFO.price}`,
    urgency: "অফার সীমিত সময়ের জন্য",
  },
};
