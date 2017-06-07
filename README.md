Securly Bypass & Exploit Compilation
------------------------------------

This Google Drive folder includes a directory of various exploits and bypasses I have found for the URL filtering within the Securly extension. All circumventions have been found or created on a school issued Chromebook during schooltime. Overall I have spent about four days finding, creating, and compiling these bypasses and results. 

**Current Circumventions:**

 - Main IWF List Exploit: These decoding scripts allow anyone to decode
   the bi-daily updating list of links used to filter child pornography
   throughout Securly URL filtering. The main webpage in the folder, if
   uploaded to a server, will automatically decode all results from the
   list and organize them cleanly into a table.
 - localStorage and sessionStorage Bypasses: These bypasses allow users
   to circumvent Securly’s IWF filtering completely by editing or
   clearing the localStorage or add almost any site they wish to the
   allowed hostnames in sessionStorage.
 - Obscure Browser: This external chrome extension acts as a Chrome
   kiosk window. By doing so, this browser no longer acts as the regular
   Chrome browser would. No extras such as bookmarks, accounts, nor
   extensions (Securly) are appended and users can access any site.

 
**Suggested Fixes:**
	For most of these bypasses, I recommend ensuring that each institution using Securly’s URL filtering implements related group policies on their devices. Simply not allowing students to access developer tools helps stop half the battle of these bypasses; although I still believe there need to be a few revisions to the code. For the main IWF list exploit, I first recommend a revised encoding algorithm. While transposing each string’s characters is smart, it’s not enough security for this type of list. Your functions already have remnants of a step variable, which could be very useful. With the bi-daily updates of the IWF list, you could also send over an encrypted step value with each update. As long as a user has no means of access to this decryption key, it would be very hard to decode the strings. Randomized step values ensure that the transposition of each string is also random based off bi-daily updates.
