/*

EwMarketGraphs by Crank (2023)

Generate some cute little graphs from EwMarket data.

*/

function newMarketGraph(ctx) {
    // Because we don't know how many lines there'll be, abstract it

    new Chart(ctx, {
        type: 'line',
        data: {

        },
        options: {
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            plugins: {
                title: {
                    display: true,
                    text: 'EW Market Graph'
                }
            },
            scales: {
                
            }
        }
    });
}

function newLogMarketGraph(ctx) {
    new Chart(ctx, {
        type: 'line',
        data: {

        },
        options: {

        }
    });
}