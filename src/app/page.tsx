import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Examples } from "@/components/Examples";
import { HowItWorks } from "@/components/HowItWorks";
import { UseCases } from "@/components/UseCases";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { FloatingCta } from "@/components/FloatingCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UseCases />
        <Examples />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Gallery />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
