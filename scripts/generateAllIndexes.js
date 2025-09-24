const fs = require("fs");
const path = require("path");

// Pasta principal com as subpastas de imagens
const mainFolder = path.join(__dirname, "../src/assets/images/VisualArts");

// Lê todas as subpastas de VisualArts
const subfolders = fs
    .readdirSync(mainFolder)
    .filter((f) => fs.statSync(path.join(mainFolder, f)).isDirectory());

subfolders.forEach((folderName) => {
    const folderPath = path.join(mainFolder, folderName);

    // Pega apenas arquivos de imagem
    const files = fs
        .readdirSync(folderPath)
        .filter((f) => f.match(/\.(png|jpe?g)$/));

    // Cria conteúdo do index.js
    const content =
        files
            .map((f) => `import ${f.replace(/\W/g, "_")} from "./${f}";`)
            .join("\n") +
        "\n\nexport default [" +
        files.map((f) => f.replace(/\W/g, "_")).join(", ") +
        "];";

    // Salva o index.js na subpasta
    fs.writeFileSync(path.join(folderPath, "index.js"), content);

    console.log(`Index gerado para a pasta ${folderName}`);
});
