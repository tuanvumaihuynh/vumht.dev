export interface ExperienceItem {
  company: string
  role: string
  period: string
}

export interface Project {
  name: string
  description: string
  url: string
  icon: string
  accent: string
}

export interface SocialLink {
  label: string
  handle: string
  url: string
}

export const identity = {
  name: 'Vux',
  role: 'Software Engineer',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'tuanvux01@gmail.com',
  github: 'https://github.com/tuanvumaihuynh',
  x: 'https://x.com/tuanvux01',
  linkedin: 'https://www.linkedin.com/in/tuanvumaihuynh/',
  instagram: 'https://www.instagram.com/im__vux/'
} as const

export const bio = 'Software engineer at Qualgo. Outside of work, I build and ship small, focused software products.'

export const projects: Project[] = [
  {
    name: 'Runcoil',
    description: 'Durable background tasks for your application',
    url: 'https://github.com/runcoil/runcoil',
    icon: '/projects/runcoil.svg',
    accent: '#3ee07f'
  },
  {
    name: 'Stint',
    description: 'macOS menu bar app tracking AI subscription limits',
    url: 'https://github.com/tuanvumaihuynh/stint',
    icon: '/projects/stint.svg',
    accent: '#00b87c'
  }
]

export const experiences: ExperienceItem[] = [
  {
    company: 'Qualgo',
    role: 'Software Engineer',
    period: '2025 – Present'
  },
  {
    company: 'METEK',
    role: 'Software Engineer',
    period: '2024 – 2025'
  },
  {
    company: 'Thai Binh Engineering',
    role: 'Intern',
    period: '2023'
  }
]

export const socials: SocialLink[] = [
  {
    label: 'X',
    handle: '@tuanvux01',
    url: identity.x
  },
  {
    label: 'LinkedIn',
    handle: 'tuanvumaihuynh',
    url: identity.linkedin
  },
  {
    label: 'Instagram',
    handle: '@im__vux',
    url: identity.instagram
  }
]
