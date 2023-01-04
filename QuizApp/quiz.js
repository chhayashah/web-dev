const question = [ 
    {
        'Que': 'Which type of javaScript language is____',
        'a': 'Object-Oriented',
        'b': 'Object-Based',
        'c': 'Assembly-language',
        'd': 'High-level',
        'correct': 'b'
    },
    {
        'Que': 'The "function" and "var" are known as:',
        'a': 'Keywords',
        'b': 'Data types',
        'c': 'Declaration statements',
        'd': 'Prototypes',
        'correct': 'c'
    },
    {
        'Que': 'Which one of the following also know as Conditional Expression',
        'a': 'Alternative to if-else',
        'b': 'Switch statement',
        'c': 'if-then-else statement',
        'd': 'immediate if',
        'correct': 'd'
    },
    {
        'Que': 'Which of the following variables takes precedence over the others if the names are the same?',
        'a': 'Global variable',
        'b': 'The local element',
        'c': 'The two of the above',
        'd': 'None of the above',
        'correct': 'b'
    }
    // ,
    // {
    //     'Que': 'Which one of the following is the correct way for calling the JavaScript code?',
    //     'a': 'Preprocessor',
    //     'b': 'Triggering Event',
    //     'c': 'RMI',
    //     'd': 'Function/Method',
    //     'correct': 'd'
    // },
]
let index = 0; 
let correct = 0, incorrect = 0;
let total = question.length;
let questionBox = document.getElementById("questionBox");
let optionInputs = document.querySelectorAll('.options');

const loadQuestion = () => {
    if (index === total)
        return quizEnd();
    else 
        reset();
    const data = question[index];
    //console.log(data);
    questionBox.innerText = ` ${index+1}) ${data.Que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    // optionInputs[4].nextElementSibling.innerText = data.e;
    // optionInputs[5].nextElementSibling.innerText = data.f;

}

const subQuiz = () => {
    const data = question[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion();
    return;
}


const getAnswer = () => {
    let ans;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                    ans = input.value;
                }
        }
    )
    return ans;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const quizEnd = () => {
    document.getElementById("container").innerHTML = `
    <div style = "text-align: center">
        <h3 Hii, you've scored >${correct} / ${total}.</h3>
    </div>`;
}


loadQuestion();

