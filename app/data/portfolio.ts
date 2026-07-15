export interface NavigationItem {
  label: string
  to: string
}

export interface ExpertiseItem {
  title: string
  description: string
  icon: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
  disclosure?: string
}

export interface Project {
  slug: string
  title: string
  kicker: string
  summary: string
  lead: string
  repository: string
  focus: string[]
  stack: string[]
  signal: string
}

export interface PlannedArticle {
  title: string
  description: string
  topics: string[]
}

export const identity = {
  name: 'Vux',
  role: 'Software Engineer',
  location: 'Ho Chi Minh City, Vietnam',
  email: 'tuanvux01@gmail.com',
  github: 'https://github.com/tuanvumaihuynh',
  linkedin: 'https://www.linkedin.com/in/tuanvumaihuynh/'
} as const

export const navigation: NavigationItem[] = [
  { label: 'Work', to: '/work' },
  { label: 'Experience', to: '/#experience' },
  { label: 'Writing', to: '/writing' },
  { label: 'About', to: '/about' }
]

export const expertise: ExpertiseItem[] = [
  {
    title: 'Backend engineering',
    description: 'Go and Python services, APIs, concurrency, data access, and interfaces that remain clear as a system grows.',
    icon: 'i-lucide-braces'
  },
  {
    title: 'Distributed systems',
    description: 'Asynchronous workloads, delivery guarantees, idempotency, and designs that account for failure paths.',
    icon: 'i-lucide-git-branch'
  },
  {
    title: 'Observability',
    description: 'Metrics, logs, traces, and operational signals that help explain what a service is doing when it matters.',
    icon: 'i-lucide-activity'
  },
  {
    title: 'Security and model serving',
    description: 'Backend infrastructure for classification and threat-detection workflows, with reliability built into the feedback loop.',
    icon: 'i-lucide-shield-check'
  }
]

export const experiences: ExperienceItem[] = [
  {
    company: 'Qualgo Technologies Vietnam',
    role: 'Software Engineer',
    period: 'Aug 2025 — Present',
    location: 'Ho Chi Minh City, Vietnam',
    summary: 'I work on security-focused backend and model-serving systems that support classification and threat-detection workflows. My focus is keeping distributed services reliable, observable, and understandable as they evolve.',
    highlights: [
      'Build and maintain backend services for security-oriented workflows.',
      'Support model-serving infrastructure and distributed processing paths.',
      'Improve diagnosability through metrics, logs, traces, and clearer operational signals.'
    ],
    disclosure: 'Public, high-level summary. Product and implementation details are intentionally omitted.'
  },
  {
    company: 'METEK JSC',
    role: 'Software Engineer',
    period: 'Feb 2024 — Jul 2025',
    location: 'Ho Chi Minh City, Vietnam',
    summary: 'I built software in an industrial automation environment, working close to IoT data and operational requirements. The role strengthened my ability to connect application code with device-facing systems and real-world constraints.',
    highlights: [
      'Contributed to software for IoT and automation-oriented use cases.',
      'Worked with data flows that bridge physical devices and application services.',
      'Translated operational requirements into maintainable software features.'
    ]
  },
  {
    company: 'Thai Binh Trading and Engineering Co., Ltd.',
    role: 'Software Engineer Intern',
    period: 'Jun 2023 — Dec 2023',
    location: 'Ho Chi Minh City, Vietnam',
    summary: 'My first professional software role taught me to turn incomplete requirements into shippable work, debug across system boundaries, and communicate engineering decisions clearly.',
    highlights: [
      'Supported engineering-focused application development and maintenance.',
      'Built practical experience with team delivery, debugging, and iteration.'
    ]
  }
]

