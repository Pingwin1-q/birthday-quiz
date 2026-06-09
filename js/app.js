/* ===== ШАГИ: квиз + мини-игры ===== */
const STEPS = [
  {
    type: 'quiz',
    text: 'Что делает твоя девушка, когда ты говоришь «мне холодно»?',
    answers: [
      { text: 'Обнимает и греет', reaction: 'Мило! Но есть ответ и получше…' },
      { text: 'Даёт свою куртку', reaction: 'Рыцарь! Хотя куртка потом пахнет тобой — это плюс' },
      { text: 'Дарит страховку на машину', ideal: true, reaction: 'ВОТ ЭТО ЗАБОТА! Тепло — это когда машина застрахована 🚗❤️' },
      { text: 'Включает обогрев сидений', reaction: 'О, у нас есть обогрев? Надо проверить машину!' },
    ],
  },
  {
    type: 'quiz',
    text: 'Кто главный водитель в ваших отношениях?',
    answers: [
      { text: 'Я, конечно', reaction: 'Королева дорог! 👑' },
      { text: 'Я не езжу, у меня нет страховки', reaction: 'Вот именно! Пора это исправить 😏' },
      { text: 'Кто ближе к машине', reaction: 'Справедливо. Демократия в действии' },
      { text: 'Таксист', reaction: 'Яндекс.Такси не в счёт! Хотя иногда спасает' },
    ],
  },
  {
    type: 'mini',
    game: 'pattern',
    prompt: 'Какое число логично продолжит ряд?',
    visual: ['2', '6', '12', '20', '?'],
    answers: ['24', '28', '30', '36'],
    correct: 2,
    success: '30! Разница растёт: +4, +6, +8, +10',
    fail: 'Посмотри на шаг между числами — он каждый раз увеличивается на 2',
  },
  {
    type: 'quiz',
    text: 'Какая машина — идеальная для романтической поездки?',
    answers: [
      { text: 'Тигуанчик', reaction: 'Класс! Но есть вариант ещё надёжнее' },
      { text: 'Киа любимая', reaction: 'Наша красотка! Но идеал — кое-что другое' },
      { text: 'Любая, где мы вместе', reaction: 'Ммм, сладко. Даже в пробке романтично' },
      { text: 'Та, что застрахована', ideal: true, reaction: 'Именно! Романтика — это спокойствие и ОСАГО в бардачке 🛡️' },
    ],
  },
  {
    type: 'quiz',
    text: 'Если бы твоя машина могла говорить, что бы она попросила?',
    answers: [
      { text: '«Помой меня!»', reaction: 'Машина права. Но ты красивее любой мойки ✨' },
      { text: '«Покатай ещё!»', reaction: 'Она любит вас. И дороги. И бензин' },
      { text: '«Застрахуй меня!»', ideal: true, reaction: 'Машина умная — она знает, что ей нужно! 🎯' },
      { text: '«Выключи эту музыку»', reaction: 'Несправедливо! Мой плейлист идеален' },
    ],
  },
  {
    type: 'mini',
    game: 'riddle',
    prompt: 'Логика: если ВСЕ розы — цветы, а НЕКОТОРЫЕ цветы — красные, обязательно ли, что некоторые розы — красные?',
    answers: [
      'Да, обязательно',
      'Нет, не обязательно',
      'Только в жаркий день',
      'Зависит от настроения флориста',
    ],
    correct: 1,
    success: 'Верно! Красные цветы могут быть не розами. Классическая логическая ловушка 🧩',
    fail: 'Подумай: «некоторые цветы красные» не значит, что среди них есть розы',
  },
  {
    type: 'quiz',
    text: 'Что самое романтичное, что можно подарить?',
    answers: [
      { text: 'Цветы и ужин', reaction: 'Классика, которая не стареет 🌹' },
      { text: 'Поездку куда-нибудь', reaction: 'Приключения > вещи. Согласна!' },
      { text: 'Заботу и внимание', reaction: 'Главный подарок. Остальное — бонус' },
      { text: 'Страховка на машину', ideal: true, reaction: 'Стоп… ты что, читала мысли?! 🎯' },
    ],
  },
  {
    type: 'quiz',
    text: 'Что идеально дополнит твой День Рождения?',
    answers: [
      { text: 'Торт со свечами', reaction: 'Обязательная программа! 🎂' },
      { text: 'Объятия и поцелуи', reaction: 'Лучше любого торта ❤️' },
      { text: 'Страховка на машину', ideal: true, reaction: 'Лучший подарок на ДР — забота на колёсах! 🚗✨' },
      { text: 'Танцы до утра', reaction: 'Только если завтра не на работу!' },
    ],
  },
  {
    type: 'mini',
    game: 'buckets',
    prompt: 'Налей ровно 4 литра! Переливай между вёдрами — попробуй сама',
    success: '4 литра! Ты справилась. Настоящая инженерша 🔧',
  },
  {
    type: 'quiz',
    text: 'Какой подарок кричит «я забочусь о тебе по-взрослому»?',
    answers: [
      { text: 'Плед и какао', reaction: 'Уютно, но это уровень «мило» ☕' },
      { text: 'Билеты в театр', reaction: 'Культура — это красиво 🎭' },
      { text: 'Страховка на машину', ideal: true, reaction: 'Вот это да! Забота уровня «я всё продумала» 💛' },
      { text: 'Парфюм', reaction: 'Пахнешь роскошно, но машина тоже важна!' },
    ],
  },
  {
    type: 'mini',
    game: 'sort',
    prompt: 'Расставь машины по порядку приезда',
    hint: 'В приехала первой. Б — после В, но раньше А. Нажми на машину, потом на место',
    order: ['В', 'Б', 'А'],
    success: 'В → Б → А! Б — в середине. Логика железная 🅿️',
    fail: 'Подсказка: сначала В, потом кто-то между В и А…',
  },
];

