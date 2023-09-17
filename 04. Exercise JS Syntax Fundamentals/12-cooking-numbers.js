function cookNumber(number, ...operations) {
    for (let operation of operations) {
        if (operation === "chop") {
            number = number / 2;
        }
        else if (operation === "dice") {
            number = Math.sqrt(number);
        }
        else if (operation === "spice") {
            number ++;
        }
        else if (operation === "bake") {
            number = number * 3;
        }
        else if (operation === "fillet") {
            number = number - (0.2 * number);
        }
        console.log(number);
    }
}

cookNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');