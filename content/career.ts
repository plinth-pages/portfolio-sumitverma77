import type { Degree, Milestone, Role } from "./types";

export const experience: Role[] = [
  {
    company: "Bajaj Finserv Health",
    role: "SDE -1",
    start: "Jan’26",
    description:
      "Architected and delivered a FHIR/HL7-based B2B integration service with Qatar Ministry of Public Health (MoPH), enabling secure, standards-compliant healthcare interoperability and real-time data exchange. Introduced Kafka-driven event architecture for real-time member enrollment and MoPH synchronization, reducing email/SMS notification latency by 80%+ with resilient retries and fault-tolerant processing. Designed and deployed a secure NGINX API gateway with HTTPS, reverse proxying, and IP/token-based rate limiting, reducing abusive traffic by approximately 30%. Built a centralized observability platform using ClickStack, enabling end-to-end logs, traces, and metrics that improved production monitoring, debugging, and release reliability. Developed reusable mobile authentication and security modules using Redis caching, reducing request latency by approximately 40–50% and improving application scalability.",
  },
  {
    company: "Stealth",
    role: "Backend Developer",
    start: "Aug’25",
    end: "Dec’25",
    description:
      "Implemented Elasticsearch search filters with geolocation and radius, enabling advanced property discovery. Implemented property draft and admin approval workflow to ensure verified listings go live correctly. Integrated S3 presigned URLs for secure uploads directly from frontend & containerized backend with Docker. Deployed and configured Prometheus and Grafana containers for real-time monitoring, metrics & dashboards. Created a separate communication service to handle SMS and email notifications using SendGrid and Twilio. Implemented automated database backup and disaster recovery strategies while ensuring GDPR compliance across development workflows.",
  },
];

export const education: Degree[] = [
  {
    institution: "Vellore Institute of Technology, Bhopal",
    degree: "B.Tech",
    field: "Computer Science and Engineering",
    start: "2022",
    end: "2026",
  },
];

export const milestones: Milestone[] = [
  {
    date: "March 2026",
    title: "Spoke at GopherCon India",
    description: "Boring by design: settlement pipelines that don't page you.",
  },
  {
    date: "November 2025",
    title: "ledger-kit reached 1.0",
    description: "After eighteen months and a lot of opinions about idempotency keys.",
  },
];
