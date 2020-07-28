const leapYears = function(year) {
    let by4 = year / 4;
    let by100 = year / 100;
    let by400 = year / 400;
    whole4 = Number.isInteger(by4);
    whole100 = Number.isInteger(by100);
    whole400 = Number.isInteger(by400);

    if (whole4) {
        if (whole100) {
            if (whole400) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        };
    } else {
        return false;
    }
}

module.exports = leapYears
