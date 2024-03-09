const removeFromArray = function(array, ...args) {
    for (let i = args.length - 1; i >= 0; i-- )
    {
        while (array.includes(args[i]))
        {
            array.splice(array.indexOf(args[i]), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
