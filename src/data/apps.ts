import stock from '@/images/projects/stock-regulator.svg';
import unique from '@/images/projects/unique-combinations.svg';
import estofaria from '@/images/projects/estofaria-cardoso.svg';
import type { L } from '@/i18n';

const images = import.meta.glob('@/images/apps/**/*.webp', { eager: true, import: 'default' }) as Record<string, string>;

const img = (folder: string, file: string) => images[`/src/images/apps/${folder}/${file}.webp`];

export type AppStatus = 'available' | 'soon';

export type AppEntry = {
  id: string;
  name: string;
  tagline: L;
  category: L;
  status: AppStatus;
  icon?: string;
  cover: string;
  playStore?: string;
  appStore?: string;
  site?: string;
  video?: { src: string; poster?: string; transcript: L };
  screenshots: { src: string; caption: L }[];
  description: L;
  features: L<string[]>;
  privacy?: string;
  terms?: string;
};

export const apps: AppEntry[] = [
  {
    id: 'controla-ai',
    name: 'Controla.ai',
    tagline: {
      pt: 'Gastos, cartões e parcelas no controle, e o caminho até o primeiro milhão.',
      en: 'Expenses, cards and installments under control, and the path to your first million.',
    },
    category: { pt: 'Finanças · Android e iOS', en: 'Finance · Android and iOS' },
    status: 'soon',
    icon: img('controla-ai', 'icone_512'),
    cover: img('controla-ai', 'destaque_1024x500'),
    screenshots: [
      {
        src: img('controla-ai', 'captura_1_inicio'),
        caption: {
          pt: 'O mês num relance: saldo, entradas, saídas e meta de gastos',
          en: 'Your month at a glance: balance, income, expenses and spending goal',
        },
      },
      {
        src: img('controla-ai', 'captura_2_cartoes'),
        caption: { pt: 'Cartões com fechamento e vencimento de cada fatura', en: 'Cards with the closing and due date of each bill' },
      },
      {
        src: img('controla-ai', 'captura_3_fatura'),
        caption: {
          pt: 'Fatura com compras agrupadas e parcelas no lugar certo',
          en: 'Bill with grouped purchases and installments in the right place',
        },
      },
      {
        src: img('controla-ai', 'captura_4_busca'),
        caption: { pt: 'Busca por local ou valor, da parcela ou da compra inteira', en: 'Search by place or amount, per installment or full purchase' },
      },
      {
        src: img('controla-ai', 'captura_5_plano'),
        caption: { pt: 'Planejamento automático rumo ao primeiro milhão', en: 'Automatic planning toward your first million' },
      },
      {
        src: img('controla-ai', 'captura_6_nova_compra'),
        caption: { pt: 'Lançamento rápido: valor, cartão, parcelas e categoria', en: 'Quick entry: amount, card, installments and category' },
      },
    ],
    description: {
      pt: 'Organiza o dinheiro do dia a dia e mostra o caminho até o primeiro milhão, sozinho ou junto com quem divide as contas com você. Não acessa sua conta bancária nem movimenta dinheiro.',
      en: 'Organizes your everyday money and shows the path to your first million, on your own or together with whoever shares the bills with you. It never accesses your bank account or moves money.',
    },
    features: {
      pt: [
        'Importe a fatura do banco (CSV do Nubank e do C6, ou OFX) e revise antes de lançar',
        'Pagamento automático da fatura, compras parceladas e despesas recorrentes',
        'Renda com 13º, terço de férias e reajuste programado',
        'Metas de economia e planejamento mensal a partir da renda',
        'Casa compartilhada por código de convite, com sincronização mesmo offline',
        'Bloqueio por digital, rosto ou PIN e exclusão de conta direto no app',
      ],
      en: [
        'Import your bank bill (Nubank and C6 CSV, or OFX) and review before saving',
        'Automatic bill payment, installment purchases and recurring expenses',
        'Income with 13th salary, vacation bonus and scheduled raises',
        'Savings goals and monthly planning based on your income',
        'Shared household by invite code, syncing even offline',
        'Fingerprint, face or PIN lock, and account deletion right in the app',
      ],
    },
    privacy: 'https://controla-ai-app.web.app/privacidade.html',
    terms: 'https://controla-ai-app.web.app/excluir-conta.html',
  },
  {
    id: 'flexa-pilates',
    name: 'Flexa Pilates',
    tagline: {
      pt: 'Agenda, alunos e financeiro do seu estúdio de pilates, num app só.',
      en: 'Schedule, students and finances for your pilates studio, in one app.',
    },
    category: { pt: 'Saúde e fitness · Android e iOS', en: 'Health and fitness · Android and iOS' },
    status: 'soon',
    icon: img('flexa-pilates', 'icone_512'),
    cover: img('flexa-pilates', 'destaque_1024x500'),
    screenshots: [
      { src: img('flexa-pilates', 'captura_1_agenda'), caption: { pt: 'A agenda do estúdio num relance', en: 'The studio schedule at a glance' } },
      { src: img('flexa-pilates', 'captura_2_alunos'), caption: { pt: 'Todos os alunos num lugar só', en: 'All your students in one place' } },
      { src: img('flexa-pilates', 'captura_3_aluno'), caption: { pt: 'A ficha completa de cada aluno', en: 'The complete record of each student' } },
      { src: img('flexa-pilates', 'captura_4_anamnese'), caption: { pt: 'Anamnese com alertas antes da aula', en: 'Health history with alerts before class' } },
      { src: img('flexa-pilates', 'captura_5_financeiro'), caption: { pt: 'Mensalidades sob controle', en: 'Monthly fees under control' } },
      { src: img('flexa-pilates', 'captura_6_assinatura'), caption: { pt: 'Só o estúdio paga, com 7 dias grátis', en: 'Only the studio pays, with a 7-day free trial' } },
    ],
    description: {
      pt: 'O app do estúdio de pilates: a agenda das aulas, a ficha de cada aluno e o financeiro, com o proprietário e os professores trabalhando no mesmo lugar.',
      en: 'The pilates studio app: class schedule, each student’s record and finances, with the owner and instructors working in the same place.',
    },
    features: {
      pt: [
        'Aulas individuais e em turma, recorrentes, com horários livres para encaixar alunos',
        'Anamnese com histórico de versões e alerta antes da aula',
        'Mensalidades do mês e repasse dos professores por percentual ou valor por aula',
        'Professores entram por código de convite e veem só os alunos deles',
        'Dados de saúde apenas com consentimento LGPD registrado no app',
        'Só o estúdio paga, com 7 dias grátis',
      ],
      en: [
        'Private and group recurring classes, with open slots to fit students in',
        'Health history with version tracking and an alert before class',
        'Monthly fees and instructor payouts by percentage or per-class rate',
        'Instructors join by invite code and only see their own students',
        'Health data only with consent recorded in the app (LGPD)',
        'Only the studio pays, with a 7-day free trial',
      ],
    },
    privacy: 'https://flexa-pilates.web.app/privacidade.html',
    terms: 'https://flexa-pilates.web.app/excluir-conta.html',
  },
  {
    id: 'flexa-runners',
    name: 'Flexa Runners',
    tagline: {
      pt: 'Planilhas, treinos e provas da sua assessoria de corrida, num app só.',
      en: 'Training plans, workouts and races for your running coaching group, in one app.',
    },
    category: { pt: 'Saúde e fitness · Android e iOS', en: 'Health and fitness · Android and iOS' },
    status: 'soon',
    icon: img('flexa-runners', 'icone_512'),
    cover: img('flexa-runners', 'destaque_1024x500'),
    screenshots: [
      { src: img('flexa-runners', 'captura_1_hoje'), caption: { pt: 'Hoje: o treino do dia e a semana num relance', en: 'Today: the day’s workout and the week at a glance' } },
      { src: img('flexa-runners', 'captura_2_planilha'), caption: { pt: 'A planilha que o seu treinador montou', en: 'The plan your coach built' } },
      { src: img('flexa-runners', 'captura_3_historico'), caption: { pt: 'Histórico, ritmo e recordes', en: 'History, pace and records' } },
      { src: img('flexa-runners', 'captura_4_acompanhamento'), caption: { pt: 'O treinador vê quem precisa de atenção', en: 'Coaches see who needs attention' } },
      { src: img('flexa-runners', 'captura_5_coletivos'), caption: { pt: 'Treinos coletivos com presença', en: 'Group workouts with attendance' } },
      { src: img('flexa-runners', 'captura_6_provas'), caption: { pt: 'Provas, metas e inscritos', en: 'Races, goals and entrants' } },
      { src: img('flexa-runners', 'captura_7_atletas'), caption: { pt: 'Todos os atletas da assessoria num lugar', en: 'All the group’s athletes in one place' } },
    ],
    description: {
      pt: 'O app da assessoria de corrida: o treinador monta a planilha, o atleta registra o que fez e os dois acompanham a evolução no mesmo lugar.',
      en: 'The running coaching app: the coach builds the plan, the athlete logs what they did, and both follow progress in the same place.',
    },
    features: {
      pt: [
        'Planilha semana a semana com tiros, ritmos e zonas de frequência cardíaca',
        'Registro do treino em segundos, com importação de GPX do relógio',
        'Acompanhamento de quem treinou, quem pulou e quem está com carga alta',
        'Treinos coletivos com lista de presença e calendário de provas',
        'Calculadora de ritmo, previsão de prova e zonas de treino',
        'Só a assessoria paga, com 7 dias grátis',
      ],
      en: [
        'Week-by-week plan with intervals, paces and heart-rate zones',
        'Log a workout in seconds, with GPX import from your watch',
        'Track who trained, who skipped and who has a high load',
        'Group workouts with attendance lists and a race calendar',
        'Pace calculator, race prediction and training zones',
        'Only the coaching group pays, with a 7-day free trial',
      ],
    },
    privacy: 'https://flexa-runners.web.app/privacidade.html',
    terms: 'https://flexa-runners.web.app/excluir-conta.html',
  },
  {
    id: 'orcamentos-online',
    name: 'Orçamentos Online',
    tagline: { pt: 'Monte o orçamento e envie o PDF pronto.', en: 'Build the quote and send the PDF.' },
    category: { pt: 'Negócios · Android', en: 'Business · Android' },
    status: 'available',
    icon: img('orcamentos-online', 'icone_512'),
    cover: img('orcamentos-online', 'destaque_1024x500'),
    playStore: 'https://play.google.com/store/apps/details?id=com.stellcore.orcamento',
    screenshots: [
      { src: img('orcamentos-online', 'captura_1_orcamento'), caption: { pt: 'Monte o orçamento em poucos toques', en: 'Build a quote in a few taps' } },
      { src: img('orcamentos-online', 'captura_2_orcamentos'), caption: { pt: 'Todos os seus orçamentos organizados', en: 'All your quotes organized' } },
      { src: img('orcamentos-online', 'captura_3_clientes'), caption: { pt: 'Cadastre seus clientes', en: 'Register your clients' } },
      { src: img('orcamentos-online', 'captura_4_empresas'), caption: { pt: 'Várias empresas, cada uma com seu logo', en: 'Several companies, each with its own logo' } },
    ],
    description: {
      pt: 'Para quem presta serviço e precisa orçar rápido: escolha o cliente, a empresa que está emitindo, adicione os itens e gere o PDF pronto para enviar. Tudo fica salvo no aparelho e funciona sem internet, sem conta nem cadastro.',
      en: 'For service providers who need to quote fast: pick the client and the issuing company, add the items and generate the PDF, ready to send. Everything is stored on the device and works offline, with no account or sign-up.',
    },
    features: {
      pt: [
        'Itens com descrição, quantidade e valor, com o total calculado na hora',
        'Lista de orçamentos com itens, total e data, e edição quando precisar ajustar',
        'PDF com o logo da empresa para visualizar, compartilhar ou imprimir',
        'Clientes com máscara e validação de CPF/CNPJ, sem duplicidade',
        'Uma ou mais empresas emissoras, com logo, CNPJ e contatos',
        'Dados só no aparelho, sem conta e sem anúncios',
      ],
      en: [
        'Items with description, quantity and price, with the total calculated instantly',
        'Quote list with items, total and date, and editing when you need to adjust',
        'PDF with the company logo to preview, share or print',
        'Clients with CPF/CNPJ masks and validation, no duplicates',
        'One or more issuing companies, with logo, tax ID and contacts',
        'Data stays on the device, no account and no ads',
      ],
    },
    privacy: `${import.meta.env.BASE_URL}orcamentos-online/privacidade.html`,
  },
  {
    id: 'stock-regulator',
    name: 'Stock Regulator',
    tagline: { pt: 'Gestão de estoque com leitura de código de barras.', en: 'Inventory management with barcode scanning.' },
    category: { pt: 'Negócios · Android e iOS', en: 'Business · Android and iOS' },
    status: 'available',
    cover: stock,
    playStore: 'https://play.google.com/store/apps/details?id=com.stock_regulator',
    site: 'https://bruno-dall.github.io/stock-regulator-webpage/',
    screenshots: [],
    description: {
      pt: 'App Android de gestão de estoque com leitura de código de barras e QR Code, cadastro de produtos, importação e exportação em Excel e ordens de serviço em PDF.',
      en: 'Inventory management app with barcode and QR Code scanning, product registration, Excel import and export, and PDF service orders.',
    },
    features: {
      pt: ['Leitura de código de barras e QR Code', 'Importação e exportação em Excel', 'Ordens de serviço em PDF'],
      en: ['Barcode and QR Code scanning', 'Excel import and export', 'PDF service orders'],
    },
  },
];

