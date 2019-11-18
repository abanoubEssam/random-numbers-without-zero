function randomNumbers(digits) {
    function randomIntInc(low, high) {
        return Math.floor(Math.random() * (high - low + 1) + low)
    }
    var numbers = new Array(digits)
    for (var i = 0; i < numbers.length; i++) {
        numbers[i] = randomIntInc(1, 9).toString()
    }
    const random_number = numbers.reduce((accumulator, currentValue, currentIndex, array) => {
        return accumulator + currentValue;
    });
    return random_number;
}
module.exports.randomNumbers = randomNumbers;


