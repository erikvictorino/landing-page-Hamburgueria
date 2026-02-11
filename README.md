# 🍔 Sistema de Hamburgueria – Node.js + Sequelize

Este projeto é um sistema de **back-end para uma hamburgueria**, desenvolvido com **Node.js, Express e Sequelize**, com foco no aprendizado de **ORM**, **arquitetura MVC** e **CRUD completo**, além de organização de projeto e upload de arquivos.

O front-end é **propositalmente simples**, existindo apenas para permitir a visualização e teste das funcionalidades do back-end.

---

## 🎥 Demonstração do Projeto

> *(GIF de demonstração será adicionado aqui)*

![Demonstração do sistema](.github/hamburgueria.gif)

---

## 🚀 Tecnologias Utilizadas

- Node.js  
- Express  
- Sequelize (ORM)  
- MySQL / MariaDB  
- Handlebars (views)  
- Multer (upload de imagens)  
- CSS básico (apenas para visualização)

---

## 🧠 Conceitos e Práticas Aplicadas

- ORM com Sequelize  
- Arquitetura **MVC (Model–View–Controller)**  
- Separação de responsabilidades  
- Organização de projeto em módulos  
- CRUD completo sem SQL manual  
- Upload e gerenciamento de arquivos  
- Integração entre back-end, banco de dados e views  
- Persistência de dados utilizando ORM  

---

## 🏗️ Arquitetura MVC

O projeto foi **refatorado para o padrão MVC**, visando um código mais:

- Organizado  
- Escalável  
- Fácil de manter  
- Próximo dos padrões utilizados no mercado  

### 📌 Estrutura MVC aplicada:

- **Models**  
  Responsáveis pela estrutura e regras do banco de dados (Sequelize).

- **Controllers**  
  Responsáveis pela lógica da aplicação, regras de negócio e controle das requisições.

- **Views**  
  Responsáveis apenas pela renderização das páginas (Handlebars).

Essa separação trouxe mais clareza ao código e facilitou a evolução do projeto.

---

## 📂 Estrutura do Projeto

```bash
📦 projeto-hamburgueria
├── controllers
│   └── HamburguerController.js
├── models
│   └── Hamburguer.js
├── routes
│   └── hamburguerRoutes.js
├── middlewares
│   └── upload.js
├── views
│   ├── layouts
│   ├── hamburguer
│   └── partials
├── public
│   └── css
├── uploads
│   └── (imagens enviadas pelos usuários)
├── db
│   └── connection.js
├── index.js
└── package.json

🍔 Funcionalidades

✅ Cadastro de hambúrgueres
✅ Listagem de hambúrgueres
✅ Visualização de detalhes
✅ Edição de dados
✅ Remoção de registros
✅ Upload de imagem do hambúrguer
✅ Persistência de dados com Sequelize
🖼️ Upload de Imagens

O sistema permite que o usuário envie uma imagem do hambúrguer no momento do cadastro ou edição.

    As imagens são armazenadas na pasta /uploads

    No banco de dados é salvo apenas o nome do arquivo

    Na renderização da view, o nome da imagem é recuperado do banco e utilizado para exibição

Essa abordagem evita salvar arquivos binários no banco de dados, mantendo o sistema mais leve, organizado e performático.
🛠️ CRUD Completo

O projeto implementa todas as operações básicas utilizando Sequelize, sem uso de SQL escrito manualmente:

    Create – criar novos hambúrgueres

    Read – listar e visualizar detalhes

    Update – editar informações

    Delete – remover registros

🎯 Observações Importantes
⚠️ Foco no Back-end

Este projeto foi desenvolvido com foco total em back-end.

O front-end foi mantido simples e funcional apenas para possibilitar testes das rotas e funcionalidades.
Não houve foco em design, responsividade ou estilização avançada.
📚 Aprendizados

Com este projeto, foi possível aprender e praticar:

    Uso do Sequelize como ORM

    Migração de SQL puro para ORM

    Estruturação de um projeto em MVC

    Organização de código em pastas e módulos

    Upload de arquivos com Node.js (Multer)

    Integração entre banco de dados, servidor e views

⬇️ Como Baixar e Executar o Projeto
1️⃣ Clonar o repositório

git clone https://github.com/erikvictorino/Hamburgueria-node.js.git
cd Hamburgueria-node.js

2️⃣ Instalar as dependências

npm install

3️⃣ Configurar o banco de dados

No arquivo:

/db/connection.js

Configure as credenciais do seu banco MySQL ou MariaDB:

const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql'
})

    ⚠️ Crie o banco de dados manualmente antes de rodar o projeto.

4️⃣ Iniciar o servidor

npm start

ou

node index.js

5️⃣ Acessar no navegador

http://localhost:3000/hamburguers

👤 Autor

Erik Victorino
Estudante de Análise e Desenvolvimento de Sistemas (ADS)
Foco em Back-end, Node.js, bancos de dados e boas práticas de arquitetura.

📌 Projeto desenvolvido com fins educacionais.