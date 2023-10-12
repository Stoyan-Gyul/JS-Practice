function isValidLength(password) {
    return password.length >= 6 && password.length <= 10;
}

function isAlphanumeric(password) {
    return password.match("^[a-zA-Z0-9_.-]*$");
}

function hasAtLeastTwoDigits(password) {
    const digitCount = password.match(/\d/g);
    return digitCount ? digitCount.length >= 2 : false;
}


function validatePassword(password) {
    const errors = [];

    if (!isValidLength(password)) {
        errors.push("Password must be between 6 and 10 characters");
    }

    if (!isAlphanumeric(password)) {
        errors.push("Password must consist only of letters and digits");
    }

    if (!hasAtLeastTwoDigits(password)) {
        errors.push("Password must have at least 2 digits");
    }

    if (errors.length > 0) {
        console.log(errors.join("\n"));
        return;
    }

    console.log("Password is valid");
}

validatePassword("password12");