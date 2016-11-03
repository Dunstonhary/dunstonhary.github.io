var path = require('path');
module.exports = {
	debug:true,
	entry :{
		onLoadProcessor:[__dirname+ '/js/onload-process/on-load-processor.js',
		__dirname+ '/js/web-audio/webAudio-Ex1.js']
	,	
	}, 
	output: {
		filename :'bundle.js'
	},
	watch:true
}