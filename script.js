//Pangram is a sentence using every letter of a given alphabet at least once.

//Create a function, which checks if the sentence is pangram.

//solution 1

function isPangram(sentence){
    const letters = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż";
    const lowerCaseString = sentence.toLowerCase();
    for(let i = 0; i < letters.length; i++){
        if(lowerCaseString.indexOf(letters[i]) == -1)
            return false;
    }
    return true;
}

console.log(isPangram('Mężny bądź, chroń pułk twój i sześć flag'));
console.log(isPangram('Żółcią bóść?! Kaźń! Pstrzony mdleję u Ghat!'));


//solution 2

/*alphabets = 'aąbcćdeęfghijklłmnńoóprsśtuwyzźż'.split("");

const isPangram = (sentence) => {
    sentence = sentence.toLowerCase();
    return alphabets.every(x => sentence.includes(x));
};
console.log(isPangram("Mężny bądź, chroń pułk twój i sześć flag"));
console.log(isPangram("Żółcią bóść?! Kaźń! Pstrzony mdleję u Ghat!"));*/

//solution 3

/*
function result() {
    let isPangram = sentence => {
        let lowerCase = sentence.toLowerCase();
        return 'aąbcćdeęfghijklłmnńoóprsśtuwyzźż'
            .split('')
            .filter(c => lowerCase.indexOf(c) === -1)
            .length === 0;
    };
    return [
        'Ala ma kota',
        'Mężny bądź, chroń pułk twój i sześć flag',
        'Żółcią bóść?! Kaźń! Pstrzony mdleję u Ghat!'
    ].map(isPangram)
}

result();*/
