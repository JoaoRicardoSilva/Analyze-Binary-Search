"use strict";
console.log(memoryA);
console.log(memoryB);
// Setup
const data = {
    datasets: [
        {
            label: "Binary Search time complexity",
            data: memoryA,
            backgroundColor: "rgb(55, 99, 132)",
        },
        {
            label: "Linear Search time complexity",
            data: memoryB,
            backgroundColor: "rgb(550, 99, 13)",
        },
    ],
};

// Config
const config = {
    type: "scatter",
    data: data,
    options: {
        scales: {
            x: {
                type: "linear",
                position: "bottom",
                title: {
                    display: true,
                    text: "Milliseconds",
                },
            },
            y: {
                type: "logarithmic",
                title: {
                    display: true,
                    text: "Number of items",
                },
            },
        },
        plugins: { title: {
            display: true,
            text: "Binary Search vs Linear Search"
        } },
    },
};

const myChart = new Chart(document.getElementById("myChart"), config);
