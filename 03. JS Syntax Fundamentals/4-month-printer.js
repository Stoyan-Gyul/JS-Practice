function printMonth(num) {
    const months = [
        "Error!",
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    if (num >= 1 && num <= 12) {
        console.log(months[num]);
    } else {
        console.log("Error!");
    }
}

printMonth(9);
