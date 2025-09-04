export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          'img-src': ["'self'", 'data:', 'blob:', 'market-assets.strapi.io', 'media.strapiapp.com', 'res.cloudinary.com'],
          "frame-src": [ "http://localhost:*", "self", "sandbox.embed.apollographql.com" ],
          "script-src": ["https://cdnjs.cloudflare.com"],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'media.strapiapp.com',
            'market-assets.strapi.io',
            'res.cloudinary.com',
          ],
          upgradeInsecureRequests: null,
          // "media-src": ["https://cdnjs.cloudflare.com"],
          // "img-src": ["https://cdnjs.cloudflare.com"],     
        },
      },
    },
  },
];
