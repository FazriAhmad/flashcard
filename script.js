const hiragana = [
  { romaji: "a", kana: "あ" },
  { romaji: "i", kana: "い" },
  { romaji: "u", kana: "う" },
  { romaji: "e", kana: "え" },
  { romaji: "o", kana: "お" },
  { romaji: "ka", kana: "か" },
  { romaji: "ki", kana: "き" },
  { romaji: "ku", kana: "く" },
  { romaji: "ke", kana: "け" },
  { romaji: "ko", kana: "こ" },
  { romaji: "sa", kana: "さ" },
  { romaji: "shi", kana: "し" },
  { romaji: "su", kana: "す" },
  { romaji: "se", kana: "せ" },
  { romaji: "so", kana: "そ" },
  { romaji: "ta", kana: "た" },
  { romaji: "chi", kana: "ち" },
  { romaji: "tsu", kana: "つ" },
  { romaji: "te", kana: "て" },
  { romaji: "to", kana: "と" },
  { romaji: "na", kana: "な" },
  { romaji: "ni", kana: "に" },
  { romaji: "nu", kana: "ぬ" },
  { romaji: "ne", kana: "ね" },
  { romaji: "no", kana: "の" },
  { romaji: "ha", kana: "は" },
  { romaji: "hi", kana: "ひ" },
  { romaji: "fu", kana: "ふ" },
  { romaji: "he", kana: "へ" },
  { romaji: "ho", kana: "ほ" },
  { romaji: "ma", kana: "ま" },
  { romaji: "mi", kana: "み" },
  { romaji: "mu", kana: "む" },
  { romaji: "me", kana: "め" },
  { romaji: "mo", kana: "も" },
  { romaji: "ya", kana: "や" },
  { romaji: "yu", kana: "ゆ" },
  { romaji: "yo", kana: "よ" },
  { romaji: "ra", kana: "ら" },
  { romaji: "ri", kana: "り" },
  { romaji: "ru", kana: "る" },
  { romaji: "re", kana: "れ" },
  { romaji: "ro", kana: "ろ" },
  { romaji: "wa", kana: "わ" },
  { romaji: "wo", kana: "を" },
  { romaji: "n", kana: "ん" },
  { romaji: "ga", kana: "が" },
  { romaji: "gi", kana: "ぎ" },
  { romaji: "gu", kana: "ぐ" },
  { romaji: "ge", kana: "げ" },
  { romaji: "go", kana: "ご" },
  { romaji: "za", kana: "ざ" },
  { romaji: "ji", kana: "じ" },
  { romaji: "zu", kana: "ず" },
  { romaji: "ze", kana: "ぜ" },
  { romaji: "zo", kana: "ぞ" },
  { romaji: "da", kana: "だ" },
  { romaji: "ji", kana: "ぢ" },
  { romaji: "zu", kana: "づ" },
  { romaji: "de", kana: "で" },
  { romaji: "do", kana: "ど" },
  { romaji: "ba", kana: "ば" },
  { romaji: "bi", kana: "び" },
  { romaji: "bu", kana: "ぶ" },
  { romaji: "be", kana: "べ" },
  { romaji: "bo", kana: "ぼ" },
  { romaji: "pa", kana: "ぱ" },
  { romaji: "pi", kana: "ぴ" },
  { romaji: "pu", kana: "ぷ" },
  { romaji: "pe", kana: "ぺ" },
  { romaji: "po", kana: "ぽ" },
];

