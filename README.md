# Playwright + Express — Automated Testing

Projeto desenvolvido para prática de Quality Assurance e automação de testes, utilizando Playwright com TypeScript para testes E2E de uma aplicação Web.

O projeto faz parte da minha formação prática em automação de testes e demonstra a criação, organização e execução de cenários automatizados.

## Tecnologias

- TypeScript
- Playwright
- Node.js
- Express
- SQLite
- TypeORM
- Yarn
- Git
- GitHub

## Testes automatizados

Os testes são desenvolvidos utilizando Playwright Test e abrangem conceitos como:

- Testes E2E
- Testes funcionais
- Assertions
- Locators
- Validação de elementos da interface
- Execução em diferentes navegadores
- Relatórios de testes

## Pré-requisitos

Antes de executar o projeto, certifique-se de que as seguintes ferramentas estão instaladas:

- Node.js 22 ou superior
- Yarn
- Git

Para verificar as versões instaladas:

    node -v
    yarn -v
    git --version

## Instalação

Clone o repositório:

    git clone https://github.com/duendeneon77/Playwright-Express--professor-FernandoPapito.git

Entre na pasta do projeto:

    cd Playwright-Express--professor-FernandoPapito

Instale as dependências do projeto:

    yarn install

Instale os navegadores utilizados pelo Playwright:

    npx playwright install

## Estrutura do projeto

    Playwright-Express--professor-FernandoPapito/
    │
    ├── api/
    │   ├── src/
    │   ├── package.json
    │   └── ormconfig.json
    │
    ├── web/
    │   ├── package.json
    │   └── ...
    │
    ├── tests/
    │   └── ...
    │
    ├── playwright.config.ts
    ├── package.json
    └── README.md

## Configuração da API

A API utiliza Express, TypeORM e SQLite.

As dependências da API foram adaptadas para funcionar no ambiente atual utilizando Node.js 22 e Yarn.

Entre na pasta da API:

    cd api

Instale as dependências:

    yarn install

Inicialize o banco de dados:

    yarn db:init

Inicie a API:

    yarn dev

A API deverá permanecer em execução nesse terminal.

## Configuração da aplicação Web

Abra um novo terminal.

Entre novamente na pasta raiz do projeto:

    cd Playwright-Express--professor-FernandoPapito

Entre na pasta da aplicação Web:

    cd web

Instale as dependências:

    yarn install

Inicie a aplicação:

    yarn dev

A aplicação Web estará disponível em:

    http://localhost:8080

## Executando os testes

Com a API e a aplicação Web em execução, abra um terceiro terminal.

Entre na pasta raiz do projeto:

    cd Playwright-Express--professor-FernandoPapito

Execute os testes:

    npx playwright test

## Executando os testes com o navegador visível

Para acompanhar visualmente a execução dos testes:

    npx playwright test --headed

## Playwright UI Mode

Para executar os testes utilizando a interface do Playwright:

    npx playwright test --ui

O UI Mode permite acompanhar os testes, selecionar cenários específicos e visualizar detalhes da execução.

## Relatório de testes

Após executar os testes, abra o relatório HTML:

    npx playwright show-report

O relatório apresenta informações sobre:

- Testes executados
- Testes aprovados
- Testes reprovados
- Duração dos testes
- Detalhes das falhas
- Informações de execução

## Configuração do Playwright

O projeto utiliza o arquivo `playwright.config.ts` para centralizar as configurações dos testes.

Os seguintes navegadores estão configurados:

- Chromium
- Firefox
- WebKit

A configuração também contempla:

- Execução paralela dos testes
- Relatório HTML
- Retries em ambiente de CI
- Execução com um worker em CI
- Coleta de trace na primeira tentativa de um teste que falhar

## Objetivo

Este projeto faz parte da minha preparação profissional para atuar como QA Júnior, colocando em prática conhecimentos de:

- Testes manuais
- Testes funcionais
- Testes E2E
- Automação de testes
- Playwright
- TypeScript
- Testes de API
- Git
- GitHub
- CI/CD

## Projeto de estudo e portfólio

O projeto foi desenvolvido durante meus estudos de Quality Assurance e automação de testes, utilizando uma aplicação Web como ambiente para criação e execução de cenários automatizados.

Além da aplicação utilizada nos estudos, foram realizadas as configurações e adaptações necessárias para executar o projeto no ambiente atual de desenvolvimento, utilizando Node.js 22 e Yarn.

## Autor

Arthur Henrique Santos de Oliveira

QA Júnior | Testes Manuais | Cypress | Playwright | Cucumber

[GitHub](https://github.com/duendeneon77)

[LinkedIn](https://www.linkedin.com/in/arthur-henrique-analidev)