var fs = require('fs')




// module.export(rawdata)

var findfilesbyextension = function(lolPath, lolExtension, callback){
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
if (module.parent == undefined || /exec-wrapper\.js$/.test(module.parent.filename)) {
	var path = process.argv[2]
	var extension = process.argv[3]
	findfilesbyextension(path, extension, function(err, result){
		if (err) {
			console.log(err)
		} else {
			result.forEach(function(file){
				console.log(file)
			})
		} 

	})
} else {
	module.exports == findfilesbyextension
}