import { useLang, type Lang } from '@/i18n';

const Flag = ({ lang }: { lang: Lang }) =>
  lang === 'pt' ? (
    <svg viewBox="0 0 28 20" className="h-5 w-7 rounded-sm shadow-sm" aria-hidden="true">
      <rect width="28" height="20" fill="#009c3b" />
      <path d="M14 3 25 10 14 17 3 10z" fill="#ffdf00" />
      <circle cx="14" cy="10" r="4" fill="#002776" />
    </svg>
  ) : (
    <svg viewBox="0 0 28 20" className="h-5 w-7 rounded-sm shadow-sm" aria-hidden="true">
      <rect width="28" height="20" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={i * (20 / 13)} width="28" height={20 / 13} fill="#b22234" />
      ))}
      <rect width="12" height={(20 / 13) * 7} fill="#3c3b6e" />
    </svg>
  );

export default function LanguageToggle() {
  const { lang, setLang, t } = useLang();
  const next: Lang = lang === 'pt' ? 'en' : 'pt';

  return (
    <button
      onClick={() => setLang(next)}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={t.toggleLang}
      title={next === 'en' ? 'English' : 'Português'}
    >
      <Flag lang={lang} />
    </button>
  );
}
