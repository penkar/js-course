var obj = {}
var string = ''

var stringConstruct = function(object,blankString){
	for(var i = 0; i < Object.keys(object).length; i++){
		blankString += object[i][0] || '';
		blankString += object[i][1] || '';
		blankString += object[i][2] || '';
	}
	return blankString.replace(/\n/g,'');
}

var stringConstructRev = function(object,blankString){
	for(var i = 1; i <= Object.keys(object).length; i++){
		blankString += object[Object.keys(object).length-i][2] || '';
		blankString += object[Object.keys(object).length-i][1] || '';
		blankString += object[Object.keys(object).length-i][0] || '';
	}
	return blankString.replace(/\n/g,'');
}

var append = function(text){
	$string = $('<div/>')
	$string.text(text)
	$('#container').append($string)
}
var endpointCount = 77;
for (var i = 0; i < endpointCount; i++) {
	// Make a call to our server, requesting a set of data.
	// The data we get back is a chunk of strings that form
	// a larger message.
	(function(i){
		$.ajax({
			type: 'GET',
			url: '/' + i,
			success: function(data) {
				var parsedData = JSON.parse(data);
				console.log(parsedData)
				console.log('Got back success from call ' + i + '!');
				parsedData.id=i;
				obj[i]=parsedData;
			}
		})
	})(i)
}

// setTimeout('append(stringConstruct(obj,string))',4000)


$('#button').on('click', function(e){
	setTimeout('append(stringConstruct(obj,string))',1000)
	setTimeout('append(stringConstructRev(obj,string))',5000)
})