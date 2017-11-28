/*
 * Javascript file that can be running in the background, allowing
 * for searches to be generated when Chrome itself is not open.
 */

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function click() {
	alert('Starting Script!');
	chrome.tabs.executeScript({file: "script.js"}, function(response) {
		chrome.tabs.create({"url": "https://www.amazon.com/Bose-SoundLink-Color-Bluetooth-speaker/dp/B01HETFQKS/ref=sr_1_2?s=electronics&ie=UTF8&qid=1511805879&sr=1-2&keywords=bose+speaker"}, function(tab){
			sleep(2100).then(() => {chrome.tabs.remove(tab.id);})
		});
		chrome.tabs.create({"url": "https://www.amazon.com/Pampers-Swaddlers-Diapers-Newborn-Count/dp/B00B61HV8Q/ref=sr_1_6_a_it?ie=UTF8&qid=1511805942&sr=8-6&keywords=diapers"}, function(tab){
			sleep(3102).then(() => {chrome.tabs.remove(tab.id);})
		});
		chrome.tabs.create({"url": "https://www.amazon.com/Assorted-Colorful-Kids-Pencils-Pack/dp/B000WEAJU0/ref=sr_1_12?s=office-products&ie=UTF8&qid=1511805963&sr=1-12&keywords=pencils"}, function(tab){
			sleep(6000).then(() => {chrome.tabs.remove(tab.id);})
		});
    chrome.tabs.create({"url": "https://www.amazon.com/Stout-Hygiene-Bags-Dispenser-Stone/dp/B00UWK7YAW/ref=sr_1_3?s=electronics&ie=UTF8&qid=1511805992&sr=1-3&keywords=sanitary+napkins"}, function(tab){
			sleep(7570).then(() => {chrome.tabs.remove(tab.id);})
		});
    chrome.tabs.create({"url": "https://www.amazon.com/Sony-BDPS3700-Streaming-Blu-Ray-Player/dp/B01AT6B0DK/ref=sr_1_1?s=electronics&ie=UTF8&qid=1511805978&sr=1-1&keywords=blu+ray+player"}, function(tab){
			sleep(8700).then(() => {chrome.tabs.remove(tab.id);})
		});
    chrome.tabs.create({"url": "https://www.amazon.com/Lindt-LINDOR-Chocolate-Truffles-Kosher/dp/B002RBTV78/ref=sr_1_5_a_it?ie=UTF8&qid=1511806037&sr=8-5&keywords=chocolate+gifts"}, function(tab){
			sleep(125700).then(() => {chrome.tabs.remove(tab.id);})
		});
		alert('End of Script');
	});
}

chrome.browserAction.onClicked.addListener(click);
