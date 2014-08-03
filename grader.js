http://mighty-oasis-7430.herokuapp.com/
/*
Automatically grade files for the presence of specified HTML tags/attributes.
Uses commander.js and cheerio. Teaches command line application development
and basic DOM parsing.

References:

 + cheerio
   - https://github.com/MatthewMueller/cheerio
   - http://encosia.com/cheerio-faster-windows-friendly-alternative-jsdom/
   - http://maxogden.com/scraping-with-node.html

 + commander.js
   - https://github.com/visionmedia/commander.js
   - http://tjholowaychuk.com/post/9103188408/commander-js-nodejs-command-line-interfaces-made-easy

 + JSON
   - http://en.wikipedia.org/wiki/JSON
   - https://developer.mozilla.org/en-US/docs/JSON
   - https://developer.mozilla.org/en-US/docs/JSON#JSON_in_Firefox_2
*/

var fs = require('fs');
var program = require('commander');
var rest = require('restler');
var URL_DEFAULT = "http://mighty-oasis-7430.herokuapp.com/";
var CHECKSFILE_DEFAULT = "checks.json";
var cheerio = require('cheerio');


var assertFileExists = function(url, fn) {
    rest.get(url).on("complete", function(result){
	var instr = result.toString();
	fn(instr);
    });
}

var loadChecks = function(checksfile) {
    return JSON.parse(fs.readFileSync(checksfile));
};

var checkHtmlFile = function(url, checksfile, fn) {
    assertFileExists(url, function(instr){
	$ = cheerio.load(instr);
	var checks = loadChecks(checksfile).sort();
	console.log("checks", checks)
	var out = {};
	for(var ii in checks) {
        var present = $(checks[ii]).length > 0;
        out[checks[ii]] = present;
        }
        fn(out);
    })
};


if(require.main == module) {
    program
        .option('-c, --checks <check_file>', 'Path to checks.json')
        .option('-f, --file <url>', 'Path to url')
        .parse(process.argv);
        checkHtmlFile(program.file, program.checks, function(checkJson){
        var outJson = JSON.stringify(checkJson, null, 4);
	console.log(outJson);
    })
} else {
    exports.checkHtmlFile = checkHtmlFile;
}

console.log(program.file)
