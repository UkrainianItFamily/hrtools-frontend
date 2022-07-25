# HRTools | Frontend

To work with the application, you need to perform the following steps:

### Install corepack for Yarn package manager

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

### Install project dependencies

Use command:

```
yarn install
```

### Set processing .env settings

```
REACT_APP_API_URL=<api_url>
```

### Runs the app in the development mode

```
yarn start
```

### Builds the app for production to the `build` folder

```
yarn build
```
