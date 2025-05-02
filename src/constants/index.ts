import landingPage1 from "@/assets/images/landingPage1.png";
import landingPage2 from "@/assets/images/landingPage2.png";
import landingPage3 from "@/assets/images/landingPage3.png";
import landingPage4 from "@/assets/images/landingPage4.png";

const navLinks = [{ label: "Work", href: "#work" }];

const workTemplates = [
  {
    id: 1,
    title: "Dark Landing Page",
    image: landingPage1,
    year: "2024",
    description:
      "Stunning 3D Animated Portfolio Website with Next.js 14, Three.js, GSAP, and Prismic",
    techStack: ["NextJS", "React"],
    link: "https://landing-page-author.vercel.app/",
  },
  {
    id: 2,
    title: "Animated Landing Page",
    image: landingPage2,
    year: "2024",
    description:
      "Sleek Website Built with Next.js 14, Tailwind CSS, and Framer Motion for Smooth Animations",
    techStack: ["NextJS", "React"],
    link: "https://portfolio-awwwards.vercel.app/",
  },
  {
    id: 3,
    title: "Fizzi",
    image: landingPage3,
    year: "2024",
    description:
      "Beverage Brand Website Designed with Next.js 14, Shadcn UI, and Smooth Scroll Animations",
    techStack: ["NextJS", "React"],
    link: "https://fizzi-nine.vercel.app/",
  },
  {
    id: 4,
    title: "SnackNation",
    image: landingPage4,
    year: "2024",
    description:
      "An E-commerce Snack Store Built with Next.js 14, Sanity CMS, and WhatsApp Integration",
    techStack: ["NextJS", "React"],
    link: "https://www.snacknationtz.com/",
  },
];

export { navLinks, workTemplates };
