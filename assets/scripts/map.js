const numerals = new Map([
    ["1", "first"],
    ["2", "second"],
    ["3", "third"],
    ["4", "fourth"],
    ["5", "fifth"],
    ["6", "sixth"],
    ["7", "seventh"],
    ["8", "eighth"],
    ["9", "ninth"],
]);

const text =
    "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.";

function corrextText(text) {
    const wordsArr = text.split(" ");

    const newWordsArr = wordsArr.map((word) => {
        if (numerals.has(word)) {
            return numerals.get(word);
        }

        return word;
    });

    return newWordsArr.join(" ");
}

console.log(corrextText(text));
