'use strict';

const LocalStrategy = require('passport-local').Strategy;

module.exports = app => {
  app.passport.use(new LocalStrategy(
    async (username, password) => {
      app.logger.info(`username: ${username}, password: ${password}`);
      // 检验
      // return true/false;
    }
  ));
};