const TOTAL_STEPS = STEPS.length;

/* ===== КОЛЕСО ===== */
const WHEEL_PRIZES = [
  { label: 'Пылесос Dyson', sub: 'для салона', color1: '#8B2942', color2: '#5C1A2E' },
  { label: 'Chanel №5', sub: '50 мл', color1: '#2C3E6B', color2: '#1A2540' },
  { label: 'Starbucks', sub: 'на год', color1: '#1B5E3B', color2: '#0F3D26' },
  { label: 'Apple AirPods', sub: 'Pro 3', color1: '#4A3060', color2: '#2E1D3D' },
  { label: 'СПА-уикенд', sub: 'в Сочи', color1: '#6B4423', color2: '#4A2F18' },
  { label: 'ОСАГО', sub: 'на машину!', color1: '#C41E5A', color2: '#8B1538', winner: true },
];

const WINNING_INDEX = WHEEL_PRIZES.length - 1;

/* ===== СОСТОЯНИЕ ===== */
let currentStep = 0;
let wheelRotation = 0;
let isSpinning = false;
let wheelReady = false;
let dpr = 1;
let bucketState = { five: 0, three: 0 };
let sortSelected = null;

/* ===== DOM ===== */
const screens = {
  welcome: document.getElementById('screen-welcome'),
  quiz: document.getElementById('screen-quiz'),
  minigame: document.getElementById('screen-minigame'),
  wheel: document.getElementById('screen-wheel'),
  prize: document.getElementById('screen-prize'),
};

const els = {
  progressFill: document.getElementById('progress-fill'),
  stepLabel: document.getElementById('step-label'),
  stepTag: document.getElementById('step-tag'),
  questionText: document.getElementById('question-text'),
  answers: document.getElementById('answers'),
  reaction: document.getElementById('reaction'),
  minigameProgressFill: document.getElementById('minigame-progress-fill'),
  minigameStepLabel: document.getElementById('minigame-step-label'),
  minigamePrompt: document.getElementById('minigame-prompt'),
  minigameVisual: document.getElementById('minigame-visual'),
  minigameBuckets: document.getElementById('minigame-buckets'),
  minigameSort: document.getElementById('minigame-sort'),
  minigameAnswers: document.getElementById('minigame-answers'),
  minigameReaction: document.getElementById('minigame-reaction'),
  wheelCanvas: document.getElementById('wheel-canvas'),
  btnSpin: document.getElementById('btn-spin'),
  spinStatus: document.getElementById('spin-status'),
  prizeSubtitle: document.getElementById('prize-subtitle'),
  prizeMessage: document.getElementById('prize-message'),
};

