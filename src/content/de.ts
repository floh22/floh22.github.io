import type { Content } from './types'

const de: Content = {
  meta: {
    title: 'Lars Eble · Softwareentwickler',
    description: 'Softwareentwickler und CTO für native, Desktop- und Cloud-Software im Live-E-Sport-Broadcast.',
  },
  nav: {
    about: 'Über mich',
    experience: 'Erfahrung',
    projects: 'Projekte',
    skills: 'Kenntnisse',
    education: 'Ausbildung',
    contact: 'Kontakt',
  },
  hero: {
    headline: 'Softwareentwicklung · Systemarchitektur · Technische Führung',
    summary:
      'Softwareentwickler und CTO mit eigener Entwicklungsarbeit an Windows-Software für Live-Grafiken und Spieldatenintegration im E-Sport. Produkt und Start-up-Team von Grund auf aufgebaut.',
    location: 'München · Offen für einen Umzug',
    cvLabel: 'Lebenslauf herunterladen (PDF)',
    cvHref: '/cv/lars-eble-lebenslauf-de.pdf',
  },
  about: {
    title: 'Über mich',
    paragraphs: [
      'League Broadcast habe ich 2020 als Hobbyprojekt begonnen und 2024 in die BlueBottle GmbH überführt. Als Gründer und CTO verantworte ich Produkt- und Technologiestrategie und führe ein Team von bis zu sieben Personen. Einen großen Teil des Codes schreibe ich weiterhin selbst: den C#/.NET-Client, das AWS-Backend sowie native C++-Szenen- und Kamerasysteme.',
      'Mein Hintergrund ist Games Engineering (M.Sc., TU München). Ein großer Teil meiner Arbeit ist systemnah, etwa Reverse Engineering, native Interop und Nebenläufigkeit, umgesetzt in Produkten, die live auf Sendung laufen.',
    ],
  },
  experience: {
    title: 'Berufserfahrung',
    jobs: [
      {
        role: 'Gründer und CTO',
        company: 'BlueBottle GmbH',
        period: '05/2024 – heute',
        location: 'München',
        link: { label: 'leaguebroadcast.gg', href: 'https://leaguebroadcast.gg' },
        bullets: [
          'Produkt- und Technologiestrategie verantwortet und ein bis zu siebenköpfiges Team aufgebaut und geführt; Personalauswahl, Mentoring, Code-Reviews, Priorisierung, Releases und die Einführung beim Kunden übernommen.',
          'Architektur für native Windows-Komponenten, Desktop- und Cloud-Systeme verantwortet; C#/.NET-Client, AWS-Dienste sowie C++-Szenen- und Mehrkamerasysteme selbst implementiert.',
          'Spieldatenverarbeitung und Kommunikation zwischen nativen Komponenten und Desktop-Client über Socket-IPC entwickelt; Authentifizierung, Lizenzierung und Zahlungen implementiert, mit Nebenläufigkeitsabsicherung, Regressionstests und statischer Analyse.',
          'Native C++-Szenen- und Mehrkamerasteuerung für synchronisierte Ansichten in einem Spielclient entwickelt; ein PC und eine Person für die Kameraführung ersetzen damit einen Aufbau, der zuvor jeweils fünf erforderte.',
          'League of Legends/Packman mittels Reverse Engineering analysiert und die Paketrekonstruktion im Team geleitet; Updates und CI-Builds automatisiert und Patch-Kompatibilität in weniger als einer Stunde hergestellt, mit Builds vor Veröffentlichung neuer Spielversionen.',
          'Lokale LLM-Codevervollständigung und MCP-Agenten in das Produkt-Scripting integriert; die Sichtung und Zuordnung von Feedback in Pull-Request-Workflows automatisiert.',
        ],
      },
      {
        role: 'Game Designer und Softwareentwickler',
        company: 'Irox Games UG',
        period: '01/2021 – 04/2024',
        location: 'München',
        bullets: [
          'Gameplay für EcoGnomix im Entwicklungsteam mit Unity/C# konzipiert und implementiert.',
          'Ein Multiplayer-Spiel für einen Unternehmenskunden eigenständig mit PlayCanvas, TypeScript, HTML/CSS und AWS konzipiert, entwickelt und ausgeliefert.',
        ],
      },
    ],
  },
  projects: {
    title: 'Projekte',
    items: [
      {
        name: 'League Broadcast',
        tagline: 'Broadcast-Grafiken und Kamerasteuerung für League-of-Legends-E-Sport',
        description:
          '2020 als Open-Source-Overlay-Tool gestartet und zum kommerziellen Produkt der BlueBottle GmbH weiterentwickelt. Umfasst Overlays für Champion-Auswahl und Spiel, Spieldatenverarbeitung und native Mehrkamerasteuerung, mit der ein PC und eine Person einen Aufbau mit fünf Observer-PCs ersetzen.',
        tech: ['C#/.NET', 'C++', 'Vue 3', 'AWS', 'Socket-IPC'],
        links: [
          { label: 'Website', href: 'https://leaguebroadcast.gg' },
          { label: 'Ursprüngliches Repo', href: 'https://github.com/floh22/LeagueBroadcast' },
        ],
      },
      {
        name: 'Farsight',
        tagline: 'Natives Node.js-Modul für League-of-Legends-Zuschauerdaten',
        description:
          'Passiver Speicherleser, der Spieldaten bereitstellt, die die öffentliche API nicht liefert: Spielzeit, Champions, Türme, Inhibitoren und Werte einzelner Einheiten, über eine JavaScript-Schnittstelle zu nativem Code.',
        tech: ['C++', 'Node.js Native Addon', 'Reverse Engineering'],
        links: [{ label: 'GitHub', href: 'https://github.com/floh22/native-farsight-module' }],
      },
      {
        name: 'middiff',
        tagline: 'Coaching und Replay-Analyse',
        description:
          'Coaching-Produkt mit asynchroner Replay-Verarbeitung, PostgreSQL-Warteschlangen, an Spielversionen angepassten Parsern und Arrow/Parquet-Exporten. Account-Verknüpfung und Analyse-APIs in Rust/Actix beigetragen.',
        tech: ['Rust', 'C++', 'PostgreSQL', 'Arrow/Parquet'],
        links: [],
      },
      {
        name: 'KI-Kamerasteuerung (Prototyp)',
        tagline: 'Vorhersage der Kameraführung im E-Sport-Broadcast',
        description:
          'PyTorch-Transformer zur Vorhersage der Kameraführung; Datenaufbereitung aus Replays, Training, Evaluation und lokale Inferenz.',
        tech: ['Python', 'PyTorch', 'Transformer'],
        links: [],
      },
      {
        name: 'EcoGnomix',
        tagline: 'Wirtschaftsspiel bei Irox Games',
        description: 'Gameplay im Entwicklungsteam mit Unity/C# konzipiert und implementiert.',
        tech: ['Unity', 'C#'],
        links: [{ label: 'Website', href: 'https://irox-games.com/ecognomix' }],
      },
    ],
  },
  skills: {
    title: 'Technische Kenntnisse',
    groups: [
      { name: 'Programmiersprachen', items: 'C++, C#, TypeScript/JavaScript, Python, Rust' },
      { name: 'Systeme und Netzwerke', items: 'Windows/Win32, native/.NET-Interop, Socket-IPC, Nebenläufigkeit, Protokollanalyse' },
      { name: 'Spieleentwicklung', items: 'Unity/C#, PlayCanvas, Multiplayer-Gameplay, systemnahe Engine-Programmierung' },
      { name: 'Plattformen und Werkzeuge', items: '.NET, AWS, Vue 3, FlatBuffers, PostgreSQL, DynamoDB, GitHub Actions' },
      { name: 'KI-Werkzeuge', items: 'Lokale LLMs, MCP, KI-gestützte Entwicklung und Automatisierung, PyTorch' },
      { name: 'Sprachen', items: 'Deutsch und Englisch (beide Muttersprachen)' },
    ],
  },
  education: {
    title: 'Ausbildung',
    school: 'Technische Universität München',
    location: 'München',
    degrees: [
      { name: 'M.Sc. Informatik: Games Engineering', date: '04/2024' },
      { name: 'B.Sc. Informatik: Games Engineering', date: '10/2020' },
    ],
  },
  contact: {
    title: 'Kontakt',
    text: 'Am schnellsten erreichen Sie mich per E-Mail. Ich bin offen für neue Positionen und einen Umzug.',
  },
  footer: 'Erstellt mit Vue.',
}

export default de
