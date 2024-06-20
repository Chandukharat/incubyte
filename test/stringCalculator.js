function add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const delimiterEnd = numbers.indexOf('\n');
        delimiter = numbers.substring(2, delimiterEnd).replace(/[\[\]\/\\{}()+*.^$|]/g, '\\$&');
        numbers = numbers.substring(delimiterEnd + 1);
    }

    const numberArray = numbers.split(new RegExp(delimiter)).map(Number);

    // Check for negative numbers
    const negatives = numberArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }
    return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
