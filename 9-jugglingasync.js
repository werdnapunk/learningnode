var concat = require('concat-stream')
var http = require('http')

var links = process.argv.slice(2)

var numberofresults = 0
var arrayofresults = []
var displayresults = function(){
	arrayofresults.forEach(function(output){
		console.log(output)
	})
	
}

links.forEach(function(url, index) {
	http.get(url, function(stream) {
		stream.pipe(concat(function(data){
			var string = data.toString()
			numberofresults += 1
			arrayofresults[index] = string
			if (numberofresults === links.length) {
				displayresults()
			}
		}))
	})
})





