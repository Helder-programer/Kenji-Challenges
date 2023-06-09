import PromptSync from "prompt-sync";
import isIntegerAndPositiveNumber from './helpers/index.js';
const prompt = PromptSync();

const calculateNumbersAverage = (...numbers) => {
    let sumResult = 0;

    numbers.forEach(currentNumber => {
        sumResult += currentNumber;
    });

    let numbersAverage = sumResult / numbers.length;

    return numbersAverage;
}


let numbersQuantity = 0;
let numbersArray = [];

while (true) {
    numbersQuantity = Number(prompt('Digite quantos números deseja digitar: '));
    if (isIntegerAndPositiveNumber(numbersQuantity)) break;
    console.log('Informe um número válido!');
}

for (let counter = 1; counter <= numbersQuantity; counter++) {
    let number = 0;

    while (true) {
        number = Number(prompt(`Digite o número ${counter}: `));
        if (Number.isFinite(number) && number >= 0) break;
        console.log('Digite somente números positivos!');
    }

    numbersArray.push(number);
}

console.log(`A média aritmética dos números que você digitou é: ${calculateNumbersAverage(...numbersArray)}`);
