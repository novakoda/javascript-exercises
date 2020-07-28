const sumAll = function(num1, num2) {
    let max = Math.max(num1,num2);
    let min = Math.min(num1,num2);

    if (typeof num1 != 'number' || typeof num2 != 'number' ||
     num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else {
        let number = min - 1;

        for (i = min; i <= max; i++) {
            number += i;
        };
    
        return number;
    }
}

module.exports = sumAll
