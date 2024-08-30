/**
 * job-application controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::job-application.job-application');

// export default factories.createCoreController('api::job-application.job-application', ({ strapi }) => ({
//     async create(ctx) {
//         const files = ctx.request.files;
//         let application = await strapi.entityService.create('api::job-application.job-application', {
//             data: {
//                 ...ctx.request.body,
//                 applicant: ctx.state.user.id
//             },
//             files
//         });
//         ctx.body = application
//     }
// }));