- **library** made by facebook 2013
- Jordan Walke
- Free and open-source library
- SPA (Single Page Application)

- SPA
  - Faster navigation
  - Better UX -> Feels like a desktop application
  - No page reloads
- Issues

  - Initial load time
  - Memory consumption
  - SEO
  - Browser history

- React being a library faster, lightweight, flexible
- Node.js (JS runtime)
- REPL (Read-Eval-Print Loop)
- npm (Node Package Manager)
  - `npm init`
  - `npm install` or `npm i`
  - `npm install <package_name>` or `npm i <package_name>`
  - `npm install -D <package_name>` or `npm i -D <package_name>` (for dev dependencies)
  - `npm uninstall <package_name>` or `npm remove <package_name>` or `npm r <package_name>`
  - `npm run <script_name>`
  - `npm list` or `npm ls` can have `--depth=<number>` to limit the depth of dependencies shown
- npx (Node Package Execute)

  - `npx <package_name>` to run a package without installing it globally

- CRA (Create React App)
  - Webpack (js)
- Vite. Created by Evan You (Vue.js creator)
  - Frontend build tool
  - Bundler
    - esbuild (Go) - dev
    - Rollup - prod
    - SWC (rust)
- Parcel, RSbuild

- ESlint vscode extension
- Prettier vscode extension
- HTML to JSX
- React 17+ snippets

- [Airbnb style guide](https://github.com/airbnb/javascript)

- JSX (JavaScript XML)
- one root element
- attributes are camelCase

- declarative vs imperative
- composable

- What is a react component?

  - function that returns JSX (React element)
    - React.createElement() (`jsx`, `jsxs` in React 18+)
      - JS object understood by react and converted into dom node

- Simple exercise
- Figma
- deployment on vercel

---

## Assignment

1. implement [this figma design](https://www.figma.com/design/xA1rJVQOorqMW6xjGdBLcI/ReactFacts?node-id=0-1&p=f&t=ObtUTvTZgHW5o6GG-0)
2. convert dashboard task we created earlier into react app