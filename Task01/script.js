const bodyTag = document.querySelector('body');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const tableTag = document.querySelector('.table');

p1.style.color = 'orange';
p1.style.background = 'yellow';
p1.style.fontSize = '16px';
p1.style.padding = '5px';
p1.style.textAlign = 'center';

p2.style.color = 'blue';
p2.style.background = 'skyblue';
p2.style.fontSize = '14px';
p2.style.padding = '5px';
p2.style.textAlign = 'right';

p3.style.color = 'red';
p3.style.background = 'palevioletred';
p3.style.fontSize = '12px';
p3.style.padding = '5px';
p3.style.textAlign = 'left';

bodyTag.style.fontFamily = "'Arial', 'Helvetica', 'Arial', sans-serif";``

for (let i = 0; i < 25; i++) {
    if(i % 2 === 0) {
        tableTag.children[i].classList.add('selected');
    }
}