# woodwork.javed.dev

This repository contains the codebase for https://blog.javed.dev.

This project was built with [GatsbyJS](https://www.gatsbyjs.org/).

This project has [ESLint](https://eslint.org/) to lint JavaScript and React, and [Prettier](https://prettier.io/) to format code according to a specified set of rules.

## 🚀 Quick start

1.  **Clone this repo.**

    ```sh
    git clone git@github.com:akhtarja/woodwork.javed.dev.git
    ```

1.  **Start developing.**

    Navigate into your new site’s folder and start it up.

    ```sh
    cd woodwork.javed.dev/
    npm install
    npm run develop
    ```

    Your site is now running at `http://localhost:4800`.

    _Note: You'll also see a second link: _`http://localhost:4800/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🏗 Creating an Optimized Production Build

```
npm run build
npm run serve
```

Your production-ready site is now running at `http://localhost:9000`. The site assets are located in the `public` folder.

## ⚙️ Deploying to Amazon Web Services

The site is hosted in an S3 bucket in AWS, with a CloudFront distribution in front of it. The deployment process expects two enxironment variables:

| Variable name                      | Description                                                                                          |
| :--------------------------------- | :--------------------------------------------------------------------------------------------------- |
| `WOODWORK_JAVED_DEV_BUCKET_NAME`   | The name of the Amazon S3 bucket to deploy to. This bucket should be set up to host a static website |
| `WOODWORK_JAVED_DEV_CLOUDFRONT_ID` | The distribution ID of the site's Cloudfront distribution.                                           |

With both environment variables set:

```sh
npm run deploy
```

You will be asked to confirm, and the deployment will begin. Once complete, the script will invalidate the CloudFront distribution's cache. Press `q` to exit once you see the results.
