# GitHub Pages with Create React App (demo)

A simple demo using React with GitHub pages deployment

<br />

## Available Scripts

In the project directory, you can run:


### `npm start`

Runs the app in the development mode.

### `npm run deploy`

Deploys the app on GitHub pages.

## Important

Remember to include the following in the `package.json` file:

```
"scripts": {
  ...

  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"

  ...
},
...

"homepage": "https://<username>.github.io/<repo_name>",

...

```

If you have media under the `public` folder, be sure to include ```process.env.PUBLIC_URL``` to the src or the relative path may not work properly!

## Added (Mar 12, 2021)

- image links of relative path from a json file
- random number generator



