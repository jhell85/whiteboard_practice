import { unique } from "jquery";

export { url_maker, url_maker_recursion, array_deduping, array_deduping_recursion, compressing_strings, compressing_strings_recursion, isUnique, selectionSort }

// Question #1: Turning Strings to URLs
// URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

// You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

// Example
// Input: "Jasmine Ann Jones"

// Output: "Jasmine%20Ann%Jones"

// Question #2: Array Deduping
// Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

// Example
// Input: [7, 9, "hi", 12, "hi" 7, 53]

// Output: [7, 9, "hi", 12, 53]

// Question #3: Compressing Strings
// Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

// Example
// Input: "aaabccdddda"

// Output: "3ab2c4da"

// Question #4: Checking for Uniqueness
// Write an algorithm that determines whether all the elements in a string are unique. You may not convert the string into an array or use array methods to solve this problem. The algorithm should return a boolean.

// Example
// Input: "hello"

// Output: false

// Input: "copyright"

// Output: true

// Question #5: Array Sorting
// Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms - take the time to read about the following:

// Quick sort
// Merge sort
// Heap sort
// Insertion sort
// Bubble sort
// Selection sort
// You may implement any of the above algorithms (or your own) to solve the problem - as long as it doesn't use sort().

// Example
// Input: [9, 2, 7, 12]

// Output: [2, 7, 9, 12]

const url_maker = (string) => {
  const stringArray = string.split("");
  let newURL = new String;
  stringArray.forEach(element => {
    element = element === " " ? "%20" : element;
    newURL += element;
  });
  return newURL;  
}

const url_maker_recursion = (string, url) => {
  url = url === undefined ? new String : url;
  // Termination case
  if (string.length === 0) {
    return url;
  }
  let element = string.charAt(0) === " " ? "%20" : string.charAt(0);
  string = string.substr(1)
  url += element
  return url_maker_recursion(string, url)
}

const array_deduping = (array) => {
  let filtered_array = new Array;
  array.forEach(element => {
    if(!filtered_array.includes(element)){
      filtered_array.push(element)
    }
  })
  return filtered_array
}
const array_deduping_recursion = (array, filtered_array) => {
  filtered_array = filtered_array === undefined ? new Array : filtered_array
  // Termination case
  if (array.length === 0 ){
    return filtered_array
  }
  let element = array.shift()
  if(!filtered_array.includes(element)){
    filtered_array.push(element)
  }
  return array_deduping_recursion(array, filtered_array)
}

const compressing_strings = (string) => {
  let newStr = new String;
  let counter = 0
  for (let i = 0; i < string.length; i++) {
    counter ++
    if(string[i] != string[i + 1]){
      newStr += counter > 1 ? counter + string[i] : string[i]
      counter = 0;
    }
  }
  return newStr
}

const compressing_strings_recursion = (string, returnString, counter) => {
  returnString = returnString === undefined ? new String : returnString
  counter = counter === undefined ? 1 : counter
  //Termination case
  if(string.length === 0){
    return returnString
  }
  let first = string.charAt(0)
  if(first === string.charAt(1)){
    counter ++
  } else {
    returnString += counter > 1 ? counter + first : first
    counter = 1;
  }
  string = string.substr(1)

return compressing_strings_recursion(string, returnString, counter)


  
}

const isUnique = (str) => {
  for (let i = 0; i < str.length; i++){
    let element = str[i];
    if (str.indexOf(element, i + 1) > -1){
      return false
    }
    else{
      return true
    }
  }
}

const selectionSort = (array) => {
  let idX
  for (let i = 0; i < array.length; i++) {
    idX = i;
    for (let j = i+1; j < array.length; j++) {
      if(array[j] < array[idX]){
        idX = j
      }
    }
    let temp = array[i];
    array[i] =  array[idX];
    array[idX] = temp;
  }
  return array
}
