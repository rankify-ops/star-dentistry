import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Intro } from "@/components/sections/Intro";
import { Services } from "@/components/sections/Services";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Logos } from "@/components/sections/Logos";
import { Faqs } from "@/components/sections/Faqs";
import { Contact } from "@/components/sections/Contact";
import { Reviews } from "@/components/sections/Reviews";
import { ReviewQuote } from "@/components/sections/ReviewQuote";

export default function Home() {
  return (
    <>
      <Hero />
      {/* The health funds, brands and memberships, straight under the hero. */}
      <Logos />
      <Trust />
      <Intro />
      <ReviewQuote n={0} tone="mist" />
      <Services />
      <ReviewQuote n={1} tone="ink" />
      <WhyChoose />
      <Reviews />
      <Faqs />
      <ReviewQuote n={2} tone="mist" />
      <Contact />
    </>
  );
}
