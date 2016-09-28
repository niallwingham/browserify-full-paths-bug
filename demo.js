var browserify = require("browserify");
var fs = require("fs");
var path = require("path");
var open = require('opn');

var fsOpts = { encoding: "utf8" };
var browserifyOpts = {
    entries: ['./src/entry.js'],
    fullPaths: process.argv.indexOf('--full-paths') !== -1
};
var bundlePath = path.join(__dirname, "dist", "bundle.js");

browserify(browserifyOpts)
    .require('./src/entry.js', { expose: 'entry' })
    .bundle()
    .pipe(fs.createWriteStream(bundlePath, fsOpts))
    .on('finish', function () {
        open('./demo.html', { wait: false });
    });
