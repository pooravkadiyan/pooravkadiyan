import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pooravkadiyan.com";
  const now = new Date();

  const routes = ["", "/intelligence", "/thinking", "/work", "/engage", "/signal"];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}

