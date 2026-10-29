import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Apps from '@/components/Apps';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Apps />
      <FAQ />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
}