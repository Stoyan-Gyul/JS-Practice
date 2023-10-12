function isPerfectNumber(number) {
    if (number <= 0) {
      return false;
    }
  
    let sumOfDivisors = 0;
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        sumOfDivisors += i;
      }
    }
  
    if (sumOfDivisors === number) {
        console.log("We have a perfect number!");
    }
    else {
        console.log("It's not so perfect.");
    }
  }

  isPerfectNumber(28);