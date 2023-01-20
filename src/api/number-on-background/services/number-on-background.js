'use strict';

/**
 * number-on-background service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::number-on-background.number-on-background');
