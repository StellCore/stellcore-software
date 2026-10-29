import { ExternalLink, Play } from 'lucide-react';
import { apps, otherProjects, type AppEntry } from '@/data/apps';

const storeLink =
  'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700';

function AppBlock({ app }: { app: AppEntry }) {
  const available = app.status === 'Disponível';
  return (
    <article id={app.id} className="scroll-mt-24 rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
      <div className="relative">
        <img src={app.cover} alt="" loading="lazy" className="w-full aspect-[1024/500] object-cover" />
        <span
          className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
            available ? 'bg-emerald-500 text-white' : 'bg-amber-400 text-gray-900'
          }`}
        >
          {app.status}
        </span>
      </div>

      <div className="p-6 md:p-8 flex flex-col gap-6">
        <header className="flex items-center gap-4">
          {app.icon && <img src={app.icon} alt={`Ícone do ${app.name}`} className="w-16 h-16 rounded-2xl shadow" />}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{app.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{app.category}</p>
          </div>
        </header>

        <p className="text-lg text-gray-700 dark:text-gray-300">{app.tagline}</p>

        <div className="flex flex-wrap gap-3">
          {app.playStore && (
            <a href={app.playStore} target="_blank" rel="noopener noreferrer" className={storeLink}>
              <Play size={16} /> Google Play
            </a>
          )}
          {app.appStore ? (
            <a href={app.appStore} target="_blank" rel="noopener noreferrer" className={storeLink}>
              <ExternalLink size={16} /> App Store
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium border border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400">
              App Store em breve
            </span>
          )}
          {app.site && (
            <a href={app.site} target="_blank" rel="noopener noreferrer" className={storeLink}>
              <ExternalLink size={16} /> Site
            </a>
          )}
          {!app.playStore && (
            <span className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium border border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400">
              Google Play em breve
            </span>
          )}
        </div>

        {app.video && (
          <figure>
            <video controls preload="none" poster={app.video.poster} className="w-full rounded-xl">
              <source src={app.video.src} type="video/mp4" />
            </video>
            <details className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <summary className="cursor-pointer font-medium">Transcrição do vídeo</summary>
              <p className="mt-2 whitespace-pre-line">{app.video.transcript}</p>
            </details>
          </figure>
        )}

        {app.screenshots.length > 0 && (
          <div className="flex gap-4 overflow-x-auto snap-x pb-2" role="list" aria-label={`Capturas de tela do ${app.name}`}>
            {app.screenshots.map((s) => (
              <figure key={s.caption} role="listitem" className="snap-start shrink-0 w-44">
                <img src={s.src} alt={s.caption} loading="lazy" className="w-full rounded-xl shadow" />
                <figcaption className="mt-2 text-xs text-gray-600 dark:text-gray-400">{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}

        <div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{app.description}</p>
          <ul className="mt-4 list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
            {app.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        {(app.privacy || app.terms) && (
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            {app.privacy && (
              <a href={app.privacy} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                Política de privacidade
              </a>
            )}
            {app.terms && (
              <a href={app.terms} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                Excluir conta e dados
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Apps() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nossos <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">apps</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Apps que a StellCore desenvolve e publica.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {apps.map((app) => (
            <AppBlock key={app.id} app={app} />
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-20 mb-6 text-center">Sites e outros projetos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {otherProjects.map((p) => (
            <div key={p.name} className="rounded-xl bg-white dark:bg-gray-800 shadow p-6 flex flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs font-medium px-2 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                    {t}
                  </span>
                ))}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{p.name}</h4>
              <p className="text-gray-600 dark:text-gray-400">{p.description}</p>
              {p.links.length > 0 && (
                <div className="flex gap-4 text-sm font-medium">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
