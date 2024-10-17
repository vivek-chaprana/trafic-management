import Footer from "./footer";
import Hero from "./hero";
import HowItWorksComponent from "./how -it-works";
import Navbar from "./navbar";
import { TechStackComponent } from "./tech-stack";
import TestModal from "./test";
import VideoComponent from "./video";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Navbar />
        <Hero />
        <VideoComponent />
        <HowItWorksComponent />
        <TestModal />
        <TechStackComponent />
        <Footer />
      </main>
    </div>
  );
}
