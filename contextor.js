/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';

const filePath = './src/core/contexts';

fs.readdir(filePath, (err, files) => {
  if (err) throw new Error(err);

  const ignore = ['appContext.tsx', 'index.tsx'];

  const validFiles = files.filter(file => !ignore.includes(file));

  const components = validFiles.map(file => {
    const fileName = getFileName(file);

    return fileName[0].toUpperCase() + fileName.slice(1);
  });

  const imports = validFiles.reduce(
    (prev, curr, index) =>
      prev + `import ${components[index]} from './${getFileName(curr)}';\n`,
    '',
  );

  const contextWrapper = components.reduce(
    (prev, curr) => `<${curr}>${prev}</${curr}>`,
    '{children}',
  );

  const codeBody = `export default function AppContext({ children, }: { children: React.ReactNode; }) { return ${contextWrapper}; }`;

  const finalCode = `${imports}\n${codeBody}`;

  fs.writeFile(`${filePath}/appContext.tsx`, finalCode, err => {
    if (err) throw new Error(err);
  });
});

function getFileName(file) {
  return file.split('.')[0];
}
