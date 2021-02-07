module.exports = function toReadable (number) {
    let units = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozen = [ '', '','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let array = String(number).split('');
    let result = [];

    if(array[0] == 0) return units[0];

    for(i=0; i<array.length; i++){
        if(array.length == 3 && i == 0){
            result.push(units[array[i]], 'hundred');

            if(array[i+1] == 0 && array[i+2] == 0){break}
        }

        if (array.length == 3 && i == 1 || array.length == 2 && i == 0 ){
            if(array[i] > 1){
                result.push(dozen[array[i]])
            if(array[i+1] == 0){
                break
            }
            } else if(array[i] == 1){
                result.push(teens[array[i+1]])
                break;
            } else{
                result.push(units[array[i+1]])
                break;
            }
        }
        if (array.length == 3 && i == 2 || array.length == 2 && i == 1 || array.length == 1){
            if(array[2] == 0){
                break;}
            result.push(units[array[i]])
        }
    }
    return result.join(' ');
}
