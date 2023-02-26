const Waline = require('@waline/vercel');

const app = Waline({
  async postSave(comment) {
    // do what ever you want after save comment
  },
});

require('http').createServer(app).listen(process.env.PORT || 3000);
