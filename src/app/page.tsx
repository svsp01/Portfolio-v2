import HeroComponent from "@/components/common/HeroSection/HeroComponent";
import MapSection from "@/components/common/Map/MapSection";
import ProjectsHero from "@/components/common/Project/ProjectsHero";

export default function Home() {
  return (
    <main className=" min-h-screen bg-secondaryColor dark:bg-primaryColor  py-2">
      <HeroComponent />

      <MapSection />
      <ProjectsHero />
    </main>
  );
}
