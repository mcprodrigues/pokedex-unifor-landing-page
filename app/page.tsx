
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ImageSection from '@/components/sections/ImageSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import MetricsSection from '@/components/sections/MetricsSection';
import DatasetAndStacksSection from '@/components/sections/DatasetAndStacksSection';
import DownloadSection from '@/components/sections/DownloadSection';
import Footer from '@/components/layout/Footer';
import ImageUploader from '@/components/sections/RequestExampleSection';
import Pokedex from '@/components/sections/Pokedex';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCF0E3] text-sky-950 font-sans">
      <Navbar />


      <HeroSection />
      <ImageSection />
      <HowItWorksSection />
      <MetricsSection />
      <DatasetAndStacksSection />
      <Pokedex/>
      <DownloadSection />
      <ImageUploader />

      <Footer />
    </main>
  );
}
