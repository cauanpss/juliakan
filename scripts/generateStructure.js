/**
 * Script para gerar automaticamente a árvore de diretórios do projeto.
 * Saída: structure.txt na raiz do repositório.
 */

const fs = require("fs");
const path = require("path");

// Pastas que NUNCA devem ser incluídas no mapa
const IGNORE = [
  "node_modules",
  ".git",
  ".vscode",
  ".VSCodeCounter",
  "dist",
  "build"
];

const root = path.join(__dirname, ".."); // raiz do projeto
const outputFile = path.join(root, "structure.txt");

/**
 * Gera a árvore recursivamente
 */
function generateTree(dir, prefix = "") {
  let output = "";

  const items = fs
    .readdirSync(dir)
    .filter((item) => !IGNORE.includes(item))
    .sort();

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const pointer = isLast ? "└── " : "├── ";

    const fullPath = path.join(dir, item);
    const isDirectory = fs.statSync(fullPath).isDirectory();

    output += `${prefix}${pointer}${item}\n`;

    if (isDirectory) {
      const nextPrefix = prefix + (isLast ? "    " : "│   ");
      output += generateTree(fullPath, nextPrefix);
    }
  });

  return output;
}

/**
 * Construção final da árvore
 */
function buildStructure() {
  const tree = "JULIAKAN/\n" + generateTree(root, "");

  fs.writeFileSync(outputFile, tree, "utf8");

  console.log("Estrutura atualizada em structure.txt ✔");
}

buildStructure();
