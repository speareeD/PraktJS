let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima 
nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos 
sint voluptatibus!`

let newText = text[12] + text[6] + text[18] + text[25];
console.log(newText);
console.log(text.toLowerCase());

for (let i = 0; i < text.length; i++) {
    if(text[i] + text[i + 1] === 'in') {
        console.log(`starting index of 'in' : ${i}`);
    }
}

console.log(text.split(" "))
console.log(text.split("").reverse().join(""));

function ucFirst(txt) {
    let newTxt = txt.replace(/\b\w/g, char=> char.toUpperCase());
    return newTxt;
}
console.log(ucFirst(text));