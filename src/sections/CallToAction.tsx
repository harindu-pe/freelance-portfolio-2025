import ContactForm from "@/components/ContactForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CallToAction = () => {
  return (
    <section id="callToAction" className="pt-24 pb-8">
      <div className="container">
        <div className="rounded-lg bg-gradient-to-b from-[#e36414] to-transparent pt-8 pb-16">
          <div className="flex flex-col items-center justify-center">
            <div className="inline-flex rounded-lg bg-black px-4 py-3 font-sans text-xs font-semibold text-white uppercase md:mt-10 lg:py-4">
              ✨ Contact
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="mt-8 font-sans text-4xl font-semibold md:text-5xl lg:text-6xl xl:lg:text-7xl">
                Let&apos;s Collab!
              </h1>
              <p className="mt-6 max-w-xs text-center font-sans md:max-w-sm lg:text-lg">
                Fill the contact form or send me an email and let&apos;s see if
                we are a good fit.
              </p>
              <div className="mt-8 flex items-center gap-2 font-sans font-semibold tracking-wide lg:text-lg">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Harindu"
                  />
                  <AvatarFallback>Harindu</AvatarFallback>
                </Avatar>
                <a href="mailto:harindu.pe@gmail.com">harindu.pe@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
