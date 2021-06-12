function getCommonCharecters(string1, string2) {
    let commonLetters = "";
    let shortestString, longestString;

    if (string1 < string2) {
        shortestString = string1;
        longestString = string2;
    } else {
        shortestString = string2;
        longestString = string1;
    }

    for (let i = 0; i < shortestString.length; i++) {
        if (longestString.includes(shortestString[i])) {
            if (!commonLetters.includes(shortestString[i])) {
                commonLetters += shortestString[i];

                if (i == shortestString.length - 1)
                    commonLetters += '.';
                else
                    commonLetters += ', ';
            }
        }
    }
    console.log("Common letters:", commonLetters)
}

getCommonCharecters("house", "computers");