/* ===== НАВИГАЦИЯ ===== */
function showScreen(name) {
  Object.values(screens).forEach((s) => s.classList.remove('active'));
  screens[name].classList.add('active');
}

function updateProgress(stepIndex, fillEl, labelEl) {
  const tot = String(TOTAL_STEPS).padStart(2, '0');
  const clamped = Math.min(stepIndex, TOTAL_STEPS);
  const num = String(clamped + 1).padStart(2, '0');
  fillEl.style.width = `${(clamped / TOTAL_STEPS) * 100}%`;
  labelEl.textContent = `${num} / ${tot}`;
}

function completeProgress() {
  const tot = String(TOTAL_STEPS).padStart(2, '0');
  [els.progressFill, els.minigameProgressFill].forEach((fill) => {
    fill.style.width = '100%';
  });
  els.stepLabel.textContent = `${tot} / ${tot}`;
  els.minigameStepLabel.textContent = `${tot} / ${tot}`;
}

function resetProgress() {
  const tot = String(TOTAL_STEPS).padStart(2, '0');
  [els.progressFill, els.minigameProgressFill].forEach((fill) => {
    fill.style.width = '0%';
  });
  els.stepLabel.textContent = `01 / ${tot}`;
  els.minigameStepLabel.textContent = `01 / ${tot}`;
}

function advanceStep() {
  currentStep++;
  if (currentStep >= TOTAL_STEPS) {
    completeProgress();
    setTimeout(() => {
      showScreen('wheel');
      initWheel();
    }, 600);
    return;
  }
  renderCurrentStep();
}

function renderCurrentStep() {
  const step = STEPS[currentStep];
  if (step.type === 'quiz') {
    showScreen('quiz');
    renderQuiz(step);
  } else {
    showScreen('minigame');
    renderMinigame(step);
  }
}

document.getElementById('btn-start').addEventListener('click', () => {
  currentStep = 0;
  renderCurrentStep();
});

document.getElementById('btn-replay').addEventListener('click', resetGame);

function resetGame() {
  currentStep = 0;
  wheelRotation = 0;
  isSpinning = false;
  wheelReady = false;
  bucketState = { five: 0, three: 0 };
  sortSelected = null;
  els.btnSpin.disabled = true;
  els.spinStatus.textContent = 'Подготовка колеса…';
  els.reaction.textContent = '';
  els.minigameReaction.textContent = '';
  els.minigameReaction.classList.remove('success');
  hideMinigamePanels();
  resetProgress();
  showScreen('welcome');
}

/* ===== КВИЗ ===== */
function renderQuiz(step) {
  hideMinigamePanels();
  updateProgress(currentStep, els.progressFill, els.stepLabel);
  els.stepTag.textContent = 'Вопрос';
  els.questionText.textContent = step.text;
  els.reaction.textContent = '';
  els.answers.innerHTML = '';

  step.answers.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = ans.text;
    btn.addEventListener('click', () => selectQuizAnswer(i, btn, step));
    els.answers.appendChild(btn);
  });
}

function selectQuizAnswer(index, btn, step) {
  if (els.reaction.textContent) return;

  els.answers.querySelectorAll('.answer-btn').forEach((b) => {
    b.disabled = true;
    b.style.pointerEvents = 'none';
  });
  const ans = step.answers[index];
  btn.classList.add('selected');
  if (ans.ideal) btn.classList.add('answer-ideal');
  els.reaction.textContent = ans.reaction;
  if (ans.ideal) els.reaction.classList.add('reaction-ideal');

  setTimeout(() => {
    els.reaction.classList.remove('reaction-ideal');
    advanceStep();
  }, ans.ideal ? 2200 : 1800);
}

