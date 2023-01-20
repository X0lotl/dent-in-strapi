'use strict';

/**
 * extra-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::extra-data.extra-data');
