
<p align="center">
  <h1 align="center">Vue 3 CSR App</h1>
  <p align="center">
     <strong>Vue 3 - TypeScript</strong> starter for client side rendering apps
  </p>
</p>
<br/>
<p align="center">
    <a href="https://vuejs.org">
    <img src="https://img.shields.io/badge/Vue3-41B883?logo=vuedotjs&logoColor=364659" />
    </a>
    <a href="https://vitejs.dev">
    <img src="https://img.shields.io/badge/Vite-9e54f3?logo=vite&logoColor=f6c84c" />
    </a>
    <a href="https://www.typescriptlang.org">
    <img src="https://img.shields.io/badge/TypeScript-4377c0?logo=typescript&logoColor=ffffff" />
    </a>
    <a href="https://eslint.org">
    <img src="https://img.shields.io/badge/ESLint-4f38bc?logo=eslint&logoColor=ffffff" />
    </a>
    <a href="https://stylelint.io">
    <img src="https://img.shields.io/badge/StyleLint-black?logo=stylelint&logoColor=ffffff" />
    </a>
</p>

<br/>
<br/>

## Table of contents

- [Recommended IDE Setup](#recommended-ide-setup)
- [Managing .env](#env)
- [Project Setup](#project-setup)
  - [Compile and Hot-Reload for Development](#project-setup-dev)
  - [Type-Check, Compile and Minify for Production](#project-setup-build)
  - [Lint with ESLint & Stylelint](#project-setup-lint)
- [Folder Architecture](#folder-architecture)

<h2 id="recommended-ide-setup">Recommended IDE Setup</h2>

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

<h2 id="env">Create <code>.env.local</code> file based on <code>.env</code></h2>

Update `VITE_APP_PORT` to fit the project number.
*e.g.: **PUX012**, `VITE_APP_PORT=3012`*

<h2 id="project-setup">Project Setup</h2>

```sh
yarn install
```

<h3 id="project-setup-dev">Compile and Hot-Reload for Development</h3>  

```sh
yarn dev
```

<h3 id="project-setup-build"> Type-Check, Compile and Minify for Production</h3>

```sh
yarn build
```

<h3 id="project-setup-lint"> Lint with <a href="https://eslint.org">ESLint</a> & <a href="https://stylelint.io">Stylelint</a></h3>

```sh
yarn lint
```

<h2 id="folder-architecture">Folder Architecture</h2>

### `/i18n` Translations

To create new translation languages, simply create a new file matching locale code
**e.g.:** `fr|en|en-GB|en-US.json`

Re run `yarn dev` to force compiler to parse again i18n files & detect locales
> Locales are automatically detected thanks to **@intlify/vite-plugin-vue-i18n/** at build time & when server starts, they are then stored in-memory and served throught an import alias handled by **vite**

### `/public` Public resources

> Public resources **are not compiled** at build time whereas asset ones are, for deeper explanations : check [this](https://vitejs.dev/guide/assets.html) 

**`/public/fonts`**
Every fonts used in the project

**`/public/images`**
Public served images

**`/public/meta`**
Meta assets like a *favicon* or any other *manifest*, *apple*|*android* icons etc ... They are usually included in some `<header />` `<meta />` tags

### `/src` Application code

> Work in progress ...