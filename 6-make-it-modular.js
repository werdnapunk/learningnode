var filteredls = require('./5.5-findfiles.js')
var path = process.argv[2]
var extension = process.argv[3]
//console.log(path, " ", extension)
filteredls(path, extension, function(err, result){
	if (err) {
		console.log(err)
	} else {
		result.forEach(function(file){
			console.log(file)
		})
	} 

})