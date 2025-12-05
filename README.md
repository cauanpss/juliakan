🇧🇷 PT-BR
Este projeto foi desenvolvido , com o objetivo de criar um website funcional utilizando React e rotas. Sendo desenvolvido individualmente, em busca de  uma versão mais organizada, modular e profissional.

🇺🇸 ENG
This project was developed with the goal of creating a functional website using React and routing. It was later developed individually, aiming for a more organized, modular, and professional version.


# JULIAKAN — Portfólio Artístico  
Aplicação web desenvolvida em **React** para exibir o portfólio da artista **Julia Kan**, contendo projetos nas categorias **Artes Visuais** e **Artes Performativas**.  
A plataforma permite navegação fluida entre projetos, exibição de galerias e organização estruturada por categoria.

---

## Tecnologias Utilizadas

- **React.js**
- **React Router DOM**
- **JavaScript ES6**
- **CSS (global + modular)**
- **Estrutura de dados via módulos JS**
- **Imagens estáticas organizadas por projeto**

---

## Estrutura de Pastas

src/
│
├── assets/
│ ├── images/
│ │ ├── PerformingArts/
│ │ │ └── ProjetoX/
│ │ │ ├── imagem1.jpg
│ │ │ ├── imagem2.jpg
│ │ │ └── index.js
│ │ └── VisualArts/
│ │ └── ProjetoY/
│ │ ├── imagemX.jpg
│ │ └── index.js
│
├── components/
│ ├── NavbarProjects.jsx
│ ├── Header.jsx
│ ├── ProjectContent.jsx
│ └── styles.css
│
├── data/
│ ├── dataProjectsPerformingArtsDetails.js
│ ├── dataProjectsVisualArtsDetails.js
│ ├── dataAllProjects.js
│ └── ...
│
├── pages/
│ ├── ProjectPage.jsx
│ └── Home.jsx
│
└── App.jsx

yaml
Copy code

---

## 🧠 Arquitetura e Funcionamento

### ✔ 1. Organização de imagens  
Cada projeto possui uma pasta exclusiva dentro de **PerformingArts** ou **VisualArts**.

Exemplo:

assets/images/PerformingArts/RemediosVard/

cpp
Copy code

Dentro desta pasta existe um `index.js` reunindo todas as imagens:

        ```js
        import img1 from "./img1.jpg";
        import img2 from "./img2.jpg";
        
        const projetoRemediosVard = [img1, img2];
        export default projetoRemediosVard;

-------------------------------------------------------------------------------------------------------------------------------------------

✔ 2. Arquivos de dados dos projetos
Cada projeto possui um arquivo com suas informações:
        
        js
        Copy code
        const dataRemediosVard = {
          key: "remediosVard",
          title: "Remédios Vard",
          category: "performing",
          images: projetoRemediosVard,
        };
        export default dataRemediosVard;

-------------------------------------------------------------------------------------------------------------------------------------------

✔ 3. Reunião de todos os projetos
No arquivo dataAllProjects.js:

        js
        Copy code
        import performing from "./dataProjectsPerformingArtsDetails";
        import visual from "./dataProjectsVisualArtsDetails";
        
        export const allProjects = {
          performing,
          visual,
        };

-------------------------------------------------------------------------------------------------------------------------------------------

✔ 4. Navegação dinâmica (React Router)
A URL dos projetos segue este formato:

ruby
Copy code
/projects/:category/:projectid
        Exemplos válidos:
        
        bash
        Copy code
        /projects/performing/remediosVard
        /projects/visual/moraesMoreira
        Usado no componente:
        
        js
        Copy code
        const { category, projectid } = useParams();
        const data = allProjects[category]?.[projectid];

-------------------------------------------------------------------------------------------------------------------------------------------

✔ 5. Navbar dinâmica
NavbarProjects.jsx identifica a categoria atual pela rota:

        js
        Copy code
        const isPerforming = location.pathname.includes("performing");
        const isVisual = location.pathname.includes("visual");
        Assim, a navbar exibe apenas os projetos da categoria atual.

-------------------------------------------------------------------------------------------------------------------------------------------


🧩 Como adicionar um novo projeto
1. Criar pasta de imagens
swift
Copy code
assets/images/PerformingArts/NovoProjeto/
Criar index.js:
        
        js
        Copy code
        import img1 from "./img1.jpg";
        import img2 from "./img2.jpg";
        
        export default [img1, img2];

-------------------------------------------------------------------------------------------------------------------------------------------

2. Criar arquivo de dados
bash
Copy code
data/dataProjectsPerformingArtsDetails/dataNovoProjeto.js
        
        js
        Copy code
        const dataNovoProjeto = {
            key: "novoProjeto",
            title: "Novo Projeto",
            category: "performing",
            images: imagensNovoProjeto
        };
        export default dataNovoProjeto;

-------------------------------------------------------------------------------------------------------------------------------------------

3. Registrar no arquivo da categoria
Editar:

dataProjectsPerformingArtsDetails.js
    
        js
        Copy code
        import dataNovoProjeto from "./dataNovoProjeto";
        
        export const projectDetails = {
          ...,
          novoProjeto: dataNovoProjeto
        };

Pronto! O projeto aparece automaticamente na navbar e na navegação de rotas.


-------------------------------------------------------------------------------------------------------------------------------------------

📌 Fluxo de Uso da Aplicação
Usuário acessa a Home

Seleciona uma categoria (Performing / Visual)

Abre um projeto via rota dinâmica

Navbar lista outros projetos da mesma categoria

Navegação entre projetos ocorre sem recarregar a página

🛠 Como Rodar o Projeto Localmente
Instale as dependências:

bash
Copy code
npm install
Execute em modo desenvolvimento:

bash
Copy code
npm run dev
Se o projeto for CRA:

bash
Copy code
npm start


📄 Licença

Projeto desenvolvido apenas para fins de portfólio e estudo.
Distribuição e uso não comercial permitidos.

👤 Autor

Cauan Pereira Santos
Desenvolvedor Front-end | Ciência da Computação
GitHub: https://github.com/cauanpss