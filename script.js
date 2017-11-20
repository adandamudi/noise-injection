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


/* 
 * Generates a series of random searches for the duration generated.
 */
function generateSearches() {
	var duration = generateRandomNum(30);

}