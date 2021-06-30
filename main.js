"use strick";

const arrTest = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
];
const numTest = 50;

const biSearch = (num, arr) => {
    let ini = 0;
    let f = arr.length;

    let count = 0; // Big O purpose

    console.log({ num });

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
            return console.log("Something is wrong!");
        }
    }
};
biSearch(numTest, arrTest);
