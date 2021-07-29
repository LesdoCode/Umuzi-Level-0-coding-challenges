function extractVowels(string) {
	let vowels = ["a", "e", "i", "o", "u"];
	let output = "";
	string = string.toLowerCase();

	for (let i = 0; i < string.length; i++) {
		if (vowels.includes(string[i])) {
			if (!output.includes(string[i])) {
				if (output != "") {
					output += ", ";
				}

				output += ` ${string[i]}`;
			}
		}
	}
	output += ".";
	console.log("Vowels:" + output);
}

extractVowels("Umuzi");
extractVowels("Umuziacademy");
