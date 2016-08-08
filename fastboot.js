var express = require('express');
var fastbootMiddleware = require('fastboot-express-middleware');

var app = express();

app.get('/*', fastbootMiddleware('/Users/stefanepenner/tmp/test-fb/tmp/broccoli_merge_trees-output_path-JviXYVs2.tmp'));

app.listen(3000, function () {
  console.log('FastBoot app listening on port 3000!');
});
