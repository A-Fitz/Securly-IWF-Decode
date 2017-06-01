# Securly IWF List Decoding
[Securly](https://www.securly.com/), a web-filtering service used by over 200 school districts throughout the United States has a major security problem related to their child-pornography filtering list.

The cloud based web-filter boasts that they are partners with the Internet Watch Foundation (IWF). Per Securly's [site](https://blog.securly.com/2016/06/29/meet-our-new-partners-ikeepsafe-the-internet-watch-foundation/): 

> The IWF is a UK-based charity whose goal is to eradicate child pornography. They tirelessly work to remove child sexual abuse images and videos.

>Tracking these websites is especially hard since they’re seldom hosted on static domains. To compensate, IWF has full time staff tracing these sites; and in many cases, they have brought the creators of the material to justice.

>This partnership achieves two goals for Securly:

>By supporting the IWF in their mission, Securly reaffirms its commitment to online child safety.
>With each daily IWF list release, Securly is able to update its own blacklist URLs, allowing schools to pre-empt potential legal and PR perils that would result if child porn was accessed on their network.

By this information, schools, parents, and students interpret that Securly is able to allow schools to preemptively block child pornography using the Securly web-filtering appliance. Schools expect, as you say, to avoid potential legal and PR perils. Students expect to feel safe using your web-filtering, safe from dangerous websites which may host child pornography. Parents expect for the school to maintain control over their web-filtering, to abide by loco parentis and keep their children safe.

On the Internet Watch Foundation's (IWF) [official website](https://www.iwf.org.uk/become-a-member/join-us/our-members), they proudly list Securly as a confirmed member. Saying, "What unites them, is their commitment to do the right thing.". They confirm that Securly pays over $13,000 per year in order to have access to a bi-daily updating list of websites that contain child pornography.

Securly routes [this list](http://cdn1.securly.com/iwf-encode.txt) through their official CDN, hosted by Amazon AWS. They attempt to encode this plaintext list by running each line through a Base64 encoding scheme, transposing each character three ascii values backwards, and joining the characters again. Their script includes a *step* variable, yet their mismanagement is shown once again by this variable being not only accessible directly through the console, but by it being a static number (3).

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

To decode this is eerily simple,  I believe that such an integral part of a web-filtering system, the blocking of child pornography for underage students, should not be encoded and managed in such a terrible manner. Schools expect, as Securly states themselves, to avoid potential legal and PR perils. Students expect to be safe from dangerous websites which may host child pornography. Parents expect for the school to maintain control over their children's web-filtering, to abide by loco parentis and keep their children safe.

Not only are these results easy to decode, students can completely avoid the child pornography web-filtering by simply clearing the local storage of the chrome extension. 
![Local storage bypass](http://i.imgur.com/MiUiilo.png "Local storage bypass")Along with this, any student can also add a domain of their choice to the extension's session storage to avoid all web-filtering in general.
![Session storage bypass](http://i.imgur.com/GHJGDFi.png "Session storage bypass")


The main page that I have created organizes the live results from Securly's bi-daily updating IWF list, along with the decoded results, into an organized table. I have not created this decoding script and table to give people access to the terrible sites which are meant to be blocked, just to show how Securly has gravely mismanaged their main asepct of web-filtering for many schools.

![Main page showing table](http://i.imgur.com/FBuCXZC.png "Main page showng table")