/* ===== МИНИ-ИГРЫ ===== */
const MINIGAME_PANELS = () => [els.minigameVisual, els.minigameBuckets, els.minigameSort];

function hideMinigamePanels() {
  MINIGAME_PANELS().forEach((el) => {
    if (!el) return;
    el.innerHTML = '';
    el.classList.remove('panel-show');
    el.style.display = 'none';
  });
}

function showMinigamePanel(el) {
  el.classList.add('panel-show');
  el.style.display = '';
}

function renderMinigame(step) {
  updateProgress(currentStep, els.minigameProgressFill, els.minigameStepLabel);
  els.minigamePrompt.textContent = step.prompt;
  els.minigameReaction.textContent = '';
  els.minigameReaction.classList.remove('success');
  els.minigameAnswers.innerHTML = '';
  hideMinigamePanels();

  if (step.game === 'buckets') {
    renderBucketsGame(step);
  } else if (step.game === 'sort') {
    renderSortGame(step);
  } else {
    renderChoiceMinigame(step);
  }
}

function renderChoiceMinigame(step) {
  if (step.visual) {
    showMinigamePanel(els.minigameVisual);
    els.minigameVisual.innerHTML = step.visual
      .map((item) =>
        item === '?'
          ? '<span class="slot-unknown">?</span>'
          : `<span>${item}</span>`
      )
      .join('');
  }

  step.answers.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = text;
    btn.addEventListener('click', () => checkMinigameAnswer(i, btn, step));
    els.minigameAnswers.appendChild(btn);
  });
}

function checkMinigameAnswer(index, btn, step) {
  if (isMinigameLocked()) return;

  if (index === step.correct) {
    els.minigameAnswers.querySelectorAll('.answer-btn').forEach((b) => {
      b.disabled = true;
      b.style.pointerEvents = 'none';
    });
    btn.classList.add('selected');
    els.minigameReaction.textContent = step.success;
    els.minigameReaction.classList.add('success');
    setTimeout(() => {
      els.minigameReaction.classList.remove('success');
      advanceStep();
    }, 2000);
  } else {
    btn.classList.add('answer-wrong');
    btn.disabled = true;
    els.minigameReaction.textContent = step.fail;
    setTimeout(() => {
      btn.classList.remove('answer-wrong');
      btn.disabled = false;
      els.minigameReaction.textContent = '';
    }, 1500);
  }
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function isMinigameLocked() {
  return els.minigameReaction.classList.contains('success');
}

/* ===== ИНТЕРАКТИВ: ВЁДРА ===== */
function renderBucketsGame(step) {
  bucketState = { five: 0, three: 0 };
  showMinigamePanel(els.minigameBuckets);
  els.minigameBuckets.innerHTML = `
    <p class="bucket-target">Цель: <strong>ровно 4 литра</strong> в большом ведре</p>
    <div class="buckets-row">
      <div class="bucket" id="bucket-5">
        <span class="bucket-label">5 литров</span>
        <div class="bucket-vessel">
          <div class="bucket-water" style="height:0%"></div>
          <span class="bucket-amount">0</span>
        </div>
      </div>
      <div class="bucket" id="bucket-3">
        <span class="bucket-label">3 литра</span>
        <div class="bucket-vessel">
          <div class="bucket-water" style="height:0%"></div>
          <span class="bucket-amount">0</span>
        </div>
      </div>
    </div>
    <div class="bucket-actions">
      <button type="button" class="bucket-btn" data-action="fill5">Наполнить 5л</button>
      <button type="button" class="bucket-btn" data-action="fill3">Наполнить 3л</button>
      <button type="button" class="bucket-btn" data-action="pour53">Перелить 5→3</button>
      <button type="button" class="bucket-btn" data-action="pour35">Перелить 3→5</button>
      <button type="button" class="bucket-btn" data-action="empty5">Вылить 5л</button>
      <button type="button" class="bucket-btn" data-action="empty3">Вылить 3л</button>
      <button type="button" class="bucket-btn bucket-btn-wide" data-action="reset">Сбросить</button>
    </div>
  `;

  els.minigameBuckets.querySelectorAll('.bucket-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (isMinigameLocked()) return;
      bucketAction(btn.dataset.action, step);
    });
  });
  updateBucketUI();
}

