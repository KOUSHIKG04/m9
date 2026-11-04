import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
const violations = [];
function scan(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      scan(path);
      continue;
    }
    if (!/\.[cm]?[jt]sx?$/.test(path)) continue;
    const source = readFileSync(path, "utf8");
    for (const [, target] of source.matchAll(
      /(?:from\s*|import\s*)["']([^"']+)["']/g,
    )) {
      if (target.startsWith(".") || target.startsWith("@/")) {
        const resolved = target.startsWith("@/")
          ? join(process.cwd(), target.slice(2))
          : resolve(dir, target);
        const relative = resolved
          .replaceAll("\\", "/")
          .slice(process.cwd().length + 1);
        if (
          (dir.startsWith("features") || dir.startsWith("components")) &&
          relative.startsWith("app/")
        )
          violations.push(`${path} imports route ${target}`);
        if (dir.startsWith("components/ui") && relative.startsWith("features/"))
          violations.push(`${path} imports feature ${target}`);
      }
    }
  }
}
for (const dir of ["app", "features", "components", "lib"]) scan(dir);
if (violations.length) {
  console.error(violations.join("\n"));
  process.exit(1);
}
console.log("Architecture boundaries passed: routes → features → shared UI.");
