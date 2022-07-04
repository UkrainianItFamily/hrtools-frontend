# Base React App config

## Project Structure

Project have base file structure:

```
/src
├── /api                                  - configs for working with app api
|   ├── ...                               - another parts of the API if you need a more complex structure
|   └── index.js                          - file with main export or main file
├── /assets                               - all assets for app (images, audio, video, etc.)
|   ├── /images                           - assets group folder
|   |   ├── image.jpg                     - assets item
|   |   ├── ...                           - another files if you need
|   |   └── index.js                      - file with all exports for this assets group
|   ├── ...                               - another assets group if you need
|   └── index.js                          - file with main exports
├── /components                           - all common components for this app
|   ├── /example-component                - component folder
|   |   ├── /components                   - parts for this component
|   |   |   ├── example-component-part-1  - component part
|   |   |   ├── example-component-part-2  - component part
|   |   |   ├── ...                       - another component parts
|   |   |   └── index.js                  - file with all parts exports
|   |   ├── styles.js                     - styles for this component and its parts
|   |   └── index.jsx                     - main file for this component
|   ├── ...                               - another components
|   └── index.js                          - file with main exports for all common components
├── /constants                            - constants for this app
|   ├── example.constants.js              - constants for the "example" page if you need to separate them
|   ├── ...                               - another constants files
|   └── index.js                          - main export for all constants files or main file
├── /global-styles                        - css for the entire application
|   ├── ...                               - another css files if you need
|   └── index.js                          - main css and styles reset for the app
├── /helpers                              - common helper functions for the app
|   ├── ...                               - another helper files if you need a more complex structure
|   └── index.js                          - file with main exports for all helper functions or main file
├── /hooks                                - custom hooks for components
|   ├── ...                               - another hooks files if you need a more complex structure
|   └── index.js                          - file with main exports for all custom hooks or main file
├── /pages                                - all pages for this app
|   ├── /example-page                     - page folder
|   |   ├── /components                   - parts for this page
|   |   |   ├── example-page-part-1       - page part
|   |   |   ├── example-page-part-2       - page part
|   |   |   ├── ...                       - another page parts
|   |   |   └── index.js                  - file with all parts exports
|   |   ├── styles.js                     - styles for this page and its parts
|   |   └── index.jsx                     - main file for this page
|   ├── ...                               - another pages
|   └── index.js                          - file with main exports for all pages
├── /services                             - services folder
|   ├── example.service.js                - services for the "example" page or "example" page group
|   ├── ...                               - another services if you need
|   └── index.js                          - file with main exports for all services
├── /store                                - folder for redux store
|   ├── /actions                          - folder for redux actions
|   |   ├── example.actions.js            - redux actions for the "example" page or "example" page group
|   |   ├── ...                           - another actions
|   |   └── index.js                      - file with main exports for all actions
|   ├── /reducers                         - folder foe redux reducers
|   |   ├── example.reducer.js            - redux reducer for the "example" page or "example" page group
|   |   ├── ...                           - another reducer
|   |   └── index.js                      - file with main exports for all reducers
|   └── store.js                          - redux store configs and reducers connections
├── app.jsx                               - app main file with routing
└── index.js                              - file with main render
```

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

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### `yarn lint`

If you need to check the entire project for errors in coding rules, you can enter the command `lint` at any time.
