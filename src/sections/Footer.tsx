import FooterCallToAction from "@/components/FooterCallToAction";
import SocialIcon from "@/components/SocialIcon";
import { Button } from "@/components/ui/button";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { ArrowBigUpDash } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="py-8 font-sans text-white">
      <div className="container">
        <div className="relative rounded-xl bg-black px-4 py-8 font-sans">
          <div className="absolute -top-1 -right-1 rounded-bl-xl bg-white">
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="border-none text-black shadow-none"
            >
              <Link href="#header" className="text-sm">
                Scroll To Top
                <ArrowBigUpDash />
              </Link>
            </Button>
          </div>
          <div className="xl:mr-24 xl:flex xl:justify-between">
            <div>
              <div className="ml-2 font-serif text-2xl font-semibold tracking-wide">
                Harindu
              </div>
              <div className="mt-6 flex gap-1">
                <SocialIcon href="https://www.linkedin.com/in/harindue/">
                  <GrLinkedinOption size={28} />
                </SocialIcon>
                <SocialIcon href="mailto:harindu.pe@gmail.com">
                  <TfiEmail size={28} />
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/sir_hpe/">
                  <FaInstagram size={28} />
                </SocialIcon>
                <SocialIcon href="https://github.com/harindu-pe">
                  <FaGithub size={28} className="" />
                </SocialIcon>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 max-xl:mt-12 max-xl:ml-2">
                <div className="flex flex-col">
                  <h1 className="mb-4 text-lg font-semibold">Services</h1>
                  <span>Web Design</span>
                  <span>UI UX Design</span>
                  <span>Web Apps</span>
                  <span>SEO</span>
                  <span>Maintenance</span>
                  <span>Hosting</span>
                </div>
                <div>
                  <div>
                    <h1 className="mb-4 text-lg font-semibold">Contact Me</h1>
                    <a href="mailto:harindu.pe@gmail.com" className="break-all">
                      harindu.pe@gmail.com
                    </a>
                  </div>
                  <div>
                    <h1 className="mt-8 mb-4 text-lg font-semibold">
                      Based In
                    </h1>
                    <span>Colombo, Sri Lanka</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <FooterCallToAction />
          </div>
          <div className="mt-12 ml-2 text-center text-sm">
            Copyright © 2025 Harindu Egalla
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