export const otherProjects: {
  name: string;
  image: string;
  description: L;
  tags: L<string[]>;
  links: { label: 'site' | 'code'; href: string }[];
}[] = [
  {
    name: 'Unique Combinations',
    image: unique,
    description: {
      pt: 'Landing page comercial do Unique Combinations, app Windows que ajuda empresas a melhorar seus resultados com estatísticas precisas.',
      en: 'Marketing landing page for Unique Combinations, a Windows app that helps companies improve their results with accurate statistics.',
    },
    tags: { pt: ['Web', 'Landing page'], en: ['Web', 'Landing page'] },
    links: [
      { label: 'site', href: 'https://gmcfromhell.github.io/unique-combinations-webpage/' },
      { label: 'code', href: 'https://github.com/GMCfromhell/unique-combinations-webpage' },
    ],
  },
  {
    name: 'Estofaria Cardoso',
    image: estofaria,
    description: {
      pt: 'Site institucional em Flutter Web para uma estofaria de Curitiba, com seções em parallax e formulário de contato.',
      en: 'Corporate website in Flutter Web for an upholstery shop in Curitiba, with parallax sections and a contact form.',
    },
    tags: { pt: ['Web', 'Site institucional'], en: ['Web', 'Corporate site'] },
    links: [],
  },
];
