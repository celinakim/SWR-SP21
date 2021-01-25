// 1. function myMean that takes in an array of numbers and returns the mean 
export const myMean = (array: number[]): number => {
    let sum = 0;
    for (let i = 0; i < array.length; i++){
      sum += array[i];
    }
    let average = sum / (array.length);
    return average
  };

// 2. function getPrimes that takes in an array of numbers and returns a new array with 
// only prime numbers 
export const getPrimes = (array: number[]): number[] => {
  let primeArray:number[] = new Array();

    for (let i = 2; i < array.length; i++){
      if (isPrime(array[i]) == true){
          primeArray.push(array[i]);
      } 
      }
      return primeArray;
    }
    
  const isPrime = (num: number): boolean => {
    for (let j = 2; j < num; j++){
      if (num % j == 0){
        return false;
      }
      if (num == 2){
        return true;
      } else if (num < 2){
        return false;
      }
    }
    }

// 3. function partition that takes in an array of numnbers and function belongGroup and 
// returns an object of two arrays group1 and group2

// example: partition([1, 2, 3, 4, 5, 6], (n) => n % 3 === 0); // { group1: [3, 6], group2: [1, 2, 4, 5] }
// partition([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0); // { group1: [2, 4, 6], group2: [1, 3, 5] }
export const partition = (
    array: number[],
    belongToGroup1: (element: number) => boolean
  ): { group1: number[]; group2: number[] } => {
   
    let group1: number[] = [];
    let group2: number[] = [];

    group1 = array.filter(num => belongToGroup1(num))
    group2 = array.filter(num => belongToGroup1(num) == false)

    return {group1, group2};
  };


// 4. function makeSentences that takes in an array of objects and maps it into an array of sentences in the format
// ${name} is ${age} years old, and is a ${breed}.

// TODO: You should replace this any with an accurate object type in your submission!
type Doggo = {
  name: string;
  age: number;
  breed: string;
};

export const makeSentences = (array: Doggo[]): string[] => {

  return array.map(({name, age, breed}: Doggo) => `${name} is ${age} years old, and is a ${breed}.`);
};
