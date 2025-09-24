const fs = require("fs");
const path = require("path");

const root = "../src/assets/images";
const visualArtsPath = 'VisualArts';
const performingPath = 'PerformingArts';

const regexMatch = /\.(png|jpe?g)$/
const regexReplace = /\W|(png|jpe?g)/g

const visualArtsFolder = path.join(__dirname, `${root}/${visualArtsPath}`);
const performingFolder = path.join(__dirname, `${root}/${performingPath}`);

function mappingSubFolders(folderName, subFolderName) {
    const folderPath = path.join(folderName, subFolderName);

        // Pega apenas arquivos de imagem
        const files = fs
            .readdirSync(folderPath)
            .filter((f) => f.match(regexMatch));

        // Cria conteúdo do index.js
        const content =
            files.map((f) => `import ${f.replace(regexReplace, "")} from "./${f}";`).join("\n") +
            `\n\nconst projeto${subFolderName.charAt(0).toUpperCase() + subFolderName.slice(1)} = [${files.map((f) => f.replace(regexReplace, "")).join(", ")}]` +
            `\n\nexport default projeto${subFolderName}` +
            `\n\nexport {${files.map((f) => f.replace(regexReplace, "")).join(", ")}};`;

        // Salva o index.js na subpasta
        fs.writeFileSync(path.join(folderPath, "index.js"), content);

        console.log(`Index gerado para a pasta ${subFolderName}`);
}

/* Lê arquivos da pasta VisualArts */
const subVisualArtsFolders = fs
    .readdirSync(visualArtsFolder)
    .filter((f) => fs.statSync(path.join(visualArtsFolder, f)).isDirectory());
/* Faz o mapeamento */
subVisualArtsFolders.forEach((subFolderName) => mappingSubFolders(visualArtsFolder, subFolderName));

/* Lê arquivos da past PerformingArts */
const subPerformingArtsFolders = fs
    .readdirSync(performingFolder)
    .filter((f) => fs.statSync(path.join(performingFolder, f)).isDirectory());
/* Faz o mapeamento */
subPerformingArtsFolders.forEach((subFolderName) => mappingSubFolders(performingFolder, subFolderName))