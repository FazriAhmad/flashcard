// --- Vocabulary with Meanings ---
const vocabulary = {
    hiragana: [
        { word: "あさ", meaning: "Pagi" }, { word: "いか", meaning: "Cumi-cumi" }, { word: "うみ", meaning: "Laut" },
        { word: "えき", meaning: "Stasiun" }, { word: "おか", meaning: "Bukit" }, { word: "かさ", meaning: "Payung" },
        { word: "きく", meaning: "Mendengar" }, { word: "くも", meaning: "Awan" }, { word: "けさ", meaning: "Pagi ini" },
        { word: "こころ", meaning: "Hati" }, { word: "さくら", meaning: "Bunga Sakura" }, { word: "しお", meaning: "Garam" },
        { word: "すし", meaning: "Sushi" }, { word: "せみ", meaning: "Jangkrik" }, { word: "そら", meaning: "Langit" },
        { word: "たこ", meaning: "Gurita" }, { word: "ちか", meaning: "Bawah tanah" }, { word: "つくえ", meaning: "Meja" },
        { word: "てがみ", meaning: "Surat" }, { word: "とり", meaning: "Burung" }, { word: "なつ", meaning: "Musim Panas" },
        { word: "にし", meaning: "Barat" }, { word: "ぬの", meaning: "Kain" }, { word: "ねこ", meaning: "Kucing" },
        { word: "のど", meaning: "Tenggorokan" }, { word: "はな", meaning: "Bunga" }, { word: "ひる", meaning: "Siang" },
        { word: "ふね", meaning: "Kapal" }, { word: "へや", meaning: "Kamar" }, { word: "ほし", meaning: "Bintang" },
        { word: "まど", meaning: "Jendela" }, { word: "みち", meaning: "Jalan" }, { word: "むし", meaning: "Serangga" },
        { word: "めがね", meaning: "Kacamata" }, { word: "もり", meaning: "Hutan" }, { word: "やま", meaning: "Gunung" },
        { word: "ゆき", meaning: "Salju" }, { word: "よる", meaning: "Malam" }, { word: "らくだ", meaning: "Unta" },
        { word: "りす", meaning: "Tupai" }, { word: "るす", meaning: "Tidak di rumah" }, { word: "れい", meaning: "Contoh" },
        { word: "ろく", meaning: "Enam" }, { word: "わに", meaning: "Buaya" }, { word: "いちご", meaning: "Stroberi" }
    ],
    katakana: [
        { word: "アイス", meaning: "Es Krim" }, { word: "カメラ", meaning: "Kamera" }, { word: "テレビ", meaning: "Televisi" },
        { word: "ノート", meaning: "Buku Catatan" }, { word: "ラジオ", meaning: "Radio" }, { word: "ピアノ", meaning: "Piano" },
        { word: "ドア", meaning: "Pintu" }, { word: "バス", meaning: "Bus" }, { word: "ペン", meaning: "Pena" },
        { word: "コップ", meaning: "Gelas" }, { word: "バナナ", meaning: "Pisang" }, { word: "リンゴ", meaning: "Apel" },
        { word: "オレンジ", meaning: "Jeruk" }, { word: "スイカ", meaning: "Semangka" }, { word: "メロン", meaning: "Melon" },
        { word: "トマト", meaning: "Tomat" }, { word: "サラダ", meaning: "Salad" }, { word: "パン", meaning: "Roti" },
        { word: "ケーキ", meaning: "Kue" }, { word: "シャツ", meaning: "Kemeja" }, { word: "ズボン", meaning: "Celana" },
        { word: "クツ", meaning: "Sepatu" }, { word: "バッグ", meaning: "Tas" }, { word: "カギ", meaning: "Kunci" },
        { word: "メガネ", meaning: "Kacamata" }, { word: "クラス", meaning: "Kelas" }, { word: "テスト", meaning: "Tes" },
        { word: "ゲーム", meaning: "Game" }, { word: "スポーツ", meaning: "Olahraga" }, { word: "サッカー", meaning: "Sepak Bola" }
    ]
};

// --- Game State ---
let gameState = {
    currentScript: 'hiragana',
    gameMode: 'ai', // 'ai' or 'pvp'
    currentPlayer: 1, 
    history: [],
    targetChar: '',
    lastWord: '-',
    isActive: false,
    scores: { p1: 0, p2: 0 },
    chances: { p1: 5, p2: 5 },
    timeLeft: 45
};

