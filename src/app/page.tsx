import CallToAction from "@/sections/CallToAction";
import FeaturedWork from "@/sections/FeaturedWork";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <FeaturedWork />
      <CallToAction />
      <Footer />
    </>
  );
}
