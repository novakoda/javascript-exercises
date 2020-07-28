const repeatString = function(string, times) {
    if (times === 0) {
        return '';
    } else if (times < 0) {
        return 'ERROR';
    } else {
        let repeated = string;
        if (times === 1) {
            times--;
        } else {
            times--;
            while (times > 0) {
                repeated = repeated.concat(string);
                times--;
            }
        };
        return repeated;
    }
}

module.exports = repeatString
