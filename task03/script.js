const paragraphs = document.querySelectorAll('p');
const lengths = [];
for (let i = 0; i < paragraphs.length; i++) {
    lengths.push(paragraphs[i].innerText.length);
}
console.log(lengths);

let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];

console.log(`Maximum number in array: ${Math.max(...arr)}`);
console.log(`Minimum number in array: ${Math.min(...arr)}`);

let twoDigitNumbers = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] >= 10 || arr[i] <= -10) twoDigitNumbers++;
}
console.log(`Amount of two-digit number in array: ${twoDigitNumbers}`);

let positives = 0;
let negatives = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) positives++;
    if(arr[i] < 0) negatives++;
}
console.log(`Amount of positive numbers in array: ${positives}`);
console.log(`Amount of negative numbers in array: ${negatives}`);

console.log(`Array sorted in ascending: ${arr.sort((a,b) => a - b)}`);
console.log(`Reversed array: ${arr.reverse()}`);