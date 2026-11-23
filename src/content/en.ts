import type { Content } from './types'

const en: Content = {
  meta: {
    title: 'Lars Eble · Software Engineer',
    description: 'Software engineer and CTO building native, desktop and cloud software for live esports broadcasts.',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    headline: 'Software Engineering · Architecture · Technical Leadership',
    summary:
      'Software engineer and CTO who built Windows tools for live esports broadcast graphics and camera control. Combines architecture leadership with substantial hands-on native, desktop and cloud development.',
    location: 'Munich, Germany · Open to relocation',
    cvLabel: 'Download CV (PDF)',
    cvHref: '/cv/lars-eble-cv-en.pdf',
  },
  about: {
    title: 'About',
    paragraphs: [
      'I started League Broadcast as a hobby project in 2020 and turned it into BlueBottle GmbH in 2024. As founder and CTO I own product and technology strategy and lead a team of up to seven, while still writing a large share of the code myself: the C#/.NET client, the AWS backend and native C++ scene and camera systems.',
      'My background is in games engineering (M.Sc., TU Munich). Much of my work is low-level, such as reverse engineering, native interop and concurrency, shipped as products that run live on air.',
    ],
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        role: 'Founder & CTO',
        company: 'BlueBottle GmbH',
        period: 'May 2024 – Present',
        location: 'Munich, Germany',
        link: { label: 'leaguebroadcast.gg', href: 'https://leaguebroadcast.gg' },
        bullets: [
          'Owned product and technology strategy; built and led a startup team of up to seven, covering hiring, mentoring, reviews, priorities, releases and customer delivery.',
          'Owned architecture across native Windows, desktop and cloud systems; personally implemented the C#/.NET client, AWS services and C++ scene/multi-camera systems.',
          'Built game-state processing and native/desktop communication over socket IPC; implemented authentication, licensing and payments, with concurrency safeguards, regression tests and static analysis.',
          'Built native C++ scene and multi-camera control to render synchronized views within one game client; one PC and operator replace a broadcast setup that required five of each.',
          'Reverse engineered League of Legends/Packman and led team packet recovery; automated updates and CI builds, completing patch compatibility in under an hour, ready before public game releases.',
          'Integrated local LLM completion and MCP agents into product scripting; automated feedback triage into pull-request workflows.',
        ],
      },
      {
        role: 'Game Designer & Programmer',
        company: 'Irox Games UG',
        period: 'Jan 2021 – Apr 2024',
        location: 'Munich, Germany',
        bullets: [
          'Designed and programmed EcoGnomix gameplay in Unity/C# within a development team.',
          'Independently designed and delivered a multiplayer game for a corporate customer using PlayCanvas, TypeScript, HTML/CSS and AWS.',
        ],
      },
    ],
  },
  projects: {
    title: 'Projects',
    items: [
      {
        name: 'League Broadcast',
        tagline: 'Broadcast graphics and camera control for League of Legends esports',
        description:
          'Started as an open-source overlay tool in 2020 and grew into BlueBottle’s commercial product. Covers champion select and in-game overlays, game-state processing, and native multi-camera control that lets one PC and operator replace a five-PC observer setup.',
        tech: ['C#/.NET', 'C++', 'Vue 3', 'AWS', 'Socket IPC'],
        links: [
          { label: 'Website', href: 'https://leaguebroadcast.gg' },
          { label: 'Original repo', href: 'https://github.com/floh22/LeagueBroadcast' },
        ],
      },
      {
        name: 'Farsight',
        tagline: 'Native Node.js module for League of Legends spectator data',
        description:
          'Passive memory reader exposing game state that the public API does not provide: game time, champions, turrets, inhibitors and per-unit stats, through a JavaScript interface over native code.',
        tech: ['C++', 'Node.js native addon', 'Reverse engineering'],
        links: [{ label: 'GitHub', href: 'https://github.com/floh22/native-farsight-module' }],
      },
      {
        name: 'middiff',
        tagline: 'Coaching and replay analysis',
        description:
          'Coaching product with asynchronous replay processing, PostgreSQL queues, patch-aware parsers and Arrow/Parquet exports. Contributed Rust/Actix account-linking and analysis APIs.',
        tech: ['Rust', 'C++', 'PostgreSQL', 'Arrow/Parquet'],
        links: [],
      },
      {
        name: 'AI Observer Prototype',
        tagline: 'Camera prediction for esports broadcasts',
        description:
          'PyTorch transformer models that predict observer camera movement, covering replay-data preparation, training, evaluation and local inference.',
        tech: ['Python', 'PyTorch', 'Transformers'],
        links: [],
      },
      {
        name: 'EcoGnomix',
        tagline: 'Economy game at Irox Games',
        description: 'Designed and programmed gameplay in Unity/C# as part of the development team.',
        tech: ['Unity', 'C#'],
        links: [{ label: 'Website', href: 'https://irox-games.com/ecognomix' }],
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      { name: 'Programming languages', items: 'C++, C#, TypeScript/JavaScript, Python, Rust' },
      { name: 'Systems & networking', items: 'Win32, native/managed interop, socket IPC, concurrency, protocol analysis' },
      { name: 'Game development', items: 'Unity/C#, PlayCanvas, multiplayer gameplay, low-level engine work' },
      { name: 'Product & cloud', items: '.NET, Vue 3, FlatBuffers, AWS, DynamoDB, PostgreSQL, GitHub Actions' },
      { name: 'AI tooling', items: 'Local LLMs, MCP, AI-assisted development and automation, PyTorch' },
      { name: 'Languages', items: 'English and German, both native' },
    ],
  },
  education: {
    title: 'Education',
    school: 'Technical University of Munich',
    location: 'Munich, Germany',
    degrees: [
      { name: 'M.Sc. Computer Science: Games Engineering', date: 'Apr 2024' },
      { name: 'B.Sc. Computer Science: Games Engineering', date: 'Oct 2020' },
    ],
  },
  contact: {
    title: 'Contact',
    text: 'The fastest way to reach me is by email. I’m open to new roles and to relocation.',
  },
  footer: 'Built with Vue.',
  impressum: {
    link: 'Legal notice (Impressum)',
    title: 'Legal notice (Impressum)',
    legalBasis: 'Information according to § 5 DDG (German Digital Services Act)',
    contactHeading: 'Contact',
    back: '← Back to homepage',
  },
}

export default en
