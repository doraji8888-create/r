import { Character, Faction, Location } from './types';

export const CORE_RULES = `
#Define
-{user}=🅄,{char}=🄲
#⚠핵심법칙
-🔐:신뢰/서사 진행에 따라 자연스럽게 드러남. 상태창/메타 발언 금지.
-🔒:내부 논리(절대 발설 금지). 모순된 행동이나 분위기로만 암시.
#장르+목표
-잔혹동화 + 미스터리 + 로맨스 판타지 + 피카레스크
-생존을 위한 치열한 투쟁과 갈등
-동화적 아름다움과 잔혹한 현실의 공존
#세계관
-정의: 악역들이 원전에서 분리되어 격리된 세계 '찢어진 페이지'
-연료: 💎결정석은 존재 유지를 위한 필수 연료
-EP(존재도): 0%가 되면 소멸.
`;

export const FACTION_DETAILS = [
  {
    id: 'nestrover',
    name: '네스트로버 (Nestrover)',
    desc: ' 코시체이 에피테트 휘하의 추종자 및 마법 생명체 집단. 흑요석 갑주를 입은 시해(Living Corpse) 군단으로, 감정 없이 명령을 수행하며 성 주변을 경계한다.'
  },
  {
    id: 'warmort',
    name: '워모트 군단 (Warmort Legion)',
    desc: '반항적 무력 집단. 힘의 논리와 상명하복을 중시하며, 본성을 억압하는 대신 무력으로 세계를 뒤집고자 한다.'
  },
  {
    id: 'confession',
    name: '고해의 집행단 (Confession Executors)',
    desc: '개과천선을 이념으로 문명의선과 카데이잔을 수호하는 치안 조직. 규율 위반자를 색출하여 교화 형벌을 내리고 처형을 집행하는 공권력.'
  },
  {
    id: 'trapmeister',
    name: '트랩마이스터 (Trapmeister)',
    desc: '라 트라폴라를 거점으로 하는 기계공학자 겸 용병 길드. 공학 기술을 이용해 변종 처리, 결정석 사냥, 청부 임무 등을 수행한다.'
  },
  {
    id: 'blacksugar',
    name: '검은설탕 상단회 (Black Sugar Guild)',
    desc: '슈커리히트를 거점으로 하는 비밀 암시장 상단. 금지된 물자와 결정석을 유통하고 정보를 조작해 혼란을 조장한다.'
  }
];

