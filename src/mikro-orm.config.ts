import { Migrator } from "@mikro-orm/migrations";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { defineConfig, PostgreSqlDriver } from "@mikro-orm/postgresql";
import path from "path";
export default defineConfig({
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    glob: "!(*.d).{js,ts}", // how to match migration files (all .js and .ts files, but not .d.ts)
  },
  entities: [Post],
  dbName: "Humoreddit-server",
  password: "shefa2130",
  extensions: [Migrator],
  driver: PostgreSqlDriver,
  debug: !__prod__,
  allowGlobalContext: true,
});
