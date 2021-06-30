"use strick";

const arrTest = [1, 3, 4, 5, 13, 20, 25, 40, 42, 53];
const numTest = 40;

const biSearch = (num, arr) => {
    let ini = 0;
    let f = arr.length;

    let count = 0; // Big O purpose

    while (ini <= f) {
        let i = Math.floor((f + ini) / 2);

        if (num === arr[i]) {
            console.log({ count });
            return console.log(`Found in index ${i}`);
        } else if (num < arr[i]) {
            count++;
            f = i - 1;
        } else if (num > arr[i]) {
            count++;
            ini = i + 1;
        } else {
            console.log("Something is wrong!");
        }
    }
};
biSearch(numTest, arrTest);
