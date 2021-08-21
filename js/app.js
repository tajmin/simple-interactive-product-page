//base memory price
document.getElementById('base-memory-btn').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 0;
    const price = getBestPrice() + getMemoryCost() + getStorageCost() + getDeliveryCharge();
    setSubTotalPrice(price);
    setTotalPrice(price);
});
//advanced memory price
document.getElementById('adv-memory-btn').addEventListener('click', function () {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = 180
    const price = getBestPrice() + getMemoryCost() + getStorageCost() + getDeliveryCharge();
    setSubTotalPrice(price);
    setTotalPrice(price);
});
//basic storage price
document.getElementById('base-storage-btn').addEventListener('click', function () {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = 0;
    const price = getBestPrice() + getMemoryCost() + getStorageCost() + getDeliveryCharge();
    setSubTotalPrice(price);
    setTotalPrice(price);
});

//medium storage price
document.getElementById('medium-storage-btn').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 100;
    const price = getBestPrice() + getMemoryCost() + getStorageCost() + getDeliveryCharge();
    setSubTotalPrice(price);
    setTotalPrice(price);
});

//ultra storage price 
document.getElementById('ultra-storage-btn').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 180;
    const price = getBestPrice() + getMemoryCost() + getStorageCost() + getDeliveryCharge();
    setSubTotalPrice(price);
    setTotalPrice(price);
});

//free delivery
document.getElementById('free-delivery-btn').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 0;
    const price = getBestPrice() + getMemoryCost() + getStorageCost() + getDeliveryCharge();
    setSubTotalPrice(price);
    setTotalPrice(price);
});

//delivery fee 
document.getElementById('charged-delivery-btn').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 20;
    const price = getBestPrice() + getMemoryCost() + getStorageCost() + getDeliveryCharge();
    setSubTotalPrice(price);
    setTotalPrice(price);
});

//Get Best Price
function getBestPrice() {
    const price = document.getElementById('best-cost').innerText
    return parseInt(price);
}

//Get Memory Cost
function getMemoryCost() {
    const cost = document.getElementById('memory-cost').innerText
    return parseInt(cost);
}

//Get Storage Cost
function getStorageCost() {
    const cost = document.getElementById('storage-cost').innerText
    return parseInt(cost);
}

//Get Delivery charge
function getDeliveryCharge() {
    const cost = document.getElementById('delivery-cost').innerText
    return parseInt(cost);
}

//Get SubTotal Price
function getSubTotalPrice() {
    const cost = document.getElementById('sub-total-price').innerText
    return parseInt(cost);
}

//Set Subtotal Price
function setSubTotalPrice(price) {
    const subTotalPrice = document.getElementById('sub-total-price');
    subTotalPrice.innerText = price;
}

let isPromoApplied = false;

//calculate discount 
document.getElementById('promo-btn').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-input');
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerText = '';

    if (promoCode.value == 'stevekaku' && !isPromoApplied) {
        const price = getSubTotalPrice();
        const discountedPrice = price * (1 - 0.2);
        isPromoApplied = true;
        setTotalPrice(discountedPrice)
        promoCode.value = '';
    } else {
        errorMessage.innerText = 'Proco code already applied or promo code not found!'
        errorMessage.style.color = 'red'
    }
});

// get Total Price 
function getTotalPrice() {
    const totalPrice = document.getElementById('total-price')
    return parseFloat(totalPrice);
}
// set total price
function setTotalPrice(price) {
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = price;
}