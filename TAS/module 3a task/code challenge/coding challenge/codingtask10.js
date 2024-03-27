//Create a function that filters out negative numbers

function filterNegativeNumbers(arr) {
    
        return arr.filter(num => num >= 0);
    }
    
    console.log(filterNegativeNumbers([1, -2, 3, -4, 5, 6, -9, 5, -3, 8]));