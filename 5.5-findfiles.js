var fs = require('fs')
module.exports = function(lolPath, lolExtension, callback){
	fs.readdir(lolPath, function(err, files){
		if (err){
			callback(err)
		} else {
			var regexp = new RegExp("\\." + lolExtension + "$")
		
			var result = files.filter(function(str) {
				return regexp.test(str)

			})
			callback(null, result)
		}
	})
}