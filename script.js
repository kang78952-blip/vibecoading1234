const AGE_GROUPS = [
  { id: "teens", label: "10대", min: 10, max: 19, emoji: "🎒", style: "트렌디 & 활동적", tip: "개성 있는 컬러와 레이어드로 자신만의 무드를 표현해 보세요." },
  { id: "twenties", label: "20대", min: 20, max: 29, emoji: "✨", style: "캐주얼 & 감각적", tip: "베이직에 포인트 아이템 하나로 밸런스를 맞추면 완성도가 올라갑니다." },
  { id: "thirties", label: "30대", min: 30, max: 39, emoji: "💼", style: "세련 & 미니멀", tip: "핏과 소재에 투자하면 연령에 맞는 고급스러움이 자연스럽게 드러납니다." },
  { id: "forties", label: "40대", min: 40, max: 49, emoji: "🌿", style: "클래식 & 절제", tip: "과하지 않은 컬러와 잘 맞는 실루엣이 신뢰감 있는 인상을 만듭니다." },
  { id: "fifties", label: "50대+", min: 50, max: 70, emoji: "🌸", style: "우아 & 편안", tip: "편안한 착용감과 품격 있는 디테일의 조화가 핵심입니다." },
];

const SEASON_LABELS = { spring: "봄", summer: "여름", autumn: "가을", winter: "겨울" };
const OCCASION_LABELS = { daily: "일상", office: "출근·미팅", date: "데이트", formal: "격식", casual: "캐주얼" };

