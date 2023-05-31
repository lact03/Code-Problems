const productProfitArray = [
    { name: "Product A", profit: -75 },
    { name: "Product B", profit: -70 },
    { name: "Product C", profit: 93 },
    { name: "Product D", profit: 5 },
    { name: "Product E", profit: 88 },
    { name: "Product F", profit: 29 },
    { name: "Product G", profit: -5 },
];

function topProduct() {
    let highestProfit = -Infinity;
    let topProduct;

    for (const product of productProfitArray) {
        if (product.profit > highestProfit) {
            highestProfit = product.profit;
            topProduct = product;
        }
    }

    console.log("The top Product is", topProduct.name);
}

function bottomProduct() {
    let bottomProfit = Infinity;
    let bottomProduct;

    for (const product of productProfitArray) {
        if (product.profit < bottomProfit) {
            bottomProfit = product.profit;
            bottomProduct = product;
        }
    }

    console.log("The bottom Product is", bottomProduct.name);
}

function zeroProfitProduct() {
    let zeroProfit = Infinity;
    let zeroProduct;

    for (product of productProfitArray) {
        if (Math.abs(product.profit) < Math.abs(zeroProfit)) {
            zeroProfit = product.profit;
            zeroProduct = product;
        } else if (
            Math.abs(product.profit) === Math.abs(zeroProfit) &&
            product.profit > zeroProfit
        ) {
            zeroProfit = product.profit;
            zeroProduct = product;
        }
    }

    console.log("The Profit that is closest to zero is", zeroProduct.name);
}

topProduct();
bottomProduct();
zeroProfitProduct();