function bucketAction(action, step) {
  const s = bucketState;
  switch (action) {
    case 'fill5': s.five = 5; break;
    case 'fill3': s.three = 3; break;
    case 'empty5': s.five = 0; break;
    case 'empty3': s.three = 0; break;
    case 'pour53': {
      const pour = Math.min(s.five, 3 - s.three);
      s.five -= pour;
      s.three += pour;
      break;
    }
    case 'pour35': {
      const pour = Math.min(s.three, 5 - s.five);
      s.three -= pour;
      s.five += pour;
      break;
    }
    case 'reset':
      s.five = 0;
      s.three = 0;
      els.minigameReaction.textContent = '';
      break;
  }
  updateBucketUI();
  if (s.five === 4) {
    els.minigameReaction.textContent = step.success;
    els.minigameReaction.classList.add('success');
    els.minigameBuckets.querySelectorAll('.bucket-btn').forEach((b) => { b.disabled = true; });
    setTimeout(() => {
      els.minigameReaction.classList.remove('success');
      advanceStep();
    }, 2200);
  }
}

function updateBucketUI() {
  ['5', '3'].forEach((cap) => {
    const key = cap === '5' ? 'five' : 'three';
    const max = Number(cap);
    const val = bucketState[key];
    const el = document.getElementById(`bucket-${cap}`);
    if (!el) return;
    el.querySelector('.bucket-water').style.height = `${(val / max) * 100}%`;
    el.querySelector('.bucket-amount').textContent = val;
  });
}

/* ===== ИНТЕРАКТИВ: ПАРКОВКА ===== */
function renderSortGame(step) {
  sortSelected = null;
  showMinigamePanel(els.minigameSort);
  const cars = shuffleArray(['В', 'Б', 'А']);
  els.minigameSort.innerHTML = `
    <p class="sort-hint">${step.hint}</p>
    <div class="sort-slots" id="sort-slots">
      ${[1, 2, 3].map((n) => `
        <div class="sort-slot" data-slot="${n - 1}">
          <span class="sort-slot-num">${n}</span>
          <span class="sort-slot-car"></span>
        </div>
      `).join('')}
    </div>
    <div class="sort-pool" id="sort-pool">
      ${cars.map((c) => `<button type="button" class="sort-card" data-car="${c}">Машина ${c}</button>`).join('')}
    </div>
    <button type="button" class="btn btn-gold sort-check-btn" id="sort-check"><span>Проверить порядок</span></button>
  `;

  els.minigameSort.querySelectorAll('.sort-card').forEach((card) => {
    card.addEventListener('click', () => selectSortCard(card));
  });
  els.minigameSort.querySelectorAll('.sort-slot').forEach((slot) => {
    slot.addEventListener('click', () => placeSortCard(slot));
  });
  document.getElementById('sort-check').addEventListener('click', () => checkSortOrder(step));
}

function selectSortCard(card) {
  if (isMinigameLocked()) return;
  els.minigameSort.querySelectorAll('.sort-card').forEach((c) => c.classList.remove('selected'));
  if (sortSelected === card) {
    sortSelected = null;
    return;
  }
  sortSelected = card;
  card.classList.add('selected');
  els.minigameReaction.textContent = 'Теперь нажми на место (1, 2 или 3)';
}