let timerInterval = null;

// --- Sound Effects ---
const successSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');

// --- DOM Elements ---
const splashScreen = document.getElementById('splash-screen');
const gameInterface = document.getElementById('game-interface');
const gameOverModal = document.getElementById('game-over-modal');
const wordInput = document.getElementById('word-input');
const historyList = document.getElementById('history-list');
const targetCharDisplay = document.getElementById('target-char');
const lastWordDisplay = document.getElementById('last-word-display');
const lastMeaningDisplay = document.getElementById('last-meaning-display');
const p1ScoreDisplay = document.getElementById('p1-score');
const p2ScoreDisplay = document.getElementById('p2-score');
const p1ChancesDisplay = document.getElementById('p1-chances');
const p2ChancesDisplay = document.getElementById('p2-chances');
const timerValDisplay = document.getElementById('timer-val');
const userInfo = document.getElementById('user-info');
const aiInfo = document.getElementById('ai-info');
const p2Label = document.getElementById('p2-label');
const p2FinalLabel = document.getElementById('p2-final-label');

// --- Initialization ---
document.querySelectorAll('#script-toggle .toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('#script-toggle .toggle-btn.active').classList.remove('active');
        btn.classList.add('active');
        gameState.currentScript = btn.dataset.script;
    });
});

document.getElementById('start-ai').addEventListener('click', () => startGame('ai'));
document.getElementById('start-pvp').addEventListener('click', () => startGame('pvp'));
document.getElementById('submit-word').addEventListener('click', handleUserSubmit);
wordInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleUserSubmit(); });

document.getElementById('restart-btn').addEventListener('click', () => {
    gameOverModal.classList.remove('active');
    startGame(gameState.gameMode);
});
document.getElementById('menu-btn').addEventListener('click', () => {
    gameOverModal.classList.remove('active');
    gameInterface.classList.remove('active');
    splashScreen.classList.add('active');
});
document.getElementById('quit-btn').addEventListener('click', () => {
    if(confirm("Keluar ke menu utama?")) {
        stopTimer();
        gameInterface.classList.remove('active');
        splashScreen.classList.add('active');
        gameState.isActive = false;
    }
});

// --- Functions ---
function startGame(mode) {
    gameState.gameMode = mode;
    gameState.isActive = true;
    gameState.currentPlayer = 1;
    gameState.history = [];
    gameState.scores = { p1: 0, p2: 0 };
    gameState.chances = { p1: 5, p2: 5 };
    gameState.lastWord = '-';
    
    p2Label.textContent = mode === 'ai' ? "MUSUH (AI)" : "PLAYER 2";
    p2FinalLabel.textContent = mode === 'ai' ? "COMPUTER (AI)" : "PLAYER 2";
    
    const chars = gameState.currentScript === 'hiragana' 
        ? "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろ"
        : "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロ";
    gameState.targetChar = chars[Math.floor(Math.random() * chars.length)];
    
    updateUI();
    historyList.innerHTML = '';
    addToHistory(`Mode ${mode.toUpperCase()} dimulai!`, true);
    splashScreen.classList.remove('active');
    gameInterface.classList.add('active');
    
    startTurn();
}

