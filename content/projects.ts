import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "infra-pilot-iac",
    description:
      "Reusable AWS platform built with Terraform, supporting multi-service ECS deployments, OIDC-based CI/CD, and scalable infrastructure management.  One of sample service using this infra : https://github.com/sumitverma77/infra-pilot-api",
    href: "https://github.com/sumitverma77/infra-pilot-iac",
    tags: ["HCL", "★ 2"],
  },
  {
    title: "applynow-backend",
    description:
      "Its a Job portal allows anyone to post job openings for their company. Our admins will verify the authenticity of each job listing and can either approve or reject it. Once a job is approved, it will be displayed on our website, and anyone can apply for the position.",
    href: "https://github.com/sumitverma77/applynow-backend",
    tags: ["Java", "★ 2"],
  },
  {
    title: "infra-pilot-api",
    description:
      "Its just a sample service with CI/CD pipelines and environment-specific deployment configuration. Infrastructure managed in: https://github.com/sumitverma77/infra-pilot-iac",
    href: "https://github.com/sumitverma77/infra-pilot-api",
    tags: ["Java", "★ 1"],
  },
  {
    title: "book-it-now",
    description:
      "Real-time cinema ticket booking backend built with Spring Boot, supporting concurrent seat reservations, event-driven notifications, webhook-based payment handling, and scalable system architecture.",
    href: "https://github.com/sumitverma77/book-it-now",
    tags: ["Java", "★ 1"],
  },
];
