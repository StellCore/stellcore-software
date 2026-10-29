import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLang } from '@/i18n';
import logo from '@/images/logo.jpeg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLang();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="StellCore Logo"
              className="w-8 h-8 rounded-lg object-contain"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">StellCore Software</span>
            </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {t.nav.home}
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {t.nav.apps}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-pink-400 transition-colors"
            >
              {t.nav.contact}
            </button>
            <ThemeToggle />
            <LanguageToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <LanguageToggle />
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors"
              >
                {t.nav.home}
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors"
              >
                {t.nav.apps}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-purple-600 transition-colors"
              >
                {t.nav.contact}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}