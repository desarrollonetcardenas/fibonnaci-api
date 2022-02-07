const calculate = (value) => {
    if(value <= 1)
        return value;

    return calculate(value-1) + calculate(value-2);
}
module.exports.calculate = calculate;