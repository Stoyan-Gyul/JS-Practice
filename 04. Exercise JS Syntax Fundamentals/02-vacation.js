function calcVacationPrice(groupSize, groupType, dayOfWeek) {
    let totalPrice = 0;
    let pricePerPerson = 0;
    let discount = 0;
    

    if (groupType === "Students"){
        if (dayOfWeek === "Friday"){
            pricePerPerson = 8.45;
        }
        else if (dayOfWeek === "Saturday") {
            pricePerPerson = 9.80;
        }
        else if (dayOfWeek === "Sunday") {
            pricePerPerson = 10.46;
        }
        if (groupSize >= 30){
            discount = 0.15 * (pricePerPerson * groupSize);
        }
    }
    else if (groupType === "Business") {
        if (dayOfWeek === "Friday"){
            pricePerPerson = 10.90;
        }
        else if (dayOfWeek === "Saturday") {
            pricePerPerson = 15.60;
        }
        else if (dayOfWeek === "Sunday") {
            pricePerPerson = 16;
        }
        if (groupSize >= 100){
            discount = 10 * pricePerPerson;
        }
    }
    else if (groupType === "Regular") {
        if (dayOfWeek === "Friday"){
            pricePerPerson = 15;
        }
        else if (dayOfWeek === "Saturday") {
            pricePerPerson = 20;
        }
        else if (dayOfWeek === "Sunday") {
            pricePerPerson = 22.50;
        }
        if (groupSize >= 10 && groupSize <= 20){
            discount = 0.05 * (pricePerPerson * groupSize);
        }
    }
    totalPrice = (pricePerPerson * groupSize) - discount;
    console.log(`Total price: ${totalPrice}`);
}

calcVacationPrice(30, "Students", "Sunday");