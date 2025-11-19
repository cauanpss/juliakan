const fs = require("fs");
const path = require("path");

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

function updateOrCreateDataFile(folderName) {
    const key = toCamelCase(folderName);
    const title = toTitleCase(folderName);
    const importVarName = `projeto${folderName}`;
    const importPath = `../../assets/images/VisualArts/${folderName}`;
    const fileName = `data${folderName}.js`;
    const filePath = path.join(TARGET_DATA, fileName);

    let finalContent = "";

    const importLine = `import ${importVarName} from "${importPath}";`;

    // arquivo existente → atualizar apenas campo images e manter tudo
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, "utf-8");

        // substitui import antigo se existir
        content = content.replace(/import .*? from .*?;/, importLine);

        // substitui campo images mantendo variáveis existentes:
        content = content.replace(
            /images:\s*.*?(,|\n)/,
            `images: ${importVarName},`
        );

        // substitui key
        content = content.replace(/key:\s*".*?"/, `key: "${key}"`);

        // substitui title
        content = content.replace(/title:\s*".*?"/, `title: "${title}"`);

        finalContent = content;
        console.log("✔ Atualizado:", fileName);
    }

    // arquivo novo → gerar template básico
    else {
        finalContent = `
${importLine}

const data${folderName} = {
    key: "${key}",
    title: "${title}",
    year: "",
    category: "Visual Arts",
    participants: ["Julia Kan"],
    description: "",
    images: ${importVarName},
};

export default data${folderName};
`.trim();

        console.log("✔ Criado:", fileName);
    }

    fs.writeFileSync(filePath, finalContent + "\n");
}

function run() {
    const folders = fs.readdirSync(BASE_IMAGES).filter((f) => {
        const full = path.join(BASE_IMAGES, f);
        return fs.statSync(full).isDirectory();
    });

    console.log("Gerando data files...\n");

    folders.forEach(updateOrCreateDataFile);

    console.log("\n🏁 Concluído!");
}

run();