function startTurn() {
    stopTimer();
    gameState.timeLeft = 45;
    updateUI();
    
    if (gameState.gameMode === 'ai' && gameState.currentPlayer === 2) {
        wordInput.disabled = true;
        setTimeout(aiTurn, 800);
    } else {
        wordInput.disabled = false;
        wordInput.placeholder = `Giliran Player ${gameState.currentPlayer}...`;
        wordInput.focus();
        startTimer();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        gameState.timeLeft--;
        updateUI();
        
        if (gameState.timeLeft <= 10) timerValDisplay.parentElement.classList.add('timer-warning');

        if (gameState.timeLeft <= 0) {
            handlePenalty(`Player ${gameState.currentPlayer}: Waktu Habis!`);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerValDisplay.parentElement.classList.remove('timer-warning');
}

function handlePenalty(reason) {
    stopTimer();
    const p = gameState.currentPlayer;
    gameState.chances[`p${p}`]--;
    showToast(reason + " (-1 Nyawa)");
    addToHistory(reason + " (-1 Nyawa)", true);
    
    if (gameState.chances[`p${p}`] <= 0) {
        endGame(`Player ${p} kehabisan nyawa!`, p === 1 ? 2 : 1);
    } else {
        gameState.currentPlayer = p === 1 ? 2 : 1;
        startTurn();
    }
}

function handleUserSubmit() {
    if (!gameState.isActive) return;
    if (gameState.gameMode === 'ai' && gameState.currentPlayer === 2) return;
    
    const word = wordInput.value.trim();
    if (!word) return;

    if (validateWord(word)) {
        stopTimer();
        const meaning = findMeaning(word);
        executeMove(word, meaning, gameState.currentPlayer);
        wordInput.value = '';
    } else {
        wordInput.classList.add('error-shake');
        setTimeout(() => wordInput.classList.remove('error-shake'), 500);
        handlePenalty(`P${gameState.currentPlayer}: Jawaban Salah!`);
        wordInput.value = '';
    }
}

function validateWord(word) {
    const hiraganaRegex = /^[\u3040-\u309Fー]+$/;
    const katakanaRegex = /^[\u30A0-\u30FFー]+$/;
    const regex = gameState.currentScript === 'hiragana' ? hiraganaRegex : katakanaRegex;
    
    if (!regex.test(word)) return false;
    if (word[0] !== gameState.targetChar) return false;
    if (gameState.history.includes(word)) return false;
    return true;
}

function findMeaning(word) {
    const entry = vocabulary[gameState.currentScript].find(e => e.word === word);
    return entry ? entry.meaning : "Arti tidak ditemukan";
}

function executeMove(word, meaning, playerNum) {
    successSound.play().catch(e => {});
    speakJapanese(word);
    
    gameState.lastWord = word;
    gameState.history.push(word);
    
    const lastChar = getEffectiveLastChar(word);
    
    if (lastChar === 'ん' || lastChar === 'ン') {
        endGame(`P${playerNum}: Kata '${word}' berakhir dengan '${lastChar}'.`, playerNum === 1 ? 2 : 1);
        return;
    }

    gameState.targetChar = lastChar;
    gameState.scores[`p${playerNum}`] += 10;
    gameState.currentPlayer = playerNum === 1 ? 2 : 1;
    
    lastWordDisplay.textContent = word;
    lastMeaningDisplay.textContent = meaning;
    addToHistory(`P${playerNum}: ${word} (${meaning})`);
    
    startTurn();
}

function aiTurn() {
    if (!gameState.isActive || gameState.gameMode !== 'ai') return;
    const list = vocabulary[gameState.currentScript];
    const possible = list.filter(e => e.word[0] === gameState.targetChar && !gameState.history.includes(e.word));
    
    if (possible.length > 0) {
        const choice = possible[Math.floor(Math.random() * possible.length)];
        executeMove(choice.word, choice.meaning, 2);
    } else {
        endGame("AI tidak bisa menemukan kata lagi!", 1);
    }
}

function getEffectiveLastChar(word) {
    let last = word[word.length - 1];
    if (last === 'ー' && word.length > 1) last = word[word.length - 2];
    return last;
}

function speakJapanese(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.9;
        window.speechSynthesis.speak(utterance);
    }
}

function updateUI() {
    targetCharDisplay.textContent = gameState.targetChar;
    p1ScoreDisplay.textContent = gameState.scores.p1;
    p2ScoreDisplay.textContent = gameState.scores.p2;
    p1ChancesDisplay.textContent = gameState.chances.p1;
    p2ChancesDisplay.textContent = gameState.chances.p2;
    timerValDisplay.textContent = gameState.timeLeft;
    
    userInfo.classList.toggle('active', gameState.currentPlayer === 1);
    aiInfo.classList.toggle('active', gameState.currentPlayer === 2);
}

function addToHistory(text, isSystem = false) {
    const item = document.createElement('div');
    item.className = 'history-item' + (isSystem ? ' system' : '');
    item.textContent = text;
    historyList.prepend(item);
}

function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'feedback-toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

function endGame(reason, winnerNum) {
    stopTimer();
    gameState.isActive = false;
    document.getElementById('winner-text').textContent = winnerNum === 1 ? "PLAYER 1 MENANG!" : (gameState.gameMode === 'ai' ? "AI MENANG!" : "PLAYER 2 MENANG!");
    document.getElementById('game-over-reason').textContent = reason;
    document.getElementById('final-score-p1').textContent = gameState.scores.p1;
    document.getElementById('final-score-p2').textContent = gameState.scores.p2;
    gameOverModal.classList.add('active');
}
