const setGroup = document.querySelector(".set");
const outputArr1Btn = setGroup.querySelector(".output-arr1-btn");
const outputArr2Btn = setGroup.querySelector(".output-arr2-btn");

const arr1 = [1, 6, 9, 4, 9, 1, 5, 6];
const arr2 = [5, 10, 11];

function filterArray(arr) {
    if (arguments.length === 1) {
        return [...new Set(arr)];
    }

    if (arguments.length > 1) {
        const newSet = new Set();
        Array.from(arguments).forEach((arr) => {
            arr.forEach((item) => {
                newSet.add(item);
            });
        });
        return [...newSet];
    }

    return null;
}

outputArr1Btn.addEventListener("click", () => {
    console.dir(filterArray(arr1));
});

outputArr2Btn.addEventListener("click", () => {
    console.dir(filterArray(arr1, arr2));
});
