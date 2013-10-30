var http = require('http')

http.get(process.argv[2], function(response){
	var collectitall = ""
	response.setEncoding("utf8")
	response.on("data", function(infofromserver) {
		collectitall = collectitall + infofromserver

	})
	response.on("end", function(lastpiece){
		if (lastpiece != undefined) {
			collectitall = collectitall + lastpiece
		}
		console.log(collectitall.length)
		console.log(collectitall)
	})
}) 