/* ═══════════════════════════════════════════════════════════════
   SDGs Indonesia Knowledge Hub 2.0 — script.js
   Works on index.html, about.html, and goals.html
   Language: English (default) · Indonesian (toggle)
   ═══════════════════════════════════════════════════════════════ */
(() => {
  'use strict';

  /* ═══════════════════════════════════════════════════════════════
     1. TRANSLATION DICTIONARY
     ═══════════════════════════════════════════════════════════════ */
  const I18N = {
    en: {
      /* ── Meta ── */
      'meta.title.index': 'SDGs Indonesia — Knowledge, Data & Action for Sustainable Development',
      'meta.title.about': 'About SDGs — SDGs Indonesia Knowledge Hub',
      'meta.title.goals': 'Sustainable Development Goals — SDGs Indonesia Knowledge Hub',

      /* ── A11y ── */
      'a11y.skip': 'Skip to main content',
      'a11y.backToTop': 'Back to top',

      /* ── Top bar ── */
      'topbar.org': 'SDGs Secretariat — Ministry of National Development Planning/Bappenas',
      'topbar.press': 'Press Releases',
      'topbar.careers': 'Careers',

      /* ── Nav ── */
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.goals': 'Goals',
      'nav.data': 'Data & Analytics',
      'nav.knowledge': 'Knowledge',
      'nav.news': 'News',
      'nav.community': 'Community',

      /* ── Header ── */
      'header.searchAria': 'Search SDGs Indonesia',
      'header.dashboard': 'View Dashboard',
      'header.menuAria': 'Open menu',

      /* ── Search overlay ── */
      'search.placeholder': 'Search goals, indicators, publications, or news…',
      'search.popular': 'Popular searches',
      'search.chip1': 'Poverty',
      'search.chip2': 'VNR 2024',
      'search.chip3': 'SDGs Center',
      'search.chip4': 'Perpres 111/2022',
      'search.chip5': 'Provincial Data',

      /* ── Hero ── */
      'hero.badge': '2030 Agenda for Sustainable Development',
      'hero.title.part1': 'One platform to',
      'hero.title.gradient': 'understand, monitor,',
      'hero.title.part3': "and achieve Indonesia's SDGs.",
      'hero.lead': 'The knowledge, data, action, and network hub for the Sustainable Development Goals. Access national indicators, annual reports, publications, and join a community driving change.',
      'hero.search.label': 'Search data or SDG goals',
      'hero.search.placeholder': 'Search indicators, goals, regions, publications…',
      'hero.search.button': 'Search',
      'hero.cta.explore': 'Explore Data',
      'hero.cta.goals': '17 Development Goals',
      'hero.card.eyebrow': 'Global SDGs Rank',
      'hero.card.sub': 'Sustainable Development Report',
      'hero.card.rankLabel': '/ 167 countries',
      'hero.card.kpi1': 'Indicators available',
      'hero.card.kpi2': 'On track',
      'hero.card.kpi3': 'Total indicators',
      'hero.card.progressLabel': 'Progress toward 2030',

      /* ── Stats strip ── */
      'stats.goals': 'Global Goals',
      'stats.targets': 'Targets',
      'stats.regencies': 'Regencies/Cities',
      'stats.provinces': 'Provinces',

      /* ── Pillars ── */
      'pillars.eyebrow': 'About SDGs',
      'pillars.title': 'Five Pillars of Sustainable Development',
      'pillars.lead': 'The 2030 Agenda is built on balance between social, economic, and environmental dimensions — expressed through five interconnected pillars.',
      'pillars.people.title': 'People',
      'pillars.people.sub': 'Human well-being',
      'pillars.people.desc': 'End poverty and hunger, ensure healthy lives and quality education for all.',
      'pillars.planet.title': 'Planet',
      'pillars.planet.sub': 'Environmental sustainability',
      'pillars.planet.desc': 'Protect land and ocean ecosystems, climate action, and responsible consumption.',
      'pillars.prosperity.title': 'Prosperity',
      'pillars.prosperity.sub': 'Inclusive growth',
      'pillars.prosperity.desc': 'Inclusive economic growth, decent work, industry, innovation, and resilient infrastructure.',
      'pillars.peace.title': 'Peace',
      'pillars.peace.sub': 'Just and inclusive societies',
      'pillars.peace.desc': 'Peaceful, inclusive, and just societies with accountable institutions at all levels.',
      'pillars.partnership.title': 'Partnership',
      'pillars.partnership.sub': 'Global cooperation',
      'pillars.partnership.desc': 'Revitalize global partnerships for inclusive and equitable sustainable development.',
      'pillars.cta.button': 'Read More About the SDGs',
      'pillars.cta.hint': "Discover the history, framework, governance, and Indonesia's national context.",

      /* ── Goals ── */
      'goals.eyebrow': '2030 Agenda',
      'goals.title': '17 Sustainable Development Goals',
      'goals.lead': 'Featured national priority goals from the 17 global goals. Each goal has measurable targets and indicators monitored periodically.',
      'goals.cta.badge': '17 Goals · 169 Targets · 289 Indicators',
      'goals.cta.title': 'Want to explore all goals?',
      'goals.cta.sub': 'Access the complete list of targets, indicators, and annual progress for every Indonesian SDG.',
      'goals.cta.button': 'View all targets & indicators',
      'goals.card.capture': 'National progress',
      'goals.card.detail': 'View details',
      'goals.card.priority': 'Priority',
      'goals.card.targets': 'targets',

      /* ── Categories ── */
      'cat.social': 'Social',
      'cat.economic': 'Economic',
      'cat.environmental': 'Environmental',

      /* ── Data section ── */
      'data.eyebrow': 'Data & Analytics',
      'data.title': 'Unified data for evidence-based policy',
      'data.lead': 'Explore macro indicators, per-goal progress, and advanced analysis in one interactive dashboard.',
      'data.kpi1.label': 'Poverty Rate',
      'data.kpi2.label': 'Economic Growth',
      'data.kpi3.label': 'Human Capital Index',
      'data.kpi4.label': 'Data Availability',
      'data.kpi4.sub': '244 of 289 indicators',
      'data.trend.vsLastYear': 'vs last year',
      'data.chart.title': 'Priority Indicator Trends',
      'data.chart.sub': 'Period 2019 – 2024',
      'data.chart.legend1': 'Poverty',
      'data.chart.legend2': 'Growth',
      'data.cluster.title': 'Progress by Cluster',
      'data.cluster.sub': 'Percentage of indicators reaching target',
      'data.cluster.social': 'Social',
      'data.cluster.economic': 'Economic',
      'data.cluster.environmental': 'Environmental',
      'data.cluster.governance': 'Law & Governance',
      'data.cta': 'Open Full Dashboard',

      /* ── Knowledge hub ── */
      'hub.eyebrow': 'Knowledge Hub',
      'hub.title': 'Publications, Regulations & Best Practices',
      'hub.lead': 'A repository of official documents, annual reports, and best practices from government, the private sector, and communities.',
      'hub.link.all': 'View all publications',
      'hub.featured.badge': 'Featured',
      'hub.featured.title': 'Voluntary National Review (VNR) Indonesia 2024',
      'hub.featured.desc': "Indonesia's Voluntary National Review, presenting progress, challenges, and lessons learned in implementing the 2030 Agenda, including during the post-pandemic recovery.",
      'hub.featured.date': 'July 2024',
      'hub.featured.size': 'PDF · 12 MB',
      'hub.featured.download': 'Download',
      'hub.mini1.eyebrow': 'Regulation',
      'hub.mini1.title': 'Presidential Regulation No. 111 of 2022',
      'hub.mini1.desc': 'Implementation of the Sustainable Development Goals',
      'hub.mini2.eyebrow': 'Guideline',
      'hub.mini2.title': 'Metadata for SDG Indicators, 2nd Edition',
      'hub.mini2.desc': 'Operational definitions and calculation methodology',
      'hub.mini3.eyebrow': 'Award',
      'hub.mini3.title': 'Indonesia SDGs Action Awards 2024',
      'hub.mini3.desc': 'Recognizing best practices from regions and communities',
      'hub.cta.title': 'Best Practice Repository',
      'hub.cta.sub': 'Submit & explore local innovations',

      /* ── News & events ── */
      'news.eyebrow': 'Latest Updates',
      'news.title': 'News & Events',
      'news.lead': "Follow the latest developments, activities, and discussion forums around Indonesia's SDGs.",
      'news.link.all': 'All news',
      'news.item1.meta': '12 October 2026 · 4 min read',
      'news.item1.title': 'Indonesia Strengthens Climate Action Commitment Toward Net Zero 2060',
      'news.item1.desc': 'Energy transition and climate adaptation strategies are reinforced through cross-sector partnerships and green financing.',
      'news.item2.meta': '08 October 2026 · 3 min read',
      'news.item2.title': 'Expanding Quality Education Access in Remote Regions',
      'news.item2.desc': 'Affirmative programs and learning digitalization reach frontier, outermost, and disadvantaged areas.',
      'news.item3.meta': '03 October 2026 · 5 min read',
      'news.item3.title': 'MSMEs Level Up: Digitalization Drives Decent Work',
      'news.item3.desc': 'Empowering MSMEs through digital literacy and inclusive financing broadens job opportunities.',

      /* ── Events ── */
      'events.title': 'Upcoming Events',
      'events.live': 'Live',
      'events.month.oct': 'Oct',
      'events.month.nov': 'Nov',
      'events.e1.eyebrow': 'Webinar',
      'events.e1.title': 'Regional SDGs Data Workshop',
      'events.e1.meta': '09.00 WIB · Online',
      'events.e2.eyebrow': 'Conference',
      'events.e2.title': 'SDGs Annual Conference 2026',
      'events.e2.meta': 'Jakarta Convention Center',
      'events.e3.eyebrow': 'Training',
      'events.e3.title': 'Metadata & Indicator Reporting',
      'events.e3.meta': 'Bappenas · Hybrid',
      'events.cta': 'View full calendar',

      /* ── Community ── */
      'community.eyebrow': 'Network & Community',
      'community.title': 'Cross-sector collaboration for sustainable impact',
      'community.lead': 'Connect with SDGs Centers at universities, expert teams, and development communities across Indonesia.',
      'community.card1.title': 'SDGs Center',
      'community.card1.desc': 'A network of university study centers driving research, community service, and SDGs advocacy.',
      'community.card1.statLabel': 'Registered institutions',
      'community.card1.link': 'Explore directory',
      'community.card2.title': 'Expert Team',
      'community.card2.desc': 'Experts from various disciplines providing policy recommendations and technical studies.',
      'community.card2.statLabel': 'Verified experts',
      'community.card2.link': 'View profiles',
      'community.card3.title': 'Community Network',
      'community.card3.desc': 'Civil society organizations, youth, and volunteers driving grassroots action.',
      'community.card3.statLabel': 'Partner organizations',
      'community.card3.link': 'Join now',

      /* ── Newsletter ── */
      'newsletter.title': "Stay connected with Indonesia's SDGs progress",
      'newsletter.lead': 'Subscribe to the monthly bulletin: data summaries, latest publications, event agendas, and collaboration opportunities.',
      'newsletter.emailLabel': 'Email address',
      'newsletter.placeholder': 'name@email.com',
      'newsletter.button': 'Subscribe',
      'newsletter.note': 'We respect your privacy. Unsubscribe at any time.',

      /* ── Footer ── */
      'footer.desc': 'SDGs Secretariat — Ministry of National Development Planning / Bappenas.',
      'footer.explore': 'Explore',
      'footer.resources': 'Resources',
      'footer.contact': 'Contact',
      'footer.link.about': 'About SDGs',
      'footer.link.goals': '17 Goals',
      'footer.link.dashboard': 'Data Dashboard',
      'footer.link.indicators': 'Indicators & Metadata',
      'footer.link.reports': 'Annual Reports',
      'footer.link.publications': 'Publications',
      'footer.link.regulations': 'Regulations',
      'footer.link.bestPractices': 'Best Practices',
      'footer.link.awards': 'Awards',
      'footer.link.video': 'Video Library',
      'footer.address': 'Jl. Taman Suropati No. 2,<br/>Central Jakarta 10310',
      'footer.copyright': '© 2026 SDGs National Secretariat — Ministry of National Development Planning/Bappenas. All rights reserved.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms & Conditions',
      'footer.sitemap': 'Sitemap',

      /* ── Modal ── */
      'modal.close': 'Close detail',
      'modal.targets': 'Key Targets',
      'modal.indicators': 'Key Indicators',
      'modal.cta': 'View full SDG page',

      /* ── Breadcrumb ── */
      'breadcrumb.home': 'Home',
      'breadcrumb.about': 'About SDGs',
      'breadcrumb.goals': 'Goals',

      /* ── About page ── */
      'about.hero.eyebrow': 'About the SDGs',
      'about.hero.title1': 'The 2030 Agenda for',
      'about.hero.title2': 'Sustainable Development',
      'about.hero.lead': "A universal call to action to end poverty, protect the planet, and ensure that by 2030 all people enjoy peace and prosperity. Adopted by all 193 UN member states in 2015, the SDGs are the world's shared blueprint for a better future.",
      'about.hero.stat1': 'Year adopted',
      'about.hero.stat2': 'UN member states',
      'about.hero.stat3': 'Goals',
      'about.hero.stat4': 'Targets',
      'about.what.eyebrow': 'Introduction',
      'about.what.title': 'What are the Sustainable Development Goals?',
      'about.what.card1.title': 'A shared blueprint',
      'about.what.card1.desc': 'The SDGs are 17 interconnected goals that balance the three dimensions of sustainable development: economic growth, social inclusion, and environmental protection.',
      'about.what.card2.title': 'Universal by design',
      'about.what.card2.desc': 'Unlike their predecessors, the SDGs apply to every country — developed and developing alike — and call for action by all stakeholders: governments, business, civil society, and individuals.',
      'about.what.card3.title': 'Leave no one behind',
      'about.what.card3.desc': 'The overarching principle is to reach the furthest behind first — eradicating poverty in all its forms and ensuring that progress benefits every person, everywhere.',
      'about.showcase.caption': 'The 17 Sustainable Development Goals — an integrated, indivisible set of global priorities for people and planet.',
      'about.history.eyebrow': 'Journey',
      'about.history.title': 'From Rio to the 2030 Agenda',
      'about.history.lead': 'The SDGs are the result of decades of global conversations on sustainable development — a journey that began long before 2015.',
      'about.history.e1.title': 'Earth Summit, Rio de Janeiro',
      'about.history.e1.desc': 'The first global conference to link environment and development, producing Agenda 21 and setting the stage for future sustainable development frameworks.',
      'about.history.e2.title': 'Millennium Development Goals (MDGs)',
      'about.history.e2.desc': 'Eight goals focused on poverty, education, gender, health, and environment — targeting developing countries with a 2015 deadline.',
      'about.history.e3.title': 'Rio+20 Conference',
      'about.history.e3.desc': 'The UN Conference on Sustainable Development called for a new set of goals to succeed the MDGs — with a more universal and integrated approach.',
      'about.history.e4.title': '2030 Agenda adopted',
      'about.history.e4.desc': 'On 25 September 2015, all 193 UN member states adopted "Transforming Our World: The 2030 Agenda for Sustainable Development" — 17 goals, 169 targets.',
      'about.history.e5.title': "Indonesia's first SDGs regulation",
      'about.history.e5.desc': "Presidential Regulation No. 59 of 2017 established Indonesia's national framework for SDG implementation, coordination, and reporting.",
      'about.history.e6.title': 'Presidential Regulation No. 111 of 2022',
      'about.history.e6.desc': 'An updated and strengthened regulation reinforcing the roles of ministries, sub-national governments, and multi-stakeholder platforms in achieving the SDGs.',
      'about.pillars.eyebrow': 'Framework',
      'about.pillars.title': 'The Five Pillars',
      'about.pillars.lead': 'The 17 goals are organized under five transformative pillars — capturing the shared aspirations of people and planet, with justice and partnership holding it all together.',
      'about.pillars.people.desc': 'End poverty and hunger in all forms, ensure that all human beings can fulfill their potential in dignity and equality, and in a healthy environment.',
      'about.pillars.planet.desc': 'Protect the planet from degradation — through sustainable consumption and production, sustainably managing natural resources, and taking urgent action on climate change.',
      'about.pillars.prosperity.desc': 'Ensure that all human beings can enjoy prosperous and fulfilling lives, with economic, social, and technological progress occurring in harmony with nature.',
      'about.pillars.peace.desc': 'Foster peaceful, just, and inclusive societies that are free from fear and violence — because there can be no sustainable development without peace, and no peace without sustainable development.',
      'about.pillars.partnership.desc': 'Mobilize the means required to implement the 2030 Agenda through a revitalized Global Partnership for Sustainable Development, based on a spirit of strengthened global solidarity.',
      'about.indonesia.eyebrow': 'National Context',
      'about.indonesia.title': 'SDGs in Indonesia',
      'about.indonesia.lead': 'Indonesia played an active role in shaping the 2030 Agenda and has been implementing the SDGs through an integrated, whole-of-government and whole-of-society approach since 2017.',
      'about.indonesia.card1.title': 'Legal basis',
      'about.indonesia.card1.desc': 'Presidential Regulation No. 111 of 2022 governs SDG implementation, replacing the earlier Perpres 59/2017. It sets the roadmap, targets, and reporting mechanisms.',
      'about.indonesia.card2.title': 'Institutional home',
      'about.indonesia.card2.desc': 'The National Secretariat for SDGs is hosted by the Ministry of National Development Planning (Bappenas), coordinating implementation across ministries and regions.',
      'about.indonesia.card3.title': 'Local implementation',
      'about.indonesia.card3.desc': 'All 38 provinces and 514 districts/cities have SDG Regional Action Plans, aligned with the National Action Plan and monitored through a dedicated regional reporting platform.',
      'about.indonesia.card4.title': 'Academic network',
      'about.indonesia.card4.desc': 'Over 54 SDGs Centers at universities drive research, community service, and local advocacy — bridging academia, government, and society.',
      'about.funding.title': 'Four sources of SDG financing',
      'about.funding.lead': 'Sustainable financing for the SDGs relies on mobilizing resources from multiple streams.',
      'about.funding.f1': 'State Budget (APBN)',
      'about.funding.f1d': 'Public financing through national budget allocations across ministries.',
      'about.funding.f2': 'Regional Budget (APBD)',
      'about.funding.f2d': 'Provincial and district/city budgets aligned with Regional Action Plans.',
      'about.funding.f3': 'Philanthropy & Business',
      'about.funding.f3d': 'CSR programs, philanthropic foundations, and private sector contributions.',
      'about.funding.f4': 'Community & Non-Government',
      'about.funding.f4d': 'Civil society, religious organizations, and community-based initiatives.',
      'about.gov.eyebrow': 'Governance',
      'about.gov.title': 'How Indonesia coordinates the SDGs',
      'about.gov.lead': 'A multi-level structure connects national leadership, cross-ministry coordination, technical working groups, and regional implementation.',
      'about.gov.t1.eyebrow': 'Highest authority',
      'about.gov.t1.title': 'National Steering Committee',
      'about.gov.t1.desc': 'Chaired by the President, providing strategic direction for SDG implementation.',
      'about.gov.t2.eyebrow': 'Coordination',
      'about.gov.t2.title': 'National Coordinating Team',
      'about.gov.t2.desc': 'Led by Bappenas, harmonizing policies and programs across ministries.',
      'about.gov.t2b.eyebrow': 'Technical',
      'about.gov.t2b.title': 'Working Groups',
      'about.gov.t2b.desc': 'Thematic groups covering each pillar, targets, and indicators.',
      'about.gov.t3.eyebrow': 'Secretariat',
      'about.gov.t3.title': 'National SDGs Secretariat',
      'about.gov.t3.desc': 'Day-to-day coordination, monitoring, reporting, and stakeholder engagement.',
      'about.gov.t3b.eyebrow': 'Data & Reporting',
      'about.gov.t3b.title': 'SDGs Data & Metadata Team',
      'about.gov.t3b.desc': 'Managed jointly with BPS to compile, verify, and publish indicators.',
      'about.gov.t4.eyebrow': 'Sub-national',
      'about.gov.t4.title': 'Regional SDG Secretariats',
      'about.gov.t4.desc': '38 provinces and 514 districts/cities implementing Regional Action Plans.',
      'about.gov.t4b.eyebrow': 'Multi-stakeholder',
      'about.gov.t4b.title': 'SDGs Centers & Philanthropy Platform',
      'about.gov.t4b.desc': 'Universities, civil society, private sector, and philanthropic partners.',
      'about.principles.eyebrow': 'Guiding Values',
      'about.principles.title': 'Key principles of the 2030 Agenda',
      'about.principles.lead': 'Five principles shape how the SDGs are designed, implemented, and monitored — everywhere.',
      'about.principles.p1.title': 'Leave No One Behind',
      'about.principles.p1.desc': 'Every person — regardless of identity, income, or geography — must benefit from development progress.',
      'about.principles.p2.title': 'Universality',
      'about.principles.p2.desc': 'The goals apply to every country — developed and developing — with differentiated responsibilities and capacities.',
      'about.principles.p3.title': 'Integration',
      'about.principles.p3.desc': 'Economic, social, and environmental dimensions must advance together — not trade off against each other.',
      'about.principles.p4.title': 'Partnership',
      'about.principles.p4.desc': 'Real transformation depends on collaboration — governments, businesses, civil society, academia, and communities.',
      'about.principles.p5.title': 'Accountability',
      'about.principles.p5.desc': 'Transparent monitoring, open data, and periodic reporting — nationally and globally — keep the agenda on track.',
      'about.cta.title': 'Ready to explore the goals?',
      'about.cta.lead': "Dive into the details of each goal, or track Indonesia's national progress through interactive data dashboards.",
      'about.cta.button1': 'Explore 17 Goals',
      'about.cta.button2': 'View Dashboard',

      /* ── Goals catalog page ── */
      'catalog.hero.eyebrow': '2030 Agenda',
      'catalog.hero.title1': 'All',
      'catalog.hero.title2': '17 Sustainable',
      'catalog.hero.title3': 'Development Goals',
      'catalog.hero.lead': "Browse every goal, explore its targets and indicators, and track Indonesia's national progress. Click any goal below to open the detail panel.",
      'catalog.hero.stat1': 'Goals',
      'catalog.hero.stat2': 'Targets',
      'catalog.hero.stat3': 'Indicators',
      'catalog.hero.stat4': 'On track',
      'catalog.search.placeholder': 'Search by name, number, or keyword…',
      'catalog.filter.all': 'All',
      'catalog.filter.social': 'Social',
      'catalog.filter.economic': 'Economic',
      'catalog.filter.environmental': 'Environmental',
      'catalog.count.of': 'of',
      'catalog.count.goals': 'goals',
      'catalog.empty.title': 'No goals match your search',
      'catalog.empty.desc': 'Try a different keyword or reset the filters.',
      'catalog.empty.reset': 'Reset filters',
      'catalog.detail.progress': 'National progress',
      'catalog.detail.targetsLabel': 'Targets',
      'catalog.detail.indicatorsLabel': 'Indicators',
      'catalog.detail.cta': 'View full data',
      'catalog.trend.up': 'increase from last year',
      'catalog.trend.down': 'decrease from last year',
      'catalog.cta.badge': 'Looking for data?',
      'catalog.cta.title': "Explore Indonesia's SDG data dashboard",
      'catalog.cta.sub': 'Track indicators over time, compare provinces, and dig into advanced analytics across every goal.',
      'catalog.cta.button': 'Open Dashboard',
    },

    id: {
      /* ── Meta ── */
      'meta.title.index': 'SDGs Indonesia — Pengetahuan, Data & Aksi untuk Pembangunan Berkelanjutan',
      'meta.title.about': 'Tentang SDGs — SDGs Indonesia Knowledge Hub',
      'meta.title.goals': 'Tujuan Pembangunan Berkelanjutan — SDGs Indonesia Knowledge Hub',

      /* ── A11y ── */
      'a11y.skip': 'Lompat ke konten utama',
      'a11y.backToTop': 'Kembali ke atas',

      /* ── Top bar ── */
      'topbar.org': 'Sekretariat Nasional SDGs — Kementerian PPN/Bappenas',
      'topbar.press': 'Siaran Pers',
      'topbar.careers': 'Karir',

      /* ── Nav ── */
      'nav.home': 'Beranda',
      'nav.about': 'Tentang',
      'nav.goals': 'Tujuan',
      'nav.data': 'Data & Analitik',
      'nav.knowledge': 'Pengetahuan',
      'nav.news': 'Berita',
      'nav.community': 'Komunitas',

      /* ── Header ── */
      'header.searchAria': 'Cari di SDGs Indonesia',
      'header.dashboard': 'Lihat Dashboard',
      'header.menuAria': 'Buka menu',

      /* ── Search overlay ── */
      'search.placeholder': 'Cari tujuan, indikator, publikasi, atau berita…',
      'search.popular': 'Pencarian populer',
      'search.chip1': 'Kemiskinan',
      'search.chip2': 'VNR 2024',
      'search.chip3': 'SDGs Center',
      'search.chip4': 'Perpres 111/2022',
      'search.chip5': 'Data Provinsi',

      /* ── Hero ── */
      'hero.badge': 'Agenda 2030 untuk Pembangunan Berkelanjutan',
      'hero.title.part1': 'Satu platform untuk',
      'hero.title.gradient': 'memahami, memantau,',
      'hero.title.part3': 'dan mewujudkan SDGs Indonesia.',
      'hero.lead': 'Pusat pengetahuan, data, aksi, dan jejaring Tujuan Pembangunan Berkelanjutan. Akses indikator nasional, laporan tahunan, publikasi, dan bergabung dengan komunitas yang mendorong perubahan.',
      'hero.search.label': 'Cari data atau tujuan SDGs',
      'hero.search.placeholder': 'Cari indikator, tujuan, wilayah, publikasi…',
      'hero.search.button': 'Cari',
      'hero.cta.explore': 'Jelajahi Data',
      'hero.cta.goals': '17 Tujuan Pembangunan',
      'hero.card.eyebrow': 'Peringkat Global SDGs',
      'hero.card.sub': 'Sustainable Development Report',
      'hero.card.rankLabel': '/ 167 negara',
      'hero.card.kpi1': 'Indikator tersedia',
      'hero.card.kpi2': 'Capai target',
      'hero.card.kpi3': 'Total indikator',
      'hero.card.progressLabel': 'Progres menuju 2030',

      /* ── Stats strip ── */
      'stats.goals': 'Tujuan Global',
      'stats.targets': 'Target',
      'stats.regencies': 'Kab/Kota',
      'stats.provinces': 'Provinsi',

      /* ── Pillars ── */
      'pillars.eyebrow': 'Tentang SDGs',
      'pillars.title': 'Lima Pilar Pembangunan Berkelanjutan',
      'pillars.lead': 'Agenda 2030 dibangun atas keseimbangan antara dimensi sosial, ekonomi, dan lingkungan — dirumuskan dalam lima pilar yang saling terkait.',
      'pillars.people.title': 'People',
      'pillars.people.sub': 'Kesejahteraan manusia',
      'pillars.people.desc': 'Mengakhiri kemiskinan dan kelaparan, menjamin hidup sehat dan pendidikan berkualitas.',
      'pillars.planet.title': 'Planet',
      'pillars.planet.sub': 'Keberlanjutan lingkungan',
      'pillars.planet.desc': 'Melindungi ekosistem darat dan laut, aksi iklim, serta konsumsi yang bertanggung jawab.',
      'pillars.prosperity.title': 'Prosperity',
      'pillars.prosperity.sub': 'Pertumbuhan inklusif',
      'pillars.prosperity.desc': 'Pertumbuhan ekonomi inklusif, pekerjaan layak, industri, inovasi, dan infrastruktur tangguh.',
      'pillars.peace.title': 'Peace',
      'pillars.peace.sub': 'Masyarakat adil & inklusif',
      'pillars.peace.desc': 'Masyarakat damai, inklusif, adil, dan kelembagaan yang akuntabel di semua tingkatan.',
      'pillars.partnership.title': 'Partnership',
      'pillars.partnership.sub': 'Kerja sama global',
      'pillars.partnership.desc': 'Revitalisasi kemitraan global untuk pembangunan berkelanjutan yang inklusif dan setara.',
      'pillars.cta.button': 'Baca Selengkapnya Tentang SDGs',
      'pillars.cta.hint': 'Pelajari sejarah, kerangka, tata kelola, dan konteks nasional Indonesia.',

      /* ── Goals ── */
      'goals.eyebrow': 'Agenda 2030',
      'goals.title': '17 Tujuan Pembangunan Berkelanjutan',
      'goals.lead': 'Sorotan tujuan prioritas nasional dari total 17 tujuan global. Setiap tujuan memiliki target terukur dan indikator yang dipantau secara berkala.',
      'goals.cta.badge': '17 Tujuan · 169 Target · 289 Indikator',
      'goals.cta.title': 'Ingin menelusuri seluruh tujuan?',
      'goals.cta.sub': 'Akses daftar lengkap target, indikator, dan capaian tahunan setiap tujuan SDGs Indonesia.',
      'goals.cta.button': 'Lihat semua target & indikator',
      'goals.card.capture': 'Capaian nasional',
      'goals.card.detail': 'Lihat detail',
      'goals.card.priority': 'Prioritas',
      'goals.card.targets': 'target',

      /* ── Categories ── */
      'cat.social': 'Sosial',
      'cat.economic': 'Ekonomi',
      'cat.environmental': 'Lingkungan',

      /* ── Data section ── */
      'data.eyebrow': 'Data & Analitik',
      'data.title': 'Data terpadu untuk kebijakan berbasis bukti',
      'data.lead': 'Jelajahi indikator makro, capaian per tujuan, dan analisis lanjutan dalam satu dasbor interaktif.',
      'data.kpi1.label': 'Tingkat Kemiskinan',
      'data.kpi2.label': 'Pertumbuhan Ekonomi',
      'data.kpi3.label': 'Indeks Modal Manusia',
      'data.kpi4.label': 'Ketersediaan Data',
      'data.kpi4.sub': '244 dari 289 indikator',
      'data.trend.vsLastYear': 'vs tahun lalu',
      'data.chart.title': 'Tren Capaian Indikator Prioritas',
      'data.chart.sub': 'Periode 2019 – 2024',
      'data.chart.legend1': 'Kemiskinan',
      'data.chart.legend2': 'Pertumbuhan',
      'data.cluster.title': 'Capaian per Klaster',
      'data.cluster.sub': 'Persentase indikator yang mencapai target',
      'data.cluster.social': 'Sosial',
      'data.cluster.economic': 'Ekonomi',
      'data.cluster.environmental': 'Lingkungan',
      'data.cluster.governance': 'Hukum & Tata Kelola',
      'data.cta': 'Buka Dashboard Lengkap',

      /* ── Knowledge hub ── */
      'hub.eyebrow': 'Knowledge Hub',
      'hub.title': 'Publikasi, Regulasi & Praktik Baik',
      'hub.lead': 'Repositori dokumen resmi, laporan tahunan, hingga praktik terbaik dari pemerintah, swasta, dan masyarakat.',
      'hub.link.all': 'Lihat semua publikasi',
      'hub.featured.badge': 'Unggulan',
      'hub.featured.title': 'Voluntary National Review (VNR) Indonesia 2024',
      'hub.featured.desc': 'Laporan tinjauan nasional sukarela yang memaparkan capaian, tantangan, dan pembelajaran Indonesia dalam implementasi Agenda 2030, termasuk di masa pemulihan pasca-pandemi.',
      'hub.featured.date': 'Juli 2024',
      'hub.featured.size': 'PDF · 12 MB',
      'hub.featured.download': 'Unduh',
      'hub.mini1.eyebrow': 'Regulasi',
      'hub.mini1.title': 'Perpres No. 111 Tahun 2022',
      'hub.mini1.desc': 'Pelaksanaan Pencapaian Tujuan Pembangunan Berkelanjutan',
      'hub.mini2.eyebrow': 'Pedoman',
      'hub.mini2.title': 'Metadata Indikator SDGs Edisi II',
      'hub.mini2.desc': 'Definisi operasional dan metodologi perhitungan indikator',
      'hub.mini3.eyebrow': 'Penghargaan',
      'hub.mini3.title': 'Indonesia SDGs Action Awards 2024',
      'hub.mini3.desc': 'Apresiasi praktik terbaik dari daerah dan komunitas',
      'hub.cta.title': 'Repositori Praktik Baik',
      'hub.cta.sub': 'Kirim & telusuri inovasi daerah',

      /* ── News & events ── */
      'news.eyebrow': 'Kabar Terkini',
      'news.title': 'Berita & Agenda',
      'news.lead': 'Ikuti perkembangan terbaru, kegiatan, dan forum diskusi seputar SDGs Indonesia.',
      'news.link.all': 'Semua berita',
      'news.item1.meta': '12 Oktober 2026 · 4 menit baca',
      'news.item1.title': 'Indonesia Perkuat Komitmen Aksi Iklim Menuju Net Zero 2060',
      'news.item1.desc': 'Strategi transisi energi dan adaptasi iklim diperkuat melalui kemitraan lintas sektor dan pendanaan hijau.',
      'news.item2.meta': '08 Oktober 2026 · 3 menit baca',
      'news.item2.title': 'Perluasan Akses Pendidikan Berkualitas di Daerah 3T',
      'news.item2.desc': 'Program afirmasi dan digitalisasi pembelajaran menyasar wilayah terdepan, terluar, dan tertinggal.',
      'news.item3.meta': '03 Oktober 2026 · 5 menit baca',
      'news.item3.title': 'UMKM Naik Kelas: Digitalisasi Dorong Pekerjaan Layak',
      'news.item3.desc': 'Pemberdayaan UMKM melalui literasi digital dan akses pembiayaan inklusif memperluas lapangan kerja.',

      /* ── Events ── */
      'events.title': 'Agenda Mendatang',
      'events.live': 'Live',
      'events.month.oct': 'Okt',
      'events.month.nov': 'Nov',
      'events.e1.eyebrow': 'Webinar',
      'events.e1.title': 'Lokakarya Data SDGs Daerah',
      'events.e1.meta': '09.00 WIB · Daring',
      'events.e2.eyebrow': 'Konferensi',
      'events.e2.title': 'SDGs Annual Conference 2026',
      'events.e2.meta': 'Jakarta Convention Center',
      'events.e3.eyebrow': 'Pelatihan',
      'events.e3.title': 'Metadata & Pelaporan Indikator',
      'events.e3.meta': 'Bappenas · Hybrid',
      'events.cta': 'Lihat kalender lengkap',

      /* ── Community ── */
      'community.eyebrow': 'Jejaring & Komunitas',
      'community.title': 'Kolaborasi lintas aktor untuk dampak berkelanjutan',
      'community.lead': 'Terhubung dengan SDGs Center di perguruan tinggi, tim ahli, serta komunitas pegiat pembangunan di seluruh Indonesia.',
      'community.card1.title': 'SDGs Center',
      'community.card1.desc': 'Jejaring pusat studi di perguruan tinggi yang mendorong riset, pengabdian, dan advokasi SDGs.',
      'community.card1.statLabel': 'Institusi terdaftar',
      'community.card1.link': 'Jelajahi direktori',
      'community.card2.title': 'Tim Pakar',
      'community.card2.desc': 'Para ahli dari berbagai disiplin yang memberikan rekomendasi kebijakan dan kajian teknis.',
      'community.card2.statLabel': 'Pakar terverifikasi',
      'community.card2.link': 'Lihat profil',
      'community.card3.title': 'Komunitas Pegiat',
      'community.card3.desc': 'Organisasi masyarakat sipil, pemuda, dan relawan yang menggerakkan aksi di akar rumput.',
      'community.card3.statLabel': 'Organisasi mitra',
      'community.card3.link': 'Bergabung',

      /* ── Newsletter ── */
      'newsletter.title': 'Tetap terhubung dengan perkembangan SDGs Indonesia',
      'newsletter.lead': 'Berlangganan buletin bulanan: rangkuman data, publikasi terbaru, agenda kegiatan, dan peluang kolaborasi.',
      'newsletter.emailLabel': 'Alamat email',
      'newsletter.placeholder': 'nama@email.com',
      'newsletter.button': 'Berlangganan',
      'newsletter.note': 'Kami menghormati privasi Anda. Berhenti berlangganan kapan saja.',

      /* ── Footer ── */
      'footer.desc': 'Sekretariat Nasional SDGs — Kementerian Perencanaan Pembangunan Nasional / Bappenas.',
      'footer.explore': 'Jelajahi',
      'footer.resources': 'Sumber Daya',
      'footer.contact': 'Kontak',
      'footer.link.about': 'Tentang SDGs',
      'footer.link.goals': '17 Tujuan',
      'footer.link.dashboard': 'Dashboard Data',
      'footer.link.indicators': 'Indikator & Metadata',
      'footer.link.reports': 'Laporan Tahunan',
      'footer.link.publications': 'Publikasi',
      'footer.link.regulations': 'Regulasi',
      'footer.link.bestPractices': 'Praktik Baik',
      'footer.link.awards': 'Penghargaan',
      'footer.link.video': 'Video Library',
      'footer.address': 'Jl. Taman Suropati No. 2,<br/>Jakarta Pusat 10310',
      'footer.copyright': '© 2026 Sekretariat Nasional SDGs — Kementerian PPN/Bappenas. Hak cipta dilindungi.',
      'footer.privacy': 'Kebijakan Privasi',
      'footer.terms': 'Syarat & Ketentuan',
      'footer.sitemap': 'Peta Situs',

      /* ── Modal ── */
      'modal.close': 'Tutup detail',
      'modal.targets': 'Target Utama',
      'modal.indicators': 'Indikator Kunci',
      'modal.cta': 'Lihat halaman lengkap SDG',

      /* ── Breadcrumb ── */
      'breadcrumb.home': 'Beranda',
      'breadcrumb.about': 'Tentang SDGs',
      'breadcrumb.goals': 'Tujuan',

      /* ── About page ── */
      'about.hero.eyebrow': 'Tentang SDGs',
      'about.hero.title1': 'Agenda 2030 untuk',
      'about.hero.title2': 'Pembangunan Berkelanjutan',
      'about.hero.lead': 'Seruan universal untuk mengakhiri kemiskinan, melindungi planet, dan memastikan pada 2030 semua orang menikmati perdamaian dan kemakmuran. Diadopsi oleh 193 negara anggota PBB pada 2015, SDGs adalah cetak biru bersama untuk masa depan yang lebih baik.',
      'about.hero.stat1': 'Tahun diadopsi',
      'about.hero.stat2': 'Negara anggota PBB',
      'about.hero.stat3': 'Tujuan',
      'about.hero.stat4': 'Target',
      'about.what.eyebrow': 'Pengantar',
      'about.what.title': 'Apa itu Tujuan Pembangunan Berkelanjutan?',
      'about.what.card1.title': 'Cetak biru bersama',
      'about.what.card1.desc': 'SDGs adalah 17 tujuan yang saling terkait dan menyeimbangkan tiga dimensi pembangunan berkelanjutan: pertumbuhan ekonomi, inklusi sosial, dan perlindungan lingkungan.',
      'about.what.card2.title': 'Universal sejak awal',
      'about.what.card2.desc': 'Berbeda dari pendahulunya, SDGs berlaku untuk setiap negara — maju maupun berkembang — dan menyerukan aksi dari semua pemangku kepentingan: pemerintah, dunia usaha, masyarakat sipil, dan individu.',
      'about.what.card3.title': 'Tidak meninggalkan siapa pun',
      'about.what.card3.desc': 'Prinsip utamanya adalah menjangkau yang paling tertinggal lebih dulu — mengakhiri kemiskinan dalam segala bentuknya dan memastikan kemajuan dinikmati oleh setiap orang, di mana pun.',
      'about.showcase.caption': '17 Tujuan Pembangunan Berkelanjutan — seperangkat prioritas global yang terintegrasi dan tak terpisahkan untuk manusia dan planet.',
      'about.history.eyebrow': 'Perjalanan',
      'about.history.title': 'Dari Rio hingga Agenda 2030',
      'about.history.lead': 'SDGs adalah hasil dari puluhan tahun diskusi global tentang pembangunan berkelanjutan — sebuah perjalanan yang dimulai jauh sebelum 2015.',
      'about.history.e1.title': 'KTT Bumi, Rio de Janeiro',
      'about.history.e1.desc': 'Konferensi global pertama yang menghubungkan lingkungan dan pembangunan, menghasilkan Agenda 21 dan membuka jalan bagi kerangka pembangunan berkelanjutan berikutnya.',
      'about.history.e2.title': 'Millennium Development Goals (MDGs)',
      'about.history.e2.desc': 'Delapan tujuan yang berfokus pada kemiskinan, pendidikan, gender, kesehatan, dan lingkungan — menyasar negara berkembang dengan tenggat 2015.',
      'about.history.e3.title': 'Konferensi Rio+20',
      'about.history.e3.desc': 'Konferensi PBB tentang Pembangunan Berkelanjutan menyerukan seperangkat tujuan baru untuk menggantikan MDGs — dengan pendekatan yang lebih universal dan terintegrasi.',
      'about.history.e4.title': 'Agenda 2030 diadopsi',
      'about.history.e4.desc': 'Pada 25 September 2015, seluruh 193 negara anggota PBB mengadopsi "Mengubah Dunia Kita: Agenda 2030 untuk Pembangunan Berkelanjutan" — 17 tujuan, 169 target.',
      'about.history.e5.title': 'Regulasi SDGs pertama Indonesia',
      'about.history.e5.desc': 'Peraturan Presiden No. 59 Tahun 2017 menetapkan kerangka nasional Indonesia untuk pelaksanaan, koordinasi, dan pelaporan SDGs.',
      'about.history.e6.title': 'Peraturan Presiden No. 111 Tahun 2022',
      'about.history.e6.desc': 'Regulasi yang diperbarui dan diperkuat untuk menegaskan peran kementerian, pemerintah daerah, dan platform multi-pemangku kepentingan dalam mencapai SDGs.',
      'about.pillars.eyebrow': 'Kerangka',
      'about.pillars.title': 'Lima Pilar',
      'about.pillars.lead': 'Ke-17 tujuan diorganisir dalam lima pilar transformatif — mencerminkan aspirasi bersama manusia dan planet, dengan keadilan dan kemitraan sebagai perekatnya.',
      'about.pillars.people.desc': 'Mengakhiri kemiskinan dan kelaparan dalam segala bentuknya, memastikan semua manusia dapat mewujudkan potensinya dalam martabat dan kesetaraan, serta dalam lingkungan yang sehat.',
      'about.pillars.planet.desc': 'Melindungi planet dari degradasi — melalui konsumsi dan produksi berkelanjutan, pengelolaan sumber daya alam secara berkelanjutan, dan aksi mendesak terhadap perubahan iklim.',
      'about.pillars.prosperity.desc': 'Memastikan semua manusia dapat menikmati hidup yang makmur dan memuaskan, dengan kemajuan ekonomi, sosial, dan teknologi yang selaras dengan alam.',
      'about.pillars.peace.desc': 'Mendorong masyarakat yang damai, adil, dan inklusif yang bebas dari rasa takut dan kekerasan — karena tidak ada pembangunan berkelanjutan tanpa perdamaian, dan tidak ada perdamaian tanpa pembangunan berkelanjutan.',
      'about.pillars.partnership.desc': 'Memobilisasi sarana yang diperlukan untuk melaksanakan Agenda 2030 melalui Kemitraan Global untuk Pembangunan Berkelanjutan yang direvitalisasi, berdasarkan semangat solidaritas global yang diperkuat.',
      'about.indonesia.eyebrow': 'Konteks Nasional',
      'about.indonesia.title': 'SDGs di Indonesia',
      'about.indonesia.lead': 'Indonesia berperan aktif dalam membentuk Agenda 2030 dan telah melaksanakan SDGs melalui pendekatan yang terintegrasi, whole-of-government, dan whole-of-society sejak 2017.',
      'about.indonesia.card1.title': 'Dasar hukum',
      'about.indonesia.card1.desc': 'Peraturan Presiden No. 111 Tahun 2022 mengatur pelaksanaan SDGs, menggantikan Perpres 59/2017 sebelumnya. Regulasi ini menetapkan peta jalan, target, dan mekanisme pelaporan.',
      'about.indonesia.card2.title': 'Rumah institusional',
      'about.indonesia.card2.desc': 'Sekretariat Nasional SDGs berada di bawah Kementerian Perencanaan Pembangunan Nasional (Bappenas), mengoordinasikan pelaksanaan lintas kementerian dan daerah.',
      'about.indonesia.card3.title': 'Pelaksanaan daerah',
      'about.indonesia.card3.desc': 'Seluruh 38 provinsi dan 514 kabupaten/kota memiliki Rencana Aksi Daerah SDGs, selaras dengan Rencana Aksi Nasional dan dipantau melalui platform pelaporan daerah khusus.',
      'about.indonesia.card4.title': 'Jejaring akademik',
      'about.indonesia.card4.desc': 'Lebih dari 54 SDGs Center di perguruan tinggi mendorong riset, pengabdian masyarakat, dan advokasi lokal — menjembatani akademisi, pemerintah, dan masyarakat.',
      'about.funding.title': 'Empat sumber pembiayaan SDGs',
      'about.funding.lead': 'Pembiayaan berkelanjutan untuk SDGs bergantung pada mobilisasi sumber daya dari berbagai aliran.',
      'about.funding.f1': 'APBN',
      'about.funding.f1d': 'Pembiayaan publik melalui alokasi anggaran nasional lintas kementerian.',
      'about.funding.f2': 'APBD',
      'about.funding.f2d': 'Anggaran provinsi dan kabupaten/kota yang selaras dengan Rencana Aksi Daerah.',
      'about.funding.f3': 'Filantropi & Dunia Usaha',
      'about.funding.f3d': 'Program CSR, yayasan filantropi, dan kontribusi sektor swasta.',
      'about.funding.f4': 'Masyarakat & Non-Pemerintah',
      'about.funding.f4d': 'Masyarakat sipil, organisasi keagamaan, dan inisiatif berbasis komunitas.',
      'about.gov.eyebrow': 'Tata Kelola',
      'about.gov.title': 'Bagaimana Indonesia mengoordinasikan SDGs',
      'about.gov.lead': 'Struktur multi-level menghubungkan kepemimpinan nasional, koordinasi lintas kementerian, kelompok kerja teknis, dan pelaksanaan daerah.',
      'about.gov.t1.eyebrow': 'Otoritas tertinggi',
      'about.gov.t1.title': 'Komite Pengarah Nasional',
      'about.gov.t1.desc': 'Diketuai oleh Presiden, memberikan arah strategis pelaksanaan SDGs.',
      'about.gov.t2.eyebrow': 'Koordinasi',
      'about.gov.t2.title': 'Tim Koordinasi Nasional',
      'about.gov.t2.desc': 'Dipimpin Bappenas, menyelaraskan kebijakan dan program lintas kementerian.',
      'about.gov.t2b.eyebrow': 'Teknis',
      'about.gov.t2b.title': 'Kelompok Kerja',
      'about.gov.t2b.desc': 'Kelompok tematik yang mencakup setiap pilar, target, dan indikator.',
      'about.gov.t3.eyebrow': 'Sekretariat',
      'about.gov.t3.title': 'Sekretariat Nasional SDGs',
      'about.gov.t3.desc': 'Koordinasi harian, pemantauan, pelaporan, dan keterlibatan pemangku kepentingan.',
      'about.gov.t3b.eyebrow': 'Data & Pelaporan',
      'about.gov.t3b.title': 'Tim Data & Metadata SDGs',
      'about.gov.t3b.desc': 'Dikelola bersama BPS untuk menyusun, memverifikasi, dan mempublikasikan indikator.',
      'about.gov.t4.eyebrow': 'Sub-nasional',
      'about.gov.t4.title': 'Sekretariat SDGs Daerah',
      'about.gov.t4.desc': '38 provinsi dan 514 kabupaten/kota melaksanakan Rencana Aksi Daerah.',
      'about.gov.t4b.eyebrow': 'Multi-pemangku kepentingan',
      'about.gov.t4b.title': 'SDGs Center & Platform Filantropi',
      'about.gov.t4b.desc': 'Perguruan tinggi, masyarakat sipil, sektor swasta, dan mitra filantropi.',
      'about.principles.eyebrow': 'Nilai Pemandu',
      'about.principles.title': 'Prinsip utama Agenda 2030',
      'about.principles.lead': 'Lima prinsip membentuk bagaimana SDGs dirancang, dilaksanakan, dan dipantau — di mana pun.',
      'about.principles.p1.title': 'Tidak Meninggalkan Siapa Pun',
      'about.principles.p1.desc': 'Setiap orang — terlepas dari identitas, pendapatan, atau geografi — harus merasakan manfaat kemajuan pembangunan.',
      'about.principles.p2.title': 'Universalitas',
      'about.principles.p2.desc': 'Tujuan berlaku untuk setiap negara — maju dan berkembang — dengan tanggung jawab dan kapasitas yang berbeda.',
      'about.principles.p3.title': 'Integrasi',
      'about.principles.p3.desc': 'Dimensi ekonomi, sosial, dan lingkungan harus maju bersama — bukan saling bertukar.',
      'about.principles.p4.title': 'Kemitraan',
      'about.principles.p4.desc': 'Transformasi nyata bergantung pada kolaborasi — pemerintah, dunia usaha, masyarakat sipil, akademisi, dan komunitas.',
      'about.principles.p5.title': 'Akuntabilitas',
      'about.principles.p5.desc': 'Pemantauan transparan, data terbuka, dan pelaporan berkala — nasional dan global — menjaga agenda tetap pada jalurnya.',
      'about.cta.title': 'Siap menjelajahi tujuan-tujuannya?',
      'about.cta.lead': 'Selami detail setiap tujuan, atau lacak kemajuan nasional Indonesia melalui dasbor data interaktif.',
      'about.cta.button1': 'Jelajahi 17 Tujuan',
      'about.cta.button2': 'Lihat Dashboard',

      /* ── Halaman katalog Tujuan ── */
      'catalog.hero.eyebrow': 'Agenda 2030',
      'catalog.hero.title1': 'Semua',
      'catalog.hero.title2': '17 Tujuan Pembangunan',
      'catalog.hero.title3': 'Berkelanjutan',
      'catalog.hero.lead': 'Telusuri setiap tujuan, jelajahi target dan indikatornya, serta pantau kemajuan nasional Indonesia. Klik tujuan di bawah untuk membuka panel detail.',
      'catalog.hero.stat1': 'Tujuan',
      'catalog.hero.stat2': 'Target',
      'catalog.hero.stat3': 'Indikator',
      'catalog.hero.stat4': 'Capai target',
      'catalog.search.placeholder': 'Cari berdasarkan nama, nomor, atau kata kunci…',
      'catalog.filter.all': 'Semua',
      'catalog.filter.social': 'Sosial',
      'catalog.filter.economic': 'Ekonomi',
      'catalog.filter.environmental': 'Lingkungan',
      'catalog.count.of': 'dari',
      'catalog.count.goals': 'tujuan',
      'catalog.empty.title': 'Tidak ada tujuan yang cocok',
      'catalog.empty.desc': 'Coba kata kunci lain atau reset filter.',
      'catalog.empty.reset': 'Reset filter',
      'catalog.detail.progress': 'Capaian nasional',
      'catalog.detail.targetsLabel': 'Target',
      'catalog.detail.indicatorsLabel': 'Indikator',
      'catalog.detail.cta': 'Lihat data lengkap',
      'catalog.trend.up': 'kenaikan dari tahun lalu',
      'catalog.trend.down': 'penurunan dari tahun lalu',
      'catalog.cta.badge': 'Mencari data?',
      'catalog.cta.title': 'Jelajahi dasbor data SDGs Indonesia',
      'catalog.cta.sub': 'Lacak indikator dari waktu ke waktu, bandingkan provinsi, dan telusuri analitik lanjutan di semua tujuan.',
      'catalog.cta.button': 'Buka Dashboard',
    },
  };

  /* ═══════════════════════════════════════════════════════════════
     2. GOALS DATA (bilingual, with progress + trend)
     ═══════════════════════════════════════════════════════════════ */
  const GOALS = [
    { id:1, cat:'social', color:'#E5243B', progress:71, trend:-2.4, text: {
      en:{ name:'No Poverty', desc:'End poverty in all its forms everywhere.',
          targets:['1.1 Extreme poverty','1.2 National poverty','1.3 Social protection'],
          indicators:['Population in poverty (USD 2.15/day)','National poverty line','Social security coverage'] },
      id:{ name:'Tanpa Kemiskinan', desc:'Mengakhiri kemiskinan dalam segala bentuk di seluruh dunia.',
          targets:['1.1 Kemiskinan ekstrem','1.2 Kemiskinan nasional','1.3 Perlindungan sosial'],
          indicators:['Penduduk miskin (USD 2,15/hari)','Garis kemiskinan nasional','Cakupan jaminan sosial'] },
    }},
    { id:2, cat:'social', color:'#DDA63A', progress:64, trend:+1.8, text: {
      en:{ name:'Zero Hunger', desc:'End hunger, achieve food security and improved nutrition.',
          targets:['2.1 Access to safe food','2.2 End malnutrition','2.3 Agricultural productivity'],
          indicators:['Prevalence of undernourishment','Stunting prevalence','Food crop productivity per hectare'] },
      id:{ name:'Tanpa Kelaparan', desc:'Mengakhiri kelaparan, mencapai ketahanan pangan dan gizi yang baik.',
          targets:['2.1 Akses pangan aman','2.2 Akhiri malnutrisi','2.3 Produktivitas pertanian'],
          indicators:['Prevalensi kurang gizi','Prevalensi stunting','Produktivitas pangan per hektar'] },
    }},
    { id:3, cat:'social', color:'#4C9F38', progress:73, trend:+3.1, text: {
      en:{ name:'Good Health and Well-Being', desc:'Ensure healthy lives and promote well-being for all at all ages.',
          targets:['3.1 Maternal mortality','3.2 Infant & under-five mortality','3.3 Communicable diseases'],
          indicators:['MMR per 100,000 live births','IMR per 1,000 live births','TB prevalence'] },
      id:{ name:'Kehidupan Sehat dan Sejahtera', desc:'Menjamin hidup sehat dan mendorong kesejahteraan untuk semua usia.',
          targets:['3.1 Angka kematian ibu','3.2 Kematian bayi & balita','3.3 Penyakit menular'],
          indicators:['AKI per 100.000 kelahiran','AKB per 1.000 kelahiran','Prevalensi TBC'] },
    }},
    { id:4, cat:'social', color:'#C5192D', progress:68, trend:+2.2, text: {
      en:{ name:'Quality Education', desc:'Ensure inclusive and equitable education and promote lifelong learning.',
          targets:['4.1 Primary & secondary education','4.2 Access to early childhood education','4.4 Job skills'],
          indicators:['School participation rate','Early childhood education gross enrollment ratio','Literacy rate'] },
      id:{ name:'Pendidikan Berkualitas', desc:'Menjamin pendidikan inklusif dan merata serta pembelajaran sepanjang hayat.',
          targets:['4.1 Pendidikan dasar & menengah','4.2 Akses PAUD','4.4 Keterampilan kerja'],
          indicators:['Angka partisipasi sekolah','APK PAUD','Angka melek huruf'] },
    }},
    { id:5, cat:'social', color:'#FF3A21', progress:59, trend:+4.7, text: {
      en:{ name:'Gender Equality', desc:'Achieve gender equality and empower all women and girls.',
          targets:['5.1 End discrimination','5.2 End violence','5.5 Leadership participation'],
          indicators:['Gender Inequality Index','Women in parliament','Gender wage ratio'] },
      id:{ name:'Kesetaraan Gender', desc:'Mencapai kesetaraan gender dan memberdayakan perempuan serta anak perempuan.',
          targets:['5.1 Akhiri diskriminasi','5.2 Akhiri kekerasan','5.5 Partisipasi kepemimpinan'],
          indicators:['Indeks Ketimpangan Gender','Perempuan di parlemen','Rasio upah gender'] },
    }},
    { id:6, cat:'environmental', color:'#26BDE2', progress:76, trend:+2.9, text: {
      en:{ name:'Clean Water and Sanitation', desc:'Ensure availability and sustainable management of clean water and sanitation.',
          targets:['6.1 Safe drinking water','6.2 Adequate sanitation','6.3 Water quality'],
          indicators:['Access to safe drinking water','Access to adequate sanitation','Safely treated wastewater'] },
      id:{ name:'Air Bersih dan Sanitasi Layak', desc:'Menjamin ketersediaan dan pengelolaan air bersih serta sanitasi berkelanjutan.',
          targets:['6.1 Air minum layak','6.2 Sanitasi layak','6.3 Kualitas air'],
          indicators:['Akses air minum aman','Akses sanitasi layak','Air limbah terolah aman'] },
    }},
    { id:7, cat:'environmental', color:'#FCC30B', progress:81, trend:+5.3, text: {
      en:{ name:'Affordable and Clean Energy', desc:'Ensure access to modern, affordable, reliable and sustainable energy.',
          targets:['7.1 Access to electricity','7.2 Renewable energy','7.3 Energy efficiency'],
          indicators:['Electrification ratio','Renewable energy mix','Primary energy intensity'] },
      id:{ name:'Energi Bersih dan Terjangkau', desc:'Menjamin akses energi modern, terjangkau, andal, dan berkelanjutan.',
          targets:['7.1 Akses listrik','7.2 Energi terbarukan','7.3 Efisiensi energi'],
          indicators:['Rasio elektrifikasi','Bauran EBT','Intensitas energi primer'] },
    }},
    { id:8, cat:'economic', color:'#A21942', progress:78, trend:+1.4, text: {
      en:{ name:'Decent Work and Economic Growth', desc:'Promote inclusive and sustainable economic growth and decent work.',
          targets:['8.1 Per capita growth','8.5 Decent work','8.6 Youth NEET'],
          indicators:['GDP growth','Unemployment rate','Real minimum wage'] },
      id:{ name:'Pekerjaan Layak dan Pertumbuhan Ekonomi', desc:'Mendorong pertumbuhan ekonomi inklusif dan berkelanjutan serta pekerjaan layak.',
          targets:['8.1 Pertumbuhan per kapita','8.5 Pekerjaan layak','8.6 Pemuda NEET'],
          indicators:['Pertumbuhan PDB','TPT','Upah minimum riil'] },
    }},
    { id:9, cat:'economic', color:'#FD6925', progress:66, trend:+2.6, text: {
      en:{ name:'Industry, Innovation and Infrastructure', desc:'Build resilient infrastructure, promote inclusive industrialization, and foster innovation.',
          targets:['9.1 Resilient infrastructure','9.2 Inclusive industrialization','9.5 Research & innovation'],
          indicators:['Manufacturing share of GDP','Access to adequate roads','R&D spending'] },
      id:{ name:'Industri, Inovasi dan Infrastruktur', desc:'Membangun infrastruktur tangguh, industrialisasi inklusif, dan mendorong inovasi.',
          targets:['9.1 Infrastruktur tangguh','9.2 Industrialisasi inklusif','9.5 Riset & inovasi'],
          indicators:['Kontribusi manufaktur PDB','Akses jalan layak','Belanja R&D'] },
    }},
    { id:10, cat:'economic', color:'#DD1367', progress:55, trend:-0.8, text: {
      en:{ name:'Reduced Inequalities', desc:'Reduce inequality within and among countries.',
          targets:['10.1 Income of bottom 40%','10.2 Social inclusion','10.4 Fiscal & wage policy'],
          indicators:['Gini ratio','Financial inclusion index','Income growth of bottom 40%'] },
      id:{ name:'Berkurangnya Kesenjangan', desc:'Mengurangi kesenjangan di dalam dan antar negara.',
          targets:['10.1 Pendapatan 40% terbawah','10.2 Inklusi sosial','10.4 Fiskal & upah'],
          indicators:['Rasio Gini','Indeks inklusi keuangan','Pertumbuhan pendapatan 40% bawah'] },
    }},
    { id:11, cat:'environmental', color:'#FD9D24', progress:62, trend:+1.9, text: {
      en:{ name:'Sustainable Cities and Communities', desc:'Make cities and human settlements inclusive, safe, resilient and sustainable.',
          targets:['11.1 Adequate housing','11.2 Safe transport','11.6 Urban environmental impact'],
          indicators:['Livable homes','Access to public transport','Urban air quality'] },
      id:{ name:'Kota dan Permukiman Berkelanjutan', desc:'Menjadikan kota dan permukiman inklusif, aman, tangguh, dan berkelanjutan.',
          targets:['11.1 Perumahan layak','11.2 Transportasi aman','11.6 Dampak lingkungan kota'],
          indicators:['Rumah layak huni','Akses transportasi publik','Kualitas udara perkotaan'] },
    }},
    { id:12, cat:'economic', color:'#BF8B2E', progress:58, trend:+3.4, text: {
      en:{ name:'Responsible Consumption and Production', desc:'Ensure sustainable consumption and production patterns.',
          targets:['12.2 Natural resource management','12.3 Reduce food waste','12.5 Reduce waste'],
          indicators:['Waste recycling','Food loss index','Domestic material consumption'] },
      id:{ name:'Konsumsi dan Produksi Bertanggung Jawab', desc:'Menjamin pola konsumsi dan produksi yang berkelanjutan.',
          targets:['12.2 Pengelolaan SDA','12.3 Kurangi food waste','12.5 Kurangi limbah'],
          indicators:['Daur ulang sampah','Food loss index','Konsumsi material domestik'] },
    }},
    { id:13, cat:'environmental', color:'#3F7E44', progress:52, trend:-1.2, text: {
      en:{ name:'Climate Action', desc:'Take urgent action to combat climate change and its impacts.',
          targets:['13.1 Disaster resilience','13.2 Climate policy integration','13.3 Climate education'],
          indicators:['GHG emissions','Disaster casualties','Adaptive capacity'] },
      id:{ name:'Penanganan Perubahan Iklim', desc:'Mengambil tindakan mendesak untuk mengatasi perubahan iklim dan dampaknya.',
          targets:['13.1 Ketahanan bencana','13.2 Integrasi kebijakan iklim','13.3 Edukasi iklim'],
          indicators:['Emisi GRK','Korban bencana','Kapasitas adaptasi'] },
    }},
    { id:14, cat:'environmental', color:'#0A97D9', progress:60, trend:+2.1, text: {
      en:{ name:'Life Below Water', desc:'Conserve and sustainably use the oceans, seas and marine resources.',
          targets:['14.1 Reduce marine pollution','14.2 Marine ecosystems','14.5 Coastal conservation'],
          indicators:['Marine protected areas','Coral reef health','Ocean quality index'] },
      id:{ name:'Ekosistem Lautan', desc:'Melestarikan dan memanfaatkan laut, samudra, dan sumber daya secara berkelanjutan.',
          targets:['14.1 Kurangi polusi laut','14.2 Ekosistem laut','14.5 Konservasi pesisir'],
          indicators:['Kawasan konservasi laut','Kesehatan terumbu karang','Indeks kualitas laut'] },
    }},
    { id:15, cat:'environmental', color:'#56C02B', progress:57, trend:-0.6, text: {
      en:{ name:'Life on Land', desc:'Protect, restore and promote sustainable use of terrestrial ecosystems.',
          targets:['15.1 Terrestrial & freshwater ecosystems','15.2 Manage forests','15.3 Combat desertification'],
          indicators:['Forest cover area','Red List Index','Degraded land'] },
      id:{ name:'Ekosistem Daratan', desc:'Melindungi, memulihkan, dan mendorong penggunaan ekosistem darat secara berkelanjutan.',
          targets:['15.1 Ekosistem darat & air','15.2 Kelola hutan','15.3 Atasi desertifikasi'],
          indicators:['Luas tutupan hutan','Indeks spesies merah','Lahan terdegradasi'] },
    }},
    { id:16, cat:'social', color:'#00689D', progress:74, trend:+2.8, text: {
      en:{ name:'Peace, Justice and Strong Institutions', desc:'Promote peaceful and inclusive societies for sustainable development.',
          targets:['16.1 Reduce violence','16.3 Rule of law','16.5 Corruption & bribery'],
          indicators:['Crime rate','Corruption Perceptions Index','Access to justice'] },
      id:{ name:'Perdamaian, Keadilan & Kelembagaan', desc:'Mendorong masyarakat damai dan inklusif untuk pembangunan berkelanjutan.',
          targets:['16.1 Kurangi kekerasan','16.3 Supremasi hukum','16.5 Korupsi & suap'],
          indicators:['Angka kejahatan','Indeks Persepsi Korupsi','Akses keadilan'] },
    }},
    { id:17, cat:'economic', color:'#19486A', progress:61, trend:+1.6, text: {
      en:{ name:'Partnerships for the Goals', desc:'Strengthen the means of implementation and revitalize the global partnership.',
          targets:['17.1 Resource mobilization','17.6 Technology cooperation','17.17 Partnerships'],
          indicators:['Tax-to-GDP ratio','Official development assistance','Internet access'] },
      id:{ name:'Kemitraan untuk Mencapai Tujuan', desc:'Memperkuat sarana pelaksanaan dan merevitalisasi kemitraan global.',
          targets:['17.1 Mobilisasi sumber daya','17.6 Kerja sama teknologi','17.17 Kemitraan'],
          indicators:['Rasio pajak PDB','Bantuan pembangunan resmi','Akses internet'] },
    }},
  ];

  /* Featured goals on homepage — 6 curated highlights */
  const FEATURED = [
    { id: 1,  progress: 71, priority: true  },
    { id: 4,  progress: 68, priority: false },
    { id: 8,  progress: 78, priority: true  },
    { id: 13, progress: 52, priority: false },
    { id: 16, progress: 74, priority: false },
    { id: 17, progress: 61, priority: false },
  ];

  /* ═══════════════════════════════════════════════════════════════
     3. STATE + HELPERS
     ═══════════════════════════════════════════════════════════════ */
  const STORAGE_KEY = 'sdgs-lang';

  const state = {
    lang: (() => {
      const saved = localStorage.getItem(STORAGE_KEY);
      return (saved === 'id') ? 'id' : 'en';
    })(),
  };

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function t(key) {
    return I18N[state.lang]?.[key] ?? I18N.en[key] ?? key;
  }

  /** Build the asset path for a goal icon (01–17, zero-padded). */
  function goalIcon(id) {
    return `assets/TPB-SDGs-Goal-${String(id).padStart(2, '0')}-Indonesia-Standar.svg`;
  }

  function currentPage() {
    const path = window.location.pathname.toLowerCase();
    if (path.endsWith('about.html')) return 'about';
    if (path.endsWith('goals.html')) return 'goals';
    return 'index';
  }

  function applyI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = t(el.getAttribute('data-i18n'));
      if (value.includes('<br')) el.innerHTML = value;
      else el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });

    document.documentElement.lang = state.lang;

    const metaTitle = t(`meta.title.${currentPage()}`);
    if (metaTitle) document.title = metaTitle;

    document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
      const isActive = btn.dataset.lang === state.lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'id') return;
    if (lang === state.lang) return;

    state.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    applyI18n();
    renderGoalsGrid();     // homepage featured
    renderCatalog();       // goals.html catalog
    refreshDetailPanel();  // goals.html open detail
    refreshOpenModal();    // homepage open modal
  }

  /* ═══════════════════════════════════════════════════════════════
     4. HOMEPAGE FEATURED GOALS GRID
     ═══════════════════════════════════════════════════════════════ */
  const goalsGrid = document.getElementById('goalsGrid');

  function createGoalFeature(goal, meta) {
    const copy = goal.text[state.lang];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'goal-feature reveal';
    btn.dataset.goalId = goal.id;
    btn.style.setProperty('--goal-color', goal.color);
    btn.setAttribute('aria-label',
      state.lang === 'id'
        ? `Lihat detail SDG ${goal.id}: ${copy.name}`
        : `View details for SDG ${goal.id}: ${copy.name}`
    );

    const flag = meta.priority
      ? `<span class="goal-feature__flag">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><path d="M12 2 15 8l6 .9-4.5 4.3 1 6.3L12 16.5 6.5 19.5l1-6.3L3 8.9 9 8Z"/></svg>
           ${t('goals.card.priority')}
         </span>`
      : '';

    btn.innerHTML = `
      <div class="goal-feature__head">
        <img
          class="goal-feature__icon"
          src="${goalIcon(goal.id)}"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <div class="goal-feature__meta">
          <p class="goal-feature__cat">${t('cat.' + goal.cat)}</p>
          <h3 class="goal-feature__name">${copy.name}</h3>
        </div>
        ${flag}
      </div>

      <p class="goal-feature__desc">${copy.desc}</p>

      <div class="goal-feature__progress">
        <div class="goal-feature__progress-head">
          <span class="goal-feature__progress-label">${t('goals.card.capture')}</span>
          <span class="goal-feature__progress-value">${meta.progress}%</span>
        </div>
        <div class="goal-feature__progress-bar">
          <div class="goal-feature__progress-fill" data-fill="${meta.progress}"></div>
        </div>
      </div>

      <div class="goal-feature__foot">
        <span>SDG ${goal.id} · ${copy.targets.length} ${t('goals.card.targets')}</span>
        <span class="goal-feature__link">
          ${t('goals.card.detail')}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </div>
    `;

    btn.addEventListener('click', () => openGoalModal(goal.id));
    return btn;
  }

  function renderGoalsGrid() {
    if (!goalsGrid) return;
    goalsGrid.innerHTML = '';

    FEATURED.forEach(meta => {
      const goal = GOALS.find(g => g.id === meta.id);
      if (goal) goalsGrid.appendChild(createGoalFeature(goal, meta));
    });

    goalsGrid.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));

    requestAnimationFrame(() => {
      goalsGrid.querySelectorAll('.goal-feature__progress-fill').forEach(f => {
        f.style.width = f.dataset.fill + '%';
      });
    });
  }

  /* ═══════════════════════════════════════════════════════════════
     5. GOAL DETAIL MODAL (homepage)
     ═══════════════════════════════════════════════════════════════ */
  const goalModal        = document.getElementById('goalModal');
  const goalModalPanel   = goalModal?.querySelector('.goal-modal__panel');
  const goalModalHeader  = document.getElementById('goalModalHeader');
  const goalModalIcon    = document.getElementById('goalModalIcon');
  const goalModalEyebrow = document.getElementById('goalModalEyebrow');
  const goalModalTitle   = document.getElementById('goalModalTitle');
  const goalModalDesc    = document.getElementById('goalModalDesc');
  const goalModalTargets = document.getElementById('goalModalTargets');
  const goalModalInds    = document.getElementById('goalModalIndicators');
  const goalModalDotA    = document.getElementById('goalModalDotA');
  const goalModalDotB    = document.getElementById('goalModalDotB');
  const goalModalCTA     = document.getElementById('goalModalCTA');

  let lastFocusedEl = null;
  let openGoalId    = null;

  function populateModal(goal) {
    const copy = goal.text[state.lang];

    goalModalHeader.style.setProperty('--goal-color', goal.color);
    if (goalModalIcon) goalModalIcon.src = goalIcon(goal.id);
    goalModalEyebrow.textContent =
      state.lang === 'id'
        ? `Tujuan ${goal.id} · ${t('cat.' + goal.cat)}`
        : `Goal ${goal.id} · ${t('cat.' + goal.cat)}`;
    goalModalTitle.textContent = copy.name;
    goalModalDesc.textContent  = copy.desc;
    goalModalDotA.style.background = goal.color;
    goalModalDotB.style.background = goal.color;

    goalModalTargets.innerHTML = copy.targets.map(x => {
      const [num, ...rest] = x.split(' ');
      return `<li><strong>${num}</strong><span>${rest.join(' ')}</span></li>`;
    }).join('');

    goalModalInds.innerHTML = copy.indicators.map(i => `
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M5 12l5 5L20 7"/>
        </svg>
        <span>${i}</span>
      </li>
    `).join('');

    goalModalCTA.href = `goals.html#goal-${goal.id}`;
  }

  function openGoalModal(goalId) {
    const goal = GOALS.find(x => x.id === goalId);
    if (!goal || !goalModal) return;

    openGoalId = goalId;
    populateModal(goal);

    lastFocusedEl = document.activeElement;
    goalModal.hidden = false;
    document.body.classList.add('has-modal');
    setTimeout(() => goalModalPanel?.focus?.(), 30);
  }

  function closeGoalModal() {
    if (!goalModal || goalModal.hidden) return;
    goalModal.hidden = true;
    document.body.classList.remove('has-modal');
    openGoalId = null;
    lastFocusedEl?.focus?.();
  }

  function refreshOpenModal() {
    if (!goalModal || goalModal.hidden || openGoalId == null) return;
    const goal = GOALS.find(x => x.id === openGoalId);
    if (goal) populateModal(goal);
  }

  goalModal?.querySelectorAll('[data-close-goal]').forEach(el => {
    el.addEventListener('click', closeGoalModal);
  });

  /* Focus trap for modal */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && goalModal && !goalModal.hidden) {
      closeGoalModal();
      return;
    }
    if (e.key !== 'Tab' || !goalModal || goalModal.hidden) return;
    const focusables = goalModal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const last  = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  });

  /* ═══════════════════════════════════════════════════════════════
     6. MOBILE MENU
     ═══════════════════════════════════════════════════════════════ */
  const openMenuBtn = document.getElementById('openMenu');
  const mobileMenu  = document.getElementById('mobileMenu');

  function closeMobileMenu() {
    if (!mobileMenu || !openMenuBtn) return;
    mobileMenu.hidden = true;
    openMenuBtn.setAttribute('aria-expanded', 'false');
  }
  function toggleMobileMenu() {
    if (!mobileMenu || !openMenuBtn) return;
    const willOpen = mobileMenu.hidden;
    mobileMenu.hidden = !willOpen;
    openMenuBtn.setAttribute('aria-expanded', String(willOpen));
  }
  if (openMenuBtn && mobileMenu) {
    openMenuBtn.addEventListener('click', toggleMobileMenu);
    mobileMenu.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', closeMobileMenu)
    );
  }

  /* ═══════════════════════════════════════════════════════════════
     7. SEARCH OVERLAY
     ═══════════════════════════════════════════════════════════════ */
  const searchOverlay  = document.getElementById('searchOverlay');
  const openSearchBtn  = document.getElementById('openSearch');
  const searchInput    = document.getElementById('searchInput');

  function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
    setTimeout(() => searchInput?.focus(), 40);
  }
  function closeSearch() {
    if (!searchOverlay) return;
    searchOverlay.hidden = true;
    document.body.style.overflow = '';
  }

  openSearchBtn?.addEventListener('click', openSearch);
  searchOverlay?.querySelectorAll('[data-close-search]').forEach(el =>
    el.addEventListener('click', closeSearch)
  );

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (searchOverlay && !searchOverlay.hidden) closeSearch();
      if (mobileMenu && !mobileMenu.hidden) closeMobileMenu();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearch();
    }
  });

  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      if (!searchInput) return;
      searchInput.value = chip.textContent.trim();
      searchInput.focus();
    });
  });

  const heroSearch      = document.getElementById('heroSearch');
  const heroSearchInput = document.getElementById('heroSearchInput');
  heroSearch?.addEventListener('submit', () => {
    if (searchInput && heroSearchInput) searchInput.value = heroSearchInput.value;
    openSearch();
  });

  /* ═══════════════════════════════════════════════════════════════
     8. SCROLL REVEAL
     ═══════════════════════════════════════════════════════════════ */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const revealIO = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => revealIO.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ═══════════════════════════════════════════════════════════════
     9. ANIMATED COUNTERS
     ═══════════════════════════════════════════════════════════════ */
  const counters = document.querySelectorAll('[data-count]');

  function formatNumber(value, decimals) {
    const locale = state.lang === 'id' ? 'id-ID' : 'en-US';
    return decimals
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString(locale);
  }

  function animateCounter(el) {
    const target   = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);

    if (prefersReduced) {
      el.textContent = formatNumber(target, decimals);
      return;
    }

    const duration = 1600;
    const start    = performance.now();

    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = formatNumber(target * eased, decimals);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = formatNumber(target, decimals);
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window && counters.length) {
    const counterIO = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterIO.observe(c));
  } else {
    counters.forEach(animateCounter);
  }

  /* ═══════════════════════════════════════════════════════════════
     10. HEADER SHADOW + BACK TO TOP
     ═══════════════════════════════════════════════════════════════ */
  const header    = document.getElementById('site-header');
  const backToTop = document.getElementById('backToTop');

  function onScroll() {
    const y = window.scrollY;
    header?.classList.toggle('is-scrolled', y > 12);
    backToTop?.classList.toggle('is-visible', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  });

  /* ═══════════════════════════════════════════════════════════════
     11. SCROLL-SPY NAV (homepage only)
     ═══════════════════════════════════════════════════════════════ */
  const sectionIds = ['beranda', 'tentang', 'tujuan', 'data', 'pengetahuan', 'berita', 'komunitas'];
  const navLinks   = document.querySelectorAll('.nav__link');

  if ('IntersectionObserver' in window && document.getElementById('beranda')) {
    const spyIO = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.removeAttribute('aria-current'));
          document
            .querySelector(`.nav__link[href="#${entry.target.id}"]`)
            ?.setAttribute('aria-current', 'page');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) spyIO.observe(el);
    });
  }

  /* ═══════════════════════════════════════════════════════════════
     12. GOALS CATALOG PAGE (goals.html)
     ═══════════════════════════════════════════════════════════════ */
  const catalogGrid   = document.getElementById('goalsCatalog');
  const catalogEmpty  = document.getElementById('catalogEmpty');
  const catalogCount  = document.getElementById('catalogCount');
  const catalogSearch = document.getElementById('catalogSearch');
  const catalogReset  = document.getElementById('catalogReset');

  const detailPanel       = document.getElementById('goalDetail');
  const detailHeader      = document.getElementById('goalDetailHeader');
  const detailIcon        = document.getElementById('goalDetailIcon');
  const detailEyebrow     = document.getElementById('goalDetailEyebrow');
  const detailTitle       = document.getElementById('goalDetailTitle');
  const detailDesc        = document.getElementById('goalDetailDesc');
  const detailTargets     = document.getElementById('goalDetailTargets');
  const detailInds        = document.getElementById('goalDetailIndicators');
  const detailDotA        = document.getElementById('goalDetailDotA');
  const detailDotB        = document.getElementById('goalDetailDotB');
  const detailProgress    = document.getElementById('goalDetailProgress');
  const detailProgressBar = document.getElementById('goalDetailProgressBar');
  const detailTrend       = document.getElementById('goalDetailTrend');
  const detailTargetCnt   = document.getElementById('goalDetailTargetCount');
  const detailIndCnt      = document.getElementById('goalDetailIndicatorCount');
  const detailCTA         = document.getElementById('goalDetailCTA');
  const detailClose       = document.getElementById('goalDetailClose');

  const catalogState = { filter: 'all', query: '', selectedId: null };

  function createCatalogTile(goal) {
    const copy = goal.text[state.lang];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'catalog-tile reveal';
    btn.dataset.goalId = goal.id;
    btn.dataset.cat = goal.cat;
    btn.setAttribute('role', 'listitem');
    btn.style.setProperty('--goal-color', goal.color);
    btn.setAttribute('aria-label',
      state.lang === 'id'
        ? `Lihat tujuan ${goal.id}: ${copy.name}`
        : `View goal ${goal.id}: ${copy.name}`
    );

    btn.innerHTML = `
      <div class="catalog-tile__head">
        <img
          class="catalog-tile__icon"
          src="${goalIcon(goal.id)}"
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
        <span class="catalog-tile__cat">${t('cat.' + goal.cat)}</span>
      </div>
      <h3 class="catalog-tile__name">${copy.name}</h3>
      <div class="catalog-tile__progress">
        <div class="catalog-tile__bar">
          <div class="catalog-tile__bar-fill" data-fill="${goal.progress}"></div>
        </div>
        <span class="catalog-tile__pct">${goal.progress}%</span>
      </div>
    `;

    btn.addEventListener('click', () => selectCatalogGoal(goal.id, true));
    return btn;
  }

  function renderCatalog() {
    if (!catalogGrid) return;
    catalogGrid.innerHTML = '';
    GOALS.forEach(g => catalogGrid.appendChild(createCatalogTile(g)));
    catalogGrid.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
    requestAnimationFrame(() => {
      catalogGrid.querySelectorAll('.catalog-tile__bar-fill').forEach(f => {
        f.style.width = f.dataset.fill + '%';
      });
    });
    applyCatalogFilter();
  }

  function applyCatalogFilter() {
    if (!catalogGrid) return;

    const q = catalogState.query.trim().toLowerCase();
    const cat = catalogState.filter;
    let visible = 0;

    catalogGrid.querySelectorAll('.catalog-tile').forEach(tile => {
      const goal = GOALS.find(g => g.id === parseInt(tile.dataset.goalId, 10));
      if (!goal) return;

      const copy = goal.text[state.lang];
      const matchesCat = cat === 'all' || goal.cat === cat;
      const haystack = `${goal.id} ${copy.name} ${copy.desc}`.toLowerCase();
      const matchesQuery = !q || haystack.includes(q);
      const show = matchesCat && matchesQuery;

      tile.hidden = !show;
      if (show) visible++;
    });

    if (catalogCount) catalogCount.textContent = visible;
    if (catalogEmpty) catalogEmpty.hidden = visible > 0;
    if (catalogGrid) catalogGrid.style.display = visible > 0 ? '' : 'none';
  }

  function selectCatalogGoal(goalId, scroll) {
    const goal = GOALS.find(g => g.id === goalId);
    if (!goal || !detailPanel) return;

    const copy = goal.text[state.lang];

    catalogGrid?.querySelectorAll('.catalog-tile').forEach(tile => {
      tile.classList.toggle('is-selected', parseInt(tile.dataset.goalId, 10) === goalId);
    });

    detailHeader.style.setProperty('--goal-color', goal.color);
    detailPanel.style.setProperty('--goal-color', goal.color);
    if (detailIcon) detailIcon.src = goalIcon(goal.id);
    detailEyebrow.textContent =
      state.lang === 'id'
        ? `Tujuan ${goal.id} · ${t('cat.' + goal.cat)}`
        : `Goal ${goal.id} · ${t('cat.' + goal.cat)}`;
    detailTitle.textContent = copy.name;
    detailDesc.textContent  = copy.desc;
    detailDotA.style.background = goal.color;
    detailDotB.style.background = goal.color;

    detailTargets.innerHTML = copy.targets.map(x => {
      const [num, ...rest] = x.split(' ');
      return `<li><strong>${num}</strong><span>${rest.join(' ')}</span></li>`;
    }).join('');

    detailInds.innerHTML = copy.indicators.map(i => `
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M5 12l5 5L20 7"/>
        </svg>
        <span>${i}</span>
      </li>
    `).join('');

    detailProgress.textContent = goal.progress;
    detailProgressBar.style.background = goal.color;
    detailProgressBar.style.width = '0%';
    requestAnimationFrame(() => {
      detailProgressBar.style.width = goal.progress + '%';
    });

    if (goal.trend != null) {
      const up = goal.trend >= 0;
      const arrow = up
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="width:12px;height:12px;color:#56C02B"><path d="M6 15l6-6 6 6"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="width:12px;height:12px;color:#E5243B"><path d="M6 9l6 6 6-6"/></svg>';
      const label = up ? t('catalog.trend.up') : t('catalog.trend.down');
      const sign = up ? '+' : '';
      detailTrend.innerHTML = `${arrow}<strong>${sign}${goal.trend.toFixed(1)}%</strong> ${label}`;
    } else {
      detailTrend.textContent = '';
    }

    detailTargetCnt.textContent = copy.targets.length;
    detailIndCnt.textContent    = copy.indicators.length;
    detailCTA.href = `data.html#goal-${goal.id}`;

    detailPanel.hidden = false;
    catalogState.selectedId = goalId;

    if (scroll) {
      const top = detailPanel.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });
    }

    if (history.replaceState) {
      history.replaceState(null, '', `#goal-${goalId}`);
    }
  }

  function closeCatalogDetail() {
    if (!detailPanel || detailPanel.hidden) return;
    detailPanel.hidden = true;
    catalogState.selectedId = null;
    catalogGrid?.querySelectorAll('.catalog-tile').forEach(t =>
      t.classList.remove('is-selected')
    );
    if (history.replaceState) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  function refreshDetailPanel() {
    if (catalogState.selectedId != null && detailPanel && !detailPanel.hidden) {
      selectCatalogGoal(catalogState.selectedId, false);
    }
  }

  if (catalogGrid) {
    document.querySelectorAll('.catalog-filters .filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.catalog-filters .filter-btn').forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');
        catalogState.filter = btn.dataset.filter;
        applyCatalogFilter();
      });
    });

    catalogSearch?.addEventListener('input', e => {
      catalogState.query = e.target.value;
      applyCatalogFilter();
    });

    catalogReset?.addEventListener('click', () => {
      catalogState.filter = 'all';
      catalogState.query = '';
      if (catalogSearch) catalogSearch.value = '';
      document.querySelectorAll('.catalog-filters .filter-btn').forEach(b => {
        const active = b.dataset.filter === 'all';
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });
      applyCatalogFilter();
    });

    detailClose?.addEventListener('click', closeCatalogDetail);

    /* Handle initial hash (#goal-3) */
    const hash = window.location.hash.match(/^#goal-(\d+)$/);
    if (hash) {
      const id = parseInt(hash[1], 10);
      if (GOALS.some(g => g.id === id)) {
        setTimeout(() => selectCatalogGoal(id, true), 120);
      }
    }
  }

  /* ═══════════════════════════════════════════════════════════════
     13. RESIZE HANDLER
     ═══════════════════════════════════════════════════════════════ */
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && mobileMenu && !mobileMenu.hidden) {
      closeMobileMenu();
    }
  });

  /* ═══════════════════════════════════════════════════════════════
     14. LANGUAGE TOGGLE
     ═══════════════════════════════════════════════════════════════ */
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  /* ═══════════════════════════════════════════════════════════════
     15. INIT
     ═══════════════════════════════════════════════════════════════ */
  function init() {
    applyI18n();
    renderGoalsGrid();  // homepage featured
    renderCatalog();    // goals.html catalog
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();