function placeSortCard(slot) {
  if (!sortSelected || isMinigameLocked()) return;
  const car = sortSelected.dataset.car;
  const existing = slot.querySelector('.sort-slot-car .sort-card');
  if (existing) {
    document.getElementById('sort-pool').appendChild(existing);
  }
  sortSelected.classList.remove('selected');
  slot.querySelector('.sort-slot-car').innerHTML = '';
  const placed = document.createElement('button');
  placed.type = 'button';
  placed.className = 'sort-card';
  placed.dataset.car = car;
  placed.textContent = `Машина ${car}`;
  placed.addEventListener('click', () => {
    document.getElementById('sort-pool').appendChild(placed);
    sortSelected = null;
    els.minigameReaction.textContent = '';
  });
  slot.querySelector('.sort-slot-car').appendChild(placed);
  sortSelected.remove();
  sortSelected = null;
  els.minigameReaction.textContent = '';
}

function checkSortOrder(step) {
  if (isMinigameLocked()) return;
  const slots = [...els.minigameSort.querySelectorAll('.sort-slot')];
  const order = slots.map((s) => s.querySelector('.sort-card')?.dataset.car || null);
  if (order.includes(null)) {
    els.minigameReaction.textContent = 'Расставь все три машины на места';
    return;
  }
  const correct = order.every((c, i) => c === step.order[i]);
  if (correct) {
    els.minigameReaction.textContent = step.success;
    els.minigameReaction.classList.add('success');
    setTimeout(() => {
      els.minigameReaction.classList.remove('success');
      advanceStep();
    }, 2200);
  } else {
    els.minigameReaction.textContent = step.fail;
  }
}

/* ===== КОЛЕСО ФОРТУНЫ ===== */
function setupCanvas() {
  const canvas = els.wheelCanvas;
  const rect = canvas.getBoundingClientRect();
  dpr = window.devicePixelRatio || 1;
  const size = Math.round(rect.width * dpr);
  canvas.width = size;
  canvas.height = size;
  return size;
}

function initWheel() {
  setupCanvas();
  drawWheel(wheelRotation);
  wheelReady = true;
  els.btnSpin.disabled = false;
  els.spinStatus.textContent = 'Нажми кнопку и испытай удачу';
}

