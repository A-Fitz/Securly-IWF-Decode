# Securly IWF List Decoding

Securly routes [this list](http://cdn1.securly.com/iwf-encode.txt) through their official CDN, it is handpicked by the IWF to help web-filter child pornography. The list is known to update 1-2 times daily. Securly attempts to encode this list by running each line through a Base64 encoding scheme, transposing each character three ascii values backwards, and joining the characters again. Their script includes a *step* variable, yet this variable is not only accessible directly through the console, but by it is also a static number (3). I believe that many of Securly's issues with this exploit could be solved by updating this step variable with each list update. Also, they would need to find a way to make sure that this step variable cannot be interpreted by the user in any way.

#### The original encoding functions

~~~~
function myB64Encode(str, step) {
	var res = window.btoa(str).split('');
	for (var i = 0; i < res.length; i++) {
		res[i] = myB64EncodeHelper(res[i], step);
	}
	return res.join('');
}

function myB64EncodeHelper(c, step) {
	var asciiPos = c.charCodeAt(0);
	if ('0' <= c && c <= '9') {
		step %= 10;
		asciiPos += step;
		if (asciiPos > '9'.charCodeAt(0)) {
			asciiPos -= 10;
		}
	}
	else if ('A' <= c && c <= 'Z') {
		step %= 26;
		asciiPos += step;
		if (asciiPos > 'Z'.charCodeAt(0)) {
			asciiPos -= 26;
		}
	}
	else if ('a' <= c && c <= 'z') {
		step %= 26;
		asciiPos += step;
		if (asciiPos > 'z'.charCodeAt(0)) {
			asciiPos -= 26;
		}
	}
	return String.fromCharCode(asciiPos);
}
~~~~

To decode this is simple, I created two new functions that are pretty much reverses of the originals. It splits each encoded string into an array of characters, then transposes the ascii position of each letter down three. When the transposing is done, the script joins the letters and decodes from base64. In these functions I ignored the original step variable because it was statically set to three. 

#### Decoding functions
~~~~
function Decode(str) {
	var res = str.split('');
	for (var i = 0; i < res.length; i++) {
		res[i] = DecodeHelper(res[i]);
	}
	res = res.join('');
	return window.atob(res);
}

function DecodeHelper(c) {
	var asciiPos = c.charCodeAt(0);
	if ('0' <= c && c <= '9') {
		asciiPos -= 3;
		if (asciiPos < '0'.charCodeAt(0)) {
			asciiPos += 10;
		}
	} else if ('A' <= c && c <= 'Z') {
		asciiPos -= 3;
		if (asciiPos < 'A'.charCodeAt(0)) {
			asciiPos += 26;
		}
	} else if ('a' <= c && c <= 'z') {
		asciiPos -= 3;
		if (asciiPos < 'a'.charCodeAt(0)) {
			asciiPos += 26;
		}
	}
	return String.fromCharCode(asciiPos);
}
~~~~

The main page that I have created organizes the live encoded results from Securly's IWF list, along with the decoded results, into an organized table. You can view this table by uploading the files to a server or by downloading the iwf-encode.txt and changing the decodePage function in main.js.

![Main page showing table](http://i.imgur.com/FBuCXZC.png "Main page showng table")

Not only are these results easy to decode, students can completely avoid the child pornography web-filtering by simply clearing the local storage of the chrome extension.
![Local storage bypass](http://i.imgur.com/MiUiilo.png "Local storage bypass")

Along with this, any student can also add a domain of their choice, and the allow parameters, to the extension's session storage to avoid all web-filtering in general.
![Session storage bypass](http://i.imgur.com/GHJGDFi.png "Session storage bypass")
