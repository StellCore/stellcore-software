import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToApps = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-purple-950 dark:to-pink-950 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                StellCore
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">Software</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Criamos e publicamos apps para o seu dia a dia e para o seu negócio.
              <br />
              Conheça os nossos produtos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToApps}
                className="text-lg px-8 py-6 border-2 hover:bg-gray-50"
              >
                Ver os apps
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}