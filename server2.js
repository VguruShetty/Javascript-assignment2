

function removeDuplicates(numbers){
   // const num = new Set(numbers);
   //return num;
    return [...new Set(numbers)];
}

const numbers = [1,2,3,4,5,1,4,6]
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);