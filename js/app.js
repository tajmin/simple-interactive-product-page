//Following function adds feature price
function setFeaturePrice(idPart, price) {
    const feature = document.getElementById(idPart + '-cost');
    feature.innerText = price;
}

//Following function returns price by id
function getPrice(idPart) {
    const price = document.getElementById(idPart + '-cost').innerText
    return parseFloat(price);
}

// Following function calculates sum of all feature prices
function calculatePrice() {
    const calculatedPrice = getPrice('best') + getPrice('memory') + getPrice('storage') + getPrice('delivery');
    return calculatedPrice;
}

//calculates basee memory price
document.getElementById('base-memory-btn').addEventListener('click', function () {
    setFeaturePrice('memory', 0);
    const price = calculatePrice();
    setSubTotalPrice(price);
    setTotalPrice(price);
});

//calculates advanced memory price
document.getElementById('adv-memory-btn').addEventListener('click', function () {
    setFeaturePrice('memory', 180);
    const price = calculatePrice();
    setSubTotalPrice(price);
    setTotalPrice(price);
});

//calculates basic storage price
document.getElementById('base-storage-btn').addEventListener('click', function () {
    setFeaturePrice('storage', 0);
    const price = calculatePrice();
    setSubTotalPrice(price);
    setTotalPrice(price);
});

//calculates medium storage price
document.getElementById('medium-storage-btn').addEventListener('click', function () {
    setFeaturePrice('storage', 100);
    const price = calculatePrice();
    setSubTotalPrice(price);
    setTotalPrice(price);
});

//calculates ultra storage price 
document.getElementById('ultra-storage-btn').addEventListener('click', function () {
    setFeaturePrice('storage', 180);
    const price = calculatePrice();
    setSubTotalPrice(price);
    setTotalPrice(price);
});

//calculates free delivery
document.getElementById('free-delivery-btn').addEventListener('click', function () {
    setFeaturePrice('delivery', 0);
    const price = calculatePrice();
    setSubTotalPrice(price);
    setTotalPrice(price);
});

//calculates express delivery cost
document.getElementById('charged-delivery-btn').addEventListener('click', function () {
    setFeaturePrice('delivery', 20);
    const price = calculatePrice();
    setSubTotalPrice(price);
    setTotalPrice(price);
});

//Set Subtotal Price
function setSubTotalPrice(price) {
    const subTotalPrice = document.getElementById('sub-total-cost');
    subTotalPrice.innerText = price;
}

let isPromoApplied = false;

//calculate discount 
document.getElementById('promo-btn').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-input');
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerText = '';

    if (promoCode.value == 'stevekaku' && !isPromoApplied) {
        const price = getPrice('sub-total');
        const discountedPrice = price * (1 - 0.2);
        isPromoApplied = true;
        setTotalPrice(discountedPrice)
        promoCode.value = '';
    } else {
        errorMessage.innerText = 'Proco code already applied or promo code not found!'
        errorMessage.style.color = 'red'
    }
});

// set total price
function setTotalPrice(price) {
    const totalPrice = document.getElementById('total-cost');
    totalPrice.innerText = price;
}
