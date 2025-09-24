const fs = require("fs");
const path = require("path");

const mainFolder = path.join(__dirname, "../src/assets/images");

// Função recursiva para percorrer a árvore
function processFolder(folderPath) {
    const entries = fs.readdirSync(folderPath);

    const subfolders = entries.filter((f) =>
        fs.statSync(path.join(folderPath, f)).isDirectory()
    );

    if (subfolders.length > 0) {
        // Ainda tem subpastas → desce recursivamente
        subfolders.forEach((sub) => processFolder(path.join(folderPath, sub)));
    } else {
        // Pasta final → gerar index.js
        const files = entries.filter((f) => f.match(/\.(png|jpe?g)$/));

        if (files.length === 0) return; // não gera se não tiver imagens

        const content =
            files
                .map((f) => `import ${f.replace(/\W/g, "_")} from "./${f}";`)
                .join("\n") +
            "\n\nexport default [" +
            files.map((f) => f.replace(/\W/g, "_")).join(", ") +
            "];";

        fs.writeFileSync(path.join(folderPath, "index.js"), content);

        console.log(`Index gerado em: ${folderPath}`);
    }
}

// Começa pelo diretório raiz
processFolder(mainFolder);
