import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Apps from '@/components/Apps';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Apps />
      <Contact />
      <Footer />
    </div>
  );
}