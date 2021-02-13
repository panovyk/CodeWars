// 7 kyu Odd or Even?

function oddOrEven(array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    return array.length >= 1 && array.reduce(reducer) % 2 ? 'odd' : 'even'
}
