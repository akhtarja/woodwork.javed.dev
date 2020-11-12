# woodwork.javed.dev

[![Test status](https://github.com/akhtarja/woodwork.javed.dev/workflows/test/badge.svg)](https://github.com/akhtarja/woodwork.javed.dev/actions)
[![Deployment status](https://github.com/akhtarja/woodwork.javed.dev/workflows/gatsby-deploy/badge.svg)](https://github.com/akhtarja/woodwork.javed.dev/actions)

This repository contains the codebase for https://woodwork.javed.dev.

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

## ⚙️ Deploying to Amazon Web Services

The deployment process expects two environment variables in the repository's secrets store:

| Variable name                      | Description                                                                                          |
| :--------------------------------- | :--------------------------------------------------------------------------------------------------- |
| `WOODWORK_JAVED_DEV_BUCKET_NAME`   | The name of the Amazon S3 bucket to deploy to. This bucket should be set up to host a static website |
| `WOODWORK_JAVED_DEV_CLOUDFRONT_ID` | The distribution ID of the site's Cloudfront distribution.                                           |
| `AWS_ACCESS_KEY_ID`                | The access key ID for a target AWS environment for hosting.                                          |
| `AWS_SECRET_ACCESS_KEY`            | The secret access key for a target AWS environment for hosting.                                      |

The site is hosted in an S3 bucket in AWS, with a CloudFront distribution in front of it. When a pull request is merged to the `master` branch, the GitHub Actions pipeline will deploy it to AWS and invalidate the CloudFront distribution cache. This progress can be monitored from the `Actions` tab.