const katakana = [
  { romaji: "a", kana: "ア" },
  { romaji: "i", kana: "イ" },
  { romaji: "u", kana: "ウ" },
  { romaji: "e", kana: "エ" },
  { romaji: "o", kana: "オ" },
  { romaji: "ka", kana: "カ" },
  { romaji: "ki", kana: "キ" },
  { romaji: "ku", kana: "ク" },
  { romaji: "ke", kana: "ケ" },
  { romaji: "ko", kana: "コ" },
  { romaji: "sa", kana: "サ" },
  { romaji: "shi", kana: "シ" },
  { romaji: "su", kana: "ス" },
  { romaji: "se", kana: "セ" },
  { romaji: "so", kana: "ソ" },
  { romaji: "ta", kana: "タ" },
  { romaji: "chi", kana: "チ" },
  { romaji: "tsu", kana: "ツ" },
  { romaji: "te", kana: "テ" },
  { romaji: "to", kana: "ト" },
  { romaji: "na", kana: "ナ" },
  { romaji: "ni", kana: "ニ" },
  { romaji: "nu", kana: "ヌ" },
  { romaji: "ne", kana: "ネ" },
  { romaji: "no", kana: "ノ" },
  { romaji: "ha", kana: "ハ" },
  { romaji: "hi", kana: "ヒ" },
  { romaji: "fu", kana: "フ" },
  { romaji: "he", kana: "ヘ" },
  { romaji: "ho", kana: "ホ" },
  { romaji: "ma", kana: "マ" },
  { romaji: "mi", kana: "ミ" },
  { romaji: "mu", kana: "ム" },
  { romaji: "me", kana: "メ" },
  { romaji: "mo", kana: "モ" },
  { romaji: "ya", kana: "ヤ" },
  { romaji: "yu", kana: "ユ" },
  { romaji: "yo", kana: "ヨ" },
  { romaji: "ra", kana: "ラ" },
  { romaji: "ri", kana: "リ" },
  { romaji: "ru", kana: "ル" },
  { romaji: "re", kana: "レ" },
  { romaji: "ro", kana: "ロ" },
  { romaji: "wa", kana: "ワ" },
  { romaji: "wo", kana: "ヲ" },
  { romaji: "n", kana: "ン" },
  { romaji: "ga", kana: "ガ" },
  { romaji: "gi", kana: "ギ" },
  { romaji: "gu", kana: "グ" },
  { romaji: "ge", kana: "ゲ" },
  { romaji: "go", kana: "ゴ" },
  { romaji: "za", kana: "ザ" },
  { romaji: "ji", kana: "ジ" },
  { romaji: "zu", kana: "ズ" },
  { romaji: "ze", kana: "ゼ" },
  { romaji: "zo", kana: "ゾ" },
  { romaji: "da", kana: "ダ" },
  { romaji: "ji", kana: "ヂ" },
  { romaji: "zu", kana: "ヅ" },
  { romaji: "de", kana: "デ" },
  { romaji: "do", kana: "ド" },
  { romaji: "ba", kana: "バ" },
  { romaji: "bi", kana: "ビ" },
  { romaji: "bu", kana: "ブ" },
  { romaji: "be", kana: "ベ" },
  { romaji: "bo", kana: "ボ" },
  { romaji: "pa", kana: "パ" },
  { romaji: "pi", kana: "ピ" },
  { romaji: "pu", kana: "プ" },
  { romaji: "pe", kana: "ペ" },
  { romaji: "po", kana: "ポ" },
];

let isHiragana = true;
let currentOptions = [];
let correctAnswer;
let score = 0;
let chances = 3;

const kanaElement = document.getElementById("kana");
const optionsContainer = document.getElementById("options");
const toggleBtn = document.getElementById("toggleBtn");
const scoreElement = document.getElementById("score");
const chancesElement = document.getElementById("chances");

// Modal elements
const errorModal = document.getElementById("errorModal");
const closeModalBtn = document.getElementById("closeModalBtn");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateOptions() {
  const currentSet = isHiragana ? hiragana : katakana;
  correctAnswer = currentSet[getRandomInt(currentSet.length)];
  currentOptions = [correctAnswer];

  while (currentOptions.length < 4) {
    const option = currentSet[getRandomInt(currentSet.length)];
    if (!currentOptions.includes(option)) {
      currentOptions.push(option);
    }
  }
  currentOptions = currentOptions.sort(() => Math.random() - 0.5);
  displayFlashcard();
}

function displayFlashcard() {
  kanaElement.textContent = correctAnswer.kana;
  optionsContainer.innerHTML = "";

  currentOptions.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.romaji;
    button.classList.add("option-button");
    button.addEventListener("click", () => {
      if (option.romaji === correctAnswer.romaji) {
        button.style.backgroundColor = "green";
        increaseScore();
      } else {
        button.style.backgroundColor = "red";
        decreaseChance();
        showModal(); // Tampilkan modal jika jawaban salah
      }
    });
    optionsContainer.appendChild(button);
  });
}

// Fungsi untuk meningkatkan skor
function increaseScore() {
  score += 10;
  scoreElement.textContent = score;
  setTimeout(generateOptions, 100); // Tampilkan flashcard baru setelah 1 detik
}

// Fungsi untuk mengurangi kesempatan
function decreaseChance() {
  chances -= 1;
  chancesElement.textContent = chances;
  if (chances <= 0) {
    alert("Kesempatan habis! Mulai ulang permainan.");
    resetGame(); // Mulai ulang permainan jika kesempatan habis
  }
}

// Fungsi untuk mengatur ulang permainan
function resetGame() {
  score = 0;
  chances = 3;
  scoreElement.textContent = score;
  chancesElement.textContent = chances;
  generateOptions();
}

// Function untuk menampilkan modal
function showModal() {
  errorModal.style.display = "block";
}

// Event listener untuk menutup modal
closeModalBtn.addEventListener("click", () => {
  errorModal.style.display = "none";
});

// Event listener untuk tombol toggle
toggleBtn.addEventListener("click", () => {
  isHiragana = !isHiragana;
  toggleBtn.textContent = isHiragana
    ? "Switch to Katakana"
    : "Switch to Hiragana";
  generateOptions();
});

// Inisialisasi flashcard dengan opsi
generateOptions();
