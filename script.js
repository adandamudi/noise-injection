/*
 * Javascript file that generates random searches for a plausible duration
 * and intervals once the extension has been clicked.
 */

/*
 * Generates a random number of hours x between [1, 10] this process
 * should run each time the chrome extension icon is clicked and generates
 * searches once an hour for x hours.
 */
 function init() {
 	var timeout = generateRandomNum(10);

	var time = 0;
	let timerId = setTimeout(function tick() {
	  if (time == timeout) {
	  	clearTimeout(timerId);
	  }
	  generateSearches()
	  time += 1;
	  timerId = setTimeout(tick, 3600000); // (*)
	}, 0);


}

/*
 * Returns a random integer between [1,upperBound].
 */
function generateRandomNum(upperBound) {
	var randomFloat = 0;
	while (randomFloat == 0) {
		randomFloat = Math.random();
	}

	return Math.ceil(randomFloat * upperBound);
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function generateSearches() {
	var duration = generateRandomNum(30);
  var data = {'profile1':[
    {'url':'https://www.amazon.com/Bose-SoundLink-Color-Bluetooth-speaker/dp/B01HETFQKS/ref=sr_1_2?s=electronics&ie=UTF8&qid=1511805879&sr=1-2&keywords=bose+speaker'},
      {"url":"https://www.amazon.com/Pampers-Swaddlers-Diapers-Newborn-Count/dp/B00B61HV8Q/ref=sr_1_6_a_it?ie=UTF8&qid=1511805942&sr=8-6&keywords=diapers"},
      {"url":"https://www.amazon.com/Assorted-Colorful-Kids-Pencils-Pack/dp/B000WEAJU0/ref=sr_1_12?s=office-products&ie=UTF8&qid=1511805963&sr=1-12&keywords=pencils"}
  ],
   "profile2":[
      {"url":"https://www.amazon.com/Sony-BDPS3700-Streaming-Blu-Ray-Player/dp/B01AT6B0DK/ref=sr_1_1?s=electronics&ie=UTF8&qid=1511805978&sr=1-1&keywords=blu+ray+player"},
      {"url":"https://www.amazon.com/Stout-Hygiene-Bags-Dispenser-Stone/dp/B00UWK7YAW/ref=sr_1_3?s=electronics&ie=UTF8&qid=1511805992&sr=1-3&keywords=sanitary+napkins"},
      {"url":"https://www.amazon.com/Purneat-Refrigerator-Filter-Frigidaire-ULTRAWF/dp/B075WV3R82/ref=sr_1_2_sspa?s=electronics&ie=UTF8&qid=1511806003&sr=1-2-spons&keywords=water&psc=1"}
  ],
   "profile3":[
      {"url":"https://www.amazon.com/Premium-Capacitive-Stylus-iPhone-Digital/dp/B00P3KKCE6/ref=sr_1_26?s=electronics&ie=UTF8&qid=1511806018&sr=1-26&keywords=stylus"},
      {"url":"https://www.amazon.com/Folgers-Classic-Ground-Coffee-Medium/dp/B010ULFOWC/ref=sr_1_4_s_it?s=grocery&ie=UTF8&qid=1511806068&sr=1-4&keywords=coffee"},
      {"url":"https://www.amazon.com/Lindt-LINDOR-Chocolate-Truffles-Kosher/dp/B002RBTV78/ref=sr_1_5_a_it?ie=UTF8&qid=1511806037&sr=8-5&keywords=chocolate+gifts"}
  ]};

  chrome.tabs.create(data.profile1[0]);
  chrome.tabs.create(data.profile1[1]);
  chrome.tabs.create(data.profile1[2]);
}
