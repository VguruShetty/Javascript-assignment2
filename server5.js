function findMinMax(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return {max, min};
}
const arr = [5, 2, 6 ,7, 3,1,9];
const result = findMinMax(arr);
console.log(result);