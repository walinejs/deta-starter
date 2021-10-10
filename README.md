# Waline Example

This directory is a brief example of a [Waline](https://waline.js.org/) app that can be deployed with Deta and zero configuration.

## Deploy Your Own

Deploy your own Waline project with Deta.

[![Deploy with Deta](https://button.deta.dev/1/svg)](https://go.deta.dev/deploy?repo=https://github.com/walinejs/deta-starter)

### How We Created This Example

```js
//index.js
const express = require('express');
const Waline = require('@waline/vercel');
const app = express();
const callback = Waline({ 
  env: 'deta'
});

app.all(/.*/, callback);
module.exports = app;

//deta.json
{
	"name": "Waline Example",
	"description": "An Waline starter example for deploy to deta",
	"env": [
		{
			"key": "LEAN_ID",
			"description": "Your LeanCloud ID",
			"required": false 
		},
		{
			"key": "LEAN_KEY",
			"description": "Your LeanCloud KEY",
			"required": false 
		},
		{
			"key": "LEAN_MASTER_KEY",
			"description": "Your LeanCloud Master Key",
			"required": false 
		}
	]
}
```

### Deploying From Your Terminal

You can deploy your new Waline project with a single command from your terminal using [Deta CLI](https://docs.deta.sh/docs/cli/install):

```shell
$ deta deploy
```
