const fs = require('fs');
const path = 'src/app/(main)/projects/[slug]/page.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /<SplitTitle([\s\S]*?)style={{ fontSize: dynamicFontSize }}\n          \/>/g,
  `<SplitTitle\n            text={project.projectName}\n            style={{ fontSize: dynamicFontSize }}\n            className="w-full flex justify-center items-center text-center leading-[0.8] self-center font-['anton'] uppercase tracking-tight"\n          />`
);

fs.writeFileSync(path, content);
