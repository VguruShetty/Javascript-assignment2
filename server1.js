function countWordOccurrences(text){
    const words = text.split("");
    const wordCount = new Map();

    for (const word of words) {
        if(wordCount.has(word)){
            wordCount.set(word, wordCount.get(word)+1);
        }else{
            wordCount.set(word,1);
        }
    }
    return wordCount;
}

const text = "This is a PW Skills Platform"
const result = countWordOccurrences(text);
console.log(result);