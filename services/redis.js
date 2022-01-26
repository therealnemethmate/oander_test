const Redis = require('ioredis');
const config = require('../config');
const { logger } = require('../logger');

let redis;

const initRedis = async () => {
    if (redis) {
        logger.error('Redis already initialized!');
        return;
    }
    logger.info('Initializing redis...');
    redis = new Redis({ port: config.redis.port, host: config.redis.host });
};

const getRedis = () => {
    if (!redis) {
        logger.error('Redis is not initialized! Call init first!');
        return;
    }
    return redis;
};

module.exports = {
    initRedis,
    getRedis,
};