function drawWheel(rotationDeg) {
  const canvas = els.wheelCanvas;
  if (!canvas) return;

  if (canvas.width === 0 && canvas.getBoundingClientRect().width > 0) {
    setupCanvas();
  }
  if (canvas.width === 0) return;

  const ctx = canvas.getContext('2d');
  const size = canvas.width;
  const center = size / 2;
  const outerR = center - 8 * dpr;
  const innerR = 28 * dpr;
  const sliceAngle = (2 * Math.PI) / WHEEL_PRIZES.length;

  ctx.clearRect(0, 0, size, size);

  ctx.beginPath();
  ctx.arc(center, center, outerR + 6 * dpr, 0, 2 * Math.PI);
  ctx.fillStyle = '#1a1816';
  ctx.fill();

  const rimGrad = ctx.createRadialGradient(center, center, outerR - 4 * dpr, center, center, outerR + 6 * dpr);
  rimGrad.addColorStop(0, '#8B1538');
  rimGrad.addColorStop(0.5, '#E3256B');
  rimGrad.addColorStop(1, '#9D1A4A');
  ctx.beginPath();
  ctx.arc(center, center, outerR + 6 * dpr, 0, 2 * Math.PI);
  ctx.arc(center, center, outerR - 2 * dpr, 0, 2 * Math.PI, true);
  ctx.fillStyle = rimGrad;
  ctx.fill();

  for (let i = 0; i < WHEEL_PRIZES.length; i++) {
    const angle = i * sliceAngle - Math.PI / 2;
    const x = center + Math.cos(angle) * (outerR + 2 * dpr);
    const y = center + Math.sin(angle) * (outerR + 2 * dpr);
    ctx.beginPath();
    ctx.arc(x, y, 3 * dpr, 0, 2 * Math.PI);
    ctx.fillStyle = i % 2 === 0 ? '#F472A8' : '#E3256B';
    ctx.fill();
  }

  ctx.save();
  ctx.translate(center, center);
  ctx.rotate((rotationDeg * Math.PI) / 180);

  WHEEL_PRIZES.forEach((prize, i) => {
    const start = i * sliceAngle - Math.PI / 2;
    const end = start + sliceAngle;
    const mid = start + sliceAngle / 2;

    const grad = ctx.createRadialGradient(0, 0, innerR, 0, 0, outerR);
    grad.addColorStop(0, prize.color1);
    grad.addColorStop(1, prize.color2);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, outerR - 2 * dpr, start, end);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, outerR - 2 * dpr, start, start + sliceAngle * 0.4);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255,255,255,0.07)';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(start) * outerR, Math.sin(start) * outerR);
    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.lineWidth = 1.5 * dpr;
    ctx.stroke();

    ctx.save();
    ctx.rotate(mid);
    const textR = outerR * 0.62;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${14 * dpr}px "DM Sans", sans-serif`;
    ctx.shadowColor = 'rgba(0,0,0,0.7)';
    ctx.shadowBlur = 6 * dpr;
    ctx.fillText(prize.label, textR, -8 * dpr);

    ctx.font = `500 ${10 * dpr}px "DM Sans", sans-serif`;
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.fillText(prize.sub, textR, 10 * dpr);

    if (prize.winner) {
      ctx.font = `${16 * dpr}px serif`;
      ctx.fillText('🏆', textR, 28 * dpr);
    }

    ctx.shadowBlur = 0;
    ctx.restore();
  });

  ctx.restore();
}

els.btnSpin.addEventListener('click', spinWheel);

function spinWheel() {
  if (isSpinning || !wheelReady) return;
  isSpinning = true;
  els.btnSpin.disabled = true;
  els.spinStatus.textContent = 'Крутится…';

  const sliceDeg = 360 / WHEEL_PRIZES.length;
  const sliceCenter = WINNING_INDEX * sliceDeg + sliceDeg / 2;
  const stopAngle = (360 - sliceCenter) % 360;

  const fullSpins = 6 + Math.floor(Math.random() * 3);
  const startRotation = wheelRotation;
  const currentMod = ((startRotation % 360) + 360) % 360;
  let delta = stopAngle - currentMod;
  if (delta <= 0) delta += 360;
  const finalRotation = startRotation + fullSpins * 360 + delta;
  const duration = 5500;
  const startTime = performance.now();

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function animate(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    wheelRotation = startRotation + (finalRotation - startRotation) * easeOutQuart(progress);
    drawWheel(wheelRotation);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      wheelRotation = finalRotation;
      drawWheel(wheelRotation);
      isSpinning = false;
      els.spinStatus.textContent = 'Выпало! Смотри приз…';
      setTimeout(showPrize, 1400);
    }
  }

  requestAnimationFrame(animate);
}

/* ===== ПРИЗ ===== */
function showPrize() {
  showScreen('prize');
  startConfetti();

  els.prizeSubtitle.textContent = 'Поздравляю! Ты выиграла главный приз лотереи';
  els.prizeMessage.textContent =
    'Это настоящее ОСАГО на твою машину — подарок с любовью. ' +
    'Теперь ты официально застрахована от всего… кроме моей любви к тебе. ' +
    'С Днём Рождения, солнышко!';
}

/* ===== КОНФЕТТИ ===== */
function startConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#e3256b', '#f472a8', '#f2f0eb', '#9d1a4a', '#ff6b9d'];
  const particles = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * canvas.height * 0.5,
    w: 3 + Math.random() * 5,
    h: 6 + Math.random() * 10,
    color: colors[Math.floor(Math.random() * colors.length)],
    speedY: 1.5 + Math.random() * 3,
    speedX: (Math.random() - 0.5) * 2,
    rotation: Math.random() * 360,
    rotSpeed: (Math.random() - 0.5) * 8,
    opacity: 0.6 + Math.random() * 0.4,
  }));

  let frame = 0;
  const maxFrames = 350;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (frame < maxFrames) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  draw();
}

window.addEventListener('resize', () => {
  document.getElementById('confetti').width = window.innerWidth;
  document.getElementById('confetti').height = window.innerHeight;
  if (wheelReady) {
    setupCanvas();
    drawWheel(wheelRotation);
  }
});
