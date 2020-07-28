const removeFromArray = function(array, ...values) {
    valueNum = values.length;
    for (i = 0; i < valueNum; i++) {
        currentValue = values[i];
        let index = array.indexOf(currentValue);
        if (index !== -1) {array.splice(index, 1)};
    }
    return array;
}

module.exports = removeFromArray
