# Boilerplate Game

-   NodeJS 16.15.1
-   NPM 8.11.0

## Generated from Webpack Frontend Starterkit

[![Dependabot badge](https://flat.badgen.net/dependabot/wbkd/webpack-starter?icon=dependabot)](https://dependabot.com/)

### Installation

```bash
npm ci
```

### Start Dev Server

#### Open browser method:

```bash
npm start
```

#### Serve only method:

```bash
npm run serve
```

### Build Prod Version

```bash
npm run build
```

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
