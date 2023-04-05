const quiz = [
    {
        question: 'SUPER BEAVERのボーカルは誰？',
        answers: [
            '柳沢亮太',
            '渋谷龍太',
            '藤原広明',
            '上杉研太'
        ],
        correct: '渋谷龍太'
    }, {
        question: '次のうち、SUPER BEAVERの楽曲ではないのはどれ？',
        answers: [
            '秘密',
            'your song',
            '白日',
            '証明'
        ],
        correct: '白日'
    }, {
        question: '次のうち、SUPER BEAVERが担当した「僕のヒーローアカデミア」のOPはどれ？',
        answers: [
            'ひたむき',
            '名前を呼ぶよ',
            'らしさ',
            '突破口'
        ],
        correct: 'ひたむき'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;

    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解!');
    } else {
        window.alert('不正解');
    };

    quizIndex++;

    if(quizIndex < quizLength){
        // 問題数がまだあればこちらを実行
        setupQuiz();
    } else {
        // 問題数がなければ終了
        window.alert('終了!');
    }
}

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
