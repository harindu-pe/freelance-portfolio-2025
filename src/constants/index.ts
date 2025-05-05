import landingPage1 from "@/assets/images/landingPage1.png";
import landingPage2 from "@/assets/images/landingPage2.png";
import landingPage3 from "@/assets/images/landingPage3.png";
import landingPage4 from "@/assets/images/landingPage4.png";
import landingPage5 from "@/assets/images/landingPage5.png";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Blog", href: "https://mapleascent.wordpress.com/" },
];

const workTemplates = [
  {
    id: 1,
    title: "Layers",
    image: landingPage1,
    year: "2025 ",
    description:
      "A responsive, accessible landing page that adapts beautifully across devices [Design: Frontend Tribe].",
    techStack: ["NextJS", "React", "Framer Motion"],
    link: "https://landing-page-3-kappa.vercel.app/",
  },
  {
    id: 2,
    title: "Awwwards",
    image: landingPage2,
    year: "2024",
    description:
      "A visually compelling layout structured to boost engagement [Design: JavaScript Mastery].",
    techStack: ["NextJS", "React", "Tailwind CSS"],
    link: "https://portfolio-awwwards.vercel.app/",
  },
  {
    id: 3,
    title: "Fizzi",
    image: landingPage3,
    year: "2024",
    description:
      "An engaging homepage built to communicate product value quickly and clearly [Design: Prismic].",
    techStack: ["NextJS", "React", "GSAP", "Prismic"],
    link: "https://fizzi-nine.vercel.app/",
  },
  {
    id: 4,
    title: "Light SaaS",
    image: landingPage4,
    year: "2024",
    description:
      "A polished landing page crafted to elevate brand presence and build user trust [Design: Frontend Tribe].",
    techStack: ["NextJS", "React", "Tailwind CSS"],
    link: "https://landing-page-saas-nine.vercel.app/",
  },
  {
    id: 5,
    title: "Glisten",
    image: landingPage5,
    year: "2024",
    description:
      "A multi-section landing page built to guide users through key product features [Design: Prismic].",
    techStack: ["NextJS", "React", "Prismic"],
    link: "https://glisten-ecru.vercel.app/",
  },
];

export { navLinks, workTemplates };
