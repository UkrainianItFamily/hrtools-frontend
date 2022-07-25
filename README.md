# HRTools | Frontend

## Install

To work with the application, you need to perform the following steps:

1. Install `corepack` for Yarn package manager

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

2. Use the `yarn install` command to install project dependencies

3. Set your .env vars:

```
REACT_APP_API_URL=<api_url>
```

4. Use the `yarn build` command to build app for production to the `build` folder
