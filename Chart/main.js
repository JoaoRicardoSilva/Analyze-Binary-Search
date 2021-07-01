"use strict";

// Setup
const data = {
    datasets: [
        {
            label: "Binary Search time complexity",
            data: [
                {
                    x: 1,
                    y: 0,
                },
                {
                    x: 5,
                    y: 1,
                },
                {
                    x: 10,
                    y: 2,
                },
                {
                    x: 50,
                    y: 4,
                },
                {
                    x: 100,
                    y: 5,
                },
                {
                    x: 500,
                    y: 7,
                },
                {
                    x: 1000,
                    y: 8,
                },
                {
                    x: 5000,
                    y: 11,
                },
                {
                    x: 10000,
                    y: 12,
                },
                {
                    x: 50000,
                    y: 14,
                },
                {
                    x: 100000,
                    y: 15,
                },
            ],
            backgroundColor: "rgb(55, 99, 132)",
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
            },
        },
    },
};

const myChart = new Chart(document.getElementById("myChart"), config);

// console.log(data.datasets[0].data[0]);
