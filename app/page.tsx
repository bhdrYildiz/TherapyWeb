import { BlogSection } from "./components/BlogSection";
import { FaqSection } from "./components/FaqSection";
import { Hero } from "./components/Hero";
import ResponsiveNavbar from "./components/Navbar/ResponsiveNavbar";
import { TherapyTypes } from "./components/TherapyTypes";
import { WorkingAreas } from "./components/WorkingAreas";

export default function Home() {
  return (
    <>
      <ResponsiveNavbar />
      <Hero />
      <TherapyTypes />
      <WorkingAreas />
      <BlogSection />
      <FaqSection />
    </>
  )
}
