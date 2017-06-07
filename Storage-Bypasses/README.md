Securly Bypass - Storage Values
-------------------------------

While working on the IWF list exploit, I also came across bypasses relating to the localStorage and sessionStorage.

**localStorage**

Relating to the main exploit of the IWF list, users can also bypass the Securly IWF filter by accessing the Securly extension’s localStorage. By storing the encoded values in localStorage, Securly opens up the possibility of users completely clearing the values. In the below gif I show you how.

![localStorage bypass](http://i.imgur.com/uo0LUUE.gif)

I imagine that every school using Securly on Chromebooks already institute a wide range of group policies across the devices, blocking users from removing the Securly extension, accessing certain apps, etc. The school’s IT also needs to block a student from accessing extension [developer tools](https://www.google.com/url?q=https://www.chromium.org/administrators/policy-list-3#DeveloperToolsDisabled&sa=D&ust=1496862093170000&usg=AFQjCNFhY2N_3l0tuxYSKmi4mWQ5LHqong) and preferably an extension's background page through the same policy.

Overall this group policy may frustrate certain students who enjoy web development (such as myself), but for security reasons this may be the only option. I do not think this fix should apply to the main exploit of the IWF list though. Someone with malicious intent could still easily transfer the Securly extension’s source code to a different computer and access that list.


**sessionStorage**

Unrelated to the main exploit of the IWF list decoding, this bypass allows a user to unblock just about any website they wish by adding the site to Securly’s sessionStorage. This bypass is fairly easy, and I imagine could be fairly popular among students. As commented on in listeners.js within the Securly extension, a hostname is allowed by a certain response string. The format is shown within listeners.js as seen below.

![listeners.js img](http://i.imgur.com/fsIyJtm.png)

 Each time a site is visited within a session, Securly adds the hostname and a response string to the sessionStorage as a key and value respectively. By using the sessionStorage to store these hostnames for easier web filtering for the current session, Securly sets up the issue of changing the key. By simply changing an already allowed site’s key, or by adding a new key and ALLOW response as a value, students can unblock most sites at will. This can be seen in the gif below. Once again, I believe this could be fixed by suggesting a group policy to each school that uses Securly. 

![sessionStorage bypass img](http://i.imgur.com/aRvenf7.gif)
