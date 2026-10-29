import { Languages } from 'lucide-react';
import { useLang } from '@/i18n';

export default function LanguageToggle() {
  const { lang, setLang, t } = useLang();

  return (
    <button
      onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
      className="flex items-center gap-1 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-semibold text-gray-600 dark:text-gray-300"
      aria-label={t.toggleLang}
    >
      <Languages className="h-5 w-5" />
      {lang === 'pt' ? 'EN' : 'PT'}
    </button>
  );
}
