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
    return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
