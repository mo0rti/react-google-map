import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
    throw new Error(`Couldn't find .env file`)
}

export default {
    /**
     * Server port
     */
    port: process.env.PORT,

    /**
     * Used by logger
     */
    logs: {
        level: process.env.LOG_LEVEL,
    },

    /**
     * API configs
     */
    api: {
        prefix: '/api',
    }
};