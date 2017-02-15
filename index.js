'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var upload = (0, _multer2.default)();

var form = '\n<html>\n  <form action="/upload" method="post" enctype="multipart/form-data">\n    Select file to upload:\n    <input type="file" name="file" id="file">\n    <input type="submit" value="Upload" name="submit">\n  </form>\n</html>\n';

app.post('/upload', upload.single('file'), function (req, res) {
  res.json({ size: req.file.size });
});

app.get('/', function (req, res) {
  res.send(form);
});

app.listen(process.env.PORT || 5000);
