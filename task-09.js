function extractVowels(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let output = "";
    string = string.toLowerCase();

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            if (!output.includes(string[i])) {
                output += ` ${string[i]}`;

                if (i == string.length - 1)
                    output += '.';
                else
                    output += ',';
            }
        }
    }
    console.log("Vowels:" + output);
}