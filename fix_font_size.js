const fs = require('fs');
const path = 'src/app/(main)/projects/[slug]/page.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  /const dynamicFontSize = `text-\[calc\(195vw\/\${Math\.max\(length, 5\)}\)\]`;/g,
  'const dynamicFontSize = `calc(195vw / ${Math.max(length, 5)})`;'
);

content = content.replace(
  '            style={{ fontSize: dynamicFontSize }}\n            className={cn(\n              "w-full flex justify-center items-center text-center leading-[0.8] self-center font-[\'anton\'] uppercase tracking-tight",\n              dynamicFontSize,\n            )}\n          />',
  '            style={{ fontSize: dynamicFontSize }}\n            className="w-full flex justify-center items-center text-center leading-[0.8] self-center font-[\'anton\'] uppercase tracking-tight"\n          />'
);

fs.writeFileSync(path, content);
