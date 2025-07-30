import { BlogSection } from "./components/BlogSection";
import { FaqSection } from "./components/FaqSection";
import { Hero } from "./components/Hero";
import { TherapyTypes } from "./components/TherapyTypes";
import { WorkingAreas } from "./components/WorkingAreas";

export default function Home() {
  return (
    <>
      <Hero />
      <TherapyTypes />
      <WorkingAreas />
      <BlogSection />
      <FaqSection />
    </>
  )
}
