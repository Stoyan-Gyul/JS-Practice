function calcTotalPrice(product, quantity) {
    let order = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00
    }
    let productPrice = order[product];
    let totalPrice = (productPrice * quantity).toFixed(2);
    console.log(totalPrice);
}

calcTotalPrice("water", 5);