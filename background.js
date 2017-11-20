/* 
 * Javascript file that can be running in the background, allowing
 * for searches to be generated when Chrome itself is not open. 
 */

function click() {
	alert('icon clicked');
	chrome.tabs.executeScript({file: "script.js"}, function(response) {
		alert('finished');
	});
}

chrome.browserAction.onClicked.addListener(click);
