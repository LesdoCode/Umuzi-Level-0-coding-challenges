function decipherTime(_minutes) {
	let minutes = _minutes % 60;
	let hours = _minutes / 60;
	let time = '"'; //I've only put the quotes first because the question literal looks that way in both cases. Just to be sure.

	if (hours >= 1) {
		if (hours < 2) time += "1 hour";
		else time += Math.floor(hours) + " hours";
	}

	if (hours >= 1 && minutes > 0) time += ", ";
	else if (minutes <= 0) {
		time += ".";
		return time;
	}

	if (minutes > 0) {
		if (minutes < 2) time += "1 minute.";
		else time += minutes + " minutes.";
	}

	return time;
}

console.log(decipherTime(550));
