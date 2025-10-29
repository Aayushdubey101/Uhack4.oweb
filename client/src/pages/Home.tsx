import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Problems from '@/components/Problems';
import Prizes from '@/components/Prizes';
import Timeline from '@/components/Timeline';
import Sponsors from '@/components/Sponsors';
import FAQ from '@/components/FAQ';
import Gallery from '@/components/Gallery';
import Team from '@/components/Team';
import Certificate from '@/components/Certificate';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <Navigation />
      <Hero />
      <About />
      <Problems />
      <Prizes />
      <Timeline />
      <Sponsors />
      <FAQ />
      <Gallery />
      <Team />
      <Certificate />
      <Footer />
    </div>
  );
}