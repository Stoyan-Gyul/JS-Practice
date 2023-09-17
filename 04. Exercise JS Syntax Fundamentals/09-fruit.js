function printCalculatedPrice(fruitType, weightGrams, priceKg) {
    let weightKg = (weightGrams / 1000).toFixed(2);
    let totalPrice = (priceKg * weightKg).toFixed(2);

    console.log(`I need $${totalPrice} to buy ${weightKg} kilograms ${fruitType}.`)
}

printCalculatedPrice('apple', 1563, 2.35);