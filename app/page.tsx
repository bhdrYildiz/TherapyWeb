import { BlogSection } from "./components/BlogSection";
import { FaqSection } from "./components/FaqSection";
import { Hero } from "./components/Hero";
import { Hero2 } from "./components/Hero2";
import { TherapyTypes } from "./components/TherapyTypes";
import { WorkingAreas } from "./components/WorkingAreas";

export default function Home() {
  return (
    <>
      <Hero />
      <Hero2 />
      <TherapyTypes />
      <WorkingAreas />
      <BlogSection />
      <FaqSection />
    </>
  )
}
