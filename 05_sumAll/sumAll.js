const sumAll = function(numOne, numTwo) {
    if (numOne < 0 || numTwo < 0 || typeof(numOne) !== 'number' || typeof(numTwo) !== 'number')
    {
        return 'ERROR';
    }

    let sum = 0;

    if(numOne > numTwo)
    {
        for (; numTwo <= numOne; numTwo++)
        {
            sum += numTwo;
        }
        return sum;
    }
    else if (numTwo > numOne)
    {
        for (; numOne <= numTwo; numOne++)
        {
            sum += numOne;
        }
        return sum;
    }
    else
    {
        sum = numOne + numTwo;
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
