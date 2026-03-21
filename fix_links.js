const fs = require("node:fs");
const path = "src/app/(main)/projects/_sections/projects.tsx";
let content = fs.readFileSync(path, "utf8");

// Replace the `<div className={`w-full aspect-4/3` with `<Link href...>`
if (!content.includes("<Link href={`/projects/")) {
  content = content.replace(
    /className="group cursor-pointer flex flex-col mb-8 w-full"\s*>/g,
    'className="group cursor-pointer flex flex-col mb-8 w-full"\n              >\n                <Link href={`/projects/${project.name}`} className="flex flex-col w-full h-full">',
  );

  content = content.replace(
    /<\/div>\n\s*<\/motion.div>/g,
    "</div>\n                </Link>\n              </motion.div>",
  );
  fs.writeFileSync(path, content);
  console.log("Replaced!");
}