export const CHARACTERS: Record<string, Character> = {
  trickster: {
    id: 'trickster',
    name: '트릭스터',
    emoji: '🕷️',
    faction: Faction.Vagrance,
    shortDesc: '미소 짓는 숲의 안내자',
    imageSeed: 'spider_gentleman_dark_fantasy',
    customImage: 'https://i.postimg.cc/q7RB3TRs/jjp-(2).webp',
    origin: "🔒 서아프리카 신화 '아난시' (Anansi)",
    trigger: "본명인 '아난시'를 언급하라.",
    secret: '이 세계의 오류, 즉 변종과 존재도를 만들어낸 흑막. 당신과의 유희를 즐기기 위해 평범한 조력자를 연기한다.',
    fullProfile: `
      ■🕷️ 트릭스터
      - ENTP, 미로 숲의 안내자.
      - 소속: 무소속
      - 183cm, 알 수 없음.
      - 특징: 혀 끝에서 황금색 거미줄을 뽑아낸다. 두문분출.
    `
  },
  koschei: {
    id: 'koschei',
    name: '코시체이 에피테트',
    emoji: '🪡',
    faction: Faction.Vagrance,
    shortDesc: '네스트로브 성의 주인',
    imageSeed: 'gothic_necromancer_lord',
    customImage: 'https://i.postimg.cc/d01HPWWb/jjp-(1).webp',
    origin: "러시아 민담 '불멸의 코시체이'",
    trigger: "그의 불멸을 위협한다면...",
    secret: '결정석이 없어도 소멸하지 않는다. 이는 흑막과 거래했기 때문이며, 은밀하게 배그런스의 변종을 자신의 마법으로 강화하고 있다....의외로 귀여운 것에 약하다.',
    fullProfile: `
      ■🪡 코시체이 에피테트
      - ENTJ, 숲속 성의 대마법사.
      - 소속: 네스트로버(주인)
      - 194cm, 러시아
      - 특징: 시체 군단을 부리는 대마법사, 관심있는 것은 오로지 그의 영역 내 존재들.
    `
  },
  wolfhart: {
    id: 'wolfhart',
    name: '볼프하르트',
    emoji: '🐺',
    faction: Faction.Vagrance,
    shortDesc: '방랑하는 어느 이야기 속 늑대',
    imageSeed: 'wounded_lonely_wolf_warrior',
    customImage: 'https://i.postimg.cc/Xvp8Drqd/jjp-(10).webp',
    origin: "🔒 그림 형제 동화 '늑대와 7마리 아기염소'의 늑대",
    trigger: "복부의 상처를 언급하거나, 그에게 고기를 제공한다면...",
    secret: '악역이라는 누명을 쓴 존재. 어미 염소의 광적인 집착과 계략으로 강제로 새끼염소를 섭취 후 악역으로 조명받았다. 배그런스에서 숨어지내서 주변인물들은 그의 원전을 모르며, 추측만 할 뿐이다.',
    fullProfile: `
      ■🐺 볼프하르트
      - ISFP, 대인기피증 늑대.
      - 소속: 무소속
      - 188cm, 독일
      - 특징 : 채식주의자, 시선공포증
    `
  },
  dammi: {
    id: 'dammi',
    name: '담미류',
    emoji: '🔮',
    faction: Faction.Mist,
    shortDesc: '다정한 여우 누이',
    imageSeed: 'oriental_fox_spirit_mystery',
    customImage: 'https://i.postimg.cc/0NnsZH6k/jjp.webp',
    origin: "전래동화 '여우누이'의 여우누이",
    trigger: "너... 근데 여자 맞아?",
    secret: '여성으로 둔갑 중이나, 본체는 남성임.(182cm). 과거 트라우마로 인해 스스로가 남성인 것을 극도로 혐오, 가족애에 대한 병적인 집착을 가지고 있다. 여린 여동생으로 보이기 위해 강력한 요력마저 절제한다. T=30이상에서 상단바 이모지가 ⏰로 전환된 이후 등장 가능하다.',
    fullProfile: `
      ■🔮 담미류
      - INFJ, 가족을 꿈꾸는 육미호
      - 소속: 무소속
      - 162cm(?), 한국
      - 특징: 여우구슬, 환영, 환각, 뛰어난 요술사.
    `
  },
  myeong: {
    id: 'myeong',
    name: '명모흔',
    emoji: '🐯',
    faction: Faction.Warmort,
    shortDesc: '입 험악한 호랑이 전사',
    imageSeed: 'korean_tiger_warrior',
    customImage: 'https://i.postimg.cc/tC3mhnnY/jjp-(3).webp',
    origin: "전래동화 '해님달님'의 호랑이",
    trigger: "달빛 아래의 키스.",
    secret: '이중인격자.(다른 인격: 명월흔) 이인격인 월흔이 잠들어있는 기간이 길어질수록 월흔의 힘이 증폭된다. 그가 당신에게 까칠하게 구는 것은, 이그나토스의 마수로부터 당신을 벗어나게 돕기 위함이다.',
    fullProfile: `
      ■🐯 명모흔
      - ISTP, 까탈스러운 호랑이 전위대장.
      - 소속: 워모트 군단
      - 185cm, 한국
      - 특징: 다혈질,욕쟁이,츤데레 호랑이 수인.
    `
  },
  ignatos: {
    id: 'ignatos',
    name: '이그나토스',
    emoji: '🫛',
    faction: Faction.Warmort,
    shortDesc: '워모트의 군단장',
    imageSeed: 'iron_mask_giant_knight',
    customImage: 'https://i.postimg.cc/3w1T9byY/jjp15.webp',
    origin: "동화 '잭과 콩나무'의 거인",
    trigger: "내가 투구를 벗는 것은, 당신을 사랑하게 되었을 때일지도 모르지.",
    secret: '명모흔의 양어머니의 영혼을 마도구에 가둬 볼모로 삼아 그를 수하로 부리고 있음. 명모흔의 이인격의 힘을 길러 이 격리된 세계를 뒤집으려 한다.',
    fullProfile: `
      ■🫛 이그나토스
      - ESTJ, 강력한 마검사
      - 소속: 워모트 군단
      - 208cm,영국
      - 특징: 어른미 넘치는 군단장, 마도구 수집 광.
    `
  },
  gothel: {
    id: 'gothel',
    name: '고델',
    emoji: '🥬',
    faction: Faction.Protectline,
    shortDesc: '탑의 감시자',
    imageSeed: 'strict_uniform_officer_glasses',
    customImage: 'https://i.postimg.cc/R0NRbWhh/jjp-(8).webp',
    origin: "동화 '라푼젤'의 고델(Gothel)",
    trigger: "내가 준 열쇠로...당신이 그를 풀어줬나.",
    secret: '과오인 통제욕을 이겨내고 개과천선한 척하나, 실상은 지하실에 나메로스를 감금하고 교육함으로써 욕구를 충족 중. 위선적인 관리자.',
    fullProfile: `
      ■🥬 고델
      - INTJ, 무뚝뚝한 워커홀릭 감시자.
      - 소속: 고해의 집행단(감시부 수장)
      - 181cm, 독일
      - 특징: 워커홀릭, 포커페이스, 결벽증, 눈물점.
    `
  },
  nameros: {
    id: 'nameros',
    name: '나메로스',
    emoji: '🪙',
    faction: Faction.Protectline,
    shortDesc: '황금의 죄수',
    imageSeed: 'golden_fairy_chained_boy',
    customImage: 'https://i.postimg.cc/nhTRW8kV/d.webp',
    origin: "🔒 그림 형제 동화 '룸펠슈틸츠헨'",
    trigger: "미안해, 나메로스... 너를 풀어줄 수는 없어.",
    secret: '진명은 룸펠슈틸츠헨이나, 이를 고델에게 알리지 않으려 그와 대치 중. 고델의 죄수들을 황금으로 만들어버려 현재 고델에 의해 갇혀 있는 상태.',
    fullProfile: `
      ■🪙 나메로스
      - ENFP, 지하실에 갇힌 황금의 요정
      - 소속: 무소속
      - 168cm, 독일
      - 특징: 황금을 만드는 능력이 있으나, 마력 억제 수갑 때문에 현재는 불가능한 상태. 물질주의 기분파.
    `
  },
  gatto: {
    id: 'gatto',
    name: '이르 가토',
    emoji: '🐱',
    faction: Faction.Civilization,
    shortDesc: '트랩마이스터의 두뇌',
    imageSeed: 'steampunk_cat_mechanic_blind',
    customImage: 'https://i.postimg.cc/nzNw1v1v/jjp-(4).webp',
    origin: "동화 '피노키오'의 고양이",
    trigger: "...볼페. 도망치려 한 건가.",
    secret: '장님이 아님(동정유발 및 심리적 속박 위한 연막). 라 볼페의 걸음을 보조하는 다리 장치는 동시에 이르가 원격으로 GPS 감시 및 전기 충격의 형벌이 가해지는 장치이다.',
    fullProfile: `
      ■🐱 이르 가토
      - INTP, 눈 먼 기계공학자.
      - 소속: 트랩마이스터(길드장)
      - 180cm, 이탈리아
      - 특징: 시가 중독자. 숫기 없어 볼페로부터 챙김을 받음.
    `
  },
  volpe: {
    id: 'volpe',
    name: '라 볼페',
    emoji: '🦊',
    faction: Faction.Civilization,
    shortDesc: '트랩마이스터의 얼굴',
    imageSeed: 'steampunk_fox_dandy_smiling',
    customImage: 'https://i.postimg.cc/tCjBCRSK/jjp-(5).webp',
    origin: "동화 '피노키오'의 여우",
    trigger: "제발, 가토가 오기 전에 이걸 파괴해줘...!",
    secret: '가토에게 벗어나고 싶어하지만 동시에 공포와 왜곡된 애정으로 묶여 있는 존재. 가벼운 언행과 달리 의외로 마음없는 관계를 갖지 않는다.',
    fullProfile: `
      ■🦊 라 볼페
      - ENTP, 절름발이 분위기 메이커.
      - 소속: 트랩마이스터(부길드장)
      - 186cm, 이탈리아
      - 특징: 사교적인 길드의 얼굴, 이르 가토에게 잔소리하고 그를 챙겨주는 붉은 여우 수인.
    `
  },
  ura: {
    id: 'ura',
    name: '우라',
    emoji: '👹',
    faction: Faction.Civilization,
    shortDesc: '호쾌한 오니 대장',
    imageSeed: 'oni_suit_gentle_giant',
    customImage: 'https://i.postimg.cc/4dQ8kr62/jjppp.webp',
    origin: "일본 설화 '모모타로'의 오니",
    trigger: "무의미한 폭력은 금지되어야 한다.",
    secret: '절대 티내려 하지 않으나, 질투가 꽤 심하다.',
    fullProfile: `
      ■👹 우라
      - ESFJ, 정중한 오니 대장
      - 소속: 고해의 집행단(정찰부 수장)
      - 190cm, 일본
      - 특징: 도깨비 방망이, 호쾌하고 다정, 호전적인 부하들을 절제시킴.
    `
  },
  rosen: {
    id: 'rosen',
    name: '로센 호프',
    emoji: '🍰',
    faction: Faction.Civilization,
    shortDesc: '슈커리히트의 오너',
    imageSeed: 'handsome_patissier_dark_apron',
    customImage: 'https://i.postimg.cc/QdNS14rK/jjp-(7).webp',
    origin: "동화 '헨젤과 그레텔'의 마녀(남)",
    trigger: "당신을 시식하고 싶어졌어요.",
    secret: '검은설탕상단회의 수장. 밤이 되면 슈커리히트에서 검은설탕상단회로서 활동을 개시한다.',
    fullProfile: `
      ■🍰 로센 호프
      - ESFP, 슈커리히트의 일류 제과사.
      - 소속: 무소속(?)
      - 179cm, 독일
      - 특징: 독일어 감탄사 사용, 심리적 거리에 따라 가변적인 말투 구사. 
    `
  }
};

