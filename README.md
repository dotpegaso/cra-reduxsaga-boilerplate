## Instalando e executando o projeto

Em seu diretório local, após clonagem, acesse via terminal e execute o seguinte comando: `yarn && yarn start`
Caso não tenha o Yarn instalado, acesse o link abaixo e siga os passos de instalação
[Instalar Yarn](https://yarnpkg.com/en/docs/install) – Não execute esse projeto com npm.

## Documentação do Create React App

Esse projeto foi iniciado utilizando [Create React App](https://github.com/facebook/create-react-app). Caso não esteja familiarizado, você consegue encontrar mais detalhes sobre a base do projeto aqui: [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Main Tree
```terminal
├── src
│   ├── assets // íconografia e imagens do projeto
│   │   └── icons
│   │       ├── eye-closed.png
│   │       └── eye-opened.png
│   ├── components
│   │   ├── Button
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   └── Input
│   │       ├── index.js
│   │       └── styles.js
│   ├── constants
│   │   ├── colors.js
│   │   ├── config.js
│   │   └── images.js
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── Dashboard
│   │   │   ├── __tests__
│   │   │   │   └── index.tests.js
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   ├── Login
│   │   │   ├── __tests__
│   │   │   │   └── index.test.js
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   ├── PasswordForgot
│   │   │   ├── __tests__
│   │   │   │   └── index.test.js
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   └── PasswordRecovery
│   │       ├── __tests__
│   │       │   └── index.test.js
│   │       ├── index.js
│   │       └── styles.js
│   ├── reducers
│   │   ├── _index.js
│   │   ├── login.js
│   │   ├── sagas
│   │   │   ├── login.js
│   │   │   ├── toast.js
│   │   │   └── user.js
│   │   ├── toast.js
│   │   └── user.js
│   ├── setupTests.js
│   ├── store
│   │   ├── Routes.js
│   │   └── config.js
│   └── utils
│       ├── _index.js
│       ├── api.js
│       └── encrypter.js
└── yarn.lock
```