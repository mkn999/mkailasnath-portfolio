import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "t824gxwd",
  dataset: "production",
  apiVersion: "2026-09-22",
  useCdn: true,
});