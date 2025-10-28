import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Prizes from '@/components/Prizes';
import JudgesSpeakers from '@/components/JudgesSpeakers';
import Timeline from '@/components/Timeline';
import Sponsors from '@/components/Sponsors';
import FAQ from '@/components/FAQ';
import Gallery from '@/components/Gallery';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <Navigation />
      <Hero />
      <About />
      <Prizes />
      <JudgesSpeakers />
      <Timeline />
      <Sponsors />
      <FAQ />
      <Gallery />
      <Team />
      <Footer />
    </div>
  );
}