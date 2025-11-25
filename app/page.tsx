import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import AboutTeam from '@/components/sections/AboutTeam';
import FinalCTA from '@/components/sections/FinalCTA';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import FloatingShapes from '@/components/FloatingShapes';
import ErrorBoundary from '@/components/ErrorBoundary';
import SEOHead from '@/components/SEOHead';
import PWAInstaller from '@/components/PWAInstaller';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata = {
  title: 'IT Lines - IT Consulting & Development Services',
  description: 'Empowering businesses with innovative IT solutions and expert consulting services for sustainable growth.',
};

export default function Home() {
  return (
    <LanguageProvider>
      <ErrorBoundary>
        <SEOHead />
        <div className="overflow-x-hidden relative">
          <FloatingShapes />
          <Header />
          <main className="relative z-10">
            <Hero />
            <Services />
            <AboutTeam />
            <Contact />
          </main>
          <Footer />
          <PWAInstaller />
        </div>
      </ErrorBoundary>
    </LanguageProvider>
  );
}

