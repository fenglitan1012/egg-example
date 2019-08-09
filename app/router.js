'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 验证码
  router.get('/captcha', controller.captcha.getCode1);
  router.get('/captcha2', controller.captcha.getCode2);

};
