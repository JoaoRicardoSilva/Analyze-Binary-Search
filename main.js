"use strick";

const arrTest = [1, 3, 4, 5, 13, 20, 25, 40, 42, 53];
const numTest = 1;

const biSearch = (num, arr) => {
    let i = Math.trunc(arr.length - 1 / 2);
    console.log({ i });

    const recursive = (index) => {
        if (num === arr[index]) {
            console.log(`Found in index ${index}`);
        } else if (num < arr[index]) {
            i = i / 2;
            recursive(Math.trunc(i));
        } else if (num > arr[index]) {
            i = i / 2;
            recursive(Math.trunc(i));
        } else {
            console.log("Something is wrong!");
        }
    };
    recursive(i);
};
biSearch(numTest, arrTest);
