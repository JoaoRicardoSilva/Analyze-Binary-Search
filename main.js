"use strick";

const arrTest = [1, 3, 4, 5, 13, 20, 25, 40, 42, 53];
const numTest = 53;

const biSearch = (num, arr) => {
    // console.log({ num });
    let i = Math.floor((arr.length - 1) / 2);
    // console.log({ i });
    let half = i;
    // console.log({ half });

    const recursive = (index) => {
        if (num === arr[index]) {
            console.log(`Found in index ${index}`);
        } else if (num < arr[index]) {
            half = Math.ceil(half / 2);
            i = i - half;
            // console.log(`< half: ${half} i: ${i}`);
            recursive(i);
        } else if (num > arr[index]) {
            half = Math.ceil(half / 2);
            i = i + half;
            // console.log(`> half: ${half} i: ${i}`);
            recursive(i);
        } else {
            console.log("Something is wrong!");
        }
    };
    recursive(i);
};
biSearch(numTest, arrTest);
