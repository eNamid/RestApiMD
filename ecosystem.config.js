module.exports = {
  apps: [
    {
      name: 'books',
      script: './service.js',
      watch: true,
      ignore_watch: 'node_modules',
      env: {
        NODE_ENV: 'development',
        MONGO_USER: 'user',
        MONGO_PASS: 'user',
        MONGO_DB: 'books',
        MONGO_HOST: '178.251.107.53/32',
        PORT: 8282,
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};