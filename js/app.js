document.getElementById('base-memory-btn').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 0;
    setSubTotalPrice(getBestPrice());
});

document.getElementById('adv-memory-btn').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 180
    const bestPrice = getBestPrice();
    const sum = 180 + bestPrice;
    setSubTotalPrice(sum);
});

document.getElementById('base-storage-btn').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 000;
});


document.getElementById('medium-storage-btn').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 100;
});

document.getElementById('ultra-storage-btn').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 180;
});

document.getElementById('free-delivery-btn').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 0;
});

document.getElementById('charged-delivery-btn').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 20;
});

function getBestPrice() {
    const price = document.getElementById('best-price').innerText
    return parseInt(price);
}

function setSubTotalPrice(price) {
    const subTotalPrice = document.getElementById('sub-total-price');
    subTotalPrice.innerText = price;
}
