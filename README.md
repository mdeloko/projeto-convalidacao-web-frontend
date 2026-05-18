# Projeto de Convalidação de Desenvolvimento Web Frontend

**Aluno:** Erik G. Coutinho  
**RA:** 2475405  
**Prof.:** Gabriel Canhadas Genvigir

## Sumário
- [Informações](#informações)
    - [Descrição](#descrição)
    - [Disclaimers](#disclaimers)
    - [Tecnologias](#tecnologias)
    - [Estrutura do Repositório](#estrutura-do-repositório)
- [Páginas](#páginas)
    - [Index](#index)
    - [Admin](#admin)
    - [Cadastro](#cadastro)
    - [Currículo](#currículo)
    - [Login](#login)

## Informações
### Descrição
O projeto foi construído inteiramente com HTML, CSS e JavaScript _puros_!!!
Pode ser acessado [neste link do GitHub Pages](https://mdeloko.github.io/projeto-convalidacao-web-frontend/). O objetivo deste projeto é servir como uma avaliação de convalidação para a disciplina de Desenvolvimento Web Front-end,
e é constituído de 5 páginas, sumarizadas abaixo.

### Disclaimers

> Projeto construído com base em monitor 1080p, para visualização correta
> de como foi projetado, emular resolução no navegador, ou utilizar monitor
> de resolução igual.

> Todas as páginas do projeto contam com a estrutura base de Header, Main com Conteúdo e
> Footer com descrição, algumas possuem alterações e serão comentadas em suas
> respectivas seções.

> Existem códigos JS comentados que nada mais fazem que limpar os campos dos respectivos
> formulários, porém existe uma propriedade do botão no HTML que já faz isso
> automaticamente, optei por usar essa metodologia mas deixei o código comentado para
> mostrar como eu faria caso tivesse que implementar a mão as limpezas dos campos.


### Tecnologias

<table>
    <tr>
        <th style="text-align:center">Tecnologia</th>
        <th style="text-align:center">Descrição</th>
    </tr>
    <tr>
        <td>HTML5</td>
        <td>Esqueleto semântico da página</td>
    </tr>
    <tr>
        <td>CSS3</td>
        <td>Folhas de estilo, com animações e layouts</td>
    </tr>
    <tr>
        <td>JavaScript (ES Modules)</td>
        <td>Lógica e programação por trás das páginas</td>
    </tr>
    <tr>
        <td>GitHub Pages</td>
        <td>Hospedagem do site estático da aplicação</td>
    </tr>
    <tr>
        <td>LocalStorage</td>
        <td>Persistência local de dados no navegador</td>
    </tr>
    <tr>
        <td>Deploy.sh</td>
        <td>Script bash que automatizou meus commits/deploys para o GitHub Pages</td>
    </tr>
</table>

### Estrutura do Repositório

```bash
projeto-convalidacao-web-frontend/
│
├── deploy.sh
├── README.md
├── PROJETO PARA AVALIAÇÃO DE CONVALIDAÇÃO.pdf
└── projeto/
    ├── index.html
    ├── index.js
    ├── style.css
    ├── pages/
    │   ├── admin/
    │   │   ├── admin.html
    │   │   ├── admin.js
    │   │   └── admin.css
    │   ├── cadastro/
    │   │   ├── cadastro.html
    │   │   ├── cadastro.js
    │   │   └── cadastro.css
    │   ├── curriculo/
    │   │   ├── curriculo.html
    │   │   ├── curriculo.js
    │   │   └── curriculo.css
    │   └── login/
    │       ├── login.html
    │       ├── login.js
    │       └── login.css
    └── public/
        ├── emoji.webp
        ├── favicon.ico
        ├── glasses-emoji.gif
        ├── guy_with_arms_crossed.png
        └── paisagem_pexels.jpg
```

### Como Executar?
Acessando a página hospedada no [GitHub Pages](https://mdeloko.github.io/projeto-convalidacao-web-frontend/).  
Ou localmente com:
```bash
git clone https://github.com/mdeloko/projeto-convalidacao-web-frontend.git
```
E depois abrir o arquivo `{PASTA_O_REPOSITÓRIO}/projeto/index.html`.


## Páginas
### Index

Página que descreve o projeto como um todo, dividida como o projeto todo, diferindo-se
em conter também uma imagem entre Header e Main, e entre Main e Footer, para cumprir com
os requisitos da avaliação de possuir mínimo e 3 imagens!

Esta página contém:

- Uma imagem pré conteúdo;
- Um texto descrevendo o atual projeto;
- Uma imagem pós conteúdo.

Pode acessar o HTML dessa página [**clicando aqui**](/projeto/index.html)!

[**Voltar ao Sumário**](#sumário)

### Admin

Página que conta com boa parte da lógica requerida para avaliação.

Esta página contém:

- As funções de manipulação de `localStorage`;
- As funções de exibição/remoção de elementos HTML;
- Formulário HTML com 2 campos;
- Área de exibição dos dados salvos e restaurados do `localStorage`;
- Botão para enviar informações do formulário ao `localStorage`;
- Botão para limpar campos deste formulário;
- Botão para apagar a lista completa do `localStorage`;
- Botão por card para apagar o referido item da lista e do `localStorage`.

Pode acessar o HTML dessa página [**clicando aqui**](/projeto/pages/admin/admin.html)!

[**Voltar ao Sumário**](#sumário)

### Cadastro

Página que conta com um formulário sem envio de informações, apenas redirecionamento para login e validação de campos.

Esta página contém:

- Formulário HTML com 5 campos;
- Redirecionamento para Login;
- Botão de Limpar Campos do Formulário;
- Botão de Enviar Formulário.

Pode acessar o HTML dessa página [**clicando aqui**](/projeto/pages/cadastro/cadastro.html)!

[**Voltar ao Sumário**](#sumário)

### Currículo

Página que contém dados reais o meu atual currículo, com estilização diferente das
páginas do projeto, inspirada no layout de PDFs do navegador, como se fosse uma folha A4.

Esta página contém:

- Meu currículo real no atual mês Maio/2026;
- Botão para voltar a página anterior de onde o currículo foi acessado.

Pode acessar o HTML dessa página [**clicando aqui**](/projeto/pages/curriculo/curriculo.html)!

[**Voltar ao Sumário**](#sumário)

### Login

Página simples de login com 2 campos em um formulário, não possui envio de dados.

Esta página contém:

- Formulário HTML com 2 campos;
- Redirecionamento para Cadastro;
- Botão de Enviar Formulário.

Pode acessar o HTML dessa página [**clicando aqui**](/projeto/pages/login/login.html)!

[**Voltar ao Sumário**](#sumário)
