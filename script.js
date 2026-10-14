/* ═══════════════════════════════════════════════════════════════
   SDGs UNMAS — script.js
   Works on: index.html · about.html · goals.html · data.html · knowledge.html
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
      'meta.title.index': 'SDGs UNMAS — Sustainable Development Goals Center',
      'meta.title.about': 'SDGs UNMAS — About SDGs',
      'meta.title.goals': 'SDGs UNMAS — Goals',
      'meta.title.data': 'SDGs UNMAS — Data & Analytics',
      'meta.title.knowledge': 'SDGs UNMAS — Knowledge Hub',

      /* ── A11y ── */
      'a11y.skip': 'Skip to main content',
      'a11y.backToTop': 'Back to top',

      /* ── Top bar ── */
      'topbar.org': 'SDGs Center — Universitas Mahasaraswati Denpasar',
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
      'header.searchAria': 'Search SDGs UNMAS',
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

      /* ── Data section (homepage) ── */
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

      /* ── Knowledge hub (homepage section) ── */
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

      /* ── News & events (homepage section) ── */
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
      'footer.desc': 'SDGs Center — Universitas Mahasaraswati (UNMAS) Denpasar.',
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
      'footer.address': 'Jl. Kamboja No. 11A,<br/>Denpasar, Bali 80233',
      'footer.copyright': '© 2026 SDGs Center UNMAS — Universitas Mahasaraswati Denpasar. All rights reserved.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms & Conditions',
      'footer.sitemap': 'Sitemap',

      /* ── Modal (homepage goals) ── */
      'modal.close': 'Close detail',
      'modal.targets': 'Key Targets',
      'modal.indicators': 'Key Indicators',
      'modal.cta': 'View full SDG page',

      /* ── Breadcrumb ── */
      'breadcrumb.home': 'Home',
      'breadcrumb.about': 'About SDGs',
      'breadcrumb.goals': 'Goals',
      'breadcrumb.data': 'Data & Analytics',
      'breadcrumb.knowledge': 'Knowledge Hub',

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
      'catalog.hero.lead': "Browse every goal, explore its targets and indicators, and follow national progress toward the 2030 Agenda. Click any goal below to open the detail panel.",
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

      /* ── Data page ── */
      'dataPage.hero.eyebrow': 'Evidence for Action',
      'dataPage.hero.title1': "Indonesia's",
      'dataPage.hero.title2': 'SDGs Data',
      'dataPage.hero.title3': 'Dashboard',
      'dataPage.hero.lead': 'Explore indicator trends, compare provinces, and track national progress against targets across all 17 Sustainable Development Goals.',
      'dataPage.hero.stat1': 'Indicators',
      'dataPage.hero.stat2': 'With data',
      'dataPage.hero.stat3': 'Provinces',
      'dataPage.hero.stat4': 'Years of data',
      'dataPage.header.browseGoals': 'Browse Goals',
      'dataPage.filter.goal': 'Goal',
      'dataPage.filter.allGoals': 'All Goals',
      'dataPage.filter.region': 'Region',
      'dataPage.filter.national': 'National (Indonesia)',
      'dataPage.filter.year': 'Year',
      'dataPage.filter.reset': 'Reset',
      'dataPage.filter.export': 'Export',
      'dataPage.filter.hint': 'Filters apply across every chart and table on this page.',
      'dataPage.region.aceh': 'Aceh',
      'dataPage.region.northSumatra': 'North Sumatra',
      'dataPage.region.jakarta': 'DKI Jakarta',
      'dataPage.region.westJava': 'West Java',
      'dataPage.region.centralJava': 'Central Java',
      'dataPage.region.yogyakarta': 'DI Yogyakarta',
      'dataPage.region.eastJava': 'East Java',
      'dataPage.region.bali': 'Bali',
      'dataPage.region.southSulawesi': 'South Sulawesi',
      'dataPage.region.maluku': 'Maluku',
      'dataPage.region.papua': 'Papua',
      'dataPage.trend.eyebrow': 'Time Series',
      'dataPage.trend.title': 'Indicator Trends Over Time',
      'dataPage.trend.lead': 'Compare progress across years for the selected indicator. Dashed lines represent target trajectories.',
      'dataPage.trend.tab1': 'Primary',
      'dataPage.trend.tab2': 'Compare',
      'dataPage.trend.legendActual': 'Actual',
      'dataPage.trend.legendTarget': 'Target',
      'dataPage.deepdive.eyebrow': 'Goal Deep-Dive',
      'dataPage.deepdive.title': 'Progress by Goal',
      'dataPage.deepdive.lead': 'Select a goal below to see its indicator-level breakdown, or click any goal from the Goals page to jump straight here.',
      'dataPage.province.eyebrow': 'Sub-National',
      'dataPage.province.title': 'Provincial Comparison',
      'dataPage.province.lead': 'Top and bottom provinces for the selected indicator, based on the latest available data.',
      'dataPage.province.top': 'Highest performing',
      'dataPage.province.bottom': 'Needs attention',
      'dataPage.avail.eyebrow': 'Coverage',
      'dataPage.avail.title': 'Data Availability Matrix',
      'dataPage.avail.lead': 'Which goals have reported data, across all 38 provinces. Darker cells mean higher coverage.',
      'dataPage.avail.low': 'Low',
      'dataPage.avail.high': 'High',
      'dataPage.reports.eyebrow': 'Publications',
      'dataPage.reports.title': 'Annual Reports & Publications',
      'dataPage.reports.lead': 'Official SDG reports from the Government of Indonesia — Voluntary National Reviews, annual progress reports, and technical guidelines.',
      'dataPage.reports.all': 'View all publications',
      'dataPage.reports.vnr': 'Voluntary National Review',
      'dataPage.reports.vnrTitle': 'VNR Indonesia 2024',
      'dataPage.reports.annual': 'Annual Progress',
      'dataPage.reports.annualTitle': 'SDGs Capaian 2023',
      'dataPage.reports.guideline': 'Metadata Guideline',
      'dataPage.reports.guidelineTitle': 'Metadata Indikator SDGs Edisi II',
      'dataPage.reports.pdf': 'PDF',
      'dataPage.download.eyebrow': 'Open Data',
      'dataPage.download.title': 'Access the raw data',
      'dataPage.download.lead': 'Download the full indicator dataset or use our API to integrate SDGs data into your own applications and research.',
      'dataPage.download.csv': 'Download CSV',
      'dataPage.download.xlsx': 'Download XLSX',
      'dataPage.download.api': 'API Docs',

      /* ── Knowledge page ── */
      'knowledge.hero.eyebrow': 'Library & Resources',
      'knowledge.hero.title1': 'The SDGs',
      'knowledge.hero.title2': 'Knowledge Hub',
      'knowledge.hero.lead': 'Official publications, legal frameworks, awards, and replicable best practices — a curated reference library for researchers, policymakers, and practitioners.',
      'knowledge.hero.stat1': 'Documents',
      'knowledge.hero.stat2': 'Categories',
      'knowledge.hero.stat3': 'Years archived',
      'knowledge.hero.stat4': 'Latest update',
      'knowledge.search.placeholder': 'Search by title, year, or publisher…',
      'knowledge.filter.all': 'All',
      'knowledge.filter.publication': 'Publications',
      'knowledge.filter.regulation': 'Regulations',
      'knowledge.filter.award': 'Awards',
      'knowledge.filter.bestPractice': 'Best Practices',
      'knowledge.count.of': 'of',
      'knowledge.count.items': 'items',
      'knowledge.type.publication': 'Publication',
      'knowledge.type.regulation': 'Regulation',
      'knowledge.type.award': 'Award',
      'knowledge.type.bestPractice': 'Best Practice',
      'knowledge.empty.title': 'No items match your search',
      'knowledge.empty.desc': 'Try a different keyword or reset the filters.',
      'knowledge.empty.reset': 'Reset filters',
      'knowledge.modal.close': 'Close',
      'knowledge.modal.download': 'Download',
      'knowledge.modal.year': 'Year',
      'knowledge.modal.publisher': 'Publisher',
      'knowledge.modal.format': 'Format',
      'knowledge.modal.size': 'Size',
      'knowledge.modal.pages': 'pages',
      'knowledge.cta.badge': 'Contribute',
      'knowledge.cta.title': 'Have a best practice to share?',
      'knowledge.cta.sub': 'Submit your SDG initiative — from community projects to institutional programs — and help build a shared repository of solutions.',
      'knowledge.cta.button': 'Submit a practice',

            'meta.title.news': 'News & Events — SDGs UNMAS',
      'breadcrumb.news': 'News & Events',
      'newsPage.hero.eyebrow': 'Latest Updates',
      'newsPage.hero.title1': 'News,',
      'newsPage.hero.title2': 'Events',
      'newsPage.hero.title3': '& Announcements',
      'newsPage.hero.lead': 'Follow the latest developments, upcoming activities, and discussion forums around the Sustainable Development Goals at UNMAS and across Indonesia.',
      'newsPage.hero.stat1': 'Articles',
      'newsPage.hero.stat2': 'Events',
      'newsPage.hero.stat3': 'Announcements',
      'newsPage.hero.stat4': 'Latest year',
      'newsPage.search.placeholder': 'Search by title, date, or keyword…',
      'newsPage.filter.all': 'All',
      'newsPage.filter.article': 'Articles',
      'newsPage.filter.event': 'Events',
      'newsPage.filter.announcement': 'Announcements',
      'newsPage.count.of': 'of',
      'newsPage.count.items': 'items',
      'newsPage.type.article': 'Article',
      'newsPage.type.event': 'Event',
      'newsPage.type.announcement': 'Announcement',
      'newsPage.empty.title': 'No items match your search',
      'newsPage.empty.desc': 'Try a different keyword or reset the filters.',
      'newsPage.empty.reset': 'Reset filters',
      'newsPage.modal.close': 'Close',
      'newsPage.modal.readMore': 'Read full',
      'newsPage.modal.date': 'Date',
      'newsPage.modal.time': 'Time',
      'newsPage.modal.venue': 'Venue',
      'newsPage.modal.author': 'Author',
      'newsPage.modal.sdg': 'Related SDG',
      'newsPage.cta.badge': 'Stay in the loop',
      'newsPage.cta.title': 'Never miss an update',
      'newsPage.cta.sub': 'Subscribe to our monthly bulletin for data summaries, event invitations, and the latest SDGs news from Bali and beyond.',
      'newsPage.cta.button': 'Subscribe',

            'meta.title.community': 'Community — SDGs UNMAS',
      'breadcrumb.community': 'Community',
      'communityPage.hero.eyebrow': 'Network & Community',
      'communityPage.hero.title1': 'The SDGs',
      'communityPage.hero.title2': 'Community',
      'communityPage.hero.title3': 'Network',
      'communityPage.hero.lead': 'A cross-sector network of university SDGs Centers, expert teams, partner organizations, and recurring community activities — all working toward the 2030 Agenda.',
      'communityPage.hero.stat1': 'SDGs Centers',
      'communityPage.hero.stat2': 'Experts',
      'communityPage.hero.stat3': 'Partners',
      'communityPage.hero.stat4': 'Recurring activities',
      'communityPage.search.placeholder': 'Search by name, expertise, or region…',
      'communityPage.filter.all': 'All',
      'communityPage.filter.center': 'Centers',
      'communityPage.filter.expert': 'Experts',
      'communityPage.filter.partner': 'Partners',
      'communityPage.filter.agenda': 'Agenda',
      'communityPage.count.of': 'of',
      'communityPage.count.items': 'items',
      'communityPage.type.center': 'SDGs Center',
      'communityPage.type.expert': 'Expert',
      'communityPage.type.partner': 'Partner',
      'communityPage.type.agenda': 'Agenda',
      'communityPage.empty.title': 'No items match your search',
      'communityPage.empty.desc': 'Try a different keyword or reset the filters.',
      'communityPage.empty.reset': 'Reset filters',
      'communityPage.modal.close': 'Close',
      'communityPage.modal.contact': 'Contact',
      'communityPage.modal.region': 'Region',
      'communityPage.modal.coordinator': 'Coordinator',
      'communityPage.modal.founded': 'Founded',
      'communityPage.modal.expertise': 'Expertise',
      'communityPage.modal.email': 'Email',
      'communityPage.modal.members': 'Members',
      'communityPage.modal.since': 'Active since',
      'communityPage.modal.schedule': 'Schedule',
      'communityPage.modal.location': 'Location',
      'communityPage.cta.badge': 'Join the network',
      'communityPage.cta.title': 'Become a partner',
      'communityPage.cta.sub': "Whether you're a university, civil society organization, private sector, or individual expert — there's a place for you in the SDGs network.",
      'communityPage.cta.button': 'Get in touch',
    },

    id: {
      /* ── Meta ── */
      'meta.title.index': 'SDGs UNMAS — Pusat Tujuan Pembangunan Berkelanjutan',
      'meta.title.about': 'SDGs UNMAS — Tentang SDGs',
      'meta.title.goals': 'SDGs UNMAS — Tujuan',
      'meta.title.data': 'SDGs UNMAS — Data & Analitik',
      'meta.title.knowledge': 'SDGs UNMAS — Knowledge Hub',

      /* ── A11y ── */
      'a11y.skip': 'Lompat ke konten utama',
      'a11y.backToTop': 'Kembali ke atas',

      /* ── Top bar ── */
      'topbar.org': 'SDGs Center — Universitas Mahasaraswati Denpasar',
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
      'header.searchAria': 'Cari di SDGs UNMAS',
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

      /* ── Data section (homepage) ── */
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

      /* ── Knowledge hub (homepage section) ── */
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

      /* ── News & events (homepage section) ── */
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
      'footer.desc': 'SDGs Center — Universitas Mahasaraswati (UNMAS) Denpasar.',
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
      'footer.address': 'Jl. Kamboja No. 11A,<br/>Denpasar, Bali 80233',
      'footer.copyright': '© 2026 SDGs Center UNMAS — Universitas Mahasaraswati Denpasar. Hak cipta dilindungi.',
      'footer.privacy': 'Kebijakan Privasi',
      'footer.terms': 'Syarat & Ketentuan',
      'footer.sitemap': 'Peta Situs',

      /* ── Modal (homepage goals) ── */
      'modal.close': 'Tutup detail',
      'modal.targets': 'Target Utama',
      'modal.indicators': 'Indikator Kunci',
      'modal.cta': 'Lihat halaman lengkap SDG',

      /* ── Breadcrumb ── */
      'breadcrumb.home': 'Beranda',
      'breadcrumb.about': 'Tentang SDGs',
      'breadcrumb.goals': 'Tujuan',
      'breadcrumb.data': 'Data & Analitik',
      'breadcrumb.knowledge': 'Knowledge Hub',

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

      /* ── Goals catalog page ── */
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

      /* ── Data page ── */
      'dataPage.hero.eyebrow': 'Bukti untuk Aksi',
      'dataPage.hero.title1': 'Dasbor Data',
      'dataPage.hero.title2': 'SDGs',
      'dataPage.hero.title3': 'Indonesia',
      'dataPage.hero.lead': 'Jelajahi tren indikator, bandingkan provinsi, dan pantau kemajuan nasional terhadap target di seluruh 17 Tujuan Pembangunan Berkelanjutan.',
      'dataPage.hero.stat1': 'Indikator',
      'dataPage.hero.stat2': 'Tersedia data',
      'dataPage.hero.stat3': 'Provinsi',
      'dataPage.hero.stat4': 'Tahun data',
      'dataPage.header.browseGoals': 'Jelajahi Tujuan',
      'dataPage.filter.goal': 'Tujuan',
      'dataPage.filter.allGoals': 'Semua Tujuan',
      'dataPage.filter.region': 'Wilayah',
      'dataPage.filter.national': 'Nasional (Indonesia)',
      'dataPage.filter.year': 'Tahun',
      'dataPage.filter.reset': 'Reset',
      'dataPage.filter.export': 'Ekspor',
      'dataPage.filter.hint': 'Filter berlaku untuk seluruh grafik dan tabel di halaman ini.',
      'dataPage.region.aceh': 'Aceh',
      'dataPage.region.northSumatra': 'Sumatera Utara',
      'dataPage.region.jakarta': 'DKI Jakarta',
      'dataPage.region.westJava': 'Jawa Barat',
      'dataPage.region.centralJava': 'Jawa Tengah',
      'dataPage.region.yogyakarta': 'DI Yogyakarta',
      'dataPage.region.eastJava': 'Jawa Timur',
      'dataPage.region.bali': 'Bali',
      'dataPage.region.southSulawesi': 'Sulawesi Selatan',
      'dataPage.region.maluku': 'Maluku',
      'dataPage.region.papua': 'Papua',
      'dataPage.trend.eyebrow': 'Rangkaian Waktu',
      'dataPage.trend.title': 'Tren Indikator dari Waktu ke Waktu',
      'dataPage.trend.lead': 'Bandingkan kemajuan antar tahun untuk indikator yang dipilih. Garis putus-putus menunjukkan lintasan target.',
      'dataPage.trend.tab1': 'Utama',
      'dataPage.trend.tab2': 'Bandingkan',
      'dataPage.trend.legendActual': 'Aktual',
      'dataPage.trend.legendTarget': 'Target',
      'dataPage.deepdive.eyebrow': 'Analisis Tujuan',
      'dataPage.deepdive.title': 'Kemajuan per Tujuan',
      'dataPage.deepdive.lead': 'Pilih tujuan di bawah untuk melihat rincian tingkat indikatornya, atau klik tujuan mana pun dari halaman Tujuan untuk langsung ke sini.',
      'dataPage.province.eyebrow': 'Sub-Nasional',
      'dataPage.province.title': 'Perbandingan Provinsi',
      'dataPage.province.lead': 'Provinsi dengan kinerja tertinggi dan terendah untuk indikator yang dipilih, berdasarkan data terbaru.',
      'dataPage.province.top': 'Kinerja tertinggi',
      'dataPage.province.bottom': 'Perlu perhatian',
      'dataPage.avail.eyebrow': 'Cakupan',
      'dataPage.avail.title': 'Matriks Ketersediaan Data',
      'dataPage.avail.lead': 'Tujuan mana yang sudah melaporkan data, di seluruh 38 provinsi. Warna lebih gelap berarti cakupan lebih tinggi.',
      'dataPage.avail.low': 'Rendah',
      'dataPage.avail.high': 'Tinggi',
      'dataPage.reports.eyebrow': 'Publikasi',
      'dataPage.reports.title': 'Laporan Tahunan & Publikasi',
      'dataPage.reports.lead': 'Laporan SDGs resmi dari Pemerintah Indonesia — Voluntary National Review, laporan kemajuan tahunan, dan pedoman teknis.',
      'dataPage.reports.all': 'Lihat semua publikasi',
      'dataPage.reports.vnr': 'Voluntary National Review',
      'dataPage.reports.vnrTitle': 'VNR Indonesia 2024',
      'dataPage.reports.annual': 'Kemajuan Tahunan',
      'dataPage.reports.annualTitle': 'SDGs Capaian 2023',
      'dataPage.reports.guideline': 'Pedoman Metadata',
      'dataPage.reports.guidelineTitle': 'Metadata Indikator SDGs Edisi II',
      'dataPage.reports.pdf': 'PDF',
      'dataPage.download.eyebrow': 'Data Terbuka',
      'dataPage.download.title': 'Akses data mentah',
      'dataPage.download.lead': 'Unduh kumpulan data indikator lengkap atau gunakan API kami untuk mengintegrasikan data SDGs ke dalam aplikasi dan riset Anda.',
      'dataPage.download.csv': 'Unduh CSV',
      'dataPage.download.xlsx': 'Unduh XLSX',
      'dataPage.download.api': 'Dokumentasi API',

      /* ── Knowledge page ── */
      'knowledge.hero.eyebrow': 'Perpustakaan & Sumber Daya',
      'knowledge.hero.title1': 'Knowledge Hub',
      'knowledge.hero.title2': 'SDGs UNMAS',
      'knowledge.hero.lead': 'Publikasi resmi, kerangka hukum, penghargaan, dan praktik baik yang dapat direplikasi — perpustakaan referensi terkurasi untuk peneliti, pembuat kebijakan, dan praktisi.',
      'knowledge.hero.stat1': 'Dokumen',
      'knowledge.hero.stat2': 'Kategori',
      'knowledge.hero.stat3': 'Tahun terarsip',
      'knowledge.hero.stat4': 'Update terbaru',
      'knowledge.search.placeholder': 'Cari berdasarkan judul, tahun, atau penerbit…',
      'knowledge.filter.all': 'Semua',
      'knowledge.filter.publication': 'Publikasi',
      'knowledge.filter.regulation': 'Regulasi',
      'knowledge.filter.award': 'Penghargaan',
      'knowledge.filter.bestPractice': 'Praktik Baik',
      'knowledge.count.of': 'dari',
      'knowledge.count.items': 'item',
      'knowledge.type.publication': 'Publikasi',
      'knowledge.type.regulation': 'Regulasi',
      'knowledge.type.award': 'Penghargaan',
      'knowledge.type.bestPractice': 'Praktik Baik',
      'knowledge.empty.title': 'Tidak ada item yang cocok',
      'knowledge.empty.desc': 'Coba kata kunci lain atau reset filter.',
      'knowledge.empty.reset': 'Reset filter',
      'knowledge.modal.close': 'Tutup',
      'knowledge.modal.download': 'Unduh',
      'knowledge.modal.year': 'Tahun',
      'knowledge.modal.publisher': 'Penerbit',
      'knowledge.modal.format': 'Format',
      'knowledge.modal.size': 'Ukuran',
      'knowledge.modal.pages': 'halaman',
      'knowledge.cta.badge': 'Kontribusi',
      'knowledge.cta.title': 'Punya praktik baik untuk dibagikan?',
      'knowledge.cta.sub': 'Kirim inisiatif SDGs Anda — dari proyek komunitas hingga program institusi — dan bantu membangun repositori solusi bersama.',
      'knowledge.cta.button': 'Kirim praktik baik',

            'meta.title.news': 'Berita & Agenda — SDGs UNMAS',
      'breadcrumb.news': 'Berita & Agenda',
      'newsPage.hero.eyebrow': 'Kabar Terkini',
      'newsPage.hero.title1': 'Berita,',
      'newsPage.hero.title2': 'Agenda',
      'newsPage.hero.title3': '& Pengumuman',
      'newsPage.hero.lead': 'Ikuti perkembangan terbaru, kegiatan mendatang, dan forum diskusi seputar Tujuan Pembangunan Berkelanjutan di UNMAS dan seluruh Indonesia.',
      'newsPage.hero.stat1': 'Artikel',
      'newsPage.hero.stat2': 'Agenda',
      'newsPage.hero.stat3': 'Pengumuman',
      'newsPage.hero.stat4': 'Tahun terbaru',
      'newsPage.search.placeholder': 'Cari berdasarkan judul, tanggal, atau kata kunci…',
      'newsPage.filter.all': 'Semua',
      'newsPage.filter.article': 'Artikel',
      'newsPage.filter.event': 'Agenda',
      'newsPage.filter.announcement': 'Pengumuman',
      'newsPage.count.of': 'dari',
      'newsPage.count.items': 'item',
      'newsPage.type.article': 'Artikel',
      'newsPage.type.event': 'Agenda',
      'newsPage.type.announcement': 'Pengumuman',
      'newsPage.empty.title': 'Tidak ada item yang cocok',
      'newsPage.empty.desc': 'Coba kata kunci lain atau reset filter.',
      'newsPage.empty.reset': 'Reset filter',
      'newsPage.modal.close': 'Tutup',
      'newsPage.modal.readMore': 'Baca lengkap',
      'newsPage.modal.date': 'Tanggal',
      'newsPage.modal.time': 'Waktu',
      'newsPage.modal.venue': 'Tempat',
      'newsPage.modal.author': 'Penulis',
      'newsPage.modal.sdg': 'SDG Terkait',
      'newsPage.cta.badge': 'Tetap terhubung',
      'newsPage.cta.title': 'Jangan lewatkan update',
      'newsPage.cta.sub': 'Berlangganan buletin bulanan kami untuk rangkuman data, undangan acara, dan berita SDGs terbaru dari Bali dan sekitarnya.',
      'newsPage.cta.button': 'Berlangganan',

            'meta.title.community': 'Komunitas — SDGs UNMAS',
      'breadcrumb.community': 'Komunitas',
      'communityPage.hero.eyebrow': 'Jejaring & Komunitas',
      'communityPage.hero.title1': 'Jejaring',
      'communityPage.hero.title2': 'Komunitas',
      'communityPage.hero.title3': 'SDGs',
      'communityPage.hero.lead': 'Jejaring lintas sektor yang terdiri dari SDGs Center universitas, tim ahli, organisasi mitra, dan kegiatan komunitas rutin — semua bergerak menuju Agenda 2030.',
      'communityPage.hero.stat1': 'SDGs Center',
      'communityPage.hero.stat2': 'Pakar',
      'communityPage.hero.stat3': 'Mitra',
      'communityPage.hero.stat4': 'Kegiatan rutin',
      'communityPage.search.placeholder': 'Cari berdasarkan nama, keahlian, atau wilayah…',
      'communityPage.filter.all': 'Semua',
      'communityPage.filter.center': 'SDGs Center',
      'communityPage.filter.expert': 'Pakar',
      'communityPage.filter.partner': 'Mitra',
      'communityPage.filter.agenda': 'Agenda',
      'communityPage.count.of': 'dari',
      'communityPage.count.items': 'item',
      'communityPage.type.center': 'SDGs Center',
      'communityPage.type.expert': 'Pakar',
      'communityPage.type.partner': 'Mitra',
      'communityPage.type.agenda': 'Agenda',
      'communityPage.empty.title': 'Tidak ada item yang cocok',
      'communityPage.empty.desc': 'Coba kata kunci lain atau reset filter.',
      'communityPage.empty.reset': 'Reset filter',
      'communityPage.modal.close': 'Tutup',
      'communityPage.modal.contact': 'Kontak',
      'communityPage.modal.region': 'Wilayah',
      'communityPage.modal.coordinator': 'Koordinator',
      'communityPage.modal.founded': 'Didirikan',
      'communityPage.modal.expertise': 'Keahlian',
      'communityPage.modal.email': 'Email',
      'communityPage.modal.members': 'Anggota',
      'communityPage.modal.since': 'Aktif sejak',
      'communityPage.modal.schedule': 'Jadwal',
      'communityPage.modal.location': 'Lokasi',
      'communityPage.cta.badge': 'Bergabung dengan jejaring',
      'communityPage.cta.title': 'Menjadi mitra',
      'communityPage.cta.sub': 'Baik Anda universitas, organisasi masyarakat sipil, sektor swasta, atau pakar individu — ada tempat untuk Anda di jejaring SDGs.',
      'communityPage.cta.button': 'Hubungi kami',
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
    if (path.endsWith('about.html'))     return 'about';
    if (path.endsWith('goals.html'))     return 'goals';
    if (path.endsWith('data.html'))      return 'data';
    if (path.endsWith('knowledge.html')) return 'knowledge';
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
    renderGoalsGrid();
    renderCatalog();
    refreshDetailPanel();
    refreshOpenModal();
    window.__sdgsUpdateDataPage?.();
    window.__sdgsRenderKnowledge?.();
    window.__sdgsRenderNews?.();
    window.__sdgsRenderCommunity?.();
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
        <img class="goal-feature__icon" src="${goalIcon(goal.id)}" alt="" aria-hidden="true" loading="lazy" />
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
  const searchOverlay = document.getElementById('searchOverlay');
  const openSearchBtn = document.getElementById('openSearch');
  const searchInput   = document.getElementById('searchInput');

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
        <img class="catalog-tile__icon" src="${goalIcon(goal.id)}" alt="" aria-hidden="true" loading="lazy" />
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
     15. DATA & ANALYTICS PAGE (data.html)
     ═══════════════════════════════════════════════════════════════ */
  const YEARS = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

  const INDICATOR_SERIES = {
    1:  { name: { en: 'Poverty Rate',        id: 'Tingkat Kemiskinan' },   unit: '%',  values: [11.2, 10.9, 10.6, 9.8, 9.2, 10.2, 9.7, 9.5, 9.4, 8.57], target: 6.5,  higherIsBetter: false, color: '#E5243B' },
    2:  { name: { en: 'Stunting Prevalence', id: 'Prevalensi Stunting' },  unit: '%',  values: [36.4, 35.6, 33.8, 30.8, 27.7, 26.9, 24.4, 21.6, 21.5, 19.8], target: 14.0, higherIsBetter: false, color: '#DDA63A' },
    3:  { name: { en: 'Life Expectancy',     id: 'Angka Harapan Hidup' },  unit: 'yr', values: [69.2, 69.5, 69.7, 70.0, 70.4, 70.2, 71.0, 71.3, 71.5, 71.8], target: 75.0, higherIsBetter: true,  color: '#4C9F38' },
    4:  { name: { en: 'Literacy Rate',       id: 'Angka Melek Huruf' },    unit: '%',  values: [94.1, 94.4, 94.7, 95.2, 95.4, 95.6, 96.0, 96.2, 96.3, 96.5], target: 99.0, higherIsBetter: true,  color: '#C5192D' },
    5:  { name: { en: 'Gender Inequality Index', id: 'Indeks Ketimpangan Gender' }, unit: 'idx', values: [0.49, 0.48, 0.47, 0.45, 0.44, 0.43, 0.42, 0.41, 0.40, 0.39], target: 0.25, higherIsBetter: false, color: '#FF3A21' },
    6:  { name: { en: 'Safe Water Access',   id: 'Akses Air Minum Aman' }, unit: '%',  values: [82.1, 83.5, 84.8, 86.2, 87.5, 88.9, 90.1, 91.0, 92.3, 93.4], target: 100,  higherIsBetter: true,  color: '#26BDE2' },
    7:  { name: { en: 'Renewable Energy Mix', id: 'Bauran Energi Terbarukan' }, unit: '%', values: [7.1, 8.2, 9.5, 10.4, 11.2, 11.5, 12.2, 12.8, 13.1, 13.5], target: 23.0, higherIsBetter: true,  color: '#FCC30B' },
    8:  { name: { en: 'GDP Growth',          id: 'Pertumbuhan PDB' },      unit: '%',  values: [4.88, 5.03, 5.07, 5.17, 5.02, -2.07, 3.69, 5.31, 5.05, 5.03], target: 5.5,  higherIsBetter: true,  color: '#A21942' },
    9:  { name: { en: 'Manufacturing Share of GDP', id: 'Kontribusi Manufaktur PDB' }, unit: '%', values: [20.8, 20.5, 20.2, 19.9, 19.7, 19.9, 19.8, 18.6, 18.4, 18.5], target: 22.0, higherIsBetter: true,  color: '#FD6925' },
    10: { name: { en: 'Gini Ratio',          id: 'Rasio Gini' },           unit: 'idx', values: [0.402, 0.397, 0.393, 0.389, 0.380, 0.385, 0.381, 0.379, 0.375, 0.372], target: 0.340, higherIsBetter: false, color: '#DD1367' },
    11: { name: { en: 'Public Transport Access', id: 'Akses Transportasi Publik' }, unit: '%', values: [52.0, 54.5, 57.2, 60.1, 63.4, 66.2, 68.9, 71.5, 73.8, 76.0], target: 90.0, higherIsBetter: true,  color: '#FD9D24' },
    12: { name: { en: 'Waste Recycling Rate', id: 'Tingkat Daur Ulang Sampah' }, unit: '%', values: [15.2, 16.8, 18.4, 20.1, 22.0, 24.3, 26.4, 28.7, 30.5, 32.8], target: 50.0, higherIsBetter: true,  color: '#BF8B2E' },
    13: { name: { en: 'GHG Emissions Index',  id: 'Indeks Emisi GRK' },    unit: 'idx', values: [100, 103, 107, 112, 116, 118, 121, 123, 124, 125], target: 85,  higherIsBetter: false, color: '#3F7E44' },
    14: { name: { en: 'Marine Protected Areas', id: 'Kawasan Konservasi Laut' }, unit: '%', values: [8.1, 9.2, 10.4, 11.8, 13.1, 14.6, 16.2, 17.5, 18.8, 20.1], target: 30.0, higherIsBetter: true,  color: '#0A97D9' },
    15: { name: { en: 'Forest Cover Area',    id: 'Luas Tutupan Hutan' },  unit: '%',  values: [50.2, 50.1, 50.0, 49.9, 49.8, 49.8, 49.7, 49.7, 49.6, 49.5], target: 52.0, higherIsBetter: true,  color: '#56C02B' },
    16: { name: { en: 'Corruption Perception Index', id: 'Indeks Persepsi Korupsi' }, unit: 'idx', values: [36, 37, 37, 38, 40, 37, 38, 34, 34, 34], target: 50, higherIsBetter: true, color: '#00689D' },
    17: { name: { en: 'Internet Access',      id: 'Akses Internet' },      unit: '%',  values: [42.0, 47.5, 53.2, 58.6, 63.5, 68.4, 72.1, 75.5, 78.2, 80.5], target: 95.0, higherIsBetter: true,  color: '#19486A' },
  };

  const REGIONS = {
    national: { en: 'National', id: 'Nasional' },
    11: { en: 'Aceh', id: 'Aceh' },
    12: { en: 'North Sumatra', id: 'Sumatera Utara' },
    31: { en: 'DKI Jakarta', id: 'DKI Jakarta' },
    32: { en: 'West Java', id: 'Jawa Barat' },
    33: { en: 'Central Java', id: 'Jawa Tengah' },
    34: { en: 'DI Yogyakarta', id: 'DI Yogyakarta' },
    35: { en: 'East Java', id: 'Jawa Timur' },
    51: { en: 'Bali', id: 'Bali' },
    73: { en: 'South Sulawesi', id: 'Sulawesi Selatan' },
    81: { en: 'Maluku', id: 'Maluku' },
    91: { en: 'Papua', id: 'Papua' },
  };

  const PROVINCE_DATA = {
    1:  { top: [{ name: { en: 'Bali', id: 'Bali' }, value: 4.2 }, { name: { en: 'DI Yogyakarta', id: 'DI Yogyakarta' }, value: 10.8 }, { name: { en: 'DKI Jakarta', id: 'DKI Jakarta' }, value: 11.0 }],
          bottom: [{ name: { en: 'Papua', id: 'Papua' }, value: 26.8 }, { name: { en: 'Maluku', id: 'Maluku' }, value: 20.1 }, { name: { en: 'East Nusa Tenggara', id: 'Nusa Tenggara Timur' }, value: 19.9 }] },
    4:  { top: [{ name: { en: 'DI Yogyakarta', id: 'DI Yogyakarta' }, value: 98.9 }, { name: { en: 'DKI Jakarta', id: 'DKI Jakarta' }, value: 98.5 }, { name: { en: 'Bali', id: 'Bali' }, value: 98.0 }],
          bottom: [{ name: { en: 'Papua', id: 'Papua' }, value: 78.4 }, { name: { en: 'West Papua', id: 'Papua Barat' }, value: 82.1 }, { name: { en: 'Maluku', id: 'Maluku' }, value: 84.6 }] },
    8:  { top: [{ name: { en: 'DKI Jakarta', id: 'DKI Jakarta' }, value: 5.8 }, { name: { en: 'Central Sulawesi', id: 'Sulawesi Tengah' }, value: 5.6 }, { name: { en: 'North Maluku', id: 'Maluku Utara' }, value: 5.4 }],
          bottom: [{ name: { en: 'Papua', id: 'Papua' }, value: 3.1 }, { name: { en: 'Aceh', id: 'Aceh' }, value: 3.4 }, { name: { en: 'West Papua', id: 'Papua Barat' }, value: 3.6 }] },
    13: { top: [{ name: { en: 'Bali', id: 'Bali' }, value: 78 }, { name: { en: 'DI Yogyakarta', id: 'DI Yogyakarta' }, value: 72 }, { name: { en: 'West Java', id: 'Jawa Barat' }, value: 68 }],
          bottom: [{ name: { en: 'Papua', id: 'Papua' }, value: 41 }, { name: { en: 'East Kalimantan', id: 'Kalimantan Timur' }, value: 44 }, { name: { en: 'South Sumatra', id: 'Sumatera Selatan' }, value: 48 }] },
  };

  const DEFAULT_PROVINCE_DATA = {
    top: [{ name: { en: 'DKI Jakarta', id: 'DKI Jakarta' }, value: 92 }, { name: { en: 'DI Yogyakarta', id: 'DI Yogyakarta' }, value: 88 }, { name: { en: 'Bali', id: 'Bali' }, value: 85 }],
    bottom: [{ name: { en: 'Papua', id: 'Papua' }, value: 42 }, { name: { en: 'West Papua', id: 'Papua Barat' }, value: 46 }, { name: { en: 'Maluku', id: 'Maluku' }, value: 51 }],
  };

  const dataState = {
    goal: 'all',
    region: 'national',
    year: 2024,
    series: 'primary',
  };

  const $ = id => document.getElementById(id);

  function populateGoalFilter() {
    const select = $('filterGoal');
    if (!select) return;
    [...select.options].forEach((opt, i) => { if (i > 0) opt.remove(); });
    GOALS.forEach(g => {
      const opt = document.createElement('option');
      opt.value = String(g.id);
      opt.textContent = `${g.id} · ${g.text[state.lang].name}`;
      select.appendChild(opt);
    });
  }

  function createKpiCard(goal, series) {
    const indicatorName = series.name[state.lang];
    const latest = series.values[series.values.length - 1];
    const prev = series.values[series.values.length - 2];
    const delta = latest - prev;
    const up = delta >= 0;
    const isGood = series.higherIsBetter ? up : !up;

    const min = Math.min(...series.values);
    const max = Math.max(...series.values);
    const range = max - min || 1;
    const w = 200, h = 36;
    const pts = series.values.map((v, i) => {
      const x = (i / (series.values.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');

    const card = document.createElement('article');
    card.className = 'kpi-rich reveal';
    card.style.setProperty('--kpi-color', series.color);
    card.innerHTML = `
      <div class="kpi-rich__head">
        <p class="kpi-rich__label">${indicatorName}</p>
        <span class="kpi-rich__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>
        </span>
      </div>
      <div class="kpi-rich__value-row">
        <span class="kpi-rich__value">${latest.toFixed(latest < 10 ? 2 : 1)}</span>
        <span class="kpi-rich__unit">${series.unit}</span>
      </div>
      <svg class="kpi-rich__sparkline" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true">
        <polyline points="${pts}" fill="none" stroke="${series.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="kpi-rich__foot">
        <span class="kpi-rich__trend ${isGood ? 'kpi-rich__trend--up' : 'kpi-rich__trend--down'}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            ${up ? '<path d="M6 15l6-6 6 6"/>' : '<path d="M6 9l6 6 6-6"/>'}
          </svg>
          ${up ? '+' : ''}${delta.toFixed(2)}
        </span>
        <span class="kpi-rich__target">Target ${series.target}${series.unit === '%' ? '%' : ''}</span>
      </div>
    `;
    return card;
  }

  function renderKpiGrid() {
    const grid = $('kpiGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const ids = dataState.goal === 'all' ? [1, 4, 8, 13] : [parseInt(dataState.goal, 10)];
    ids.forEach(id => {
      const series = INDICATOR_SERIES[id];
      const goal = GOALS.find(g => g.id === id);
      if (series && goal) grid.appendChild(createKpiCard(goal, series));
    });
    grid.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  function renderTrendChart() {
    const svg = $('trendChart');
    const title = $('trendTitle');
    const sub = $('trendSub');
    const axis = $('trendAxis');
    if (!svg) return;

    const goalId = dataState.goal === 'all' ? 1 : parseInt(dataState.goal, 10);
    const series = INDICATOR_SERIES[goalId];
    if (!series) return;

    const region = REGIONS[dataState.region] || REGIONS.national;
    const seriesName = series.name[state.lang];

    if (title) title.textContent = seriesName;
    if (sub) sub.textContent = `${region[state.lang]} · 2015–${dataState.year} · ${series.unit}`;

    const cutoff = YEARS.indexOf(dataState.year) + 1;
    const years = YEARS.slice(0, cutoff);
    const values = series.values.slice(0, cutoff);

    const W = 800, H = 300;
    const padX = 56, padTop = 24, padBottom = 40;
    const chartW = W - padX * 2;
    const chartH = H - padTop - padBottom;

    const allVals = [...values, series.target];
    const min = Math.min(...allVals);
    const max = Math.max(...allVals);
    const range = max - min || 1;
    const pad = range * 0.1;
    const yMin = min - pad;
    const yMax = max + pad;
    const yRange = yMax - yMin;

    const x = i => padX + (i / (values.length - 1 || 1)) * chartW;
    const y = v => padTop + chartH - ((v - yMin) / yRange) * chartH;

    const pathD = values.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
    const areaD = `${pathD} L${x(values.length - 1).toFixed(1)},${(padTop + chartH).toFixed(1)} L${x(0).toFixed(1)},${(padTop + chartH).toFixed(1)} Z`;

    const gridLines = Array.from({ length: 5 }, (_, i) => {
      const gy = padTop + (i / 4) * chartH;
      const val = yMax - (i / 4) * yRange;
      return `
        <line x1="${padX}" y1="${gy}" x2="${W - padX}" y2="${gy}" stroke="rgba(11,31,58,.08)" stroke-width="1"/>
        <text x="${padX - 12}" y="${gy + 4}" text-anchor="end" font-size="11" fill="rgba(11,31,58,.5)" font-weight="600">${val.toFixed(val < 10 ? 1 : 0)}</text>
      `;
    }).join('');

    const points = values.map((v, i) => `
      <circle cx="${x(i).toFixed(1)}" cy="${y(v).toFixed(1)}" r="4" fill="#fff" stroke="${series.color}" stroke-width="2.5"/>
    `).join('');

    const targetY = y(series.target);
    const targetLine = `
      <line x1="${padX}" y1="${targetY}" x2="${W - padX}" y2="${targetY}"
        stroke="var(--navy-800)" stroke-width="2" stroke-dasharray="8 6" opacity=".55"/>
      <text x="${W - padX - 6}" y="${targetY - 8}" text-anchor="end" font-size="11" font-weight="800" fill="var(--navy-800)" opacity=".7">Target ${series.target}${series.unit === '%' ? '%' : ''}</text>
    `;

    svg.innerHTML = `
      <defs>
        <linearGradient id="trendArea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${series.color}" stop-opacity=".28"/>
          <stop offset="100%" stop-color="${series.color}" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <g>${gridLines}</g>
      <path d="${areaD}" fill="url(#trendArea)"/>
      <path d="${pathD}" fill="none" stroke="${series.color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      ${targetLine}
      <g>${points}</g>
    `;

    if (axis) {
      axis.innerHTML = years.map(y => `<span>${y}</span>`).join('');
    }
  }

  function renderProvinceComparison() {
    const top = $('provinceTop');
    const bottom = $('provinceBottom');
    if (!top || !bottom) return;

    const goalId = dataState.goal === 'all' ? 1 : parseInt(dataState.goal, 10);
    const data = PROVINCE_DATA[goalId] || DEFAULT_PROVINCE_DATA;
    const maxVal = Math.max(...[...data.top, ...data.bottom].map(p => p.value));

    const render = (list, color) => list.map(p => `
      <li class="province-row">
        <span class="province-row__name">${p.name[state.lang]}</span>
        <div class="province-row__bar">
          <div class="province-row__bar-fill" style="width:${(p.value / maxVal) * 100}%;--prov-color:${color}"></div>
        </div>
        <span class="province-row__value">${p.value}</span>
      </li>
    `).join('');

    top.innerHTML = render(data.top, '#56C02B');
    bottom.innerHTML = render(data.bottom, '#E5243B');
  }

  function renderDeepDivePills() {
    const wrap = $('deepdiveGoals');
    if (!wrap) return;
    wrap.innerHTML = '';
    GOALS.forEach(g => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'deepdive-pill';
      btn.dataset.goalId = g.id;
      btn.style.setProperty('--goal-color', g.color);
      if (String(g.id) === String(dataState.goal)) btn.classList.add('is-active');
      btn.innerHTML = `
        <span class="deepdive-pill__num">${g.id}</span>
        <span class="deepdive-pill__label">SDG</span>
      `;
      btn.setAttribute('aria-label', `${g.text[state.lang].name}`);
      btn.addEventListener('click', () => selectDeepDive(g.id, true));
      wrap.appendChild(btn);
    });
  }

  function renderDeepDivePanel() {
    const panel = $('deepdivePanel');
    if (!panel) return;
    const goalId = dataState.goal === 'all' ? 1 : parseInt(dataState.goal, 10);
    const goal = GOALS.find(g => g.id === goalId);
    const series = INDICATOR_SERIES[goalId];
    if (!goal || !series) return;

    const copy = goal.text[state.lang];
    const latest = series.values[series.values.length - 1];
    const prev = series.values[series.values.length - 2];
    const delta = latest - prev;
    const up = delta >= 0;
    const isGood = series.higherIsBetter ? up : !up;

    const indicators = [
      { label: copy.indicators[0] || 'Indicator 1', value: latest.toFixed(2), unit: series.unit, target: series.target },
      { label: copy.indicators[1] || 'Indicator 2', value: (latest * 0.95).toFixed(1), unit: '%', target: 80 },
      { label: copy.indicators[2] || 'Indicator 3', value: (latest * 1.08).toFixed(1), unit: '%', target: 90 },
    ];

    panel.innerHTML = `
      <div class="deepdive-panel__head">
        <img class="deepdive-panel__icon" src="${goalIcon(goal.id)}" alt="" aria-hidden="true" />
        <div>
          <p class="deepdive-panel__eyebrow">${state.lang === 'id' ? 'Tujuan' : 'Goal'} ${goal.id} · ${t('cat.' + goal.cat)}</p>
          <h3 class="deepdive-panel__title">${copy.name}</h3>
        </div>
      </div>

      <div class="deepdive-panel__stats">
        <div class="deepdive-stat">
          <p class="deepdive-stat__value">${latest.toFixed(series.unit === '%' ? 2 : 1)}</p>
          <p class="deepdive-stat__label">${series.name[state.lang]}</p>
        </div>
        <div class="deepdive-stat">
          <p class="deepdive-stat__value">${series.target}${series.unit === '%' ? '%' : ''}</p>
          <p class="deepdive-stat__label">${state.lang === 'id' ? 'Target 2030' : '2030 Target'}</p>
        </div>
        <div class="deepdive-stat">
          <p class="deepdive-stat__value" style="color:${isGood ? '#56C02B' : '#E5243B'}">${up ? '+' : ''}${delta.toFixed(2)}</p>
          <p class="deepdive-stat__label">${state.lang === 'id' ? 'vs tahun lalu' : 'vs last year'}</p>
        </div>
      </div>

      <div class="deepdive-panel__bar">
        <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px;">
          <span style="color:var(--text-soft);font-weight:600;">${t('catalog.detail.progress')}</span>
          <span style="font-weight:800;">${goal.progress}%</span>
        </div>
        <div class="progress progress--dim">
          <div class="progress__bar" style="width:${goal.progress}%;background:${goal.color}"></div>
        </div>
      </div>

      <ul class="goal-detail__list" style="margin-top:8px;">
        ${indicators.map(ind => `
          <li>
            <strong>${ind.value}${ind.unit === '%' ? '%' : ''}</strong>
            <span>${ind.label} · Target ${ind.target}${ind.unit === '%' ? '%' : ''}</span>
          </li>
        `).join('')}
      </ul>
    `;
  }

  function selectDeepDive(goalId, scroll) {
    dataState.goal = String(goalId);
    const select = $('filterGoal');
    if (select) select.value = String(goalId);
    updateDataPage();
    if (scroll) {
      const section = $('goalDeepDiveSection');
      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top, behavior: prefersReduced ? 'auto' : 'smooth' });
      }
    }
    if (history.replaceState) {
      history.replaceState(null, '', `#goal-${goalId}`);
    }
  }

  function updateDataPage() {
    renderKpiGrid();
    renderTrendChart();
    renderProvinceComparison();
    renderDeepDivePills();
    renderDeepDivePanel();
  }

  function renderAvailability() {
    const grid = $('availabilityGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

    const header = document.createElement('div');
    header.className = 'availability-row';
    header.innerHTML = `<span class="availability-row__label"></span>` +
      years.map(y => `<span style="font-size:10.5px;text-align:center;font-weight:800;color:var(--text-soft);letter-spacing:.04em;">${y}</span>`).join('');
    grid.appendChild(header);

    GOALS.forEach(g => {
      const row = document.createElement('div');
      row.className = 'availability-row';
      row.innerHTML = `
        <span class="availability-row__label">SDG ${g.id}</span>
        ${years.map(y => {
          const base = 0.4 + (y - 2015) * 0.06;
          const jitter = (g.id * 13 + y) % 7 / 20;
          const cov = Math.min(0.98, base + jitter);
          const alpha = 0.08 + cov * 0.78;
          return `<span class="availability-cell" style="background:rgba(11,31,58,${alpha.toFixed(2)});" title="SDG ${g.id} · ${y}: ${Math.round(cov * 100)}% coverage"></span>`;
        }).join('')}
      `;
      grid.appendChild(row);
    });
  }

  function initDataPage() {
    if (!$('filterGoal')) return;
    populateGoalFilter();
    renderAvailability();
    updateDataPage();

    $('filterGoal')?.addEventListener('change', e => {
      dataState.goal = e.target.value;
      updateDataPage();
      if (dataState.goal !== 'all' && history.replaceState) {
        history.replaceState(null, '', `#goal-${dataState.goal}`);
      }
    });
    $('filterRegion')?.addEventListener('change', e => {
      dataState.region = e.target.value;
      updateDataPage();
    });
    $('filterYear')?.addEventListener('change', e => {
      dataState.year = parseInt(e.target.value, 10);
      updateDataPage();
    });

    $('filterReset')?.addEventListener('click', () => {
      dataState.goal = 'all';
      dataState.region = 'national';
      dataState.year = 2024;
      if ($('filterGoal')) $('filterGoal').value = 'all';
      if ($('filterRegion')) $('filterRegion').value = 'national';
      if ($('filterYear')) $('filterYear').value = '2024';
      updateDataPage();
      if (history.replaceState) {
        history.replaceState(null, '', window.location.pathname);
      }
    });

    const download = (format) => {
      const goalId = dataState.goal === 'all' ? 1 : parseInt(dataState.goal, 10);
      const series = INDICATOR_SERIES[goalId];
      if (!series) return;
      const rows = [['Year', series.name.en, series.name.id]];
      YEARS.forEach((y, i) => rows.push([y, series.values[i], series.values[i]]));
      const csv = rows.map(r => r.join(',')).join('\n');
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `sdgs-goal-${goalId}-${format}.${format === 'csv' ? 'csv' : 'txt'}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    };
    $('downloadCSV')?.addEventListener('click', () => download('csv'));
    $('filterExport')?.addEventListener('click', () => download('csv'));
    $('downloadXLSX')?.addEventListener('click', () => download('xlsx'));

    const hash = window.location.hash.match(/^#goal-(\d+)$/);
    if (hash) {
      const id = parseInt(hash[1], 10);
      if (GOALS.some(g => g.id === id)) {
        setTimeout(() => selectDeepDive(id, true), 150);
      }
    }
  }

  /* Expose for setLanguage() */
  window.__sdgsUpdateDataPage = () => {
    if (!$('filterGoal')) return;
    populateGoalFilter();
    if ($('filterGoal')) $('filterGoal').value = String(dataState.goal);
    updateDataPage();
    renderAvailability();
  };

  /* ═══════════════════════════════════════════════════════════════
     16. KNOWLEDGE HUB PAGE (knowledge.html)
     ═══════════════════════════════════════════════════════════════ */
  const KNOWLEDGE_TYPES = {
    publication:  { color: '#1F7A48', icon: 'document' },
    regulation:   { color: '#0C4325', icon: 'scroll' },
    award:        { color: '#C9A227', icon: 'award' },
    bestPractice: { color: '#3F9463', icon: 'spark' },
  };

  const KNOWLEDGE_ITEMS = [
    { id: 'vnr-2024', type: 'publication', year: 2024, file: { format: 'PDF', size: '12 MB', pages: 148 },
      text: {
        en: { title: 'Voluntary National Review (VNR) Indonesia 2024', desc: "Indonesia's third VNR, reviewing progress on all 17 SDGs and highlighting lessons learned in the final stretch toward 2030.", publisher: 'Bappenas' },
        id: { title: 'Voluntary National Review (VNR) Indonesia 2024', desc: 'VNR ketiga Indonesia, mengulas kemajuan 17 SDGs dan pembelajaran menjelang 2030.', publisher: 'Bappenas' } } },
    { id: 'vnr-2022', type: 'publication', year: 2022, file: { format: 'PDF', size: '10 MB', pages: 132 },
      text: {
        en: { title: 'Voluntary National Review (VNR) Indonesia 2022', desc: 'Post-pandemic recovery report highlighting social protection, green recovery, and digital transformation.', publisher: 'Bappenas' },
        id: { title: 'Voluntary National Review (VNR) Indonesia 2022', desc: 'Laporan pemulihan pasca-pandemi menekankan perlindungan sosial, pemulihan hijau, dan transformasi digital.', publisher: 'Bappenas' } } },
    { id: 'capaian-2023', type: 'publication', year: 2023, file: { format: 'PDF', size: '8 MB', pages: 96 },
      text: {
        en: { title: 'SDGs Annual Progress Report 2023', desc: "Indicator-level review of Indonesia's SDG progress across all goals with regional disaggregation.", publisher: 'SDGs Secretariat' },
        id: { title: 'Laporan Capaian Tahunan SDGs 2023', desc: 'Tinjauan tingkat indikator capaian SDGs Indonesia di seluruh tujuan dengan disagregasi daerah.', publisher: 'Sekretariat SDGs' } } },
    { id: 'metadata-2', type: 'publication', year: 2022, file: { format: 'PDF', size: '6 MB', pages: 320 },
      text: {
        en: { title: 'Metadata for SDG Indicators — 2nd Edition', desc: 'Operational definitions and calculation methodology for all 289 SDG indicators.', publisher: 'Bappenas & BPS' },
        id: { title: 'Metadata Indikator SDGs — Edisi II', desc: 'Definisi operasional dan metodologi perhitungan untuk seluruh 289 indikator SDGs.', publisher: 'Bappenas & BPS' } } },
    { id: 'roadmap', type: 'publication', year: 2017, file: { format: 'PDF', size: '4 MB', pages: 88 },
      text: {
        en: { title: 'SDGs Roadmap Indonesia 2017–2030', desc: 'The national roadmap setting targets, policies, and implementation phases for the SDGs.', publisher: 'Bappenas' },
        id: { title: 'Peta Jalan SDGs Indonesia 2017–2030', desc: 'Peta jalan nasional yang menetapkan target, kebijakan, dan tahapan pelaksanaan SDGs.', publisher: 'Bappenas' } } },
    { id: 'financing', type: 'publication', year: 2020, file: { format: 'PDF', size: '5 MB', pages: 72 },
      text: {
        en: { title: 'SDG Financing Framework', desc: 'An overview of the four sources of SDG financing: APBN, APBD, philanthropy, and community.', publisher: 'Bappenas & UNDP' },
        id: { title: 'Kerangka Pembiayaan SDGs', desc: 'Ikhtisar empat sumber pembiayaan SDGs: APBN, APBD, filantropi, dan masyarakat.', publisher: 'Bappenas & UNDP' } } },

    { id: 'perpres-111', type: 'regulation', year: 2022, file: { format: 'PDF', size: '2 MB', pages: 24 },
      text: {
        en: { title: 'Presidential Regulation No. 111 of 2022', desc: 'The current legal foundation for SDG implementation in Indonesia, replacing Perpres 59/2017.', publisher: 'Government of Indonesia' },
        id: { title: 'Peraturan Presiden No. 111 Tahun 2022', desc: 'Dasar hukum terkini pelaksanaan SDGs di Indonesia, menggantikan Perpres 59/2017.', publisher: 'Pemerintah Indonesia' } } },
    { id: 'perpres-59', type: 'regulation', year: 2017, file: { format: 'PDF', size: '1.8 MB', pages: 20 },
      text: {
        en: { title: 'Presidential Regulation No. 59 of 2017', desc: "The original regulation establishing Indonesia's national SDG framework, coordination, and reporting.", publisher: 'Government of Indonesia' },
        id: { title: 'Peraturan Presiden No. 59 Tahun 2017', desc: 'Regulasi awal yang menetapkan kerangka nasional, koordinasi, dan pelaporan SDGs Indonesia.', publisher: 'Pemerintah Indonesia' } } },
    { id: 'permen-ppn-7', type: 'regulation', year: 2018, file: { format: 'PDF', size: '1.4 MB', pages: 18 },
      text: {
        en: { title: 'Ministerial Regulation (PPN) No. 7 of 2018', desc: 'Technical guidance on SDG regional action plan drafting for provincial and district governments.', publisher: 'Ministry of PPN/Bappenas' },
        id: { title: 'Peraturan Menteri PPN No. 7 Tahun 2018', desc: 'Petunjuk teknis penyusunan Rencana Aksi Daerah SDGs untuk pemerintah provinsi dan kabupaten/kota.', publisher: 'Kementerian PPN/Bappenas' } } },
    { id: 'permendagri-22', type: 'regulation', year: 2020, file: { format: 'PDF', size: '1.6 MB', pages: 22 },
      text: {
        en: { title: 'Ministerial Regulation (Home Affairs) No. 22 of 2020', desc: 'Guidance for regional SDG coordination and reporting aligned with the national framework.', publisher: 'Ministry of Home Affairs' },
        id: { title: 'Peraturan Menteri Dalam Negeri No. 22 Tahun 2020', desc: 'Panduan koordinasi dan pelaporan SDGs daerah selaras dengan kerangka nasional.', publisher: 'Kementerian Dalam Negeri' } } },

    { id: 'awards-2024', type: 'award', year: 2024, file: { format: 'PDF', size: '3 MB', pages: 42 },
      text: {
        en: { title: 'Indonesia SDGs Action Awards 2024', desc: 'Catalogue of 2024 winners — local governments, universities, and community organizations with transformative SDG initiatives.', publisher: 'SDGs Secretariat' },
        id: { title: 'Indonesia SDGs Action Awards 2024', desc: 'Katalog pemenang 2024 — pemerintah daerah, universitas, dan organisasi masyarakat dengan inisiatif SDGs transformatif.', publisher: 'Sekretariat SDGs' } } },
    { id: 'awards-2023', type: 'award', year: 2023, file: { format: 'PDF', size: '2.8 MB', pages: 38 },
      text: {
        en: { title: 'Indonesia SDGs Action Awards 2023', desc: 'Showcasing the 2023 cohort of award recipients recognized for measurable impact across multiple SDG goals.', publisher: 'SDGs Secretariat' },
        id: { title: 'Indonesia SDGs Action Awards 2023', desc: 'Menampilkan penerima penghargaan 2023 yang diakui atas dampak terukur di berbagai tujuan SDGs.', publisher: 'Sekretariat SDGs' } } },
    { id: 'awards-2022', type: 'award', year: 2022, file: { format: 'PDF', size: '2.5 MB', pages: 34 },
      text: {
        en: { title: 'Indonesia SDGs Action Awards 2022', desc: 'Post-pandemic edition celebrating resilience and innovation in SDG implementation.', publisher: 'SDGs Secretariat' },
        id: { title: 'Indonesia SDGs Action Awards 2022', desc: 'Edisi pasca-pandemi merayakan ketangguhan dan inovasi pelaksanaan SDGs.', publisher: 'Sekretariat SDGs' } } },

    { id: 'waste-bank', type: 'bestPractice', year: 2024, file: { format: 'PDF', size: '1.8 MB', pages: 18 },
      text: {
        en: { title: 'Village Waste Bank Network — Bali', desc: 'A community-driven waste bank model that diverts 12 tonnes of waste per month and generates income for 340 households.', publisher: 'SDGs UNMAS' },
        id: { title: 'Jaringan Bank Sampah Desa — Bali', desc: 'Model bank sampah berbasis masyarakat yang mengalihkan 12 ton sampah per bulan dan menghasilkan pendapatan untuk 340 rumah tangga.', publisher: 'SDGs UNMAS' } } },
    { id: 'tourism-village', type: 'bestPractice', year: 2023, file: { format: 'PDF', size: '2.2 MB', pages: 24 },
      text: {
        en: { title: 'Sustainable Tourism Village Network', desc: 'Ten villages collaborating on cultural tourism, waste management, and economic empowerment in Bali.', publisher: 'SDGs UNMAS & Dinas Pariwisata' },
        id: { title: 'Jaringan Desa Wisata Berkelanjutan', desc: 'Sepuluh desa berkolaborasi dalam pariwisata budaya, pengelolaan sampah, dan pemberdayaan ekonomi di Bali.', publisher: 'SDGs UNMAS & Dinas Pariwisata' } } },
    { id: 'coastal-cleanup', type: 'bestPractice', year: 2024, file: { format: 'PDF', size: '1.5 MB', pages: 16 },
      text: {
        en: { title: 'Coastal Cleanup Collective — South Bali', desc: 'Monthly coastal cleanup initiative coordinating 22 schools, 8 hotels, and local fisherfolk.', publisher: 'SDGs UNMAS' },
        id: { title: 'Kolektif Bersih Pantai — Bali Selatan', desc: 'Inisiatif pembersihan pantai bulanan yang mengoordinasikan 22 sekolah, 8 hotel, dan nelayan lokal.', publisher: 'SDGs UNMAS' } } },
    { id: 'renewable-coop', type: 'bestPractice', year: 2023, file: { format: 'PDF', size: '1.9 MB', pages: 20 },
      text: {
        en: { title: 'Community Renewable Energy Cooperative', desc: 'A rooftop solar cooperative serving 180 rural households with affordable clean energy.', publisher: 'SDGs UNMAS' },
        id: { title: 'Koperasi Energi Terbarukan Komunitas', desc: 'Koperasi solar atap yang melayani 180 rumah tangga pedesaan dengan energi bersih yang terjangkau.', publisher: 'SDGs UNMAS' } } },
    { id: 'youth-ambassadors', type: 'bestPractice', year: 2024, file: { format: 'PDF', size: '1.2 MB', pages: 14 },
      text: {
        en: { title: 'Youth SDGs Ambassadors Program', desc: 'University students trained as SDG advocates, running campus and community campaigns across Bali.', publisher: 'SDGs UNMAS' },
        id: { title: 'Program Duta SDGs Muda', desc: 'Mahasiswa dilatih sebagai advokat SDGs, menjalankan kampanye kampus dan komunitas di Bali.', publisher: 'SDGs UNMAS' } } },
  ];

  const KNOWLEDGE_ICONS = {
    document: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M9 15h6M9 11h3"/></svg>',
    scroll:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/></svg>',
    award:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="9" r="6"/><path d="M8.5 14.5 7 22l5-3 5 3-1.5-7.5"/></svg>',
    spark:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2 15 8l6 .9-4.5 4.3 1 6.3L12 16.5 6.5 19.5l1-6.3L3 8.9 9 8Z"/></svg>',
  };

  const knowledgeGrid   = document.getElementById('knowledgeGrid');
  const knowledgeEmpty  = document.getElementById('knowledgeEmpty');
  const knowledgeCount  = document.getElementById('knowledgeCount');
  const knowledgeSearch = document.getElementById('knowledgeSearch');
  const knowledgeReset  = document.getElementById('knowledgeReset');

  const knowledgeModal         = document.getElementById('knowledgeModal');
  const knowledgeModalPanel    = knowledgeModal?.querySelector('.knowledge-modal__panel');
  const knowledgeModalHeader   = document.getElementById('knowledgeModalHeader');
  const knowledgeModalIcon     = document.getElementById('knowledgeModalIcon');
  const knowledgeModalType     = document.getElementById('knowledgeModalType');
  const knowledgeModalTitle    = document.getElementById('knowledgeModalTitle');
  const knowledgeModalDesc     = document.getElementById('knowledgeModalDesc');
  const knowledgeModalMeta     = document.getElementById('knowledgeModalMeta');
  const knowledgeModalDownload = document.getElementById('knowledgeModalDownload');

  const knowledgeState = { filter: 'all', query: '' };
  let knowledgeLastFocused = null;

  function createKnowledgeCard(item) {
    const type = KNOWLEDGE_TYPES[item.type];
    const copy = item.text[state.lang];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'knowledge-card reveal';
    btn.dataset.type = item.type;
    btn.dataset.itemId = item.id;
    btn.style.setProperty('--k-color', type.color);
    btn.setAttribute('aria-label', `${copy.title} — ${copy.publisher}, ${item.year}`);

    btn.innerHTML = `
      <div class="knowledge-card__header">
        <span class="knowledge-card__icon">${KNOWLEDGE_ICONS[type.icon]}</span>
        <span class="knowledge-card__type">${t('knowledge.type.' + item.type)}</span>
      </div>
      <h3 class="knowledge-card__title">${copy.title}</h3>
      <p class="knowledge-card__desc">${copy.desc}</p>
      <div class="knowledge-card__meta">
        <span>${item.year}</span>
        <span>·</span>
        <span>${item.file.format} · ${item.file.size}</span>
        <span class="knowledge-card__meta-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </div>
    `;

    btn.addEventListener('click', () => openKnowledgeModal(item.id));
    return btn;
  }

  function renderKnowledge() {
    if (!knowledgeGrid) return;
    knowledgeGrid.innerHTML = '';
    KNOWLEDGE_ITEMS.forEach(item => knowledgeGrid.appendChild(createKnowledgeCard(item)));
    knowledgeGrid.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
    applyKnowledgeFilter();
  }

  function applyKnowledgeFilter() {
    if (!knowledgeGrid) return;

    const q = knowledgeState.query.trim().toLowerCase();
    const type = knowledgeState.filter;
    let visible = 0;

    knowledgeGrid.querySelectorAll('.knowledge-card').forEach(card => {
      const item = KNOWLEDGE_ITEMS.find(x => x.id === card.dataset.itemId);
      if (!item) return;
      const copy = item.text[state.lang];
      const matchesType = type === 'all' || item.type === type;
      const haystack = `${copy.title} ${copy.desc} ${copy.publisher} ${item.year}`.toLowerCase();
      const matchesQuery = !q || haystack.includes(q);
      const show = matchesType && matchesQuery;
      card.hidden = !show;
      if (show) visible++;
    });

    if (knowledgeCount) knowledgeCount.textContent = visible;
    if (knowledgeEmpty) knowledgeEmpty.hidden = visible > 0;
    if (knowledgeGrid) knowledgeGrid.style.display = visible > 0 ? '' : 'none';
  }

  function openKnowledgeModal(itemId) {
    const item = KNOWLEDGE_ITEMS.find(x => x.id === itemId);
    if (!item || !knowledgeModal) return;

    const type = KNOWLEDGE_TYPES[item.type];
    const copy = item.text[state.lang];

    knowledgeModalHeader.style.setProperty('--k-color', type.color);
    knowledgeModalPanel.style.setProperty('--k-color', type.color);
    knowledgeModalIcon.innerHTML = KNOWLEDGE_ICONS[type.icon];
    knowledgeModalType.textContent = t('knowledge.type.' + item.type);
    knowledgeModalTitle.textContent = copy.title;
    knowledgeModalDesc.textContent = copy.desc;

    knowledgeModalMeta.innerHTML = `
      <div><dt>${t('knowledge.modal.year')}</dt><dd>${item.year}</dd></div>
      <div><dt>${t('knowledge.modal.publisher')}</dt><dd>${copy.publisher}</dd></div>
      <div><dt>${t('knowledge.modal.format')}</dt><dd>${item.file.format}</dd></div>
      <div><dt>${t('knowledge.modal.size')}</dt><dd>${item.file.size} · ${item.file.pages} ${t('knowledge.modal.pages')}</dd></div>
    `;

    knowledgeModalDownload.href = `#download-${item.id}`;

    knowledgeLastFocused = document.activeElement;
    knowledgeModal.hidden = false;
    document.body.classList.add('has-modal');
    setTimeout(() => knowledgeModalPanel?.focus?.(), 30);
  }

  function closeKnowledgeModal() {
    if (!knowledgeModal || knowledgeModal.hidden) return;
    knowledgeModal.hidden = true;
    document.body.classList.remove('has-modal');
    knowledgeLastFocused?.focus?.();
  }

  knowledgeModal?.querySelectorAll('[data-close-knowledge]').forEach(el => {
    el.addEventListener('click', closeKnowledgeModal);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && knowledgeModal && !knowledgeModal.hidden) {
      closeKnowledgeModal();
      return;
    }
    if (e.key !== 'Tab' || !knowledgeModal || knowledgeModal.hidden) return;
    const focusables = knowledgeModal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const last  = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  if (knowledgeGrid) {
    document.querySelectorAll('.catalog-toolbar .filter-btn').forEach(btn => {
      const f = btn.dataset.filter;
      if (!['all', 'publication', 'regulation', 'award', 'bestPractice'].includes(f)) return;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.catalog-toolbar .filter-btn').forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');
        knowledgeState.filter = f;
        applyKnowledgeFilter();
      });
    });

    knowledgeSearch?.addEventListener('input', e => {
      knowledgeState.query = e.target.value;
      applyKnowledgeFilter();
    });

    knowledgeReset?.addEventListener('click', () => {
      knowledgeState.filter = 'all';
      knowledgeState.query = '';
      if (knowledgeSearch) knowledgeSearch.value = '';
      document.querySelectorAll('.catalog-toolbar .filter-btn').forEach(b => {
        const active = b.dataset.filter === 'all';
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });
      applyKnowledgeFilter();
    });
  }

  /* Expose for setLanguage() */
  window.__sdgsRenderKnowledge = renderKnowledge;

    /* ═══════════════════════════════════════════════════════════════
     16b. NEWS & EVENTS PAGE (news.html)
     ═══════════════════════════════════════════════════════════════ */
  const NEWS_TYPES = {
    article:      { color: '#1F7A48', icon: 'document' },
    event:        { color: '#C9A227', icon: 'calendar' },
    announcement: { color: '#0C4325', icon: 'megaphone' },
  };

  const NEWS_ICONS = {
    document:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M9 15h6M9 11h3"/></svg>',
    calendar:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    megaphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 11v2a3 3 0 0 0 3 3h1l4 5V6L7 11H6a3 3 0 0 0-3 3Z"/><path d="M11 6 21 3v18l-10-3"/></svg>',
  };

  const NEWS_ITEMS = [
    /* ── Articles ── */
    { id: 'article-climate-2060', type: 'article', date: '2026-10-12', goal: 13,
      text: {
        en: { title: 'Indonesia Strengthens Climate Action Commitment Toward Net Zero 2060',
              desc: 'Energy transition and climate adaptation strategies are reinforced through cross-sector partnerships and green financing.',
              content: 'Indonesia has reaffirmed its commitment to achieving net-zero emissions by 2060, with a renewed focus on renewable energy, forest conservation, and community-driven climate adaptation. At a recent national coordination meeting, key stakeholders agreed on an accelerated roadmap that emphasizes green financing and local resilience.', author: 'SDGs UNMAS Communications' },
        id: { title: 'Indonesia Perkuat Komitmen Aksi Iklim Menuju Net Zero 2060',
              desc: 'Strategi transisi energi dan adaptasi iklim diperkuat melalui kemitraan lintas sektor dan pendanaan hijau.',
              content: 'Indonesia menegaskan kembali komitmennya untuk mencapai emisi nol bersih pada 2060, dengan fokus baru pada energi terbarukan, konservasi hutan, dan adaptasi iklim berbasis masyarakat. Dalam rapat koordinasi nasional terkini, para pemangku kepentingan menyepakati peta jalan yang dipercepat dengan penekanan pada pendanaan hijau dan ketahanan lokal.', author: 'Komunikasi SDGs UNMAS' } } },

    { id: 'article-education-3t', type: 'article', date: '2026-10-08', goal: 4,
      text: {
        en: { title: 'Expanding Quality Education Access in Remote Regions',
              desc: 'Affirmative programs and learning digitalization reach frontier, outermost, and disadvantaged areas.',
              content: 'A new wave of affirmative education programs is targeting Indonesia\'s 3T regions — frontier, outermost, and disadvantaged — with digital classrooms, teacher training, and curriculum localization. The initiative aims to close the learning gap by 2030.', author: 'SDGs UNMAS Communications' },
        id: { title: 'Perluasan Akses Pendidikan Berkualitas di Daerah 3T',
              desc: 'Program afirmasi dan digitalisasi pembelajaran menyasar wilayah terdepan, terluar, dan tertinggal.',
              content: 'Gelombang baru program afirmasi pendidikan menyasar daerah 3T Indonesia — terdepan, terluar, dan tertinggal — melalui kelas digital, pelatihan guru, dan lokalisasi kurikulum. Inisiatif ini bertujuan menutup kesenjangan pembelajaran pada 2030.', author: 'Komunikasi SDGs UNMAS' } } },

    { id: 'article-msme-digital', type: 'article', date: '2026-10-03', goal: 8,
      text: {
        en: { title: 'MSMEs Level Up: Digitalization Drives Decent Work',
              desc: 'Empowering MSMEs through digital literacy and inclusive financing broadens job opportunities.',
              content: 'Across Indonesia, micro, small, and medium enterprises are embracing digital tools to reach wider markets and create more stable jobs. The story is especially strong in Bali, where tourism-linked MSMEs are diversifying into e-commerce and digital services.', author: 'SDGs UNMAS Research Team' },
        id: { title: 'UMKM Naik Kelas: Digitalisasi Dorong Pekerjaan Layak',
              desc: 'Pemberdayaan UMKM melalui literasi digital dan akses pembiayaan inklusif memperluas lapangan kerja.',
              content: 'Di seluruh Indonesia, UMKM mulai mengadopsi alat digital untuk menjangkau pasar lebih luas dan menciptakan pekerjaan yang lebih stabil. Cerita ini sangat kuat di Bali, di mana UMKM terkait pariwisata mulai beralih ke e-commerce dan layanan digital.', author: 'Tim Riset SDGs UNMAS' } } },

    { id: 'article-waste-bank', type: 'article', date: '2026-09-28', goal: 12,
      text: {
        en: { title: 'Village Waste Banks Divert 12 Tonnes Monthly in Bali',
              desc: 'Community-driven waste bank model generates income for 340 households while cutting landfill waste.',
              content: 'Village-level waste banks across Bali are collectively diverting over 12 tonnes of recyclable waste per month. Beyond environmental impact, the model has created supplementary income streams for over 340 households.', author: 'SDGs UNMAS Field Team' },
        id: { title: 'Bank Sampah Desa Alihkan 12 Ton Sampah per Bulan di Bali',
              desc: 'Model bank sampah berbasis masyarakat menghasilkan pendapatan untuk 340 rumah tangga dan mengurangi sampah TPA.',
              content: 'Bank sampah tingkat desa di Bali secara kolektif mengalihkan lebih dari 12 ton sampah daur ulang setiap bulan. Selain dampak lingkungan, model ini menciptakan sumber pendapatan tambahan bagi lebih dari 340 rumah tangga.', author: 'Tim Lapangan SDGs UNMAS' } } },

    { id: 'article-marine-protected', type: 'article', date: '2026-09-20', goal: 14,
      text: {
        en: { title: 'Marine Protected Areas Reach 20% of Indonesian Waters',
              desc: 'Expansion of marine conservation zones protects coral ecosystems and supports sustainable fisheries.',
              content: 'Indonesia has reached a milestone of 20% marine protected area coverage, with new zones established in Bali, Maluku, and West Papua. The designation balances ecological protection with the livelihoods of coastal communities.', author: 'SDGs UNMAS Communications' },
        id: { title: 'Kawasan Konservasi Laut Capai 20% Perairan Indonesia',
              desc: 'Perluasan zona konservasi laut melindungi ekosistem terumbu karang dan mendukung perikanan berkelanjutan.',
              content: 'Indonesia mencapai tonggak 20% cakupan kawasan konservasi laut, dengan zona baru ditetapkan di Bali, Maluku, dan Papua Barat. Penetapan ini menyeimbangkan perlindungan ekologis dengan mata pencaharian masyarakat pesisir.', author: 'Komunikasi SDGs UNMAS' } } },

    { id: 'article-gender-parliament', type: 'article', date: '2026-09-15', goal: 5,
      text: {
        en: { title: 'Women\'s Representation in Regional Parliaments Improves',
              desc: 'New affirmative policies push female representation past 25% in several provinces.',
              content: 'Several Indonesian provinces have surpassed 25% female representation in regional parliaments, thanks to affirmative candidate lists and targeted capacity-building programs. Progress remains uneven, but the trend is upward.', author: 'SDGs UNMAS Research Team' },
        id: { title: 'Representasi Perempuan di Parlemen Daerah Meningkat',
              desc: 'Kebijakan afirmatif baru mendorong representasi perempuan melewati 25% di beberapa provinsi.',
              content: 'Beberapa provinsi di Indonesia telah melampaui 25% representasi perempuan di parlemen daerah, berkat daftar calon afirmatif dan program penguatan kapasitas yang tertarget. Kemajuan masih tidak merata, namun trennya meningkat.', author: 'Tim Riset SDGs UNMAS' } } },

    /* ── Events ── */
    { id: 'event-annual-conf', type: 'event', date: '2026-10-24', time: '09:00', venue: 'Jakarta Convention Center', goal: 17,
      text: {
        en: { title: 'SDGs Annual Conference 2026',
              desc: 'National conference bringing together policymakers, academics, and practitioners to review progress and plan the final stretch toward 2030.',
              content: 'The SDGs Annual Conference 2026 convenes over 500 participants from government, academia, civil society, and the private sector. Sessions will cover the state of SDG progress, financing gaps, and locally-led solutions.', author: 'SDGs Secretariat' },
        id: { title: 'SDGs Annual Conference 2026',
              desc: 'Konferensi nasional yang mempertemukan pembuat kebijakan, akademisi, dan praktisi untuk meninjau kemajuan dan merencanakan tahap akhir menuju 2030.',
              content: 'SDGs Annual Conference 2026 menghadirkan lebih dari 500 peserta dari pemerintah, akademisi, masyarakat sipil, dan sektor swasta. Sesi akan mencakup status kemajuan SDGs, kesenjangan pembiayaan, dan solusi yang dipimpin secara lokal.', author: 'Sekretariat SDGs' } } },

    { id: 'event-data-workshop', type: 'event', date: '2026-10-18', time: '09:00', venue: 'Online', goal: 17,
      text: {
        en: { title: 'Regional SDGs Data Workshop',
              desc: 'Hands-on workshop on indicator reporting, metadata, and open data platforms for provincial and district SDG teams.',
              content: 'This workshop covers data collection, indicator calculation, and submission to the national SDG reporting platform. Open to government officers and university researchers.', author: 'SDGs Data Team' },
        id: { title: 'Lokakarya Data SDGs Daerah',
              desc: 'Lokakarya praktis tentang pelaporan indikator, metadata, dan platform data terbuka untuk tim SDGs provinsi dan kabupaten.',
              content: 'Lokakarya ini mencakup pengumpulan data, perhitungan indikator, dan pengiriman ke platform pelaporan SDGs nasional. Terbuka untuk pejabat pemerintah dan peneliti universitas.', author: 'Tim Data SDGs' } } },

    { id: 'event-metadata-training', type: 'event', date: '2026-11-02', time: '10:00', venue: 'Bappenas · Hybrid', goal: 17,
      text: {
        en: { title: 'Metadata & Indicator Reporting Training',
              desc: 'Training session for SDG focal points on updating metadata and reporting against the 289 national indicators.',
              content: 'This training walks participants through the updated metadata methodology, reporting templates, and quality assurance for SDG indicators.', author: 'SDGs Secretariat' },
        id: { title: 'Pelatihan Metadata & Pelaporan Indikator',
              desc: 'Sesi pelatihan untuk focal point SDGs tentang pembaruan metadata dan pelaporan terhadap 289 indikator nasional.',
              content: 'Pelatihan ini memandu peserta melalui metodologi metadata yang diperbarui, template pelaporan, dan jaminan kualitas untuk indikator SDGs.', author: 'Sekretariat SDGs' } } },

    { id: 'event-youth-forum', type: 'event', date: '2026-11-15', time: '13:00', venue: 'UNMAS Denpasar', goal: 4,
      text: {
        en: { title: 'Youth SDGs Forum — Bali Region',
              desc: 'Gathering of student SDG advocates to share campus initiatives and co-design a regional youth action plan.',
              content: 'The Youth SDGs Forum brings together student ambassadors from universities across Bali to exchange best practices and design collaborative projects for 2027.', author: 'SDGs UNMAS Youth Network' },
        id: { title: 'Forum SDGs Pemuda — Wilayah Bali',
              desc: 'Pertemuan duta SDGs mahasiswa untuk berbagi inisiatif kampus dan merancang rencana aksi pemuda daerah bersama.',
              content: 'Forum SDGs Pemuda mempertemukan duta mahasiswa dari universitas di seluruh Bali untuk bertukar praktik baik dan merancang proyek kolaboratif untuk 2027.', author: 'Jejaring Pemuda SDGs UNMAS' } } },

    { id: 'event-sustainable-tourism', type: 'event', date: '2026-12-05', time: '08:30', venue: 'Ubud, Gianyar', goal: 12,
      text: {
        en: { title: 'Sustainable Tourism Village Summit',
              desc: 'Two-day summit connecting village leaders, tourism operators, and researchers to scale community-based tourism.',
              content: 'The summit features case studies from ten villages, working groups on waste management and cultural preservation, and field visits to model sites.', author: 'SDGs UNMAS & Dinas Pariwisata' },
        id: { title: 'KTT Desa Wisata Berkelanjutan',
              desc: 'KTT dua hari yang menghubungkan pemimpin desa, operator pariwisata, dan peneliti untuk memperluas pariwisata berbasis masyarakat.',
              content: 'KTT ini menampilkan studi kasus dari sepuluh desa, kelompok kerja tentang pengelolaan sampah dan pelestarian budaya, serta kunjungan lapangan ke lokasi model.', author: 'SDGs UNMAS & Dinas Pariwisata' } } },

    /* ── Announcements ── */
    { id: 'announce-awards-2026', type: 'announcement', date: '2026-10-01', goal: 17,
      text: {
        en: { title: 'Call for Submissions: Indonesia SDGs Action Awards 2026',
              desc: 'Now accepting submissions for the 2026 awards cycle. Open to local governments, universities, CSOs, and private sector.',
              content: 'The Indonesia SDGs Action Awards recognize outstanding contributions to the Sustainable Development Goals. Submissions are due 30 November 2026 and will be judged on impact, innovation, scalability, and inclusivity.', author: 'SDGs Secretariat' },
        id: { title: 'Panggilan untuk Pengajuan: Indonesia SDGs Action Awards 2026',
              desc: 'Kini menerima pengajuan untuk siklus penghargaan 2026. Terbuka untuk pemerintah daerah, universitas, OMS, dan sektor swasta.',
              content: 'Indonesia SDGs Action Awards mengakui kontribusi luar biasa terhadap Tujuan Pembangunan Berkelanjutan. Pengajuan ditutup 30 November 2026 dan akan dinilai berdasarkan dampak, inovasi, skalabilitas, dan inklusivitas.', author: 'Sekretariat SDGs' } } },

    { id: 'announce-vnr-2026', type: 'announcement', date: '2026-09-25', goal: 17,
      text: {
        en: { title: 'Indonesia Begins Preparations for VNR 2026',
              desc: 'National Secretariat opens stakeholder consultations for the next Voluntary National Review.',
              content: 'Indonesia will submit its fourth Voluntary National Review in 2026. The National Secretariat invites civil society, academia, and the private sector to join consultation sessions over the coming months.', author: 'SDGs Secretariat' },
        id: { title: 'Indonesia Mulai Persiapan VNR 2026',
              desc: 'Sekretariat Nasional membuka konsultasi pemangku kepentingan untuk Voluntary National Review berikutnya.',
              content: 'Indonesia akan menyerahkan Voluntary National Review keempatnya pada 2026. Sekretariat Nasional mengundang masyarakat sipil, akademisi, dan sektor swasta untuk mengikuti sesi konsultasi dalam beberapa bulan mendatang.', author: 'Sekretariat SDGs' } } },

    { id: 'announce-scholarship', type: 'announcement', date: '2026-09-10', goal: 4,
      text: {
        en: { title: 'SDGs Research Scholarship — Now Open',
              desc: 'Fully-funded research scholarship for graduate students working on SDG-aligned topics. Applications close 15 November 2026.',
              content: 'The SDGs Research Scholarship supports graduate research on poverty, education, climate, marine ecosystems, and sustainable tourism. Scholars receive a monthly stipend and access to the SDGs UNMAS research network.', author: 'SDGs UNMAS Research Team' },
        id: { title: 'Beasiswa Riset SDGs — Kini Dibuka',
              desc: 'Beasiswa riset penuh untuk mahasiswa pascasarjana yang meneliti topik terkait SDGs. Pendaftaran ditutup 15 November 2026.',
              content: 'Beasiswa Riset SDGs mendukung penelitian pascasarjana tentang kemiskinan, pendidikan, iklim, ekosistem laut, dan pariwisata berkelanjutan. Penerima menerima tunjangan bulanan dan akses ke jejaring riset SDGs UNMAS.', author: 'Tim Riset SDGs UNMAS' } } },

    { id: 'announce-call-papers', type: 'announcement', date: '2026-08-28', goal: 17,
      text: {
        en: { title: 'Call for Papers: SDGs in the Archipelago',
              desc: 'Academic journal seeking papers on SDG localization in island and coastal contexts. Submission deadline: 30 December 2026.',
              content: 'The journal invites empirical and conceptual papers on how island nations and coastal regions adapt the SDGs to local realities. Accepted papers will be published in a special 2027 issue.', author: 'SDGs UNMAS Research Team' },
        id: { title: 'Call for Papers: SDGs di Nusantara',
              desc: 'Jurnal akademik mencari makalah tentang lokalisasi SDGs dalam konteks kepulauan dan pesisir. Batas pengiriman: 30 Desember 2026.',
              content: 'Jurnal mengundang makalah empiris dan konseptual tentang bagaimana negara kepulauan dan wilayah pesisir mengadaptasi SDGs terhadap realitas lokal. Makalah yang diterima akan diterbitkan dalam edisi khusus 2027.', author: 'Tim Riset SDGs UNMAS' } } },

    { id: 'announce-mou-ministry', type: 'announcement', date: '2026-08-15', goal: 17,
      text: {
        en: { title: 'New Partnership: SDGs UNMAS & Ministry of Tourism',
              desc: 'Memorandum of understanding signed to co-develop sustainable tourism indicators and training programs.',
              content: 'The partnership focuses on three areas: indicator development for sustainable tourism, joint training for village operators, and applied research on cultural tourism.', author: 'SDGs UNMAS' },
        id: { title: 'Kemitraan Baru: SDGs UNMAS & Kementerian Pariwisata',
              desc: 'Nota kesepahaman ditandatangani untuk mengembangkan bersama indikator pariwisata berkelanjutan dan program pelatihan.',
              content: 'Kemitraan ini berfokus pada tiga area: pengembangan indikator pariwisata berkelanjutan, pelatihan bersama untuk operator desa, dan riset terapan tentang pariwisata budaya.', author: 'SDGs UNMAS' } } },

    { id: 'announce-dashboard-launch', type: 'announcement', date: '2026-07-20', goal: 17,
      text: {
        en: { title: 'SDGs UNMAS Dashboard v2.0 Now Live',
              desc: 'A refreshed data platform with provincial comparison, indicator trends, and open API access.',
              content: 'The updated dashboard features a cleaner interface, faster loading, provincial breakdowns, and downloadable datasets. Feedback is welcome as we iterate.', author: 'SDGs UNMAS Data Team' },
        id: { title: 'Dashboard SDGs UNMAS v2.0 Kini Aktif',
              desc: 'Platform data yang diperbarui dengan perbandingan provinsi, tren indikator, dan akses API terbuka.',
              content: 'Dashboard yang diperbarui menampilkan antarmuka yang lebih bersih, pemuatan lebih cepat, rincian provinsi, dan kumpulan data yang dapat diunduh. Umpan balik sangat diterima seiring kami melakukan iterasi.', author: 'Tim Data SDGs UNMAS' } } },
  ];

  const newsGrid   = document.getElementById('newsGrid');
  const newsEmpty  = document.getElementById('newsEmpty');
  const newsCount  = document.getElementById('newsCount');
  const newsSearch = document.getElementById('newsSearch');
  const newsReset  = document.getElementById('newsReset');

  const newsModal         = document.getElementById('newsModal');
  const newsModalPanel    = newsModal?.querySelector('.news-modal__panel');
  const newsModalHeader   = document.getElementById('newsModalHeader');
  const newsModalIcon     = document.getElementById('newsModalIcon');
  const newsModalType     = document.getElementById('newsModalType');
  const newsModalTitle    = document.getElementById('newsModalTitle');
  const newsModalDesc     = document.getElementById('newsModalDesc');
  const newsModalContent  = document.getElementById('newsModalContent');
  const newsModalMeta     = document.getElementById('newsModalMeta');
  const newsModalCTA      = document.getElementById('newsModalCTA');

  const newsState = { filter: 'all', query: '' };
  let newsLastFocused = null;

  /** Format an ISO date string like "2026-10-12" for the current language. */
  function formatNewsDate(iso) {
    const [y, m, d] = iso.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    const locale = state.lang === 'id' ? 'id-ID' : 'en-US';
    return date.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function createNewsCard(item) {
    const type = NEWS_TYPES[item.type];
    const copy = item.text[state.lang];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'news-page-card reveal';
    btn.dataset.type = item.type;
    btn.dataset.itemId = item.id;
    btn.style.setProperty('--n-color', type.color);
    btn.setAttribute('aria-label', `${copy.title} — ${formatNewsDate(item.date)}`);

    // Extra meta line: event has time/venue, article has author, announcement has goal
    const metaRight = item.type === 'event' && item.venue
      ? item.venue
      : copy.author || '';

    btn.innerHTML = `
      <div class="news-page-card__header">
        <span class="news-page-card__icon">${NEWS_ICONS[type.icon]}</span>
        <span class="news-page-card__type">${t('newsPage.type.' + item.type)}</span>
      </div>
      <p class="news-page-card__date">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
        ${formatNewsDate(item.date)}${item.time ? ' · ' + item.time : ''}
      </p>
      <h3 class="news-page-card__title">${copy.title}</h3>
      <p class="news-page-card__desc">${copy.desc}</p>
      <div class="news-page-card__meta">
        <span>${metaRight}</span>
        <span class="news-page-card__meta-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </div>
    `;

    btn.addEventListener('click', () => openNewsModal(item.id));
    return btn;
  }

  function renderNews() {
    if (!newsGrid) return;
    newsGrid.innerHTML = '';
    // Sort by date, newest first
    [...NEWS_ITEMS]
      .sort((a, b) => b.date.localeCompare(a.date))
      .forEach(item => newsGrid.appendChild(createNewsCard(item)));
    newsGrid.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
    applyNewsFilter();
  }

  function applyNewsFilter() {
    if (!newsGrid) return;

    const q = newsState.query.trim().toLowerCase();
    const type = newsState.filter;
    let visible = 0;

    newsGrid.querySelectorAll('.news-page-card').forEach(card => {
      const item = NEWS_ITEMS.find(x => x.id === card.dataset.itemId);
      if (!item) return;
      const copy = item.text[state.lang];
      const matchesType = type === 'all' || item.type === type;
      const haystack = `${copy.title} ${copy.desc} ${copy.content} ${copy.author || ''} ${item.date} ${item.venue || ''}`.toLowerCase();
      const matchesQuery = !q || haystack.includes(q);
      const show = matchesType && matchesQuery;
      card.hidden = !show;
      if (show) visible++;
    });

    if (newsCount) newsCount.textContent = visible;
    if (newsEmpty) newsEmpty.hidden = visible > 0;
    if (newsGrid) newsGrid.style.display = visible > 0 ? '' : 'none';
  }

  function openNewsModal(itemId) {
    const item = NEWS_ITEMS.find(x => x.id === itemId);
    if (!item || !newsModal) return;

    const type = NEWS_TYPES[item.type];
    const copy = item.text[state.lang];

    newsModalHeader.style.setProperty('--n-color', type.color);
    newsModalPanel.style.setProperty('--n-color', type.color);
    newsModalIcon.innerHTML = NEWS_ICONS[type.icon];
    newsModalType.textContent = t('newsPage.type.' + item.type);
    newsModalTitle.textContent = copy.title;
    newsModalDesc.textContent = copy.desc;
    newsModalContent.textContent = copy.content || '';

    // Meta grid — different fields per type
    const metaRows = [];
    metaRows.push(`<div><dt>${t('newsPage.modal.date')}</dt><dd>${formatNewsDate(item.date)}</dd></div>`);
    if (item.time)    metaRows.push(`<div><dt>${t('newsPage.modal.time')}</dt><dd>${item.time}</dd></div>`);
    if (item.venue)   metaRows.push(`<div><dt>${t('newsPage.modal.venue')}</dt><dd>${item.venue}</dd></div>`);
    if (copy.author)  metaRows.push(`<div><dt>${t('newsPage.modal.author')}</dt><dd>${copy.author}</dd></div>`);
    if (item.goal)    metaRows.push(`<div><dt>${t('newsPage.modal.sdg')}</dt><dd>SDG ${item.goal}</dd></div>`);
    newsModalMeta.innerHTML = metaRows.join('');

    newsModalCTA.href = `#news-${item.id}`;

    newsLastFocused = document.activeElement;
    newsModal.hidden = false;
    document.body.classList.add('has-modal');
    setTimeout(() => newsModalPanel?.focus?.(), 30);
  }

  function closeNewsModal() {
    if (!newsModal || newsModal.hidden) return;
    newsModal.hidden = true;
    document.body.classList.remove('has-modal');
    newsLastFocused?.focus?.();
  }

  newsModal?.querySelectorAll('[data-close-news]').forEach(el => {
    el.addEventListener('click', closeNewsModal);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && newsModal && !newsModal.hidden) {
      closeNewsModal();
      return;
    }
    if (e.key !== 'Tab' || !newsModal || newsModal.hidden) return;
    const focusables = newsModal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const last  = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  if (newsGrid) {
    document.querySelectorAll('.catalog-toolbar .filter-btn').forEach(btn => {
      const f = btn.dataset.filter;
      if (!['all', 'article', 'event', 'announcement'].includes(f)) return;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.catalog-toolbar .filter-btn').forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');
        newsState.filter = f;
        applyNewsFilter();
      });
    });

    newsSearch?.addEventListener('input', e => {
      newsState.query = e.target.value;
      applyNewsFilter();
    });

    newsReset?.addEventListener('click', () => {
      newsState.filter = 'all';
      newsState.query = '';
      if (newsSearch) newsSearch.value = '';
      document.querySelectorAll('.catalog-toolbar .filter-btn').forEach(b => {
        const active = b.dataset.filter === 'all';
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });
      applyNewsFilter();
    });
  }

    /* ═══════════════════════════════════════════════════════════════
     16c. COMMUNITY PAGE (community.html)
     ═══════════════════════════════════════════════════════════════ */
  const COMMUNITY_TYPES = {
    center:  { color: '#1F7A48', icon: 'building' },
    expert:  { color: '#C9A227', icon: 'user' },
    partner: { color: '#3F9463', icon: 'handshake' },
    agenda:  { color: '#0C4325', icon: 'calendar' },
  };

  const COMMUNITY_ICONS = {
    building:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M4 21V10l8-6 8 6v11M9 21v-6h6v6"/></svg>',
    user:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 20v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 20v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    handshake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 20a4 4 0 0 1 0-8h2a4 4 0 0 1 0 8h-2Z"/><path d="M13 4a4 4 0 0 1 0 8h-2a4 4 0 0 1 0-8h2Z"/></svg>',
    calendar:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  };

  const COMMUNITY_ITEMS = [
    /* ── SDGs Centers ── */
    { id: 'center-unmas', type: 'center', region: 'bali',
      text: {
        en: { title: 'SDGs Center — Universitas Mahasaraswati Denpasar',
              desc: 'Host institution of SDGs UNMAS. Research, community service, and advocacy for the SDGs in Bali.',
              content: 'UNMAS is the host of this Knowledge Hub. Its SDGs Center coordinates research on sustainable tourism, coastal protection, and inclusive local economies, with active programs across nine regencies in Bali.',
              coordinator: 'Dr. Ni Luh Made Wijayanti', founded: '2018' },
        id: { title: 'SDGs Center — Universitas Mahasaraswati Denpasar',
              desc: 'Institusi penyelenggara SDGs UNMAS. Riset, pengabdian, dan advokasi SDGs di Bali.',
              content: 'UNMAS adalah penyelenggara Knowledge Hub ini. SDGs Center-nya mengoordinasikan riset tentang pariwisata berkelanjutan, perlindungan pesisir, dan ekonomi lokal inklusif, dengan program aktif di sembilan kabupaten di Bali.',
              coordinator: 'Dr. Ni Luh Made Wijayanti', founded: '2018' } } },

    { id: 'center-udayana', type: 'center', region: 'bali',
      text: {
        en: { title: 'SDGs Center — Universitas Udayana',
              desc: 'Leading SDG research on coastal ecosystems, public health, and Balinese cultural preservation.',
              content: 'Udayana\'s SDGs Center focuses on marine conservation, public health, and cultural heritage — with strong programs on SDG 3, 6, 14, and 15.',
              coordinator: 'Prof. Dr. I Wayan Sukadana', founded: '2017' },
        id: { title: 'SDGs Center — Universitas Udayana',
              desc: 'Riset SDG terdepan tentang ekosistem pesisir, kesehatan publik, dan pelestarian budaya Bali.',
              content: 'SDGs Center Udayana berfokus pada konservasi laut, kesehatan publik, dan warisan budaya — dengan program kuat pada SDG 3, 6, 14, dan 15.',
              coordinator: 'Prof. Dr. I Wayan Sukadana', founded: '2017' } } },

    { id: 'center-ui', type: 'center', region: 'jakarta',
      text: {
        en: { title: 'SDGs Center — Universitas Indonesia',
              desc: 'National research hub for SDG policy, urban sustainability, and public health.',
              content: 'UI\'s SDGs Center is one of Indonesia\'s largest academic SDG centers, known for policy analysis, urban climate research, and large-scale health studies.',
              coordinator: 'Prof. Dr. Ir. Budi Santoso', founded: '2016' },
        id: { title: 'SDGs Center — Universitas Indonesia',
              desc: 'Pusat riset nasional untuk kebijakan SDGs, keberlanjutan perkotaan, dan kesehatan publik.',
              content: 'SDGs Center UI adalah salah satu pusat SDGs akademik terbesar di Indonesia, dikenal karena analisis kebijakan, riset iklim perkotaan, dan studi kesehatan skala besar.',
              coordinator: 'Prof. Dr. Ir. Budi Santoso', founded: '2016' } } },

    { id: 'center-ugm', type: 'center', region: 'yogyakarta',
      text: {
        en: { title: 'SDGs Center — Universitas Gadjah Mada',
              desc: 'Pioneering research on poverty, food security, and rural development across Indonesia.',
              content: 'UGM\'s SDGs Center bridges research and policy on poverty reduction, food systems, and rural transformation — with field programs across Java and Eastern Indonesia.',
              coordinator: 'Prof. Dr. Sri Rahayu', founded: '2016' },
        id: { title: 'SDGs Center — Universitas Gadjah Mada',
              desc: 'Riset perintis tentang kemiskinan, ketahanan pangan, dan pembangunan pedesaan di Indonesia.',
              content: 'SDGs Center UGM menjembatani riset dan kebijakan tentang pengurangan kemiskinan, sistem pangan, dan transformasi pedesaan — dengan program lapangan di Jawa dan Indonesia Timur.',
              coordinator: 'Prof. Dr. Sri Rahayu', founded: '2016' } } },

    { id: 'center-itb', type: 'center', region: 'bandung',
      text: {
        en: { title: 'SDGs Center — Institut Teknologi Bandung',
              desc: 'Technology, infrastructure, and clean energy research aligned with SDG 7, 9, and 11.',
              content: 'ITB\'s SDGs Center drives research on renewable energy systems, smart cities, and sustainable infrastructure — bridging engineering and policy.',
              coordinator: 'Dr. Eng. Andi Wirawan', founded: '2018' },
        id: { title: 'SDGs Center — Institut Teknologi Bandung',
              desc: 'Riset teknologi, infrastruktur, dan energi bersih selaras SDG 7, 9, dan 11.',
              content: 'SDGs Center ITB mendorong riset tentang sistem energi terbarukan, kota pintar, dan infrastruktur berkelanjutan — menjembatani teknik dan kebijakan.',
              coordinator: 'Dr. Eng. Andi Wirawan', founded: '2018' } } },

    { id: 'center-unair', type: 'center', region: 'surabaya',
      text: {
        en: { title: 'SDGs Center — Universitas Airlangga',
              desc: 'Health systems, nutrition, and community medicine research driving SDG 3 and SDG 2.',
              content: 'Airlangga\'s SDGs Center specializes in public health, nutrition, and maternal-child health — contributing evidence to national stunting-reduction efforts.',
              coordinator: 'Prof. Dr. Nila Kusuma', founded: '2017' },
        id: { title: 'SDGs Center — Universitas Airlangga',
              desc: 'Riset sistem kesehatan, gizi, dan kedokteran komunitas untuk SDG 3 dan SDG 2.',
              content: 'SDGs Center Airlangga berspesialisasi pada kesehatan publik, gizi, dan kesehatan ibu-anak — menyumbang bukti untuk upaya nasional penurunan stunting.',
              coordinator: 'Prof. Dr. Nila Kusuma', founded: '2017' } } },

    /* ── Experts ── */
    { id: 'expert-wayan-tourism', type: 'expert', region: 'bali',
      text: {
        en: { title: 'Dr. I Wayan Sutrisna, M.Si.',
              desc: 'Sustainable tourism &amp; local economic development. SDG 8, 11, 12.',
              content: 'Dr. Sutrisna leads UNMAS research on sustainable tourism villages and MSME digitalization. He advises the Bali provincial government on tourism-linked SDG strategy.',
              expertise: 'Sustainable Tourism, Local Economy', email: 'wayan.sutrisna@unmas.ac.id' },
        id: { title: 'Dr. I Wayan Sutrisna, M.Si.',
              desc: 'Pariwisata berkelanjutan &amp; pengembangan ekonomi lokal. SDG 8, 11, 12.',
              content: 'Dr. Sutrisna memimpin riset UNMAS tentang desa wisata berkelanjutan dan digitalisasi UMKM. Ia menjadi penasihat pemerintah Provinsi Bali tentang strategi SDGs terkait pariwisata.',
              expertise: 'Pariwisata Berkelanjutan, Ekonomi Lokal', email: 'wayan.sutrisna@unmas.ac.id' } } },

    { id: 'expert-marine', type: 'expert', region: 'bali',
      text: {
        en: { title: 'Prof. Dr. Ni Made Ayu Lestari',
              desc: 'Marine ecology, coral reef restoration, and coastal community resilience. SDG 14.',
              content: 'Prof. Lestari is a marine ecologist with two decades of research on coral restoration and marine protected areas in Bali and Nusa Tenggara.',
              expertise: 'Marine Ecology, Coastal Conservation', email: 'ayu.lestari@unmas.ac.id' },
        id: { title: 'Prof. Dr. Ni Made Ayu Lestari',
              desc: 'Ekologi laut, restorasi terumbu karang, dan ketahanan komunitas pesisir. SDG 14.',
              content: 'Prof. Lestari adalah ahli ekologi laut dengan dua dekade riset tentang restorasi karang dan kawasan konservasi laut di Bali dan Nusa Tenggara.',
              expertise: 'Ekologi Laut, Konservasi Pesisir', email: 'ayu.lestari@unmas.ac.id' } } },

    { id: 'expert-gender', type: 'expert', region: 'bali',
      text: {
        en: { title: 'Dr. Made Sri Utami, M.A.',
              desc: 'Gender studies, women\'s economic empowerment, and inclusive governance. SDG 5, 10.',
              content: 'Dr. Utami researches gender equality in Bali\'s traditional institutions and rural economies, with published work on women-led MSMEs.',
              expertise: 'Gender Equality, Inclusive Development', email: 'sri.utami@unmas.ac.id' },
        id: { title: 'Dr. Made Sri Utami, M.A.',
              desc: 'Studi gender, pemberdayaan ekonomi perempuan, dan tata kelola inklusif. SDG 5, 10.',
              content: 'Dr. Utami meneliti kesetaraan gender di institusi tradisional dan ekonomi pedesaan Bali, dengan karya terbit tentang UMKM yang dipimpin perempuan.',
              expertise: 'Kesetaraan Gender, Pembangunan Inklusif', email: 'sri.utami@unmas.ac.id' } } },

    { id: 'expert-climate', type: 'expert', region: 'bali',
      text: {
        en: { title: 'Ir. Ketut Gede Wirawan, M.T.',
              desc: 'Climate adaptation, disaster risk reduction, and green infrastructure. SDG 13.',
              content: 'Ir. Wirawan focuses on climate resilience for island economies, working with local governments on adaptation planning and disaster preparedness.',
              expertise: 'Climate Adaptation, Disaster Resilience', email: 'ketut.wirawan@unmas.ac.id' },
        id: { title: 'Ir. Ketut Gede Wirawan, M.T.',
              desc: 'Adaptasi iklim, pengurangan risiko bencana, dan infrastruktur hijau. SDG 13.',
              content: 'Ir. Wirawan berfokus pada ketahanan iklim untuk ekonomi pulau, bekerja sama dengan pemerintah daerah dalam perencanaan adaptasi dan kesiapsiagaan bencana.',
              expertise: 'Adaptasi Iklim, Ketahanan Bencana', email: 'ketut.wirawan@unmas.ac.id' } } },

    { id: 'expert-education', type: 'expert', region: 'bali',
      text: {
        en: { title: 'Dr. Ni Kadek Ratna Dewi, M.Pd.',
              desc: 'Quality education, teacher training, and learning innovation. SDG 4.',
              content: 'Dr. Dewi leads UNMAS\'s education research, with programs on teacher upskilling, curriculum localization, and digital learning in rural Bali.',
              expertise: 'Education Policy, Teacher Development', email: 'ratna.dewi@unmas.ac.id' },
        id: { title: 'Dr. Ni Kadek Ratna Dewi, M.Pd.',
              desc: 'Pendidikan berkualitas, pelatihan guru, dan inovasi pembelajaran. SDG 4.',
              content: 'Dr. Dewi memimpin riset pendidikan UNMAS, dengan program peningkatan keterampilan guru, lokalisasi kurikulum, dan pembelajaran digital di Bali pedesaan.',
              expertise: 'Kebijakan Pendidikan, Pengembangan Guru', email: 'ratna.dewi@unmas.ac.id' } } },

    { id: 'expert-waste', type: 'expert', region: 'bali',
      text: {
        en: { title: 'I Made Adi Purnama, S.T., M.Sc.',
              desc: 'Waste management, circular economy, and community-based recycling. SDG 11, 12.',
              content: 'I Made Adi Purnama specializes in community-driven waste systems and circular economy models, having designed Bali\'s largest village waste bank network.',
              expertise: 'Circular Economy, Waste Systems', email: 'adi.purnama@unmas.ac.id' },
        id: { title: 'I Made Adi Purnama, S.T., M.Sc.',
              desc: 'Pengelolaan sampah, ekonomi sirkular, dan daur ulang berbasis komunitas. SDG 11, 12.',
              content: 'I Made Adi Purnama berspesialisasi dalam sistem sampah berbasis masyarakat dan model ekonomi sirkular, setelah merancang jaringan bank sampah desa terbesar di Bali.',
              expertise: 'Ekonomi Sirkular, Sistem Sampah', email: 'adi.purnama@unmas.ac.id' } } },

    /* ── Partners ── */
    { id: 'partner-waste-bank', type: 'partner', region: 'bali',
      text: {
        en: { title: 'Bali Village Waste Bank Network',
              desc: 'Community network of 42 village-level waste banks across Bali.',
              content: 'The network coordinates collection, recycling, and upcycling across 42 villages, generating income for over 340 households and diverting 12 tonnes of waste monthly.',
              members: '340+ households', year: '2020' },
        id: { title: 'Jaringan Bank Sampah Desa Bali',
              desc: 'Jejaring komunitas 42 bank sampah tingkat desa di Bali.',
              content: 'Jejaring ini mengoordinasikan pengumpulan, daur ulang, dan upcycle di 42 desa, menghasilkan pendapatan untuk lebih dari 340 rumah tangga dan mengalihkan 12 ton sampah setiap bulan.',
              members: '340+ rumah tangga', year: '2020' } } },

    { id: 'partner-cleanup', type: 'partner', region: 'bali',
      text: {
        en: { title: 'Coastal Cleanup Collective — South Bali',
              desc: 'Monthly coastal cleanups coordinating 22 schools, 8 hotels, and local fisherfolk.',
              content: 'The collective runs monthly coastal cleanups in South Bali, coordinating schools, hotels, fisherfolk, and volunteers to remove plastic waste and monitor coral health.',
              members: '32 organizations', year: '2019' },
        id: { title: 'Kolektif Bersih Pantai — Bali Selatan',
              desc: 'Pembersihan pantai bulanan dengan koordinasi 22 sekolah, 8 hotel, dan nelayan lokal.',
              content: 'Kolektif ini menyelenggarakan pembersihan pantai bulanan di Bali Selatan, mengoordinasikan sekolah, hotel, nelayan, dan relawan untuk menghilangkan sampah plastik dan memantau kesehatan karang.',
              members: '32 organisasi', year: '2019' } } },

    { id: 'partner-youth', type: 'partner', region: 'bali',
      text: {
        en: { title: 'Youth SDGs Ambassadors — UNMAS',
              desc: '120+ university students trained as SDG advocates across Bali.',
              content: 'The ambassadors program trains students on SDG literacy, community organizing, and project design. Members run campus campaigns and community workshops throughout Bali.',
              members: '120+ students', year: '2018' },
        id: { title: 'Duta SDGs Muda — UNMAS',
              desc: '120+ mahasiswa dilatih sebagai advokat SDGs di seluruh Bali.',
              content: 'Program duta melatih mahasiswa tentang literasi SDGs, pengorganisasian komunitas, dan desain proyek. Anggota menjalankan kampanye kampus dan lokakarya komunitas di seluruh Bali.',
              members: '120+ mahasiswa', year: '2018' } } },

    { id: 'partner-tourism', type: 'partner', region: 'bali',
      text: {
        en: { title: 'Sustainable Tourism Village Network',
              desc: 'Ten villages collaborating on cultural tourism and economic empowerment.',
              content: 'The network connects ten villages across Bali to share best practices in cultural tourism, waste management, and local enterprise development.',
              members: '10 villages', year: '2021' },
        id: { title: 'Jaringan Desa Wisata Berkelanjutan',
              desc: 'Sepuluh desa berkolaborasi dalam pariwisata budaya dan pemberdayaan ekonomi.',
              content: 'Jejaring ini menghubungkan sepuluh desa di seluruh Bali untuk berbagi praktik baik dalam pariwisata budaya, pengelolaan sampah, dan pengembangan usaha lokal.',
              members: '10 desa', year: '2021' } } },

    { id: 'partner-renewable', type: 'partner', region: 'bali',
      text: {
        en: { title: 'Community Renewable Energy Cooperative',
              desc: 'Rooftop solar cooperative serving 180 rural households with clean energy.',
              content: 'The cooperative installs and maintains rooftop solar systems for rural households, enabling affordable clean energy access aligned with SDG 7.',
              members: '180 households', year: '2022' },
        id: { title: 'Koperasi Energi Terbarukan Komunitas',
              desc: 'Koperasi solar atap yang melayani 180 rumah tangga pedesaan dengan energi bersih.',
              content: 'Koperasi memasang dan memelihara sistem solar atap untuk rumah tangga pedesaan, memungkinkan akses energi bersih yang terjangkau selaras dengan SDG 7.',
              members: '180 rumah tangga', year: '2022' } } },

    /* ── Agenda (recurring community activities) ── */
    { id: 'agenda-monthly-meeting', type: 'agenda', region: 'bali', date: 'Monthly · 3rd Tuesday', time: '14:00–16:00',
      text: {
        en: { title: 'SDGs Center Monthly Coordination Meeting',
              desc: 'Open meeting for partners and researchers to review ongoing projects and plan upcoming activities.',
              content: 'Every third Tuesday, SDGs Center UNMAS hosts an open coordination meeting. Partners, researchers, and student ambassadors share progress updates, flag challenges, and align on upcoming workstreams.',
              location: 'UNMAS Denpasar' },
        id: { title: 'Rapat Koordinasi Bulanan SDGs Center',
              desc: 'Rapat terbuka untuk mitra dan peneliti guna meninjau proyek berjalan dan merencanakan kegiatan mendatang.',
              content: 'Setiap Selasa ketiga, SDGs Center UNMAS menyelenggarakan rapat koordinasi terbuka. Mitra, peneliti, dan duta mahasiswa berbagi pembaruan progres, mengangkat tantangan, dan menyelaraskan alur kerja mendatang.',
              location: 'UNMAS Denpasar' } } },

    { id: 'agenda-research-seminar', type: 'agenda', region: 'bali', date: 'Bi-weekly · Fridays', time: '15:00–16:30',
      text: {
        en: { title: 'SDGs Research Seminar Series',
              desc: 'Bi-weekly research seminar featuring UNMAS faculty, visiting scholars, and partner institutions.',
              content: 'Alternating Fridays feature a research seminar on topics ranging from marine ecology to education policy. Open to all; recordings archived on the Video Library.',
              location: 'UNMAS Denpasar · Hybrid' },
        id: { title: 'Seri Seminar Riset SDGs',
              desc: 'Seminar riset dua mingguan menampilkan fakultas UNMAS, sarjana tamu, dan institusi mitra.',
              content: 'Setiap Jumat bergantian menampilkan seminar riset tentang topik mulai dari ekologi laut hingga kebijakan pendidikan. Terbuka untuk umum; rekaman diarsipkan di Video Library.',
              location: 'UNMAS Denpasar · Hybrid' } } },

    { id: 'agenda-community-workshop', type: 'agenda', region: 'bali', date: 'Monthly · Last Saturday', time: '08:00–12:00',
      text: {
        en: { title: 'Community SDG Literacy Workshop',
              desc: 'Half-day workshop for village leaders, teachers, and local organizers on SDG concepts and local action.',
              content: 'Held on the last Saturday of each month, this workshop introduces the SDGs to community leaders and helps them design local action plans. Conducted in Bahasa Indonesia.',
              location: 'Rotating villages across Bali' },
        id: { title: 'Lokakarya Literasi SDGs Komunitas',
              desc: 'Lokakarya setengah hari untuk pemimpin desa, guru, dan penggerak lokal tentang konsep SDGs dan aksi lokal.',
              content: 'Diadakan pada Sabtu terakhir setiap bulan, lokakarya ini memperkenalkan SDGs kepada pemimpin komunitas dan membantu mereka merancang rencana aksi lokal. Dilaksanakan dalam Bahasa Indonesia.',
              location: 'Desa bergilir di seluruh Bali' } } },

    { id: 'agenda-youth-circle', type: 'agenda', region: 'bali', date: 'Weekly · Wednesdays', time: '17:00–18:30',
      text: {
        en: { title: 'Youth SDG Circle',
              desc: 'Weekly meetup for student SDG ambassadors to share project updates and co-create campaigns.',
              content: 'The Youth SDG Circle meets every Wednesday for informal project updates, skill-sharing, and campaign planning. Open to any enrolled student in Bali.',
              location: 'UNMAS Denpasar · Café Area' },
        id: { title: 'Lingkar Pemuda SDGs',
              desc: 'Pertemuan mingguan untuk duta SDGs mahasiswa guna berbagi pembaruan proyek dan bersama menciptakan kampanye.',
              content: 'Lingkar Pemuda SDGs bertemu setiap Rabu untuk pembaruan proyek informal, berbagi keterampilan, dan perencanaan kampanye. Terbuka untuk mahasiswa aktif di Bali.',
              location: 'UNMAS Denpasar · Area Kafe' } } },
  ];

  const communityGrid   = document.getElementById('communityGrid');
  const communityEmpty  = document.getElementById('communityEmpty');
  const communityCount  = document.getElementById('communityCount');
  const communitySearch = document.getElementById('communitySearch');
  const communityReset  = document.getElementById('communityReset');

  const communityModal         = document.getElementById('communityModal');
  const communityModalPanel    = communityModal?.querySelector('.community-modal__panel');
  const communityModalHeader   = document.getElementById('communityModalHeader');
  const communityModalIcon     = document.getElementById('communityModalIcon');
  const communityModalType     = document.getElementById('communityModalType');
  const communityModalTitle    = document.getElementById('communityModalTitle');
  const communityModalDesc     = document.getElementById('communityModalDesc');
  const communityModalContent  = document.getElementById('communityModalContent');
  const communityModalMeta     = document.getElementById('communityModalMeta');
  const communityModalCTA      = document.getElementById('communityModalCTA');

  const communityState = { filter: 'all', query: '' };
  let communityLastFocused = null;

  const REGION_LABELS = {
    bali:       { en: 'Bali', id: 'Bali' },
    jakarta:    { en: 'DKI Jakarta', id: 'DKI Jakarta' },
    yogyakarta: { en: 'DI Yogyakarta', id: 'DI Yogyakarta' },
    bandung:    { en: 'Bandung', id: 'Bandung' },
    surabaya:   { en: 'Surabaya', id: 'Surabaya' },
  };

  function createCommunityCard(item) {
    const type = COMMUNITY_TYPES[item.type];
    const copy = item.text[state.lang];
    const region = REGION_LABELS[item.region] || { en: item.region, id: item.region };

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'community-page-card reveal';
    btn.dataset.type = item.type;
    btn.dataset.itemId = item.id;
    btn.style.setProperty('--c-color', type.color);
    btn.setAttribute('aria-label', `${copy.title} — ${region[state.lang]}`);

    // Right-side meta line
    let metaRight = '';
    if (item.type === 'center' && copy.coordinator) metaRight = copy.coordinator;
    else if (item.type === 'expert' && copy.expertise) metaRight = copy.expertise;
    else if (item.type === 'partner' && copy.members) metaRight = copy.members;
    else if (item.type === 'agenda' && item.date) metaRight = item.date;

    // Region/date line
    const subLine = item.type === 'agenda' && item.date
      ? `<p class="community-page-card__region"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>${item.date}${item.time ? ' · ' + item.time : ''}</p>`
      : `<p class="community-page-card__region"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>${region[state.lang]}</p>`;

    btn.innerHTML = `
      <div class="community-page-card__header">
        <span class="community-page-card__icon">${COMMUNITY_ICONS[type.icon]}</span>
        <span class="community-page-card__type">${t('communityPage.type.' + item.type)}</span>
      </div>
      ${subLine}
      <h3 class="community-page-card__title">${copy.title}</h3>
      <p class="community-page-card__desc">${copy.desc}</p>
      <div class="community-page-card__meta">
        <span>${metaRight}</span>
        <span class="community-page-card__meta-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </span>
      </div>
    `;

    btn.addEventListener('click', () => openCommunityModal(item.id));
    return btn;
  }

  function renderCommunity() {
    if (!communityGrid) return;
    communityGrid.innerHTML = '';
    COMMUNITY_ITEMS.forEach(item => communityGrid.appendChild(createCommunityCard(item)));
    communityGrid.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
    applyCommunityFilter();
  }

  function applyCommunityFilter() {
    if (!communityGrid) return;

    const q = communityState.query.trim().toLowerCase();
    const type = communityState.filter;
    let visible = 0;

    communityGrid.querySelectorAll('.community-page-card').forEach(card => {
      const item = COMMUNITY_ITEMS.find(x => x.id === card.dataset.itemId);
      if (!item) return;
      const copy = item.text[state.lang];
      const matchesType = type === 'all' || item.type === type;
      const haystack = `${copy.title} ${copy.desc} ${copy.content || ''} ${copy.coordinator || ''} ${copy.expertise || ''} ${copy.members || ''} ${item.date || ''} ${item.region || ''}`.toLowerCase();
      const matchesQuery = !q || haystack.includes(q);
      const show = matchesType && matchesQuery;
      card.hidden = !show;
      if (show) visible++;
    });

    if (communityCount) communityCount.textContent = visible;
    if (communityEmpty) communityEmpty.hidden = visible > 0;
    if (communityGrid) communityGrid.style.display = visible > 0 ? '' : 'none';
  }

  function openCommunityModal(itemId) {
    const item = COMMUNITY_ITEMS.find(x => x.id === itemId);
    if (!item || !communityModal) return;

    const type = COMMUNITY_TYPES[item.type];
    const copy = item.text[state.lang];
    const region = REGION_LABELS[item.region] || { en: item.region, id: item.region };

    communityModalHeader.style.setProperty('--c-color', type.color);
    communityModalPanel.style.setProperty('--c-color', type.color);
    communityModalIcon.innerHTML = COMMUNITY_ICONS[type.icon];
    communityModalType.textContent = t('communityPage.type.' + item.type);
    communityModalTitle.textContent = copy.title;
    communityModalDesc.textContent = copy.desc;
    communityModalContent.textContent = copy.content || '';

    const metaRows = [];
    metaRows.push(`<div><dt>${t('communityPage.modal.region')}</dt><dd>${region[state.lang]}</dd></div>`);
    if (copy.coordinator) metaRows.push(`<div><dt>${t('communityPage.modal.coordinator')}</dt><dd>${copy.coordinator}</dd></div>`);
    if (copy.founded)     metaRows.push(`<div><dt>${t('communityPage.modal.founded')}</dt><dd>${copy.founded}</dd></div>`);
    if (copy.expertise)   metaRows.push(`<div><dt>${t('communityPage.modal.expertise')}</dt><dd>${copy.expertise}</dd></div>`);
    if (copy.email)       metaRows.push(`<div><dt>${t('communityPage.modal.email')}</dt><dd>${copy.email}</dd></div>`);
    if (copy.members)     metaRows.push(`<div><dt>${t('communityPage.modal.members')}</dt><dd>${copy.members}</dd></div>`);
    if (copy.year)        metaRows.push(`<div><dt>${t('communityPage.modal.since')}</dt><dd>${copy.year}</dd></div>`);
    if (item.date)        metaRows.push(`<div><dt>${t('communityPage.modal.schedule')}</dt><dd>${item.date}${item.time ? ' · ' + item.time : ''}</dd></div>`);
    if (copy.location)    metaRows.push(`<div><dt>${t('communityPage.modal.location')}</dt><dd>${copy.location}</dd></div>`);
    communityModalMeta.innerHTML = metaRows.join('');

    // CTA: mailto for experts/partners, contact for others
    if (copy.email) {
      communityModalCTA.href = `mailto:${copy.email}`;
    } else {
      communityModalCTA.href = `mailto:sdgs@unmas.ac.id?subject=Inquiry about ${encodeURIComponent(copy.title)}`;
    }

    communityLastFocused = document.activeElement;
    communityModal.hidden = false;
    document.body.classList.add('has-modal');
    setTimeout(() => communityModalPanel?.focus?.(), 30);
  }

  function closeCommunityModal() {
    if (!communityModal || communityModal.hidden) return;
    communityModal.hidden = true;
    document.body.classList.remove('has-modal');
    communityLastFocused?.focus?.();
  }

  communityModal?.querySelectorAll('[data-close-community]').forEach(el => {
    el.addEventListener('click', closeCommunityModal);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && communityModal && !communityModal.hidden) {
      closeCommunityModal();
      return;
    }
    if (e.key !== 'Tab' || !communityModal || communityModal.hidden) return;
    const focusables = communityModal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const last  = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  if (communityGrid) {
    document.querySelectorAll('.catalog-toolbar .filter-btn').forEach(btn => {
      const f = btn.dataset.filter;
      if (!['all', 'center', 'expert', 'partner', 'agenda'].includes(f)) return;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.catalog-toolbar .filter-btn').forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');
        communityState.filter = f;
        applyCommunityFilter();
      });
    });

    communitySearch?.addEventListener('input', e => {
      communityState.query = e.target.value;
      applyCommunityFilter();
    });

    communityReset?.addEventListener('click', () => {
      communityState.filter = 'all';
      communityState.query = '';
      if (communitySearch) communitySearch.value = '';
      document.querySelectorAll('.catalog-toolbar .filter-btn').forEach(b => {
        const active = b.dataset.filter === 'all';
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', String(active));
      });
      applyCommunityFilter();
    });
  }

  /* Expose for setLanguage() */
  window.__sdgsRenderCommunity = renderCommunity;

  /* Expose for setLanguage() */
  window.__sdgsRenderNews = renderNews;

  /* ═══════════════════════════════════════════════════════════════
     17. INIT  (must run LAST — after everything is defined)
     ═══════════════════════════════════════════════════════════════ */
  function init() {
    applyI18n();
    renderGoalsGrid();      // index.html
    renderCatalog();        // goals.html
    initDataPage();         // data.html
    renderKnowledge();      // knowledge.html
    renderNews();           // news.html
    renderCommunity();      // community.html
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

   
})();
