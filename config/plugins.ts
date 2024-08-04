export default ({ env }) => ({
  // Ref: https://github.com/strapi-community/strapi-plugin-slugify
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        project: {
          field: 'slug',
          references: 'name'
        },
        person: {
          field: 'slug',
          references: 'slug'
        },
        expertise: {
          field: 'slug',
          references: 'slug'
        }
      }
    }
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 100,
      amountLimit: 100,
      apolloServer: {
        tracing: true,
      },
    },
  },
  'apollo-sandbox': {
    enabled: env("APOLLO_SANDBOX_ENABLED", false)
  },
  // Ref: https://github.com/strapi-community/strapi-plugin-notes
  'entity-notes': {
    enabled: true,
  },
  "soft-delete": {
    enabled: true,
  },
  //Ref: https://github.com/mancku/strapi-plugin-schemas-to-ts
  'schemas-to-ts': {
    enabled: true,
  },

  // Ref: https://github.com/strapi/strapi-plugin-seo
  seo: {
    enabled: true,
  },
  // Ref: https://github.com/lautr/strapi-plugin-duplicate-button
  'duplicate-button': true,
  //Ref: https://market.strapi.io/plugins/strapi-plugin-publisher
  publisher: {
    enabled: true,
    config: {
      hooks: {
        beforePublish: async ({ strapi, uid, entity }) => {
          console.log('beforePublish');
        },
        afterPublish: async ({ strapi, uid, entity }) => {
          console.log('afterPublish');
        },
        beforeUnpublish: async ({ strapi, uid, entity }) => {
          console.log('beforeUnpublish');
        },
        afterUnpublish: async ({ strapi, uid, entity }) => {
          console.log('afterUnpublish');
        },
      },
    },
  }
});
