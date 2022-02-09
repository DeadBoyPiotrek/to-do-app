const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'mlodyDatabase',
        mongodb_password: 'Password',
        mongodb_clustername: 'todocluster',
        mongodb_database: 'to_do_app_dev',
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'mlodyDatabase',
      mongodb_password: 'Password',
      mongodb_clustername: 'todocluster',
      mongodb_database: 'to_do_app',
    },
  };
};