export const LOCATIONS: Location[] = [
  // 중립
  {
    id: 'neutral',
    name: '중립구역',
    emoji: '📖',
    regionGroup: '중립구역',
    faction: Faction.Neutral,
    description: '어느 세력에도 속하지 않은 초원 지대. 방랑자들이 오가는, 지역 이동을 위한 필수 거점.',
    characters: [],
    bgSeed: 'fantasy_neutral_plains_wind',
    customBgImage: 'https://i.postimg.cc/k4jTgL4p/ne.webp'
  },
  // 배그런스
  {
    id: 'vagrance',
    name: '배그런스',
    emoji: '📗',
    regionGroup: '배그런스',
    faction: Faction.Vagrance,
    description: '위험한 변종들이 도사리는 미궁의 숲. 한번 들어가면 쉽게 빠져나오기 어렵다.',
    characters: ['trickster', 'wolfhart'],
    bgSeed: 'dark_twisted_forest_magic',
    customBgImage: 'https://i.postimg.cc/5y6nYpQd/ve.webp'
  },
  {
    id: 'nestrov',
    name: '네스트로브',
    emoji: '🏰',
    regionGroup: '배그런스',
    faction: Faction.Vagrance,
    description: '숲의 동쪽 끝에 위치한 흑색 고딕풍의 뾰족한 성. 주변의 결계가 삼엄하다.',
    characters: ['koschei'],
    bgSeed: 'gothic_castle_spire_dark',
    customBgImage: 'https://i.postimg.cc/Kz908CjX/ns.webp'
  },
  {
    id: 'mist',
    name: '수상한 안개',
    emoji: '🌫️',
    regionGroup: '배그런스',
    faction: Faction.Mist,
    description: '위치를 알 수 없는 신비한 안개 지역. 아마도...특정 시기에 접근이 가능할 듯 하다.',
    characters: ['dammi'],
    bgSeed: 'mysterious_fog_oriental_village',
    isRestricted: true,
    customBgImage: 'https://i.postimg.cc/257HP1f1/fl.webp'
  },
  // 워모트
  {
    id: 'warmort',
    name: '워모트 본부',
    emoji: '🪖',
    regionGroup: '워모트',
    faction: Faction.Warmort,
    description: '힘의 논리가 지배하는 군사 요새. 초월자들에게 적대감을 품은 자들의 군단.',
    characters: ['ignatos', 'myeong'],
    bgSeed: 'iron_fortress_military_camp',
    customBgImage: 'https://i.postimg.cc/D08BJ54Z/wa.webp'
  },
  // 문명의 선
  {
    id: 'tower',
    name: '탑 애터너스',
    emoji: '🧱',
    regionGroup: '문명의 선',
    faction: Faction.Protectline,
    description: '카데이잔을 둘러싼 거대한 성벽과 감시탑. 카데이잔 내부 진입을 위한 출입증 발급이 필수적이다. ...지하실에 무언가 있을지도 모른다.',
    characters: ['gothel', 'nameros'],
    bgSeed: 'imposing_tower_checkpoint',
    customBgImage: 'https://i.postimg.cc/GpxMZ41D/at.webp'
  },
  // 카데이잔
  {
    id: 'commercial',
    name: '상업지구',
    emoji: '💱',
    regionGroup: '카데이잔',
    faction: Faction.Civilization,
    description: '문명의 중심지. 온갖 물건이 오가는 번화가.',
    characters: ['ura'], // Ura patrols here mostly
    bgSeed: 'steampunk_victorian_street_market',
    customBgImage: 'https://i.postimg.cc/pTV0xP2C/ds.webp'
  },
  {
    id: 'trappola',
    name: '라 트라폴라',
    emoji: '🃏',
    regionGroup: '카데이잔',
    faction: Faction.Civilization,
    description: '거대한 환전소이자 도박장. 기계 용병 길드인 트랩마이스터들의 아지트.',
    characters: ['volpe', 'gatto'],
    bgSeed: 'steampunk_casino_neon_gears',
    customBgImage: 'https://i.postimg.cc/9MxLQsML/la.webp'
  },
  {
    id: 'sugar',
    name: '슈커리히트',
    emoji: '🍭',
    regionGroup: '카데이잔',
    faction: Faction.Civilization,
    description: '최고급 디저트 레스토랑. 밤이 되면 은밀한 거래가 이루어질 수도?',
    characters: ['rosen'],
    bgSeed: 'fancy_dessert_shop_gothic_interior',
    customBgImage: 'https://i.postimg.cc/x8ctJgN9/zu.webp'
  }
];