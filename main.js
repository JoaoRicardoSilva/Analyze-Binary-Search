"use strick";
// const { performance } = require("perf_hooks");

let input;

const memoryA = [];
const memoryB = [];

const biSearch = (arr) => {
    const num = arr[arr.length - 1];
    let ini = 0;
    let f = arr.length;

    let tI = performance.now(); // For Big O purpose
    console.log({ tI });

    while (ini <= f) {
        let i = Math.floor((f + ini) / 2);

        if (num === arr[i]) {
            let tF = performance.now();
            console.log({ tF });
            t = tF - tI;
            console.log({ t });
            memoryA.push({ x: t, y: arr.length });
            console.log(`Found in index ${i}`);
            break;
        } else if (num < arr[i]) {
            f = i - 1;
        } else if (num > arr[i]) {
            ini = i + 1;
        } else {
            console.log("Something is wrong!");
            break;
        }
    }
};

const linearSearch = (arr) => {
    const num = arr[arr.length - 1];
    let i = 0;

    let tI = performance.now(); // For Big O purpose
    console.log({ tI });

    while (i <= arr.length - 1) {
        if (arr[i] === num) {
            let tF = performance.now();
            console.log({ tF });
            t = tF - tI;
            console.log({ t });
            memoryB.push({ x: t, y: arr.length });
        }
        i++;
    }
};

const arrCreator = (arg, func) => {
    for (let i = 0; i < arg.length; i++) {
        let newArr = [];
        let num = 0;
        while (newArr.length < arg[i]) {
            num++;
            newArr.push(num);
        }
        func(newArr);
    }
};

input = [
    10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000,
    5000000, 10000000, 50000000,
];
arrCreator(input, biSearch);
arrCreator(input, linearSearch);
