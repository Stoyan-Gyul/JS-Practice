function printDrivingStatus(speed, area) {
    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }
    const currentSpeedLimit = speedLimits[area];
    let speedOverLimit = speed - currentSpeedLimit;

    if (speed <= currentSpeedLimit) {
        console.log(`Driving ${speed} km/h in a ${currentSpeedLimit} zone`)
        return
    }

    let status = '';
    if (speedOverLimit <= 20){
        status = "speeding";
    }
    else if (speedOverLimit <= 40){
        status = "excessive speeding";
    }
    else {
        status = "reckless driving";
    }

    console.log(`The speed is ${speedOverLimit} km/h faster than the allowed speed of ${currentSpeedLimit} - ${status}`)
}


printDrivingStatus(40, 'city');
printDrivingStatus(21, 'residential');
printDrivingStatus(120, 'interstate');
printDrivingStatus(200, 'motorway');