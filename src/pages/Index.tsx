import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturesSection from '@/components/FeaturesSection';
import AnimatedSection from '@/components/AnimatedSection';
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <FeaturesSection />
      <About />
      <AnimatedSection>
        {/* You can add any future animated content here */}
        <div className="text-center text-green py-16">
          <h2 className="text-3xl font-bold">More Coming Soon 🚀</h2>
          <p className="mt-4 text-lg">
            Stay tuned for new updates, events, and exclusive opportunities with EARNIKO.
          </p>
        </div>
      </AnimatedSection>
      <Footer />
    </main>
    
  );
}
