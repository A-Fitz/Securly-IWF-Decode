# Securly IWF List Decoding

<p>Securly, a web-filtering service used by&nbsp;over 200 school districts throughout the United States has a major security problem related to their child-pornography filtering list.</p>
<p>The cloud based web-filter boasts that they are partners with the Internet Watch Foundation (IWF). Per their site:&nbsp;</p>
<p style="padding-left: 30px;">The IWF is a UK-based charity whose goal is to eradicate child pornography. They tirelessly work to remove child sexual abuse images and videos.</p>
<p style="padding-left: 30px;">Tracking these websites is especially hard since they&rsquo;re seldom hosted on static domains. To compensate, IWF has full time staff tracing these sites; and in many cases, they have brought the creators of the material to justice.</p>
<p style="padding-left: 30px;">This partnership achieves two goals for Securly:</p>
<p style="padding-left: 30px;">By supporting the IWF in their mission, Securly reaffirms its commitment to online child safety.<br />With each daily IWF list release, Securly is able to update its own blacklist URLs, allowing schools to pre-empt potential legal and PR perils that would result if child porn was accessed on their network.</p>
<p style="padding-left: 30px;">By this information, schools, parents, and students interpret that Securly is able to allow schools to preemptively block child pornography using the Securly web-filtering appliance. Schools expect, as you say, to avoid potential legal and PR perils. Students expect to feel safe using your web-filtering, safe from dangerous websites which may host child pornography. Parents expect for the school to maintain control over their web-filtering, to abide by loco parentis and keep their children safe.</p>
<p>On the Internet Watch Foundation's (IWF) official website, they proudly list Securly as a confirmed member. Saying, "What unites them, is their commitment to do the right thing.". They confirm that Securly pays over $13,000 per year in order to have access to a bi-daily updating list of websites that contain child pornography.</p>
<p>Securly routes this list through their official CDN, hosted by Amazon AWS. They attempt to encode this plaintext list by running each line through a Base64 encoding scheme, transposing each character three ascii values backwards, and joining the characters again.&nbsp;&nbsp;</p>
<p>To decode this is eerily simple, &nbsp;I believe that such an integral part of a web-filtering system, the blocking of child pornography for underage students, should not be encoded and managed in such a terrible manner. Schools expect, as Securly states themselves, to avoid potential legal and PR perils. Students expect to be safe from dangerous websites which may host child pornography. Parents expect for the school to maintain control over their children's web-filtering, to abide by loco parentis and keep their children safe.</p>
<p>Not only are these results easy to decode, students can completely avoid the child pornography web-filtering by simply clearing the local storage of the chrome extension. Along with this, any student can also add a domain of their choice to the extension's session storage to avoid all web-filtering in general.</p>
<p>&nbsp;</p>
<p>The main page that I have created organizes the live results from Securly's bi-daily updating IWF list, along with the decoded results, into an organized table. I have not created this decoding script and table to give people access to the terrible sites which are meant to be blocked, just to show how Securly has gravely mismanaged their main asepct of web-filtering for many schools.</p>
