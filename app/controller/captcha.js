'use strict';

const Captchapng = require('captchapng');
const SvgCaptcha = require('svg-captcha');

const Controller = require('egg').Controller;

class CaptchaController extends Controller {

  async getCode1() {
    const { ctx } = this;

    const p = new Captchapng(80, 30, parseInt(Math.random() * 9000 + 1000));
    p.color(0, 100, 0, 0);
    p.color(80, 250, 80, 255);

    const img = p.getBase64();

    ctx.body = new Buffer(img, 'base64');
  }

  async getCode2() {
    const { ctx } = this;
    const options = {// 参数
      width: 100,
      height: 40, // height of captcha
      fontSize: 50, // captcha text size
      color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
      noise: 4, // 干扰线条的数量
      background: '#dda92e', // 验证码图片背景颜色
      ignoreChars: '0oO1iIl', // 验证码字符中排除 0oO1iIl
    };
    // const captcha = SvgCaptcha.createMathExpr(options);// 生成验证码 算术式
    const captcha = SvgCaptcha.create(options);// 生成验证码 算术式
    ctx.logger.info(`验证码：${captcha.text}`);
    ctx.body = captcha.data;
  }
}

module.exports = CaptchaController;
