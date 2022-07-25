# HRTools | Frontend

## Install

To work with the application, you need to perform the following steps:

#### Install `corepack` for Yarn package manager

**Node.js >= 16.10**

Corepack is included by default with all Node.js installs, but is currently opt-in. To enable it, run the following command:

```
corepack enable
```

**Node.js < 16.10**

Corepack isn't included with Node.js in versions before the 16.10; to address that, run:

```
npm i -g corepack
```

If you need more information about Yarn, click [here](https://yarnpkg.com/).

#### Install project dependencies

```
yarn install
```

#### Set your .env vars:

```
REACT_APP_API_URL=<api_url>
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `yarn lint`

If you need to check the entire project for errors in coding rules, you can enter the command `lint` at any time.

## Commit Message Format

In the project you need to use recommended commit message format:

### Commit Structure

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: Optional, can be anything specifying the scope of the commit change.
  |                          For example $location|$browser|$compile|$rootScope|ngHref|ngClick|ngView, etc.
  |                          In App Development, scope can be a page, a module or a component.
  │
  └─⫸ Commit Type: feat|fix|docs|style|refactor|test|chore|perf|ci|build|temp
```

### Commit Types

- feat: 'A new feature.'
- fix: 'A bug fix.'
- docs: 'Documentation only changes.'
- style: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).'
- refactor: 'A code change that neither fixes a bug nor adds a feature.'
- test: 'Adding missing tests or correcting existing ones.'
- chore: 'Changes to the build process or auxiliary tools and libraries such as documentation generation.'
- perf: 'A code change that improves performance.'
- ci: 'Changes to your CI configuration files and scripts.'
- build: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).'
- temp: 'Temporary commit that won\'t be included in your CHANGELOG.'

### Commit Examples

- 'docs: update README to add developer tips'
- 'feat: added new page'
- 'chore: added pre-commit linters'
- 'fix: fixed dates in the app'
