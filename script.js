var myString = "bob likes dogs";
var myArray = [0,1,2,2,3,3,3,4,5,100];

//1. Reverse a myString
function one(myString) {
    let reversedWords = myString.split("").reverse().join("");
    return reversedWords;
};
console.log("Kata number one: " +one(myString));
function testOne() {
    let result = one(myString)
    console.assert(result === 'sgod sekil bob', {
        "function": 'one(teststring)',
        "expected": 'sgod sekil bob',
        "result": result
    })
} 


//2. Reverse a sentence. 
function two(myString) {
    let reversedWords = myString.split(" ").reverse().join(" ");
    return reversedWords;
};
console.log("Kata number two: " +two(myString));
function testTwo() {
    let result = two(myString)
    console.assert(result === 'dogs likes bob', {
        "function": 'two(myString)',
        "expected": 'dogs like bob',
        "result": result
    })
} 


//3. Find the maximum value of an array. math.max()
function three(myArray) {
    let maxValue = Math.max(...myArray);
    return maxValue
};
console.log("Kata number three: " +three(myArray))
function testThree() {
    let result = three(myArray)
    console.assert(result === 100, {
        "function": 'three(myArray)',
        "expected": 100,
        "result": result
    })
} 


//4. Find the minimum valu in an array. math.min()
function four(myArray) {
    let minValue = Math.min(...myArray);
    return minValue
};
console.log("kata number four: " +four(myArray))
function testFour() {
    let result = four(myArray)
    console.assert(result === 0, {
        "function": 'four(myArray)',
        "expected": 0,
        "result": result
    })
} 


//5. Calculate a remainder (given a numerator and denominator)
function five(numerator, denominator) {
   return numerator % denominator;
};
console.log("kata number five: " +five(5,2));
function testFive() {
    let result = five(5, 2)
    console.assert(result === 1, {
        "function": 'five(numerator, denominator)',
        "expected": 1,
        "result": result
    })
} 

//6. Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")
function six(myArray) {
    var a = [];
    for (let i=0; i < myArray.length; i++)
        if (a.indexOf(myArray[i]) === -1 && myArray[i] !== '')
            a.push(myArray[i]);
    return a;
}
console.log("kata number six: " +six(myArray));
function testsix() {
    let result = six(myArray)
    console.assert(result.toString() === [0, 1, 2, 3, 4, 5, 100].toString(), {
        "function": 'six(myArray)',
        "expected": '[0, 1, 2, 3, 4, 5, 100]',
        "result": result
    })
} 

//7. Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")
function seven(myArray) {
    let counts = {};
    for (let unique of myArray) {
    counts[unique] = (counts[unique] || 0) + 1;
    } return counts;
} console.log("kata number seven: " +seven(myArray));

function testseven() {
    let result = seven(myArray)
    console.assert(result.toString() === {0: 1, 1: 1, 2: 2, 3: 3, 4: 1, 5: 1, 100: 1}.toString(), {
        "function": 'seven(myArray)',
        "expected": '{0: 1, 1: 1, 2: 2, 3: 3, 4: 1, 5: 1, 100: 1}',
        "result": result
    })
} 


//8. Given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, return the result of the expression ("a + b+c -d" would be -3).
function eight(string, object) {
    let split = Number(string.split(''));
    let obj = {
        a: 1,
        b: 7,
        c: 3,
        d: 14,
    }

    let total = 0;

    for (let i = 0; i < split.length; i++) {
        
        if (split[i] === '+' || split[i] === '-') {
            continue
        } else {
            let letters = split[i];
            console.log(letters)
            let operators = (split[i-1]);
            if (operators === '+' || operators === undefined) {
                total = total + obj[letters]
            }
            else if (operators === '-') {
               total = total - obj[letters]
            }
        }
}
return total;

} console.log(eight("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}));

function testeight() {
    let result = eight("a + b + c - d", {a: 1, b: 7, c: 3, d: 14})
    console.assert(result ===  -3, {
        "function": 'eight(string, object)',
        "expected": '-3',
        "result": result
    })
} 




testOne();
testTwo();
testThree();
testFour();
testFive();
testsix();
testseven();
testeight();