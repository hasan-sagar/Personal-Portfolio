import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import IntroPage from "@/components/IntroPage";
import Projects from "@/components/Projects";
import SkillsPage from "@/components/SkillsPage";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <div className="bg-[#3C096C] min-h-screen w-full">
      <main className="max-w-screen-2xl mx-auto">
        <Topbar />
        <IntroPage />
        <AboutPage />
        <SkillsPage />
        <Projects />
        <ContactPage />
      </main>
    </div>
  );
}
