//Step number found by running IWFEncodeStep(); in console of extension background page

//Raw function taken from Securly extension
function myB64Encode(str, step) {
	var res = window.btoa(str).split('');
	for (var i = 0; i < res.length; i++) {
		res[i] = myB64EncodeHelper(res[i], step);
	}
	return res.join('');
}



//Raw function taken from Securly extension
function myB64EncodeHelper(c, step) {
	var asciiPos = c.charCodeAt(0);
	if ('0' <= c && c <= '9') {
		step %= 10;
		asciiPos += step;
		if (asciiPos > '9'.charCodeAt(0)) {
			asciiPos -= 10;
		}
	} else if ('A' <= c && c <= 'Z') {
		step %= 26;
		asciiPos += step;
		if (asciiPos > 'Z'.charCodeAt(0)) {
			asciiPos -= 26;
		}
	} else if ('a' <= c && c <= 'z') {
		step %= 26;
		asciiPos += step;
		if (asciiPos > 'z'.charCodeAt(0)) {
			asciiPos -= 26;
		}
	}
	return String.fromCharCode(asciiPos);
}

//Reverse function of myB64Encode
function Decode(str) {
  //split string into parts
	var res = str.split('');
	//for each character of string, run through DecodeHelper
	for (var i = 0; i < res.length; i++) {
		res[i] = DecodeHelper(res[i]);
	}
	//rejoin output characters as string
	res = res.join('');
	//return base64 decoded string
	return window.atob(res);
}

//Reverse function of myB64EncodeHelper, step number always 3
function DecodeHelper(c) {
  //set variable to ascii code of inputed character
	var asciiPos = c.charCodeAt(0);
	//if character is number, subtract 3 ascii positions
	//if that makes it less than 0, add ten to balance it
	if ('0' <= c && c <= '9') {
		asciiPos -= 3;
		if (asciiPos < '0'.charCodeAt(0)) {
			asciiPos += 10;
		}
	//if character is uppercase letter, subtract 3 ascii positions
	//if that makes it less than 'A', add twenty-six to balance it
	} else if ('A' <= c && c <= 'Z') {
		asciiPos -= 3;
		if (asciiPos < 'A'.charCodeAt(0)) {
			asciiPos += 26;
		}
	//if character is lowercase letter, subtract 3 ascii positions
	//if that makes it less than 'a', add twenty-six to balance it
	} else if ('a' <= c && c <= 'z') {
		asciiPos -= 3;
		if (asciiPos < 'a'.charCodeAt(0)) {
			asciiPos += 26;
		}
	}
	//return character from outputed ascii code
	return String.fromCharCode(asciiPos);
}

//create global arrays for table
var Encoded = [];
var Decoded = [];

//get and interpret IWF list url found in Securly extension
function decodePage() {
  //use anyorigin/whateverorigin to bypass sameorigin policy and get external txt data
	$.getJSON('http://anyorigin.com/go?url=cdn1.securly.com/iwf-encode.txt&callback=?', function(data) {
	  //create array of data
		var values = data.contents.split("\n");
		
		for (var i = 0; i < values.length; i++) {
		  //for each line of text (encoded urls), push encoded value to array
			Encoded.push(values[i]);
			//run encoded value through decoding script
			var res = values[i].split('');
			for (var j = 0; j < res.length; j++) {
				res[j] = DecodeHelper(res[j]);
			}
			//join characters and push to decoded array
			res = window.atob(res.join(''));
			Decoded.push(res);
		}
	});
}

//Script to generate table from 2 arrays I found on stackoverflow, modified to create 2 columns instead of multiple rows
//https://stackoverflow.com/questions/44281441/populating-html-table-from-multiple-arrays
function popTable(array, arrayTwo) {
  //create table and give class name
	var list = document.createElement('table');
	list.className = 'responstable';
	
	//create the headers of the table, easier to do continous javascript instead of mixing html into play
	var head = list.appendChild(document.createElement('tr'));
	var headth = document.createElement('th');
	headth.className = 'encoded';
	headth.appendChild(document.createTextNode("Encoded"));
	head.appendChild(headth);

	var headth2 = document.createElement('th');
	headth2.className = 'decoded';
	headth2.appendChild(document.createTextNode("Decoded"));
	head.appendChild(headth2);
	
	
	//create both columns of data from their respective global arrays created above
	for (var i = 0; i < array.length; i++) {
		var columns = list.appendChild(document.createElement('tr'));
		var left = document.createElement('th');
		left.appendChild(document.createTextNode(array[i]));
		columns.appendChild(left);

		var right = document.createElement('th');
		right.appendChild(document.createTextNode(arrayTwo[i]));
		columns.appendChild(right);
	}
	return list;
}

//Decode the current list using the function above and create the table using popTable
decodePage();
window.onload = function() {
	var tableGen = popTable(Encoded, Decoded);
	$('#table').html(tableGen);
}
