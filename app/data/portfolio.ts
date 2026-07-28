export interface ExpertiseItem {
  title: string
  description: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
}

export interface Project {
  title: string
  kicker: string
  summary: string
  repository: string
}

export const identity = {
  name: 'Vux',
  role: 'Software Engineer',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'tuanvux01@gmail.com',
  github: 'https://github.com/tuanvumaihuynh',
  linkedin: 'https://www.linkedin.com/in/tuanvumaihuynh/'
} as const

export const expertise: ExpertiseItem[] = [
  {
    title: 'Backend engineering',
    description: 'Go and Python services, APIs, concurrency, data access, and interfaces that remain clear as a system grows.'
  },
  {
    title: 'Distributed systems',
    description: 'Asynchronous workloads, delivery guarantees, idempotency, and designs that account for failure paths.'
  },
  {
    title: 'Observability',
    description: 'Metrics, logs, traces, and operational signals that help explain what a service is doing when it matters.'
  },
  {
    title: 'Security and model serving',
    description: 'Backend infrastructure for classification and threat-detection workflows, with reliability built into the feedback loop.'
  }
]

export const experiences: ExperienceItem[] = [
  {
    company: 'Qualgo Technologies Vietnam',
    role: 'Software Engineer',
    period: 'Aug 2025 — Present',
    location: 'Ho Chi Minh City, Vietnam'
  },
  {
    company: 'METEK JSC',
    role: 'Software Engineer',
    period: 'Feb 2024 — Jul 2025',
    location: 'Ho Chi Minh City, Vietnam'
  },
  {
    company: 'Thai Binh Trading and Engineering Co., Ltd.',
    role: 'Software Engineer Intern',
    period: 'Jun 2023 — Dec 2023',
    location: 'Ho Chi Minh City, Vietnam'
  }
]

export const projects: Project[] = [
  {
    title: 'Victoria Observability Lab',
    kicker: 'Observability · Go',
    summary: 'A hands-on environment for a Go HTTP service, bringing metrics, logs, and traces into one coherent observability stack.',
    repository: 'https://github.com/tuanvumaihuynh/victoria-o11y-lab'
  },
  {
    title: 'Viot',
    kicker: 'Messaging · Backend systems',
    summary: 'A backend lab exploring device messaging, asynchronous work, and time-series data in a reproducible environment.',
    repository: 'https://github.com/tuanvumaihuynh/viot'
  },
  {
    title: 'Transactional Outbox',
    kicker: 'Distributed systems · Go',
    summary: 'A Go reference service exploring reliable event publication across PostgreSQL and Kafka with the transactional outbox pattern.',
    repository: 'https://github.com/tuanvumaihuynh/outbox-pattern'
  }
]

export const principles = [
  {
    title: 'Make failure visible',
    description: 'A system should help the people operating it understand what happened, where, and why.'
  },
  {
    title: 'Prefer explicit boundaries',
    description: 'Clear contracts and ownership make distributed systems easier to change safely.'
  },
  {
    title: 'Earn complexity',
    description: 'Start with the simplest design that explains the problem, then add machinery when the trade-off is clear.'
  },
  {
    title: 'Learn by building',
    description: 'Small, working systems reveal details that architecture diagrams often hide.'
  }
]

export const education = {
  institution: 'HCMC University of Technology and Education',
  program: 'Engineering degree',
  period: '2020 — 2024',
  summary: 'A technical foundation in software engineering, systems, and networking.'
} as const
