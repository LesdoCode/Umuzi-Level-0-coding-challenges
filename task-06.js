function findLargestArgument() {
	let largest = arguments["0"];

	for (let key in arguments) {
		if (arguments[key] > largest) largest = arguments[key];
	}
	return largest;
}
