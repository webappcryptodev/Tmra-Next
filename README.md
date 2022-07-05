# Tmra Next.js

Tmra v2 websites including whitelabel clients, using TypeScript, Next.js, MUI v5, and Minimal UI Kit.

This project was generated with [superplate](https://github.com/pankod/superplate).

## Configuration & Feature Flags

1. For `.env.local`: Copy from `.env.local.example` file.

2. For `src/configuration.ts`:

   Copy the `dev` configuration file from `src/configuration.dev.ts` and save it as `src/configuration.ts`.

   Other `configuration.*.ts` files are different environments and the fields must be synhronized, but configuration values & feature toggles can differ betweeen environments.
   Especially, `configuration.prod.ts` will have most features still in development disabled (`enabled: false`).

## Run Project

Run it by:

```bash
yarn
yarn dev
```

## Troubleshooting

If you get blank page with unhelpful error logs...

```
wait  - compiling /_error...
event - compiled successfully in 677 ms (2299 modules)
```

Usually because NextJS had just been upgraded and it needs to be "yarn-unplugged":

```bash
yarn unplug next
```

## Deploy to dev/qc/staging/prod

First, `git push` to `main` branch first.

[Tmra has 4 deployment stacks](https://www.notion.so/Tmra-Stacks-App-Environments-2db39bc3237846b99764ba4c6f830a3d) (`dev`, `qc`, `staging`, and `prod`). To deploy, push the `main` branch to the appropriate target branch. This will trigger GitLab CI/CD pipelines.

```bash
yarn push:dev
yarn push:qc
yarn push:staging
yarn push:prod
```

## CI Notifications to Rocket.Chat

GitLab CI Notifications to Rocket.Chat is documented here:

https://www.notion.so/hendyirawan/Send-GitLab-CI-Notifications-to-Specific-Group-Chats-optionally-Telegram-0c98ec7008fe46f1ad8aa78843eafac9


## Getting Started

superplate is a Next.js all-in-one project generator. Create your project with the tools you need without spending hours on setting them up.

## Available Scripts

### Running the development server.

```bash
    yarn dev
```

### Building for production.

```bash
    yarn build
```

### Running the production server.

```bash
    yarn start
```

## Learn More

To learn more about **superplate**, please check out the [Documentation](https://github.com/pankod/superplate).


### **CSS / styled-jsx**

Next.js comes with built-in support for CSS and styled-jsx. Styled-jsx is full, scoped and component-friendly CSS support for JSX (rendered on the server or the client).

[Go To Documentation](https://github.com/vercel/styled-jsx)


### **Fetch**

Next.js has a built-in polyfill for the fetch API. You don&#39;t need to worry about using it on either server or client side.

[Go To Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)


### **Axios**

Promise based HTTP client for the browser and node.js.

[Go To Documentation](https://github.com/axios/axios)


### **Storybook**

Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more. It makes building stunning UIs organized and efficient.

[Go To Documentation](https://storybook.js.org/docs/react/get-started/introduction)


### **SVGR**

Transform SVGs into React components.

[Go To Documentation](https://react-svgr.com/docs/getting-started/)


### **Environment Variables**

Use environment variables in your next.js project for server side, client or both.

[Go To Documentation](https://github.com/vercel/next.js/tree/canary/examples/environment-variables)


### **React Query**

Hooks for fetching, caching and updating asynchronous data in React.

[Go To Documentation](https://react-query.tanstack.com/overview)


### **React Redux**

Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

[Go To Documentation](https://redux.js.org/introduction/getting-started)


### **next-i18next**

next-i18next is a plugin for Next.js projects that allows you to get translations up and running quickly and easily, while fully supporting SSR, multiple namespaces with codesplitting, etc.

[Go To Documentation](https://github.com/isaachinman/next-i18next)


### **ESLint**

A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.

[Go To Documentation](https://eslint.org/docs/user-guide/getting-started)


### **Prettier**

An opinionated code formatter; Supports many languages; Integrates with most editors.

[Go To Documentation](https://prettier.io/docs/en/index.html)


### **lint-staged**

 The concept of lint-staged is to run configured linter (or other) tasks on files that are staged in git.

[Go To Documentation](https://github.com/okonet/lint-staged)


### **Testing Library**

The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils.

[Go To Documentation](https://testing-library.com/docs/)


### **Cypress**

Fast, easy and reliable testing for anything that runs in a browser.

[Go To Documentation](https://docs.cypress.io/guides/overview/why-cypress.html)


### **Docker**



[Go To Documentation]()


### **Github Actions**

GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub.

[Go To Documentation](https://docs.github.com/en/actions)

## Set Up VS Code - EXPERIMENTAL

Regenerate [Yarn PnP Editor SDKs](https://yarnpkg.com/getting-started/editor-sdks):

```bash
yarn dlx @yarnpkg/sdks vscode
```

Then Ctrl+Shift+P in a TypeScript file > Select TypeScript version… > Use Workspace Version.


**Note:** 
1. If you use VS Code Workspace instead of opening a single folder, change your VS Code 
2. To be able open the resource of the installed component file stored please install ZipFS extension at your VS Code
**workspace** configuration (`.code-workspace` file) to add the following:

```json
	"settings": {
		"typescript.tsdk": "tmra-next/.yarn/sdks/typescript/lib"
	}
```

Then Ctrl+Shift+P in a TypeScript file > Select TypeScript version… > Use Workspace Version.

## Only If You Want to Run Semgrep Locally

```bash
pip3 install --upgrade semgrep
```

More info: https://www.notion.so/hendyirawan/How-To-Add-Semgrep-To-A-GitLab-Project-0c98345d99c24d64876eb53ae6ed27e9