export const projects: Project[] = [
  {
    slug: 'victoria-observability-lab',
    title: 'Victoria Observability Lab',
    kicker: 'Observability · Go',
    summary: 'A hands-on environment for a Go HTTP service, bringing metrics, logs, and traces into one coherent observability stack.',
    lead: 'I built this lab to understand observability as a connected system rather than three separate dashboards. It follows application and host signals through collection, storage, and visualization using the Victoria stack.',
    repository: 'https://github.com/tuanvumaihuynh/victoria-o11y-lab',
    focus: [
      'End-to-end telemetry flow',
      'OpenTelemetry instrumentation',
      'Local, reproducible infrastructure',
      'Correlating metrics, logs, and traces'
    ],
    stack: ['Go', 'OpenTelemetry', 'VictoriaMetrics', 'VictoriaLogs', 'VictoriaTraces', 'Vector', 'Grafana', 'PostgreSQL', 'Docker'],
    signal: 'trace.correlated'
  },
  {
    slug: 'viot',
    title: 'Viot',
    kicker: 'IoT · Backend systems',
    summary: 'An end-to-end IoT backend lab exploring device messaging, asynchronous work, and time-series data in a reproducible environment.',
    lead: 'Viot brings together the moving parts of an IoT application: MQTT messaging, background workers, time-series storage, APIs, and supporting infrastructure. The project makes those boundaries explicit and operable.',
    repository: 'https://github.com/tuanvumaihuynh/viot',
    focus: [
      'MQTT-based device communication',
      'Asynchronous task processing',
      'Time-series data storage',
      'Containerized local development'
    ],
    stack: ['Python', 'FastAPI', 'Celery', 'EMQX MQTT', 'TimescaleDB', 'Redis', 'Docker', 'GitHub Actions'],
    signal: 'device.ingested'
  },
  {
    slug: 'outbox-pattern',
    title: 'Transactional Outbox',
    kicker: 'Distributed systems · Go',
    summary: 'A Go reference service exploring reliable event publication across PostgreSQL and Kafka with the transactional outbox pattern.',
    lead: 'This project studies a deceptively difficult boundary: changing application state and publishing an event without losing consistency. A small service makes delivery behavior, API contracts, and tracing easier to inspect.',
    repository: 'https://github.com/tuanvumaihuynh/outbox-pattern',
    focus: [
      'Transactional event persistence',
      'Reliable Kafka publication',
      'API-first contracts',
      'Tracing across distributed boundaries'
    ],
    stack: ['Go', 'PostgreSQL', 'Kafka', 'OpenAPI', 'OpenTelemetry', 'Docker'],
    signal: 'event.published'
  }
]

export const plannedArticles: PlannedArticle[] = [
  {
    title: 'Three signals, one request',
    description: 'Instrumenting a Go service with metrics, logs, and traces using the Victoria observability stack.',
    topics: ['Go', 'OpenTelemetry', 'Observability']
  },
  {
    title: 'The outbox pattern after the happy path',
    description: 'A practical look at delivery guarantees, retries, idempotency, and the boundary between PostgreSQL and Kafka.',
    topics: ['Go', 'Kafka', 'Distributed systems']
  },
  {
    title: 'What an IoT backend actually coordinates',
    description: 'How MQTT, background workers, time-series storage, and API services fit together.',
    topics: ['IoT', 'FastAPI', 'Architecture']
  }
]

export const aboutStory = [
  'My path into software started with embedded systems and IoT. Working close to devices taught me that software does not operate in a perfect environment: networks fail, data arrives late, hardware behaves differently in the field, and visibility matters.',
  'Over time, I moved deeper into backend and distributed systems. Today, I work at Qualgo on security-oriented services and model-serving infrastructure. I enjoy following the entire path from an incoming event to the decision it produces—and making sure the system leaves enough signals to explain that journey.',
  'Outside work, I build focused labs around observability, delivery guarantees, and IoT architecture. These projects are less about collecting frameworks and more about understanding why a design works, where it fails, and what makes it maintainable.'
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
  program: 'Engineering degree · Embedded Systems & IoT',
  period: '2020 — 2024',
  summary: 'Studied systems where software meets hardware, networking, and real-world data—a foundation that still shapes how I approach backend engineering.'
} as const
