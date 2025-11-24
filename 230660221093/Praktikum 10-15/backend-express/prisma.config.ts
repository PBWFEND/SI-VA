import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  datasource: {
    // URL DATABASE ditempatkan DI SINI
    url: env("DATABASE_URL"),
  },

  migrations: {
    path: "prisma/migrations",
  },
});

