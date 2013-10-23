var fs = require('fs')
var path = process.argv[2]
var extension = process.argv[3]

var rawdata = fs.readdir(path, 'utf8', function(err, files){
	if (err){
		console.log(err)

	var result = files.filter(function() {
		return str.match(/\\./ + extension + "$" )
		console.log(result)	
	})

}})
