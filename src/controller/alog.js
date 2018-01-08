const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {
  async 'a.gifAction'() {
    const userAgent = this.ctx.userAgent;
    const timestamp = Date.now() / 1000;
    this.mongo('log').add({
      user_agent: userAgent,
      create_time: timestamp
    });
    this.ctx.status = 204;
  }
};
