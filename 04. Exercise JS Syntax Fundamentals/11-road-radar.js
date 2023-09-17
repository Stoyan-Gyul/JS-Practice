function calcSpeedLimit(area) {
    let speedLimitKmH = 0;
    if (area === "motorway") {
        speedLimitKmH = 130;
    }
    else if (area === "interstate") {
        speedLimitKmH = 90;
    }
    else if (area === "city") {
        speedLimitKmH = 50;
    }
    else if (area === "residential") {
        speedLimitKmH = 20;
    }
    return speedLimitKmH;
}

function printDrivingStatus(speed, area) {
    let speedLimitKmH = calcSpeedLimit(area);
    let status = '';
    if (speed <= speedLimitKmH) {
        console.log(`Driving ${speed} km/h in a ${speedLimitKmH} zone`)
    }
    else {
        let difference = speed - speedLimitKmH;
        if (difference <= 20){
            status = "speeding";
        }
        else if (difference <= 40){
            status = "excessive speeding";
        }
        else {
            status = "reckless driving";
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimitKmH} - ${status}`)
    }
}

printDrivingStatus(200, 'motorway');