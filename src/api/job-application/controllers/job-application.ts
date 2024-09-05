/**
 * job-application controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::job-application.job-application');

export default factories.createCoreController('api::job-application.job-application', ({ strapi }) => ({
    async create(ctx) {
        // @ts-ignore
        const files = ctx.request.files;
        let application = await strapi.entityService.create('api::job-application.job-application', {
            data: {
                // @ts-ignore
                ...ctx.request.body,
            },
            files
        });
        ctx.body = application
    }
}));