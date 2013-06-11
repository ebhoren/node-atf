var nodeatf = require('./node-atf.js'),
	src 	= './samples/test.png',
	output 	= './samples/test.atf';


nodeatf.png2atf(src, output, '-c d -r -e', function(err, stdout, stderr) {
	if( err ) throw err;
	console.log(stdout);
});
