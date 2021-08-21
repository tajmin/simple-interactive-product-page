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

// global scope for promo code availablity
let isPromoApplied = false;

//calculates discount for promocode
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

//Set Subtotal Price
function setSubTotalPrice(price) {
    const subTotalPrice = document.getElementById('sub-total-cost');
    subTotalPrice.innerText = price;
}

// set total price
function setTotalPrice(price) {
    const totalPrice = document.getElementById('total-cost');
    totalPrice.innerText = price;
}

//Handles button events 
document.getElementById('product-details').addEventListener('click', function (event) {
    const id = event.target.id;
    const featureCost = parseFloat(event.target.dataset.cost);

    if (id.includes('memory')) {
        setFeaturePrice('memory', featureCost);
    } else if (id.includes('storage')) {
        setFeaturePrice('storage', featureCost);
    } else if (id.includes('delivery')) {
        setFeaturePrice('delivery', featureCost);
    }
    const price = calculatePrice();
    setSubTotalPrice(price);
    setTotalPrice(price);
});
