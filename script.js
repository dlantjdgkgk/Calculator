const calculatorElement = document.querySelector('.calculator');
const pElement = document.querySelector('p');

// const buttonClick = (e) => {
//     if (e.target.tagName != 'DIV' && e.target.tagName != 'P')
//         pElement.innerText += e.target.innerText;
//     if (pElement.innerText[0] === '0')
//         pElement.innerText = pElement.innerText.slice(1);
// };

calculatorElement.addEventListener('click', (e) => {
    if (e.target.tagName != 'DIV' && e.target.tagName != 'P')
        pElement.innerText += e.target.innerText;
    if (pElement.innerText[0] === '0')
        pElement.innerText = pElement.innerText.slice(1);
});

const operatorElements = document.querySelectorAll('.operator');

operatorElements.forEach((element) =>
    element.addEventListener('click', (e) => {
        e.stopPropagation();
        switch (e.target.name) {
            case 'reset':
                pElement.innerText = '0';
                break;
            case 'divide':
                pElement.innerText += '/';
                break;
            case 'multiply':
                pElement.innerText += '*';
                break;
            case 'minus':
                pElement.innerText += '-';
                break;
            case 'plus':
                pElement.innerText += '+';
                break;
            case 'remainder':
                pElement.innerText += '%';
                break;
            case 'equal':
                pElement.innerText = eval(pElement.innerText);
        }
    })
);
// const operatorClick = (e) => {
//     e.stopPropagation();
//     switch (e.target.name) {
//         case 'reset':
//             pElement.innerText = '0';
//             break;
//         case 'divide':
//             pElement.innerText += '/';
//             break;
//         case 'multiply':
//             pElement.innerText += '*';
//             break;
//         case 'minus':
//             pElement.innerText += '-';
//             break;
//         case 'plus':
//             pElement.innerText += '+';
//             break;
//         case 'remainder':
//             pElement.innerText += '%';
//             break;
//         case 'equal':
//             pElement.innerText = eval(pElement.innerText);
//     }
// };
