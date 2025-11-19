// scripts/generateDataFiles.js
const fs = require("fs");
const path = require("path");

// Caminhos base
const BASE_IMAGES = path.join(
    __dirname,
    "..",
    "src",
    "assets",
    "images",
    "VisualArts"
);
const TARGET_DATA = path.join(
    __dirname,
    "..",
    "src",
    "data",
    "dataProjectVisualArtsDetails"
);

// Utilidades
function toCamelCase(str) {
    return str
        .replace(/[-_ ]+(.)/g, (_, c) => c.toUpperCase())
        .replace(/^(.)/, (c) => c.toLowerCase());
}

function toTitleCase(str) {
    return str
        .replace(/[-_]/g, " ")
        .replace(/([A-Z])/g, " $1")
        .replace(/\s+/g, " ")
        .trim()
        .replace(/^./, (c) => c.toUpperCase());
}

function parseObjectFromFile(content) {
    // Extrai tudo entre {}
    const match = content.match(/const data[\s\S]+?=\s*({[\s\S]*?});/);

    if (!match) return null;

    try {
        return eval("(" + match[1] + ")");
    } catch {
        console.error("Erro ao fazer parse do objeto existente.");
        return null;
    }
}

function updateOrCreateDataFile(folderName) {
    const key = toCamelCase(folderName);
    const title = toTitleCase(folderName);
    const importVarName = key;
    const importPath = `../../assets/images/VisualArts/${folderName}`;
    const fileName = `data${folderName}.js`;
    const filePath = path.join(TARGET_DATA, fileName);

    let existingData = null;
    let existingFileContent = null;

    const fileExists = fs.existsSync(filePath);

    if (fileExists) {
        existingFileContent = fs.readFileSync(filePath, "utf-8");
        existingData = parseObjectFromFile(existingFileContent);
    }

    // TEMPLATE base
    const finalObject = {
        key,
        title,
        year: existingData?.year ?? "",
        category: existingData?.category ?? "Visual Arts",
        participants: existingData?.participants ?? ["Julia Kan"],
        description: existingData?.description ?? "",
        images: importVarName,
        video: existingData?.video ?? undefined,
        location: existingData?.location ?? undefined,
        ...existingData, // preserva novos campos manuais
    };

    // Remove undefined (caso não existam)
    Object.keys(finalObject).forEach(
        (k) => finalObject[k] === undefined && delete finalObject[k]
    );

    const jsObjectString = JSON.stringify(finalObject, null, 4)
        .replace(/"([^"]+)":/g, "$1:") // remove aspas das chaves
        .replace(/"([^"]+)"/g, '"$1"'); // mantém aspas só em strings

    const finalJs = `
import ${importVarName} from "${importPath}";

const data${folderName} = ${jsObjectString};

export default data${folderName};
`.trim();

    fs.writeFileSync(filePath, finalJs + "\n");

    console.log(
        fileExists
            ? `✔ Atualizado sem sobrescrever: ${fileName}`
            : `✔ Criado novo arquivo: ${fileName}`
    );
}

function run() {
    const folders = fs.readdirSync(BASE_IMAGES).filter((f) => {
        const fullPath = path.join(BASE_IMAGES, f);
        return fs.statSync(fullPath).isDirectory();
    });

    console.log("Gerando arquivos de dados...\n");

    folders.forEach(updateOrCreateDataFile);

    console.log(
        "\n🏁 Pronto! Todos os arquivos foram gerados/atualizados sem perder dados."
    );
}

run();
