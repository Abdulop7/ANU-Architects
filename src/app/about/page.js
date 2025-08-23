import AchievementsSection from "../../../components/about/achievementSection";
import AboutHero from "../../../components/about/hero";
import LeadershipSection from "../../../components/about/leadershipSection";
import LocationSection from "../../../components/about/locationSection";
import OurStory from "../../../components/about/ourStory";
import PartnersCarousel from "../../../components/about/partnersCarousel";
import ProjectsSection from "../../../components/about/projectSection";
import TeamSection from "../../../components/about/teamSection";
import VisionMission from "../../../components/about/vissionMission";
import WhoWeAre from "../../../components/about/whoWeAre";

export default function page() {
  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden relative bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Modern Grid Lines (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"></div>

      {/* Accent Blobs */}
      <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-5%] right-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-purple-400 via-indigo-300 to-cyan-300 opacity-20 rounded-full blur-3xl"></div>

      {/* Diagonal Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/20 mix-blend-overlay"></div>

      {/* Page Sections */}
      <AboutHero />
      <WhoWeAre />
      <AchievementsSection />
      <PartnersCarousel />
      <LeadershipSection />
      <VisionMission />
      <OurStory />
      <LocationSection />
      <ProjectsSection />
      <TeamSection />
    </div>
  );
}
