Securly Bypass - Obscure Browser
--------------------------------

Someone I know found this Chrome extension and shared it with me. It completely disables all functions of the Securly extension by using what looks like a Chrome Kiosk Window and FoamJS. The only way I can see blocking this is to stop users from using Developer Mode for Chrome extensions. Doing this will stop users from installing non Chrome Webstore extensions. This is not doable through just the Securly extension though; the security issue falls into the lap of each school’s IT. 

I imagine that every school using Securly on Chromebooks already institute a wide range of group policies across the devices, blocking users from removing the Securly extension, accessing certain apps, etc. The school’s IT also needs to block a student from accessing extension [developer tools](https://www.chromium.org/administrators/policy-list-3#DeveloperToolsDisabled) and preferably an extension's background page through the same policy. 

Overall this group policy may frustrate certain students who enjoy web development (such as myself), but for security reasons this may be the only option. I do not think this fix should apply to the main exploit of the IWF list though. Someone with malicious intent could still easily transfer the Securly extension’s source code to a different computer and access that list.
 
[The Google Document which was linked to me for this browser.](https://docs.google.com/document/d/1oOC5AMMKrG4SjJxNjvYkc2S0rAsvbGHMKOEA63RwYWI/edit) 
 
Browser version 2.1.1 and 4.1 are linked in this folder, the zip files can be unzipped and loaded as unpacked extensions.
