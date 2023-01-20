'use strict';

/**
 * big-message service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::big-message.big-message');
