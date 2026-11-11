export const SITE = {
  name: "Phuong Anh Le",
  email: "lephuonganh2712009@gmail.com",
  cvUrl: "/cv.pdf",
  linkedinUrl: "" as string, // add LinkedIn profile URL when available
};

export const NAV_LINKS = [
  { label: "About", hash: "about" },
  { label: "Ventures", hash: "ventures" },
  { label: "Experience", hash: "experience" },
  { label: "Contact", hash: "contact" },
] as const;

export const IMPACT = [
  { value: "1,000+", label: "Facebook community built for ApplySpark", tone: "butter", tilt: -2.5 },
  { value: "200+", label: "Accounts registered on ApplySpark", tone: "powder", tilt: 1.8 },
  { value: "50", label: "Monthly paying subscribers", tone: "blush", tilt: -1.2 },
  { value: "25%", label: "Sign-up → paid conversion", tone: "sage", tilt: 2.6 },
  { value: "15,000", label: "Club followers grown in 2 months (M4U)", tone: "beige", tilt: 1.4 },
  { value: "300/300", label: "Concert tickets sold out", tone: "butter", tilt: -2.8 },
  { value: "20", label: "People led on a comms team", tone: "blush", tilt: 2.2 },
  { value: "2", label: "Platforms designed & built", tone: "powder", tilt: -1.6 },
] as const;

export const SKILLS = [
  "Brand & Content Strategy",
  "Community Building",
  "Event Promotion",
  "Market Research",
  "Competitive Benchmarking",
  "Business Planning",
  "Web Building & UX Flow",
  "Prompt Engineering (Claude)",
  "Meta Business Suite",
  "Canva",
  "CapCut",
  "English (IELTS 8.0)",
  "Vietnamese (native)",
];

export const FACTS = [
  ["School", "Nguyen Tat Thanh High School, Hanoi"],
  ["Class of", "2027"],
  ["GPA", "9.6 / 10"],
  ["IELTS", "8.0"],
  ["SAT", "1440"],
  ["Honours", "Excellent Student Award, 12 consecutive years"],
] as const;