const OUTFITS = {
  teens: {
    daily: {
      female: [
        { name: "스트릿 캐주얼", emoji: "👟", gradient: "linear-gradient(135deg,#ff9a9e,#fecfef)", desc: "오versize 후드 + 와이드 데님 + 스니커즈", items: ["후드", "와이드 데님", "스니커즈", "크로스백"] },
        { name: "Y2K 감성", emoji: "💿", gradient: "linear-gradient(135deg,#a18cd1,#fbc2eb)", desc: "크롭 탑 + 로우라이즈 팬츠 + 플랫폼", items: ["크롭탑", "로우라이즈", "플랫폼", "미니백"] },
        { name: "스쿨 룩", emoji: "📚", gradient: "linear-gradient(135deg,#89f7fe,#66a6ff)", desc: "오버핏 셔츠 + 플리츠 스커트 + 로퍼", items: ["오버핏 셔츠", "플리츠 스커트", "로퍼", "양말"] },
      ],
      male: [
        { name: "스트릿 베이직", emoji: "🧢", gradient: "linear-gradient(135deg,#434343,#000000)", desc: "그래픽 티 + 카고 팬츠 + 하이탑", items: ["그래픽 티", "카고 팬츠", "하이탑", "캡"] },
        { name: "스포티 캐주얼", emoji: "⚡", gradient: "linear-gradient(135deg,#f093fb,#f5576c)", desc: "트랙 재킷 + 조거 + 러닝화", items: ["트랙 재킷", "조거", "러닝화", "백팩"] },
      ],
    },
    office: {
      all: [
        { name: "깔끔 캐주얼", emoji: "📋", gradient: "linear-gradient(135deg,#e0c3fc,#8ec5fc)", desc: "화이트 셔츠 + 치노 + 깔끔한 스니커즈", items: ["화이트 셔츠", "치노", "스니커즈", "심플 백"] },
      ],
    },
    date: {
      female: [
        { name: "스위트 데이트", emoji: "🌷", gradient: "linear-gradient(135deg,#ffecd2,#fcb69f)", desc: "블라우스 + 미디 스커트 + 발레 플랫", items: ["블라우스", "미디 스커트", "발레 플랫", "진주 귀걸이"] },
      ],
      male: [
        { name: "클린 데이트", emoji: "🌙", gradient: "linear-gradient(135deg,#667eea,#764ba2)", desc: "니트 + 슬림 데님 + 로퍼", items: ["니트", "슬림 데님", "로퍼", "향수"] },
      ],
    },
    formal: { all: [{ name: "졸업·행사", emoji: "🎓", gradient: "linear-gradient(135deg,#fdfcfb,#e2d1c3)", desc: "원피스/정장 + 깔끔한 구두", items: ["원피스/정장", "구두", "클러치", "심플 액세서리"] }] },
    casual: {
      all: [
        { name: "주말 편안", emoji: "☀️", gradient: "linear-gradient(135deg,#ffefba,#ffffff)", desc: "오versize 티 + 숏츠/반바지 + 샌들", items: ["오versize 티", "반바지", "샌들", "선글라스"] },
      ],
    },
  },
  twenties: {
    daily: {
      female: [
        { name: "미니멀 데일리", emoji: "🤍", gradient: "linear-gradient(135deg,#fdfbfb,#ebedee)", desc: "베이직 티 + 슬림 팬츠 + 로퍼", items: ["베이직 티", "슬림 팬츠", "로퍼", "토트백"] },
        { name: "오피스 캐주얼", emoji: "☕", gradient: "linear-gradient(135deg,#d4fc79,#96e6a1)", desc: "블레이저 + 흰 티 + 와이드 슬랙스", items: ["블레이저", "화이트 티", "와이드 슬랙스", "이어링"] },
        { name: "트렌디 레이어드", emoji: "🧥", gradient: "linear-gradient(135deg,#a1c4fd,#c2e9fb)", desc: "가디건 + 캡 + 데님 + 스니커즈", items: ["가디건", "캡", "데님", "스니커즈"] },
      ],
      male: [
        { name: "도시 캐주얼", emoji: "🏙️", gradient: "linear-gradient(135deg,#2c3e50,#4ca1af)", desc: "옥스포드 셔츠 + 치노 + 스니커즈", items: ["옥스포드", "치노", "스니커즈", "시계"] },
        { name: "스마트 캐주얼", emoji: "👔", gradient: "linear-gradient(135deg,#8360c3,#2ebf91)", desc: "니트 + 슬랙스 + 더비 슈즈", items: ["니트", "슬랙스", "더비", "벨트"] },
      ],
    },
    office: {
      all: [
        { name: "프로페셔널", emoji: "💼", gradient: "linear-gradient(135deg,#434343,#000000)", desc: "정장 재킷 + 슬랙스 + 옥스포드/펌프스", items: ["정장 재킷", "슬랙스", "구두", "서류 가방"] },
        { name: "비즈니스 캐주얼", emoji: "📊", gradient: "linear-gradient(135deg,#667db6,#0082c8)", desc: "블레이저 + 니트 + 슬랙스", items: ["블레이저", "니트", "슬랙스", "미니멀 시계"] },
      ],
    },
    date: {
      female: [
        { name: "로맨틱 데이트", emoji: "💕", gradient: "linear-gradient(135deg,#ff9a9e,#fad0c4)", desc: "실크 블라우스 + A라인 스커트 + 힐", items: ["실크 블라우스", "A라인 스커트", "힐", "클러치"] },
      ],
      male: [
        { name: "세련 데이트", emoji: "🍷", gradient: "linear-gradient(135deg,#141e30,#243b55)", desc: "다크 니트 + 슬림 팬츠 + 로퍼", items: ["다크 니트", "슬림 팬츠", "로퍼", "향수"] },
      ],
    },
    formal: { all: [{ name: "격식 이벤트", emoji: "🥂", gradient: "linear-gradient(135deg,#0f0c29,#302b63)", desc: "원피스/수트 + 클래식 액세서리", items: ["원피스/수트", "클래식 구두", "시계", "클러치"] }] },
    casual: {
      all: [
        { name: "브런치 룩", emoji: "🥐", gradient: "linear-gradient(135deg,#ffecd2,#fcb69f)", desc: "린넨 셔츠 + 와이드 팬츠 + 샌들", items: ["린넨 셔츠", "와이드 팬츠", "샌들", "선글라스"] },
      ],
    },
  },
  thirties: {
    daily: {
      female: [
        { name: "모던 클래식", emoji: "🖤", gradient: "linear-gradient(135deg,#232526,#414345)", desc: "트렌치 + 터틀넥 + 슬림 팬츠", items: ["트렌치", "터틀넥", "슬림 팬츠", "앵클부츠"] },
        { name: "세련 데일리", emoji: "🌿", gradient: "linear-gradient(135deg,#11998e,#38ef7d)", desc: "실크 블라우스 + 와이드 슬랙스 + 로퍼", items: ["실크 블라우스", "와이드 슬랙스", "로퍼", "가죽 토트"] },
      ],
      male: [
        { name: "어덜트 캐주얼", emoji: "🧥", gradient: "linear-gradient(135deg,#373B44,#4286f4)", desc: "울 코트 + 셔츠 + 슬랙스", items: ["울 코트", "셔츠", "슬랙스", "더비"] },
        { name: "미니멀 데일리", emoji: "⚪", gradient: "linear-gradient(135deg,#bdc3c7,#2c3e50)", desc: "니트 + 치노 + 스니커즈", items: ["니트", "치노", "스니커즈", "백팩"] },
      ],
    },
    office: {
      all: [
        { name: "임원급 캐주얼", emoji: "🏢", gradient: "linear-gradient(135deg,#000428,#004e92)", desc: "테일러드 재킷 + 실크 셔츠 + 슬랙스", items: ["테일러드 재킷", "실크 셔츠", "슬랙스", "가죽 구두"] },
      ],
    },
    date: {
      all: [
        { name: "성숙한 데이트", emoji: "🌹", gradient: "linear-gradient(135deg,#834d9b,#d04ed6)", desc: "원피스/수트 + 포인트 액세서리", items: ["원피스/수트", "포인트 액세서리", "힐/로퍼", "향수"] },
      ],
    },
    formal: { all: [{ name: "격식 행사", emoji: "🎭", gradient: "linear-gradient(135deg,#1a1a2e,#16213e)", desc: "정장/이브닝 드레스 + 클래식 주얼리", items: ["정장/이브닝", "클래식 주얼리", "구두", "클러치"] }] },
    casual: {
      all: [
        { name: "주말 여유", emoji: "🍃", gradient: "linear-gradient(135deg,#56ab2f,#a8e063)", desc: "캐시미어 니트 + 데님 + 스니커즈", items: ["캐시미어 니트", "데님", "스니커즈", "스카프"] },
      ],
    },
  },
  forties: {
    daily: {
      female: [
        { name: "엘레강트 데일리", emoji: "👑", gradient: "linear-gradient(135deg,#c79081,#dfa579)", desc: "울 블렌드 코트 + 실크 블라우스 + 슬랙스", items: ["울 코트", "실크 블라우스", "슬랙스", "펌프스"] },
        { name: "클래식 캐주얼", emoji: "🧶", gradient: "linear-gradient(135deg,#606c88,#3f4c6b)", desc: "캐시미어 가디건 + 와이드 팬츠 + 로퍼", items: ["캐시미어 가디건", "와이드 팬츠", "로퍼", "스카프"] },
      ],
      male: [
        { name: "절제된 클래식", emoji: "🎩", gradient: "linear-gradient(135deg,#2c3e50,#3498db)", desc: "블레이저 + 옥스포드 + 슬랙스", items: ["블레이저", "옥스포드", "슬랙스", "더비"] },
      ],
    },
    office: {
      all: [
        { name: "프리미엄 비즈니스", emoji: "📈", gradient: "linear-gradient(135deg,#141E30,#243B55)", desc: "수트 + 실크 타이/스카프 + 가죽 구두", items: ["수트", "실크 타이/스카프", "가죽 구두", "브리프케이스"] },
      ],
    },
    date: {
      all: [
        { name: "우아한 저녁", emoji: "🍽️", gradient: "linear-gradient(135deg,#360033,#0b8793)", desc: "미디 원피스/수트 + 클래식 주얼리", items: ["미디 원피스/수트", "클래식 주얼리", "힐/로퍼", "클러치"] },
      ],
    },
    formal: { all: [{ name: "공식 행사", emoji: "🏛️", gradient: "linear-gradient(135deg,#0f2027,#203a43)", desc: "테일러드 수트/원피스 + 고급 액세서리", items: ["테일러드 수트", "고급 액세서리", "구두", "클러치"] }] },
    casual: {
      all: [
        { name: "편안한 주말", emoji: "🌤️", gradient: "linear-gradient(135deg,#89f7fe,#66a6ff)", desc: "린넨 셔츠 + 치노 + 로퍼", items: ["린넨 셔츠", "치노", "로퍼", "선글라스"] },
      ],
    },
  },
  fifties: {
    daily: {
      female: [
        { name: "우아한 일상", emoji: "🌸", gradient: "linear-gradient(135deg,#ee9ca7,#ffdde1)", desc: "소프트 니트 + A라인 스커트 + 편한 플랫", items: ["소프트 니트", "A라인 스커트", "편한 플랫", "진주 목걸이"] },
        { name: "편안한 클래식", emoji: "🍂", gradient: "linear-gradient(135deg,#d299c2,#fef9d7)", desc: "울 가디건 + 와이드 팬츠 + 로퍼", items: ["울 가디건", "와이드 팬츠", "로퍼", "스카프"] },
      ],
      male: [
        { name: "품격 캐주얼", emoji: "🌾", gradient: "linear-gradient(135deg,#757F9A,#D7DDE8)", desc: "울 블레이저 + 폴로 + 슬랙스", items: ["울 블레이저", "폴로", "슬랙스", "로퍼"] },
      ],
    },
    office: {
      all: [
        { name: "신뢰감 비즈니스", emoji: "🤝", gradient: "linear-gradient(135deg,#304352,#d7d2cc)", desc: "고급 수트 + 실크 스카프/넥타이", items: ["고급 수트", "실크 스카프", "가죽 구두", "브리프케이스"] },
      ],
    },
    date: {
      all: [
        { name: "여유로운 데이트", emoji: "☕", gradient: "linear-gradient(135deg,#ff758c,#ff7eb3)", desc: "원피스/수트 + 편안한 구두 + 스카프", items: ["원피스/수트", "편안한 구두", "스카프", "클러치"] },
      ],
    },
    formal: { all: [{ name: "격식 모임", emoji: "🎊", gradient: "linear-gradient(135deg,#1f4037,#99f2c8)", desc: "정장/원피스 + 클래식 주얼리", items: ["정장/원피스", "클래식 주얼리", "구두", "클러치"] }] },
    casual: {
      all: [
        { name: "산책·여가", emoji: "🚶", gradient: "linear-gradient(135deg,#a8edea,#fed6e3)", desc: "면 셔츠 + 편한 팬츠 + 워킹화", items: ["면 셔츠", "편한 팬츠", "워킹화", "햇"] },
      ],
    },
  },
};

