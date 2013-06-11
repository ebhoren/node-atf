var path      = require('path'),
    exec      = require('child_process').exec,
    png2atf   = path.resolve(__dirname, './', 'bin/png2atf');

// export PNG to ATF
module.exports.png2atf = function( src, dest, options, callback ){

	var commands = [png2atf];
		commands.push( options );
		commands.push('-i ' + src);
		commands.push('-o ' + dest);

	exec(commands.join(' '), function(error, stdout, stderr){

		if( error ) console.log('Error during texture\'s encoding at: ' + src);
		callback( error, stdout, stderr );
	});

};