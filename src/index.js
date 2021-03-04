module.exports = function toReadable(number) {
    number = String(number);
    let res = '';
    let digits = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let doubles = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety','hundred'];
    if(number.length == 1) {
        res = digits[number];
    }

    else if(number.length == 2 && number[0] == 1) {
        let a = number[1];
        res = tens[a];
    }
    else if(number.length == 2 && number[1] == 0){
        let a = number[0];
        res = doubles[a - 2];
    }
    else if(number.length == 2 && number[1] !== 0){
        let a = number[0];
        let b = number[1];
        res = doubles[a - 2] + ' ' + digits[b];
    }

    else if(number[2] == 0 && number[1] == 0){
        let a = number[0];
        res = digits[a] + ' ' + doubles[8]
    }

    else if (number.length == 3 && number[1] == 0){
        let a = number[0];
        let b = number[2];
        res = digits[a] + ' ' + doubles[8] + ' ' + digits[b];
    }

    else if (number.length == 3 && number[1] == 1){
        let a = number[0];
        let b = number[2];
        res = digits[a] + ' ' + doubles[8] + ' ' + tens[b];
    }
        
    else if(number.length == 3 && number[2] == 0){
        let a = number[0];
        let b = number[1];
        res = digits[a] + ' ' + doubles[8] + ' ' + doubles[b - 2];

    }
    
    else {
        let a = number[0];
        let b = number[1];
        let c = number[2];
        res = res = digits[a] + ' ' + doubles[8] + ' ' + doubles[b - 2]  + ' ' +digits[c];
    }

    return res;
}
