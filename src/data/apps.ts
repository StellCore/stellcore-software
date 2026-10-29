import orcamentos from '@/images/projects/orcamentos-online.svg';
import stock from '@/images/projects/stock-regulator.svg';

const images = import.meta.glob('@/images/apps/**/*.webp', { eager: true, import: 'default' }) as Record<string, string>;

const img = (folder: string, file: string) => images[`/src/images/apps/${folder}/${file}.webp`];

export type AppStatus = 'Disponível' | 'Em breve';

export type AppEntry = {
  id: string;
  name: string;
  tagline: string;
  category: string;
  status: AppStatus;
  icon?: string;
  cover: string;
  playStore?: string;
  appStore?: string;
  site?: string;
  video?: { src: string; poster?: string; transcript: string };
  screenshots: { src: string; caption: string }[];
  description: string;
  features: string[];
  privacy?: string;
  terms?: string;
};

export const apps: AppEntry[] = [
  {
    id: 'controla-ai',
    name: 'Controla.ai',
    tagline: 'Gastos, cartões e parcelas no controle, e o caminho até o primeiro milhão.',
    category: 'Finanças · Android, iOS e Web',
    status: 'Em breve',
    icon: img('controla-ai', 'icone_512'),
    cover: img('controla-ai', 'destaque_1024x500'),
    screenshots: [
      { src: img('controla-ai', 'captura_1_inicio'), caption: 'O mês num relance: saldo, entradas, saídas e meta de gastos' },
      { src: img('controla-ai', 'captura_2_cartoes'), caption: 'Cartões com fechamento e vencimento de cada fatura' },
      { src: img('controla-ai', 'captura_3_fatura'), caption: 'Fatura com compras agrupadas e parcelas no lugar certo' },
      { src: img('controla-ai', 'captura_4_busca'), caption: 'Busca por local ou valor, da parcela ou da compra inteira' },
      { src: img('controla-ai', 'captura_5_plano'), caption: 'Planejamento automático rumo ao primeiro milhão' },
      { src: img('controla-ai', 'captura_6_nova_compra'), caption: 'Lançamento rápido: valor, cartão, parcelas e categoria' },
    ],
    description:
      'Organiza o dinheiro do dia a dia e mostra o caminho até o primeiro milhão, sozinho ou junto com quem divide as contas com você. Não acessa sua conta bancária nem movimenta dinheiro.',
    features: [
      'Importe a fatura do banco (CSV do Nubank e do C6, ou OFX) e revise antes de lançar',
      'Pagamento automático da fatura, compras parceladas e despesas recorrentes',
      'Renda com 13º, terço de férias e reajuste programado',
      'Metas de economia e planejamento mensal a partir da renda',
      'Casa compartilhada por código de convite, com sincronização mesmo offline',
      'Bloqueio por digital, rosto ou PIN e exclusão de conta direto no app',
    ],
    privacy: 'https://controla-ai-app.web.app/privacidade.html',
    terms: 'https://controla-ai-app.web.app/excluir-conta.html',
  },
  {
    id: 'flexa-pilates',
    name: 'Flexa Pilates',
    tagline: 'Agenda, alunos e financeiro do seu estúdio de pilates, num app só.',
    category: 'Saúde e fitness · Android',
    status: 'Em breve',
    icon: img('flexa-pilates', 'icone_512'),
    cover: img('flexa-pilates', 'destaque_1024x500'),
    screenshots: [
      { src: img('flexa-pilates', 'captura_1_agenda'), caption: 'A agenda do estúdio num relance' },
      { src: img('flexa-pilates', 'captura_2_alunos'), caption: 'Todos os alunos num lugar só' },
      { src: img('flexa-pilates', 'captura_3_aluno'), caption: 'A ficha completa de cada aluno' },
      { src: img('flexa-pilates', 'captura_4_anamnese'), caption: 'Anamnese com alertas antes da aula' },
      { src: img('flexa-pilates', 'captura_5_financeiro'), caption: 'Mensalidades sob controle' },
      { src: img('flexa-pilates', 'captura_6_assinatura'), caption: 'Só o estúdio paga, com 7 dias grátis' },
    ],
    description:
      'O app do estúdio de pilates: a agenda das aulas, a ficha de cada aluno e o financeiro, com o proprietário e os professores trabalhando no mesmo lugar.',
    features: [
      'Aulas individuais e em turma, recorrentes, com horários livres para encaixar alunos',
      'Anamnese com histórico de versões e alerta antes da aula',
      'Mensalidades do mês e repasse dos professores por percentual ou valor por aula',
      'Professores entram por código de convite e veem só os alunos deles',
      'Dados de saúde apenas com consentimento LGPD registrado no app',
      'Só o estúdio paga, com 7 dias grátis',
    ],
    privacy: 'https://flexa-pilates.web.app/privacidade.html',
    terms: 'https://flexa-pilates.web.app/excluir-conta.html',
  },
  {
    id: 'flexa-runners',
    name: 'Flexa Runners',
    tagline: 'Planilhas, treinos e provas da sua assessoria de corrida, num app só.',
    category: 'Saúde e fitness · Android',
    status: 'Em breve',
    icon: img('flexa-runners', 'icone_512'),
    cover: img('flexa-runners', 'destaque_1024x500'),
    screenshots: [
      { src: img('flexa-runners', 'captura_1_hoje'), caption: 'Hoje: o treino do dia e a semana num relance' },
      { src: img('flexa-runners', 'captura_2_planilha'), caption: 'A planilha que o seu treinador montou' },
      { src: img('flexa-runners', 'captura_3_historico'), caption: 'Histórico, ritmo e recordes' },
      { src: img('flexa-runners', 'captura_4_acompanhamento'), caption: 'O treinador vê quem precisa de atenção' },
      { src: img('flexa-runners', 'captura_5_coletivos'), caption: 'Treinos coletivos com presença' },
      { src: img('flexa-runners', 'captura_6_provas'), caption: 'Provas, metas e inscritos' },
      { src: img('flexa-runners', 'captura_7_atletas'), caption: 'Todos os atletas da assessoria num lugar' },
    ],
    description:
      'O app da assessoria de corrida: o treinador monta a planilha, o atleta registra o que fez e os dois acompanham a evolução no mesmo lugar.',
    features: [
      'Planilha semana a semana com tiros, ritmos e zonas de frequência cardíaca',
      'Registro do treino em segundos, com importação de GPX do relógio',
      'Acompanhamento de quem treinou, quem pulou e quem está com carga alta',
      'Treinos coletivos com lista de presença e calendário de provas',
      'Calculadora de ritmo, previsão de prova e zonas de treino',
      'Só a assessoria paga, com 7 dias grátis',
    ],
    privacy: 'https://flexa-runners.web.app/privacidade.html',
    terms: 'https://flexa-runners.web.app/excluir-conta.html',
  },
  {
    id: 'orcamentos-online',
    name: 'Orçamentos Online',
    tagline: 'Monte o orçamento e envie o PDF pronto.',
    category: 'Negócios · Android',
    status: 'Disponível',
    cover: orcamentos,
    playStore: 'https://play.google.com/store/apps/details?id=com.stellcore.orcamento',
    screenshots: [],
    description:
      'App Flutter para cadastrar empresas e clientes e gerar orçamentos em PDF, prontos para imprimir ou compartilhar. Tudo fica salvo no aparelho, funciona offline.',
    features: [
      'Cadastro de uma ou mais empresas emissoras, com logo',
      'Clientes com validação e máscara de CPF/CNPJ e telefone',
      'Orçamentos com itens, quantidades e valores',
      'PDF para compartilhar ou imprimir',
    ],
  },
  {
    id: 'stock-regulator',
    name: 'Stock Regulator',
    tagline: 'Gestão de estoque com leitura de código de barras.',
    category: 'Negócios · Android',
    status: 'Disponível',
    cover: stock,
    playStore: 'https://play.google.com/store/apps/details?id=com.stock_regulator',
    site: 'https://bruno-dall.github.io/stock-regulator-webpage/',
    screenshots: [],
    description:
      'App Android de gestão de estoque com leitura de código de barras e QR Code, cadastro de produtos, importação e exportação em Excel e ordens de serviço em PDF.',
    features: [
      'Leitura de código de barras e QR Code',
      'Importação e exportação em Excel',
      'Ordens de serviço em PDF',
    ],
  },
];

export const otherProjects = [
  {
    name: 'Unique Combinations',
    description:
      'Landing page comercial do Unique Combinations, app Windows que ajuda empresas a melhorar seus resultados com estatísticas precisas.',
    tags: ['Web', 'Landing page'],
    links: [
      { label: 'Site', href: 'https://gmcfromhell.github.io/unique-combinations-webpage/' },
      { label: 'Código', href: 'https://github.com/GMCfromhell/unique-combinations-webpage' },
    ],
  },
  {
    name: 'Estofaria Cardoso',
    description: 'Site institucional em Flutter Web para uma estofaria de Curitiba, com seções em parallax e formulário de contato.',
    tags: ['Web', 'Site institucional'],
    links: [] as { label: string; href: string }[],
  },
];

