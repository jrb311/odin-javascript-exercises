const reverseString = function(string) {
    let i = 0;
    let reverseString = '';
    for (let l = (string.length - 1); l >= 0; l--)
    {
        reverseString += string.charAt(l);
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
