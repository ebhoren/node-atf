Node-ATF
=========

## Usage

	var nodeatf = require('node-atf');
		nodeatf.png2atf('filename.png', 'output.atf', 'options', function(error, stdout, stderr){
			console.log(error, stdout, stderr);
		});


## Options

-c 	Create a block compressed texture set (DXT1+ETC1+PVRTC4bpp).
   	Use d, e or p to only encode and embed either dxt1, etc1 or pvrtc.

-m 	Create a cubemap. Input files need to be named <filename><n>.png
   	where n=0-5. Order is [-x,+x,-y,+y,-z,+z].

-r  Compress block compressed textures using JPEG-XR+LZMA to reduce file size.
-e  Embed empty (black) mip maps.
-n  Embed a specific range of texture levels (main texture + mip map). The range is defined as <start>,<end>. 0 is the main texture, mip map starts with 1.
-x  Read mip map images from input files instead of autocreating them. Input files need to be named <filename><ll>.png
    where ll=00-12. For cubemaps the format is <filename><ll><n>.png
-s  Silence output during compression.

Options for non-block compressed textures:
   -4  Use 4:4:4 colorspace
   -2  Use 4:2:2 colorspace
   -0  Use 4:2:0 colorspace

   -q  quantization level. 0 == lossless. (default is 30 for standard
       textures and 0 for block compressed textures)
   -f  trim flex bits. 0 == lossless. (default is 0)


## License (BSD)