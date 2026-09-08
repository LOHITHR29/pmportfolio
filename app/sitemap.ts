import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lohith.me";
  const pages = ["", "/work", "/about", "/case-studies", "/contact"];
  return [
    ...pages.map((path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...caseStudies.map((study) => ({
      url: `${base}/case-studies/${study.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...caseStudies
      .filter((study) => study.presentation)
      .map((study) => ({
        url: `${base}/case-studies/${study.slug}/presentation`,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
  ];
}
