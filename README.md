# Acal Consulting Headless CMS

This is the Acal Consulting website CMS built on top of [Strapi](https://docs.strapi.io/dev-docs/). Read more on Strapi on the link provided.

## Requirements

Setting up the project will require the following setup on your local development machine

### [NPM](https://www.npmjs.com/), [Yarn](https://yarnpkg.com/) or [bun](https://bun.sh/)

Ensure you have either `npm`, `yarn` or `bun` installed locally to be able to install dependencies. Refer to the documentation attached in the links to follow the instructions to install these tools

### [NodeJS](https://nodejs.org/en)

This project is built with Node and therefore it is needed to run the project. You can find the instructions to installed node in the link provided. The version to install should be at least 18.17.1, however if you already have node installed that is of a lower version, you can use [NVM](https://github.com/nvm-sh/nvm) to install and manage
multiple versions of Node.

### [Docker](https://www.docker.com/)

Docker here is used to run the CMS database in a docker container. There is an alternative to not need to install Docker locally and use a native installation of a database. The database used here is [Postgres](https://www.postgresql.org/) and you could either install postgres locally and run it to let the CMS connect to it or run it in a docker container as specified in the [docker compose file](./docker-compose.yml).

## 🚀 Getting started

First, setup the `.env` file with the following command:

```bash
cp .env.example .env
```

Then, install the dependencies:

```bash
yarn install
```

Now start the database with the docker compose command:

```bash
docker compose up
```

> This downloads the PostgreSQL image and starts the database.

Finally, run the following command to start the development server:

```bash
yarn develop
```

The application can be started with autoReload disabled:

```bash
yarn start
```

### Building the application

Building the application can be done with the below command:

```shell
npm run build
# or
yarn build
or
bun build
```

> [Learn more here](https://docs.strapi.io/dev-docs/cli#strapi-build)

## ⚙️ Deployment

The project is currently hosted on [Strapi Cloud](https://cloud.strapi.io) which offers a managed solution to handling the deployment. However, there are multiple ways to deploy the application. Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment)

Deployment can be done by running the below command:

```shell
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.
