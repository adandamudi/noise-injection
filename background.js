/*
 * Javascript file that can be running in the background, allowing
 * for searches to be generated when Chrome itself is not open.
 */

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function click() {
	alert('icon clicked');
	chrome.tabs.executeScript({file: "script.js"}, function(response) {
		chrome.tabs.create({"url": "https://www.amazon.com/Bose-SoundLink-Color-Bluetooth-speaker/dp/B01HETFQKS/ref=sr_1_2?s=electronics&ie=UTF8&qid=1511805879&sr=1-2&keywords=bose+speaker"}, function(tab){
			sleep(2000).then(() => {chrome.tabs.remove(tab.id);})
		});
		chrome.tabs.create({"url": "https://www.amazon.com/Pampers-Swaddlers-Diapers-Newborn-Count/dp/B00B61HV8Q/ref=sr_1_6_a_it?ie=UTF8&qid=1511805942&sr=8-6&keywords=diapers"}, function(tab){
			sleep(3000).then(() => {chrome.tabs.remove(tab.id);})
		});
		chrome.tabs.create({"url": "https://www.amazon.com/Assorted-Colorful-Kids-Pencils-Pack/dp/B000WEAJU0/ref=sr_1_12?s=office-products&ie=UTF8&qid=1511805963&sr=1-12&keywords=pencils"}, function(tab){
			sleep(4000).then(() => {chrome.tabs.remove(tab.id);})
		});
		alert('finished');
	});
}

chrome.browserAction.onClicked.addListener(click);
