# Acal Consulting Headless CMS

This is a headless CMS for Acal Consulting. It is built using Strapi. Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage the project in seconds.

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

The admin panel can be built with:

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!