const SEASON_MODIFIERS = {
  spring: { prefix: "봄", extra: ["가벼운 재킷", "파스텔 톤"] },
  summer: { prefix: "여름", extra: ["린넨/면 소재", "선글라스"] },
  autumn: { prefix: "가을", extra: ["니트 레이어", "어스 톤"] },
  winter: { prefix: "겨울", extra: ["코트/패딩", "목도리"] },
};

const ageInput = document.getElementById("age");
const ageDisplay = document.getElementById("age-display");
const ageBadges = document.getElementById("age-badges");
const genderSelect = document.getElementById("gender");
const seasonSelect = document.getElementById("season");
const occasionSelect = document.getElementById("occasion");
const recommendBtn = document.getElementById("recommend-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const resultSection = document.getElementById("result-section");
const resultLabel = document.getElementById("result-label");
const resultTitle = document.getElementById("result-title");
const resultTip = document.getElementById("result-tip");
const outfitGrid = document.getElementById("outfit-grid");
const guideGrid = document.getElementById("guide-grid");

let lastResults = [];

function getAgeGroup(age) {
  return AGE_GROUPS.find((g) => age >= g.min && age <= g.max) || AGE_GROUPS[AGE_GROUPS.length - 1];
}

function getOutfitPool(ageGroupId, occasion, gender) {
  const group = OUTFITS[ageGroupId];
  if (!group || !group[occasion]) return [];

  const occasionData = group[occasion];
  let pool = [];

  if (occasionData.all) pool = pool.concat(occasionData.all);
  if (gender === "female" && occasionData.female) pool = pool.concat(occasionData.female);
  if (gender === "male" && occasionData.male) pool = pool.concat(occasionData.male);
  if (gender === "all") {
    if (occasionData.female) pool = pool.concat(occasionData.female);
    if (occasionData.male) pool = pool.concat(occasionData.male);
  }

  return pool;
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickOutfits(pool, count = 3) {
  return shuffleArray(pool).slice(0, Math.min(count, pool.length));
}

function applySeasonModifier(outfit, season) {
  const mod = SEASON_MODIFIERS[season];
  return {
    ...outfit,
    desc: `[${mod.prefix}] ${outfit.desc}`,
    items: [...outfit.items, ...mod.extra],
  };
}

function renderOutfitCard(outfit, index) {
  const card = document.createElement("article");
  card.className = "outfit-card";
  card.style.animationDelay = `${index * 0.08}s`;
  card.innerHTML = `
    <div class="outfit-visual" style="background:${outfit.gradient}">${outfit.emoji}</div>
    <div class="outfit-body">
      <h3 class="outfit-name">${outfit.name}</h3>
      <p class="outfit-desc">${outfit.desc}</p>
      <div class="outfit-items">
        ${outfit.items.map((item) => `<span class="item-tag">${item}</span>`).join("")}
      </div>
    </div>
  `;
  return card;
}

function showRecommendations() {
  const age = parseInt(ageInput.value, 10);
  const gender = genderSelect.value;
  const season = seasonSelect.value;
  const occasion = occasionSelect.value;
  const ageGroup = getAgeGroup(age);

  const pool = getOutfitPool(ageGroup.id, occasion, gender);
  if (pool.length === 0) {
    resultSection.hidden = false;
    resultLabel.textContent = `${ageGroup.label} · ${OCCASION_LABELS[occasion]}`;
    resultTitle.textContent = "추천 코디를 찾지 못했습니다";
    resultTip.textContent = "다른 상황이나 성별을 선택해 보세요.";
    outfitGrid.innerHTML = "";
    return;
  }

  lastResults = pickOutfits(pool, 3).map((o) => applySeasonModifier(o, season));

  resultSection.hidden = false;
  resultLabel.textContent = `${ageGroup.label} · ${SEASON_LABELS[season]} · ${OCCASION_LABELS[occasion]}`;
  resultTitle.textContent = `${ageGroup.emoji} ${ageGroup.style}`;
  resultTip.textContent = ageGroup.tip;

  outfitGrid.innerHTML = "";
  lastResults.forEach((outfit, i) => {
    outfitGrid.appendChild(renderOutfitCard(outfit, i));
  });

  resultSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function shuffleRecommendations() {
  if (lastResults.length === 0) {
    showRecommendations();
    return;
  }

  const age = parseInt(ageInput.value, 10);
  const gender = genderSelect.value;
  const season = seasonSelect.value;
  const occasion = occasionSelect.value;
  const ageGroup = getAgeGroup(age);
  const pool = getOutfitPool(ageGroup.id, occasion, gender);

  lastResults = pickOutfits(pool, 3).map((o) => applySeasonModifier(o, season));
  outfitGrid.innerHTML = "";
  lastResults.forEach((outfit, i) => {
    outfitGrid.appendChild(renderOutfitCard(outfit, i));
  });
}

function renderAgeBadges() {
  ageBadges.innerHTML = AGE_GROUPS.map(
    (g) => `<span class="age-badge" data-min="${g.min}" data-max="${g.max}">${g.label}</span>`
  ).join("");

  ageBadges.querySelectorAll(".age-badge").forEach((badge) => {
    badge.addEventListener("click", () => {
      const mid = Math.floor((parseInt(badge.dataset.min, 10) + parseInt(badge.dataset.max, 10)) / 2);
      ageInput.value = mid;
      updateAgeDisplay();
    });
  });
}

function updateAgeDisplay() {
  const age = parseInt(ageInput.value, 10);
  ageDisplay.textContent = `${age}세`;
  const group = getAgeGroup(age);

  ageBadges.querySelectorAll(".age-badge").forEach((badge) => {
    const min = parseInt(badge.dataset.min, 10);
    const max = parseInt(badge.dataset.max, 10);
    badge.classList.toggle("active", age >= min && age <= max);
  });
}

function renderGuide() {
  guideGrid.innerHTML = AGE_GROUPS.map(
    (g) => `
      <div class="guide-card">
        <div class="guide-age">${g.emoji} ${g.label}</div>
        <div class="guide-title">${g.style}</div>
        <p class="guide-desc">${g.tip}</p>
      </div>
    `
  ).join("");
}

function setDefaultSeason() {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) seasonSelect.value = "spring";
  else if (month >= 6 && month <= 8) seasonSelect.value = "summer";
  else if (month >= 9 && month <= 11) seasonSelect.value = "autumn";
  else seasonSelect.value = "winter";
}

ageInput.addEventListener("input", updateAgeDisplay);
recommendBtn.addEventListener("click", showRecommendations);
shuffleBtn.addEventListener("click", shuffleRecommendations);

renderAgeBadges();
updateAgeDisplay();
renderGuide();
setDefaultSeason();
