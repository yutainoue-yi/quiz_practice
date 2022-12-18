const quiz = [
    {
        question: question = 'ゲーム史上、最も売れたゲーム機は次のうちどれ？',
        answers: [
            'スーパーファミコン',
            'プレステ2',
            'ニンテンドースイッチ',
            'ニンテンドーDS'
        ],
        correct: 'ニンテンドーDS'
    }, {
        question: question = '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: [
            'MOTHER2',
            'スーパーマリオブラザーズ3',
            'スーパードンキーコング',
            '星のカービィ'
        ],
        correct: 'MOTHER2'
    }, {
        question: question = 'ファイナルファンタジーⅣの主人公の名前は？',
        answers: [
            'フリオール',
            'クラウド',
            'ティーダ',
            'セシル'
        ],
        correct: 'セシル'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;





// document.getElementsByTagName('button')[0].textContent = answers[0];
// document.getElementsByTagName('button')[1].textContent = answers[1];
// document.getElementsByTagName('button')[2].textContent = answers[2];
// document.getElementsByTagName('button')[3].textContent = answers[3];


// for (let i = 0; i < 4; i++) {
//     $button[i].textContent = answers[i];
// };

const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;



const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;

    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

// for (let i = 0; i < buttonLength; i++) {
//     $button[i].addEventListener('click', () => {
//         if (correct === $button[i].textContent) {
//             window.alert('正解！');
//         } else {
//             window.alert('不正解！');
//         }
//     });
// }

let handlerIndex = 0;

const clickHandler = (e) => {

    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解です！');
        score++;
    } else {
        window.alert('不正解です！');
    }

    quizIndex++;
    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
};

while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
// $button[0].addEventListener('click', () => {
//     if (correct === $button[0].textContent) {
//         window.alert('正解！');
//     } else {
//         window.alert('不正解！');
//     }
// });

// $button[1].addEventListener('click', () => {
//     if (correct === $button[1].textContent) {
//         window.alert('正解！');
//     } else {
//         window.alert('不正解！');
//     }
// });
// $button[2].addEventListener('click', () => {
//     if (correct === $button[2].textContent) {
//         window.alert('正解！');
//     } else {
//         window.alert('不正解！');
//     }
// });
// $button[3].addEventListener('click', () => {
//     if (correct === $button[3].textContent) {
//         window.alert('正解！');
//     } else {
//         window.alert('不正解！');
//     }
// });
