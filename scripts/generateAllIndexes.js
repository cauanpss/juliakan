const fs = require("fs");
const path = require("path");

// Pasta principal com as subpastas de imagens
const mainVisualArtsFolder = path.join(__dirname, "../src/assets/images/VisualArts");

// Lê todas as subpastas de VisualArts
const subVisualArtsFolders = fs
    .readdirSync(mainVisualArtsFolder)
    .filter((f) => fs.statSync(path.join(mainVisualArtsFolder, f)).isDirectory());

subVisualArtsFolders.forEach((folderName) => {
    const folderPath = path.join(mainVisualArtsFolder, folderName);

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

const mainPerformingArts = path.join(__dirname, "../src/assets/images/PerformingArts");

// Lê todas as subpastas de Perfoming Arts
const subPerformingArtsFolders = fs
    .readdirSync(mainPerformingArts)
    .filter((f) => fs.statSync(path.join(mainPerformingArts, f)).isDirectory());

subPerformingArtsFolders.forEach((folderName) => {
    const folderPath = path.join(mainPerformingArts, folderName);

    // Pega apenas arquivos de imagem
    const files = fs
        .readdirSync(folderPath)
        .filter((f) => f.match(/\.(png|jpe?g)$/));

    // Cria conteúdo do index.js
    const content =
        files.map((f) => `import ${f.replace(/\W|(png|jpe?g)/g, "")} from "./${f}";`).join("\n") +
        `\n\nconst projeto${folderName.charAt(0).toUpperCase() + folderName.slice(1)} = [${files.map((f) => f.replace(/\W|(png|jpe?g)/g, "")).join(", ")}]` +
        `\n\nexport default projeto${folderName}` +
        `\n\nexport {${files.map((f) => f.replace(/\W|(png|jpe?g)/g, "")).join(", ")}};`;

    // Salva o index.js na subpasta
    fs.writeFileSync(path.join(folderPath, "index.js"), content);

    console.log(`Index gerado para a pasta ${folderName}`);
});