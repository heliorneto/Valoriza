#📝 Valoriza

## 🔎 Sobre o Projeto

### **Descrição**

Trata-se de uma API que tem como objetivo enviar mensagens positivas para valorizar o trabalho de outras pessoas, juntamente uma tag que represente o valor que a pessoa demonstrou na ação valorizada. Foi implementado de forma a ser mais eficaz e versátil durante o uso, sendo utilizados conceitos de API RESTful e tendo as seguintes funcionalidades:

- Listar todos os usuários;
- Listar tags cadastradas;
- Listar os elogios recebidos pelo usuário logado;
- Listar os elogios enviados pelo usuário logado;
- Criar um elogio para um dos usuários;
- Autenticar o usuário;
- Criar uma tag;
- Criar um usuário;

### **Ano de implementação**

2021.

### **Responsável**

Hélio Neto.

## 📚 Estrutura de Diretórios

    -> Src
        -> controllers
        -> database
          -> migrations
        -> entities
        -> middlewares
        -> repositories
        -> services

**-> Src**

- Pasta onde ficará todo o código do projeto, sendo ele dividido da seguinte forma:

  **-> controllers**

  - Pasta em que ficarão os controllers definidos para a aplicação. Cada entidade de dados definida deve ter um controller próprio, capaz de realizar a sua função. Um controller é responsável por organizar as informações recebidas da rota e se comunicar com os diferentes services e tabelas necessárias para realizar aquela ação.

  **-> database**

  - Pasta em que é configurado o banco de dados, com auxílio do TypeORM. O banco de dados usado para o desenvolvimento é o sqlite.

  **-> migrations**

  - Pasta em que guardamos as migrations, isto é, as instruções para criar, editar e deletar as colunas de cada uma das tabelas (os campos que cada tabela tem). São importantes para conseguirmos desconstruir e reconstruir o nosso banco de dados de acordo com a necessidade.

  **-> entities**

  - Pasta em que definimos as entidades do nosso programa, cada tabela possui uma entidade relacionada.

  **-> middlewares**

  - Pasta onde ficam os arquivos de autenticação dos usuários, para autorizar ou não a execução de determinadas funções a depender do usuário que esteja realizando estas.

## 📲 Como Rodar

Primeiramente, será necessário instalar as dependências do projeto, com o comando

    yarn

Após isso, digitar o comando abaixo. Dessa forma, o servidor estará ativo na porta 3333.

    yarn dev

## 🔧 Ferramentas Utilizadas

- TypeScript -> Linguagem utilizada no desenvolvimento do projeto.
- TypeORM -> ORM usado com o TypeScript que facilita o desenvolvimento de aplicações que utilizem banco de dados.
- Node.js -> Plataforma que permite criar aplicações JavaScript sem depender de um browser para a execução.

---

_<p style="text-align:center;">Hélio Neto - 2021</p>_
