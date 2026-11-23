export type Lang = 'en' | 'de'

export interface Link {
  label: string
  href: string
}

export interface Job {
  role: string
  company: string
  period: string
  location: string
  link?: Link
  bullets: string[]
}

export interface Project {
  name: string
  tagline: string
  description: string
  tech: string[]
  links: Link[]
}

export interface Content {
  meta: { title: string; description: string }
  nav: { about: string; experience: string; projects: string; skills: string; education: string; contact: string }
  hero: { headline: string; summary: string; location: string; cvLabel: string; cvHref: string }
  about: { title: string; paragraphs: string[] }
  experience: { title: string; jobs: Job[] }
  projects: { title: string; items: Project[] }
  skills: { title: string; groups: { name: string; items: string }[] }
  education: { title: string; school: string; location: string; degrees: { name: string; date: string }[] }
  contact: { title: string; text: string }
  footer: string
  impressum: { link: string; title: string; legalBasis: string; contactHeading: string; back: string }
}
