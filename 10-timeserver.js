var net = require('net')
var moment = require('moment')

var server = net.createServer(function(socket){
	data = moment().format('YYYY[-]MM[-]DD hh:mm')
	data.toString()
	socket.end(data)
})
server.listen(8000)
