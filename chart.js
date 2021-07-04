"use strict";
console.log(memoryA);
console.log(memoryB);
// Setup
const data = {
    datasets: [
        {
            label: "Binary Search",
            data: memoryA,
            backgroundColor: "rgb(55, 99, 132)",
        },
        // {
        //     label: "Linear Search",
        //     data: memoryB,
        //     backgroundColor: "rgb(550, 99, 13)",
        // },
    ],
};

// Config
const config = {
    type: "scatter",
    data: data,
    options: {
        scales: {
            x: {
                position: "bottom",
                title: {
                    display: true,
                    text: "Number of items",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Milliseconds",
                },
            },
        },
        plugins: {
            title: {
                display: true,
                text: "Binary Search vs Linear Search",
            },
        },
    },
};

const myChart = new Chart(document.getElementById("myChart"), config);
