import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'pt' | 'en';
export type L<T = string> = Record<Lang, T>;

const STORAGE_KEY = 'lang';

const initialLang = (): Lang => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'pt' || stored === 'en') return stored;
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
};

export const dictionary = {
  pt: {
    title: 'StellCore Software - Apps para o seu dia a dia e para o seu negócio',
    nav: { home: 'Início', apps: 'Apps', contact: 'Contato' },
    toggleLang: 'Mudar idioma',
    toggleTheme: 'Alternar tema',
    hero: {
      line1: 'Criamos e publicamos apps para o seu dia a dia e para o seu negócio.',
      line2: 'Conheça os nossos produtos.',
      cta: 'Ver os apps',
    },
    apps: {
      titleStart: 'Nossos',
      titleEnd: 'apps',
      subtitle: 'Apps que a StellCore desenvolve e publica.',
      available: 'Disponível',
      soon: 'Em breve',
      iconOf: 'Ícone do',
      screenshotsOf: 'Capturas de tela do',
      appStoreSoon: 'App Store em breve',
      playSoon: 'Google Play em breve',
      site: 'Site',
      code: 'Código',
      transcript: 'Transcrição do vídeo',
      privacy: 'Política de privacidade',
      deleteAccount: 'Excluir conta e dados',
      others: 'Sites e outros projetos',
    },
    contact: {
      titleStart: 'Entre em',
      titleEnd: 'Contato',
      subtitle: 'Dúvidas sobre os nossos apps ou quer conversar sobre um projeto? Fale com a gente.',
      items: [
        { title: 'Email', description: 'Resposta em até 24 horas' },
        { title: 'Telefone', description: 'Seg à Sex, 9h às 18h' },
        { title: 'Localização', description: 'Atendimento remoto e presencial' },
        { title: 'Horário', description: 'Segunda à Sexta-feira' },
      ],
      location: 'Curitiba, PR - Brasil',
      hours: '9h às 18h',
    },
    footer: {
      about: 'Criamos e publicamos apps para o seu dia a dia e para o seu negócio.',
      quickLinks: 'Links Rápidos',
      contact: 'Contato',
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    title: 'StellCore Software - Apps for your daily life and your business',
    nav: { home: 'Home', apps: 'Apps', contact: 'Contact' },
    toggleLang: 'Change language',
    toggleTheme: 'Toggle theme',
    hero: {
      line1: 'We build and publish apps for your daily life and your business.',
      line2: 'Meet our products.',
      cta: 'See the apps',
    },
    apps: {
      titleStart: 'Our',
      titleEnd: 'apps',
      subtitle: 'Apps that StellCore builds and publishes.',
      available: 'Available',
      soon: 'Coming soon',
      iconOf: 'Icon of',
      screenshotsOf: 'Screenshots of',
      appStoreSoon: 'App Store coming soon',
      playSoon: 'Google Play coming soon',
      site: 'Website',
      code: 'Code',
      transcript: 'Video transcript',
      privacy: 'Privacy policy',
      deleteAccount: 'Delete account and data',
      others: 'Websites and other projects',
    },
    contact: {
      titleStart: 'Get in',
      titleEnd: 'Touch',
      subtitle: 'Questions about our apps or want to talk about a project? Get in touch.',
      items: [
        { title: 'Email', description: 'Reply within 24 hours' },
        { title: 'Phone', description: 'Mon to Fri, 9am to 6pm' },
        { title: 'Location', description: 'Remote and on-site service' },
        { title: 'Hours', description: 'Monday to Friday' },
      ],
      location: 'Curitiba, PR - Brazil',
      hours: '9am to 6pm',
    },
    footer: {
      about: 'We build and publish apps for your daily life and your business.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      rights: 'All rights reserved.',
    },
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (typeof dictionary)['pt'] };

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.title = dictionary[lang].title;
  }, [lang]);

  const setLang = (l: Lang) => {
    localStorage.setItem(STORAGE_KEY, l);
    setLangState(l);
  };

  return <LangContext.Provider value={{ lang, setLang, t: dictionary[lang] }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside LangProvider');
  return ctx;
}
