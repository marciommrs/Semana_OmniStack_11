<h3 align="center">
    <img alt="Logo" title="#logo" width="300px" src="frontend/src/assets/logo.svg">
    <br><br>
    <b>Recicle! ajude o meio ambiente!</b>  
    <br>
</h3>

# Semana_OmniStack_11

Projeto: Be the Hero<br/>
Descrição: Conectar pessoas que querem ajudar de forma monetária à ONGs.


# Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Resultado](#resultado)
- [Como Usar](#como-usar)

<a id="sobre"></a>
## :bookmark: Sobre
O <strong>Be The Hero</strong> é uma aplicação Web e Mobile para ajudar a conectar pessoas com consciência social às ONGs que precisam de apoio financeiro.

<a id="tecnologias-utilizadas"></a>
## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)

<a id="resultado"></a>
## :heavy_check_mark: :computer: Resultado Web

## :heavy_check_mark: :iphone: Resultado Mobile

<a id="como-usar"></a>
## :fire: Como usar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina

1. Faça um clone :

```sh
  $ git clone https://github.com/marciommrs/Semana_OmniStack_11.git
```

2. Executando a Aplicação:

```sh
  # Instale as dependências
  $ npm install

  ## Crie o banco de dados
  $ cd server
  $ npm run knex:migrate
  $ npm run knex:seed

  # Inicie a API
  $ npm run dev

  # Inicie a aplicação web
  $ cd web
  $ npm start

  # Inicie a aplicação mobile
  $ cd mobile
  $ npm start
```
