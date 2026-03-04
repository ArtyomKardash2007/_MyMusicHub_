/* ============================================================
   TRANSLATIONS
   ============================================================ */
var TRANSLATIONS = {
  ru: {
    nav_home:'Главная',nav_tracks:'Все треки',nav_artists:'Исполнители',nav_favorites:'Избранное',
    hero_welcome:'Добро пожаловать',hero_title:'Слушай. Открывай.<br>Чувствуй музыку.',
    hero_desc:'MyMusicHub — платформа, где собраны лучшие треки и исполнители разных жанров. Находи новое, сохраняй любимое.',
    hero_btn:'Смотреть треки',popular_tracks:'Популярные треки',new_releases:'Новые релизы',
    featured_artists:'Рекомендуемые исполнители',all_tracks:'Все треки',
    search_placeholder:'🔍  Поиск по названию...',artists_title:'Исполнители',
    favorites_title:'Избранное',favorites_hint:'Нажмите ♡ на карточке трека, чтобы добавить его сюда.',
    no_results:'Ничего не найдено 😕',no_favorites:'Ваше избранное пока пусто.',
    footer_desc:'Музыкальная платформа нового поколения',all_genres:'Все жанры',
    listen:'Слушать трек',duration:'Длительность',year:'Год',genre:'Жанр',
    artist_tracks_label:'Треки: ',fav_add:'В избранное',fav_remove:'Убрать из избранного',
    playlist_title:'Плейлист из избранного',playlist_play_all:'▶ Воспроизвести всё',
    playlist_count:function(n){return n+' '+(n===1?'трек':n<5?'трека':'треков');},
    login:'Войти',register:'Регистрация',logout:'Выйти',
    auth_title_login:'Вход в аккаунт',auth_title_register:'Создать аккаунт',
    auth_username:'Имя пользователя',auth_password:'Пароль',auth_confirm:'Подтвердите пароль',
    auth_submit_login:'Войти',auth_submit_register:'Создать аккаунт',
    auth_switch_to_register:'Нет аккаунта? Зарегистрироваться',auth_switch_to_login:'Уже есть аккаунт? Войти',
    auth_error_empty:'Заполните все поля',auth_error_match:'Пароли не совпадают',
    auth_error_exists:'Пользователь уже существует',auth_error_wrong:'Неверный логин или пароль',
    auth_short:'Минимум 3 символа',greeting:function(n){return 'Привет, '+n+'!';}
  },
  en: {
    nav_home:'Home',nav_tracks:'All Tracks',nav_artists:'Artists',nav_favorites:'Favorites',
    hero_welcome:'Welcome',hero_title:'Listen. Discover.<br>Feel the music.',
    hero_desc:'MyMusicHub — a platform with the best tracks and artists across genres. Find new music, save what you love.',
    hero_btn:'Browse Tracks',popular_tracks:'Popular Tracks',new_releases:'New Releases',
    featured_artists:'Featured Artists',all_tracks:'All Tracks',
    search_placeholder:'🔍  Search by title...',artists_title:'Artists',
    favorites_title:'Favorites',favorites_hint:'Click ♡ on a track card to add it here.',
    no_results:'Nothing found 😕',no_favorites:'Your favorites list is empty.',
    footer_desc:'Next-generation music platform',all_genres:'All Genres',
    listen:'Listen to track',duration:'Duration',year:'Year',genre:'Genre',
    artist_tracks_label:'Tracks: ',fav_add:'Add to favorites',fav_remove:'Remove from favorites',
    playlist_title:'Favorites Playlist',playlist_play_all:'▶ Play All',
    playlist_count:function(n){return n+' '+(n===1?'track':'tracks');},
    login:'Log In',register:'Sign Up',logout:'Log Out',
    auth_title_login:'Log In',auth_title_register:'Create Account',
    auth_username:'Username',auth_password:'Password',auth_confirm:'Confirm Password',
    auth_submit_login:'Log In',auth_submit_register:'Create Account',
    auth_switch_to_register:"Don't have an account? Sign Up",auth_switch_to_login:'Already have an account? Log In',
    auth_error_empty:'Please fill in all fields',auth_error_match:'Passwords do not match',
    auth_error_exists:'User already exists',auth_error_wrong:'Incorrect username or password',
    auth_short:'Minimum 3 characters',greeting:function(n){return 'Hi, '+n+'!';}
  },
  kz: {
    nav_home:'Басты бет',nav_tracks:'Барлық трек',nav_artists:'Орындаушылар',nav_favorites:'Таңдаулылар',
    hero_welcome:'Қош келдіңіз',hero_title:'Тыңда. Ашып көр.<br>Музыканы сез.',
    hero_desc:'MyMusicHub — әр жанрдың үздік трек пен орындаушыларын біріктірген платформа. Жаңаны тап, сүйіктіңді сақта.',
    hero_btn:'Трек қарау',popular_tracks:'Танымал трек',new_releases:'Жаңа шығарылымдар',
    featured_artists:'Ұсынылған орындаушылар',all_tracks:'Барлық трек',
    search_placeholder:'🔍  Атауы бойынша іздеу...',artists_title:'Орындаушылар',
    favorites_title:'Таңдаулылар',favorites_hint:'Трек картасындағы ♡ белгісін басып қосыңыз.',
    no_results:'Ештеңе табылмады 😕',no_favorites:'Таңдаулылар тізімі бос.',
    footer_desc:'Жаңа буын музыкалық платформасы',all_genres:'Барлық жанр',
    listen:'Трек тыңдау',duration:'Ұзақтығы',year:'Жыл',genre:'Жанр',
    artist_tracks_label:'Тректер: ',fav_add:'Таңдаулыға қосу',fav_remove:'Таңдаулыдан алып тастау',
    playlist_title:'Таңдаулылар ойнату тізімі',playlist_play_all:'▶ Бәрін ойнату',
    playlist_count:function(n){return n+' трек';},
    login:'Кіру',register:'Тіркелу',logout:'Шығу',
    auth_title_login:'Аккаунтқа кіру',auth_title_register:'Аккаунт жасау',
    auth_username:'Пайдаланушы аты',auth_password:'Құпия сөз',auth_confirm:'Құпия сөзді растаңыз',
    auth_submit_login:'Кіру',auth_submit_register:'Аккаунт жасау',
    auth_switch_to_register:'Аккаунт жоқ па? Тіркелу',auth_switch_to_login:'Аккаунт бар ма? Кіру',
    auth_error_empty:'Барлық өрісті толтырыңыз',auth_error_match:'Құпия сөздер сәйкес келмейді',
    auth_error_exists:'Пайдаланушы бұрыннан бар',auth_error_wrong:'Қате логин немесе құпия сөз',
    auth_short:'Кемінде 3 таңба',greeting:function(n){return 'Сәлем, '+n+'!';}
  }
};

var currentLang = localStorage.getItem('mmh_lang') || 'ru';
function t(key, arg) {
  var val = TRANSLATIONS[currentLang][key];
  if (typeof val === 'function') return val(arg);
  return val !== undefined ? val : (TRANSLATIONS['ru'][key] || key);
}
function setLang(lang) {
  currentLang = lang; localStorage.setItem('mmh_lang', lang);
  applyTranslations();
  renderPopularTracks(); renderNewReleases(); renderFeaturedArtists();
  renderGenreFilters(); renderAllTracks(); renderArtists(); renderFavorites(); updateAuthUI();
}
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(function(el) { if (el.dataset.i18n) el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) { if (el.dataset.i18nPlaceholder) el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll('.lang-btn').forEach(function(btn) { btn.classList.toggle('active', btn.dataset.lang === currentLang); });
}

/* ============================================================
   AUTH
   ============================================================ */
function getUsers() { try { return JSON.parse(localStorage.getItem('mmh_users')) || {}; } catch(e) { return {}; } }
function saveUsers(u) { localStorage.setItem('mmh_users', JSON.stringify(u)); }
function getCurrentUser() { return localStorage.getItem('mmh_current_user') || null; }
function setCurrentUser(name) { name ? localStorage.setItem('mmh_current_user', name) : localStorage.removeItem('mmh_current_user'); }

function openAuthModal(mode) {
  document.getElementById('auth-overlay').classList.remove('hidden');
  renderAuthForm(mode || 'login');
}
function closeAuthModal() { document.getElementById('auth-overlay').classList.add('hidden'); }

function renderAuthForm(mode) {
  var isLogin = mode === 'login';
  var box = document.getElementById('auth-box');
  box.innerHTML = '<button class="modal__close" id="auth-close">✕</button>' +
    '<div class="auth__title">'+(isLogin?t('auth_title_login'):t('auth_title_register'))+'</div>' +
    '<div class="auth__form">' +
    '<input class="auth__input" id="auth-username" type="text" placeholder="'+t('auth_username')+'" />' +
    '<input class="auth__input" id="auth-password" type="password" placeholder="'+t('auth_password')+'" />' +
    (!isLogin?'<input class="auth__input" id="auth-confirm" type="password" placeholder="'+t('auth_confirm')+'" />':'') +
    '<div class="auth__error hidden" id="auth-error"></div>' +
    '<button class="btn btn--primary auth__submit" id="auth-submit">'+(isLogin?t('auth_submit_login'):t('auth_submit_register'))+'</button>' +
    '<button class="auth__switch" id="auth-switch">'+(isLogin?t('auth_switch_to_register'):t('auth_switch_to_login'))+'</button>' +
    '</div>';
  document.getElementById('auth-close').addEventListener('click', closeAuthModal);
  document.getElementById('auth-submit').addEventListener('click', function() { handleAuth(mode); });
  document.getElementById('auth-switch').addEventListener('click', function() { renderAuthForm(isLogin?'register':'login'); });
}
function showAuthError(msg) { var el=document.getElementById('auth-error'); if(el){el.textContent=msg;el.classList.remove('hidden');} }
function handleAuth(mode) {
  var username = document.getElementById('auth-username').value.trim();
  var password = document.getElementById('auth-password').value;
  if (!username || !password) { showAuthError(t('auth_error_empty')); return; }
  if (username.length < 3) { showAuthError(t('auth_short')); return; }
  if (mode === 'login') {
    var users = getUsers();
    if (!users[username] || users[username] !== password) { showAuthError(t('auth_error_wrong')); return; }
    setCurrentUser(username);
    favorites = loadFavorites();
    closeAuthModal(); updateAuthUI(); renderFavorites(); refreshFavoriteButtons();
  } else {
    var c = document.getElementById('auth-confirm');
    if (c && c.value !== password) { showAuthError(t('auth_error_match')); return; }
    var u2 = getUsers();
    if (u2[username]) { showAuthError(t('auth_error_exists')); return; }
    u2[username] = password; saveUsers(u2); setCurrentUser(username);
    favorites = loadFavorites();
    closeAuthModal(); updateAuthUI(); renderFavorites(); refreshFavoriteButtons();
  }
}
function logout() {
  setCurrentUser(null);
  favorites = loadFavorites();
  updateAuthUI();
  renderFavorites();
  refreshFavoriteButtons();
}
function updateAuthUI() {
  var user=getCurrentUser(); var area=document.getElementById('auth-area'); if(!area) return;
  if(user) {
    area.innerHTML='<span class="auth-greeting">'+t('greeting',user)+'</span><button class="btn btn--ghost btn--sm" id="logout-btn">'+t('logout')+'</button>';
    document.getElementById('logout-btn').addEventListener('click', logout);
  } else {
    area.innerHTML='<button class="btn btn--ghost btn--sm" id="login-btn">'+t('login')+'</button><button class="btn btn--primary btn--sm" id="register-btn">'+t('register')+'</button>';
    document.getElementById('login-btn').addEventListener('click', function(){openAuthModal('login');});
    document.getElementById('register-btn').addEventListener('click', function(){openAuthModal('register');});
  }
}

/* ============================================================
   DATA  — описания исполнителей на трёх языках
   ============================================================ */
/* helper — путь к фото исполнителя */
function artistPhoto(id){ return 'images/'+id+'.jpg'; }

var ARTISTS = [
  { id:'the-weeknd', name:'The Weeknd',
    genre:{ ru:'R&B / Поп', en:'R&B / Pop', kz:'R&B / Поп' },
    desc:{
      ru:'Канадский певец Абель Тесфайе — один из самых продаваемых музыкантов в мире. Его тёмный R&B-стиль и синтвейв-эстетика сформировали целое поколение слушателей.',
      en:'Canadian singer Abel Tesfaye is one of the best-selling musicians in the world. His dark R&B style and synthwave aesthetic shaped an entire generation of listeners.',
      kz:'Канадалық әнші Абель Тесфайе — әлемдегі ең көп сатылған музыканттардың бірі. Оның қараңғы R&B стилі мен синтвейв эстетикасы бүтін бір буынды қалыптастырды.'
    }
  },
  { id:'daft-punk', name:'Daft Punk',
    genre:{ ru:'Электроника', en:'Electronic', kz:'Электроника' },
    desc:{
      ru:'Легендарный французский дуэт Томаса Бангальтера и Ги-Мануэля де Омем-Кристо. Создатели хаус-музыки нового поколения, завоевавшие сердца миллионов треками от Homework до Random Access Memories.',
      en:'Legendary French duo Thomas Bangalter and Guy-Manuel de Homem-Christo. Pioneers of a new generation of house music, winning millions of hearts from Homework to Random Access Memories.',
      kz:'Томас Бангальтер мен Ги-Мануэль де Омем-Кристоның аңызға айналған француз дуэті. Homework-тен Random Access Memories-ке дейінгі тректерімен миллиондардың жүрегін жаулаған жаңа буын хаус музыкасының жасаушылары.'
    }
  },
  { id:'arctic-monkeys', name:'Arctic Monkeys',
    genre:{ ru:'Инди-рок', en:'Indie Rock', kz:'Инди-рок' },
    desc:{
      ru:'Британская рок-группа из Шеффилда. Мастера интеллектуального инди-рока с острыми текстами и неповторимым звуком.',
      en:'British rock band from Sheffield. Masters of intellectual indie rock with sharp lyrics and a truly unique sound.',
      kz:'Шеффилдтен шыққан британдық рок-тобы. Өткір мәтіндері мен бірегей дыбысымен зияткерлік инди-роктың шеберлері.'
    }
  },
  { id:'billie-eilish', name:'Billie Eilish',
    genre:{ ru:'Поп / Альтернатива', en:'Pop / Alternative', kz:'Поп / Балама' },
    desc:{
      ru:'Американская певица, ставшая знаменитой в 17 лет. Её мрачная эстетика, шёпотный вокал и экспериментальный поп изменили представление о современной поп-музыке.',
      en:'American singer who became famous at 17. Her dark aesthetic, whispery vocals and experimental pop transformed modern pop music.',
      kz:'17 жасында атақты болған американдық әнші. Оның қараңғы эстетикасы мен эксперименттік попы заманауи поп-музыка туралы түсінікті өзгертті.'
    }
  },
  { id:'kendrick-lamar', name:'Kendrick Lamar',
    genre:{ ru:'Хип-хоп', en:'Hip-Hop', kz:'Хип-хоп' },
    desc:{
      ru:'Рэпер из Комптона — обладатель Пулитцеровской премии и множества Grammy. Его альбомы считаются вершиной современного хип-хопа по глубине текстов и музыкальной сложности.',
      en:'Rapper from Compton, California — Pulitzer Prize winner and multiple Grammy holder. His albums are considered the pinnacle of modern hip-hop.',
      kz:'Комптондық рэпер — Пулитцер сыйлығының иегері. Оның альбомдары мәтіндердің тереңдігі мен музыкалық күрделілігі бойынша заманауи хип-хоптың шыңы деп саналады.'
    }
  },
  { id:'radiohead', name:'Radiohead',
    genre:{ ru:'Альт-рок', en:'Alt-Rock', kz:'Альт-рок' },
    desc:{
      ru:'Культовая британская группа из Оксфорда. OK Computer и Kid A — одни из величайших альбомов в истории музыки.',
      en:'Iconic British band from Oxford that defined alternative and art rock of the 90s and 2000s. OK Computer and Kid A are among the greatest albums in music history.',
      kz:'Оксфордтан шыққан культтік британдық топ. OK Computer және Kid A музыка тарихындағы ең ұлы альбомдардың қатарында.'
    }
  },
  { id:'tame-impala', name:'Tame Impala',
    genre:{ ru:'Психоделический поп', en:'Psychedelic Pop', kz:'Психоделикалық поп' },
    desc:{
      ru:'Австралийский проект Кевина Паркера — смесь психоделического рока, синти-попа и дрим-попа. Currents (2015) изменил звучание инди-музыки целого десятилетия.',
      en:"Kevin Parker's Australian project — a blend of psychedelic rock, synth-pop and dream pop. Currents (2015) redefined indie music for an entire decade.",
      kz:'Кевин Паркердің австралиялық жобасы — психоделикалық рок, синти-поп және дрим-поптың қоспасы. Currents (2015) инди-музыканың дыбысын өзгертті.'
    }
  },
  { id:'eminem', name:'Eminem',
    genre:{ ru:'Хип-хоп / Рэп', en:'Hip-Hop / Rap', kz:'Хип-хоп / Рэп' },
    desc:{
      ru:'Легенда мирового рэпа из Детройта. Мастер скоростного флоу, трижды лауреат Grammy за лучший рэп-альбом подряд.',
      en:'Detroit rap legend and one of the best-selling musicians in history. Master of rapid-fire flow, three-time consecutive Grammy winner for Best Rap Album.',
      kz:'Детройттың рэп аңызы. Жылдам флоудың шебері, Grammy сыйлығын үздік рэп-альбом номинациясында қатарынан үш рет жеңіп алды.'
    }
  },
  { id:'linkin-park', name:'Linkin Park',
    genre:{ ru:'Альт-метал / Ню-метал', en:'Alt-Metal / Nu-Metal', kz:'Альт-метал / Ню-метал' },
    desc:{
      ru:'Культовая американская рок-группа, соединившая хэви-метал, хип-хоп и электронику. Их дебютный альбом Hybrid Theory разошёлся тиражом более 30 миллионов копий.',
      en:'Iconic American rock band fusing heavy metal, hip-hop and electronics. Their debut album Hybrid Theory sold over 30 million copies worldwide.',
      kz:'Хэви-метал, хип-хоп және электрониканы біріктірген культтік американдық рок-тобы. Олардың дебюттік альбомы Hybrid Theory 30 миллионнан астам дана болып таралды.'
    }
  },
  { id:'metallica', name:'Metallica',
    genre:{ ru:'Хэви-метал / Трэш-метал', en:'Heavy Metal / Thrash Metal', kz:'Хэви-метал / Трэш-метал' },
    desc:{
      ru:'Одна из самых влиятельных метал-групп в истории. За 40 лет карьеры Metallica продала более 125 миллионов альбомов.',
      en:'One of the most influential and best-selling metal bands in history. Over 40 years, Metallica has sold more than 125 million albums worldwide.',
      kz:'Тарихтағы ең ықпалды метал топтарының бірі. 40 жыл ішінде Metallica 125 миллионнан астам альбом сатты.'
    }
  },
  { id:'kino', name:'Кино',
    genre:{ ru:'Русский рок', en:'Russian Rock', kz:'Орыс рогы' },
    desc:{
      ru:'Легендарная советская рок-группа Виктора Цоя — символ целого поколения. Их песни звучат так же остро и актуально, как и в момент создания в 1980-х. Цой жив.',
      en:"Viktor Tsoi's legendary Soviet rock band — the symbol of an entire generation. Their songs remain as sharp and relevant today as when written in the 1980s.",
      kz:'Виктор Цойдың аңызға айналған кеңестік рок-тобы — бүтін бір буынның символы. Олардың әндері 1980-жылдары жазылғандай өткір және өзекті күйінде қалды.'
    }
  },
  { id:'zemfira', name:'Земфира',
    genre:{ ru:'Русский рок / Поп-рок', en:'Russian Rock / Pop-Rock', kz:'Орыс рогы / Поп-рок' },
    desc:{
      ru:'Одна из самых значимых русскоязычных певиц современности. Её дебютный альбом 1999 года стал откровением, а каждый следующий — событием. Голос поколения.',
      en:"One of the most significant Russian-language artists of our time. Her 1999 debut album was a revelation, and every release since has been an event.",
      kz:'Заманауи орыстілді музыканттардың ең маңыздыларының бірі. Оның 1999 жылғы дебюттік альбомы ашылу болды, ал кейінгі әрбір шығарылым — оқиғаға айналды.'
    }
  },
];

var FEATURED_ARTIST_IDS = ['the-weeknd','daft-punk','arctic-monkeys','billie-eilish','kendrick-lamar'];

/* ── Вспомогательная функция для получения поля по текущему языку ── */
function getLang(obj) {
  if (typeof obj === 'string') return obj;
  return obj[currentLang] || obj['ru'] || '';
}

var TRACKS = [
  {id:1,title:'Blinding Lights',artist:'The Weeknd',artistId:'the-weeknd',genre:'R&B / Поп',duration:'3:20',year:2019,desc:'Синтвейв-поп хит, ставший одной из самых прослушиваемых песен в истории Spotify. Вдохновлён эстетикой 80-х и нью-вейва.'},
  {id:2,title:'Starboy',artist:'The Weeknd',artistId:'the-weeknd',genre:'R&B / Поп',duration:'3:50',year:2016,desc:'Заглавный трек альбома Starboy при участии Daft Punk. Холодный, минималистичный бит и характерный фальцет Уикнда.'},
  {id:3,title:'Save Your Tears',artist:'The Weeknd',artistId:'the-weeknd',genre:'R&B / Поп',duration:'3:35',year:2020,desc:'Меланхоличный синтвейв-трек с альбома After Hours. Лирика о сожалении и невозможности вернуть прошлое.'},
  {id:4,title:'Die For You',artist:'The Weeknd',artistId:'the-weeknd',genre:'R&B / Поп',duration:'4:20',year:2016,desc:'Эмоциональная баллада, ставшая вирусной спустя годы после выхода. Один из самых любимых треков у фанатов.'},
  {id:5,title:'Get Lucky',artist:'Daft Punk',artistId:'daft-punk',genre:'Электроника',duration:'6:09',year:2013,desc:'Летний фанк-хит с альбома Random Access Memories при участии Фарелла Уильямса и Найла Роджерса. Мировой хит.'},
  {id:6,title:'One More Time',artist:'Daft Punk',artistId:'daft-punk',genre:'Электроника',duration:'5:20',year:2000,desc:'Гимн диско-хауса, один из самых узнаваемых треков в истории электронной музыки. Вокал пропущен через вокодер.'},
  {id:7,title:'Harder Better Faster',artist:'Daft Punk',artistId:'daft-punk',genre:'Электроника',duration:'3:45',year:2001,desc:'Роботизированный фанк-трек с культовым вокодерным рефреном. Классика французского хауса.'},
  {id:8,title:'Around the World',artist:'Daft Punk',artistId:'daft-punk',genre:'Электроника',duration:'7:09',year:1997,desc:'Минималистичный хаус-трек с повторяющейся фразой — гипнотический и неудержимый. С альбома Homework.'},
  {id:9,title:'Do I Wanna Know?',artist:'Arctic Monkeys',artistId:'arctic-monkeys',genre:'Инди-рок',duration:'4:32',year:2013,desc:'Медленный, тяжёлый рифф и томный вокал Алекса Тёрнера. Открывает альбом AM — один из лучших рок-альбомов 2010-х.'},
  {id:10,title:'R U Mine?',artist:'Arctic Monkeys',artistId:'arctic-monkeys',genre:'Инди-рок',duration:'3:21',year:2013,desc:'Агрессивный гитарный рифф и сырая энергетика. Трек стал гимном инди-рока и любимцем живых выступлений.'},
  {id:11,title:'Fluorescent Adolescent',artist:'Arctic Monkeys',artistId:'arctic-monkeys',genre:'Инди-рок',duration:'2:57',year:2011,desc:'Острая лирика о угасающих страстях под задорный гитарный поп. С альбома Suck It and See.'},
  {id:12,title:'505',artist:'Arctic Monkeys',artistId:'arctic-monkeys',genre:'Инди-рок',duration:'4:13',year:2007,desc:'Нарастающая баллада с закрытым концом. Один из самых эмоциональных треков группы, ставший культовым.'},
  {id:13,title:'bad guy',artist:'Billie Eilish',artistId:'billie-eilish',genre:'Поп / Альтернатива',duration:'3:14',year:2019,desc:'Дерзкий поп-хит с дебютного альбома WHEN WE ALL FALL ASLEEP. Минималистичный бит и ироничная подача.'},
  {id:14,title:'Happier Than Ever',artist:'Billie Eilish',artistId:'billie-eilish',genre:'Поп / Альтернатива',duration:'4:58',year:2021,desc:'Двухчастная песня: нежное начало переходит в яростный рок-финал. Честный манифест об освобождении от токсичных отношений.'},
  {id:15,title:'ocean eyes',artist:'Billie Eilish',artistId:'billie-eilish',genre:'Поп / Альтернатива',duration:'3:20',year:2016,desc:'Дебютный сингл, записанный в 14 лет. Хрупкий, воздушный поп, который мгновенно разлетелся по интернету.'},
  {id:16,title:'lovely',artist:'Billie Eilish',artistId:'billie-eilish',genre:'Поп / Альтернатива',duration:'3:33',year:2018,desc:'Дуэт с Khalid для сериала 13 причин почему. Атмосферная, тревожная и невероятно красивая баллада.'},
  {id:17,title:'HUMBLE.',artist:'Kendrick Lamar',artistId:'kendrick-lamar',genre:'Хип-хоп',duration:'2:57',year:2017,desc:'Пронзительный трап-бит от Mike WiLL Made-It и самоуверенный поток сознания Кендрика. Один из главных хитов DAMN.'},
  {id:18,title:'Alright',artist:'Kendrick Lamar',artistId:'kendrick-lamar',genre:'Хип-хоп',duration:'3:39',year:2015,desc:'Гимн надежды с альбома To Pimp a Butterfly. Стал гимном движения за гражданские права в США.'},
  {id:19,title:'DNA.',artist:'Kendrick Lamar',artistId:'kendrick-lamar',genre:'Хип-хоп',duration:'3:05',year:2017,desc:'Взрывное открытие альбома DAMN — два бита в одном треке, агрессивный флоу и декларация идентичности.'},
  {id:20,title:'Money Trees',artist:'Kendrick Lamar',artistId:'kendrick-lamar',genre:'Хип-хоп',duration:'6:26',year:2012,desc:'Лиричный, меланхоличный трек с good kid, m.A.A.d city. Сэмпл Beach Boy и история взросления в Комптоне.'},
  {id:21,title:'Creep',artist:'Radiohead',artistId:'radiohead',genre:'Альт-рок',duration:'3:56',year:1992,desc:'Дебютный хит группы о чувстве отчуждённости. Несмотря на то что сама группа устала от трека, он остаётся культовым.'},
  {id:22,title:'Karma Police',artist:'Radiohead',artistId:'radiohead',genre:'Альт-рок',duration:'4:21',year:1997,desc:'Тревожный поп-рок с альбома OK Computer. Пианино, нарастающий хаос и ощущение неизбежного.'},
  {id:23,title:'Paranoid Android',artist:'Radiohead',artistId:'radiohead',genre:'Альт-рок',duration:'6:23',year:1997,desc:'Сюита из трёх частей, меняющих темп и настроение. Один из самых амбициозных треков в истории альт-рока.'},
  {id:24,title:'Exit Music (For a Film)',artist:'Radiohead',artistId:'radiohead',genre:'Альт-рок',duration:'4:24',year:1997,desc:'Написан для финальных титров Ромео и Джульетты Лурмана. Акустическое начало переходит в оглушительный финал.'},
  {id:25,title:'The Less I Know the Better',artist:'Tame Impala',artistId:'tame-impala',genre:'Психоделический поп',duration:'3:37',year:2015,desc:'Дискотечный поп-рок с альбома Currents, о ревности и упущенной любви. Один из самых узнаваемых треков десятилетия.'},
  {id:26,title:'Feels Like We Only Go Backwards',artist:'Tame Impala',artistId:'tame-impala',genre:'Психоделический поп',duration:'3:14',year:2012,desc:'Психоделический поп-мечта с шелковистыми слоями синтезаторов и меланхолическим текстом о застрявших чувствах.'},
  {id:27,title:'Let It Happen',artist:'Tame Impala',artistId:'tame-impala',genre:'Психоделический поп',duration:'7:47',year:2015,desc:'Грандиозное открытие Currents — почти восемь минут нарастающего психоделического транса с неожиданной серединой.'},
  {id:28,title:'New Person, Same Old Mistakes',artist:'Tame Impala',artistId:'tame-impala',genre:'Психоделический поп',duration:'6:01',year:2015,desc:'Закрывает Currents гипнотическим лупом — трек о знании своих ошибок и повторении их снова и снова.'},
  {id:29,title:'Lose Yourself',artist:'Eminem',artistId:'eminem',genre:'Хип-хоп / Рэп',duration:'5:26',year:2002,desc:'Оскароносный трек из фильма 8 Миля — гимн о том, чтобы схватить свой шанс. Один из самых мотивирующих рэп-треков всех времён.'},
  {id:30,title:'Rap God',artist:'Eminem',artistId:'eminem',genre:'Хип-хоп / Рэп',duration:'6:04',year:2013,desc:'Рекордсмен по скорости флоу — в одном из куплетов Эминем произносит 97 слов за 15 секунд. Вошёл в Книгу рекордов Гиннесса.'},
  {id:31,title:'Stan',artist:'Eminem',artistId:'eminem',genre:'Хип-хоп / Рэп',duration:'6:44',year:2000,desc:'Культовое письмо одержимого фаната своему кумиру. Трек настолько повлиял на культуру, что слово «стэн» вошло в словари.'},
  {id:32,title:'Godzilla',artist:'Eminem',artistId:'eminem',genre:'Хип-хоп / Рэп',duration:'3:28',year:2020,desc:'Чудовищная скорость флоу и взрывной припев. В финале трека Эминем читает более 225 слов за 31 секунду.'},
  {id:33,title:'In the End',artist:'Linkin Park',artistId:'linkin-park',genre:'Альт-метал / Ню-метал',duration:'3:36',year:2000,desc:'Один из самых узнаваемых рок-треков 2000-х. Фортепианное вступление, чередование вокала и рэпа — формула, изменившая жанр.'},
  {id:34,title:'Numb',artist:'Linkin Park',artistId:'linkin-park',genre:'Альт-метал / Ню-метал',duration:'3:05',year:2003,desc:'Гимн тех, кто устал соответствовать чужим ожиданиям. Один из самых просматриваемых клипов в истории YouTube.'},
  {id:35,title:'Crawling',artist:'Linkin Park',artistId:'linkin-park',genre:'Альт-метал / Ню-метал',duration:'3:29',year:2000,desc:'Лауреат Grammy за лучшее хард-рок исполнение. Честный трек о внутренней боли и потере контроля.'},
  {id:36,title:'Breaking the Habit',artist:'Linkin Park',artistId:'linkin-park',genre:'Альт-метал / Ню-метал',duration:'3:16',year:2004,desc:'Один из самых эмоциональных треков группы — о борьбе с саморазрушением. Честер Беннингтон вложил в него огромную личную боль.'},
  {id:37,title:'Enter Sandman',artist:'Metallica',artistId:'metallica',genre:'Хэви-метал / Трэш-метал',duration:'5:31',year:1991,desc:'Открывает «Чёрный альбом» — один из самых продаваемых в истории рока. Тяжёлый рифф и образы ночных кошмаров сделали трек легендой.'},
  {id:38,title:'Nothing Else Matters',artist:'Metallica',artistId:'metallica',genre:'Хэви-метал / Трэш-метал',duration:'6:28',year:1991,desc:'Неожиданно нежная баллада от мастеров трэш-метала. Джеймс Хэтфилд написал её во время телефонного разговора с девушкой.'},
  {id:39,title:'Master of Puppets',artist:'Metallica',artistId:'metallica',genre:'Хэви-метал / Трэш-метал',duration:'8:35',year:1986,desc:'Признан одним из величайших метал-треков всех времён. После использования в сериале «Очень странные дела» переживает второй расцвет.'},
  {id:40,title:'One',artist:'Metallica',artistId:'metallica',genre:'Хэви-метал / Трэш-метал',duration:'7:25',year:1988,desc:'Антивоенный трек, вдохновлённый романом «Джонни получил винтовку». Начинается тихо и взрывается одним из лучших соло Кёрка Хэммета.'},
  {id:41,title:'Группа крови',artist:'Кино',artistId:'kino',genre:'Русский рок',duration:'4:59',year:1988,desc:'Главный гимн советского рок-андеграунда. Виктор Цой написал трек как манифест поколения, ищущего выход и правду.'},
  {id:42,title:'Последний герой',artist:'Кино',artistId:'kino',genre:'Русский рок',duration:'3:55',year:1989,desc:'Меланхоличный портрет одиночки, идущего своим путём. Один из самых поэтичных и пронзительных треков Цоя.'},
  {id:43,title:'Звезда по имени Солнце',artist:'Кино',artistId:'kino',genre:'Русский рок',duration:'4:24',year:1989,desc:'Символ целой эпохи — трек о свободе, мечте и неизбежности. Вышел в последнем альбоме Кино при жизни Цоя.'},
  {id:44,title:'Перемен',artist:'Кино',artistId:'kino',genre:'Русский рок',duration:'5:11',year:1986,desc:'Стал гимном перестройки и символом жажды перемен. Один из самых цитируемых рок-треков в русской культуре.'},
  {id:45,title:'Почему',artist:'Земфира',artistId:'zemfira',genre:'Русский рок / Поп-рок',duration:'3:28',year:1999,desc:'Дебютный хит, взорвавший русское радио в 1999 году. Хриплый голос, гитара и прямой вопрос — формула, покорившая страну.'},
  {id:46,title:'Хочешь?',artist:'Земфира',artistId:'zemfira',genre:'Русский рок / Поп-рок',duration:'3:12',year:1999,desc:'Провокационный и дерзкий трек с дебютного альбома. Земфира ворвалась в музыку без извинений — этот трек тому доказательство.'},
  {id:47,title:'Ариведерчи',artist:'Земфира',artistId:'zemfira',genre:'Русский рок / Поп-рок',duration:'3:45',year:2000,desc:'Один из самых романтичных и одновременно горьких треков певицы. Прощание, звучащее как признание в любви.'},
  {id:48,title:'Искала',artist:'Земфира',artistId:'zemfira',genre:'Русский рок / Поп-рок',duration:'3:55',year:2000,desc:'Один из самых узнаваемых треков певицы — история поиска и невозможности найти. Мощный припев и характерная хрипотца сделали его классикой русского рока.'},
];

var POPULAR_IDS=[29,33,37,1,41,45,9,17,5,25];
var NEW_RELEASE_IDS=[32,36,40,48,43,25,2,27,13,44];

/* ============================================================
   STATE
   ============================================================ */
var favorites=loadFavorites();
var activeGenre='all',searchQuery='',activeArtist=null;
var playlistQueue=[],playlistIndex=0,isRepeat=false;

function getFavKey() {
  var user = getCurrentUser();
  return user ? 'mmh_favorites_' + user : 'mmh_favorites_guest';
}
function loadFavorites() {
  try { return JSON.parse(localStorage.getItem(getFavKey())) || []; } catch(e) { return []; }
}
function saveFavorites() {
  localStorage.setItem(getFavKey(), JSON.stringify(favorites));
}
function isFavorite(id){return favorites.indexOf(id)!==-1;}
function toggleFavorite(id){
  if(isFavorite(id)){favorites=favorites.filter(function(f){return f!==id;});}else{favorites.push(id);}
  saveFavorites();refreshFavoriteButtons();renderFavorites();updateMpFavBtn();
}
function refreshFavoriteButtons(){
  document.querySelectorAll('.fav-btn').forEach(function(btn){
    var id=parseInt(btn.dataset.id);
    btn.textContent=isFavorite(id)?'♥':'♡';
    btn.classList.toggle('active',isFavorite(id));
    btn.title=isFavorite(id)?t('fav_remove'):t('fav_add');
  });
}
function updateMpFavBtn(){
  if(!player.currentTrack)return;
  var id=player.currentTrack.id;
  var btn=document.getElementById('mp-fav');
  if(btn){btn.textContent=isFavorite(id)?'♥':'♡';btn.classList.toggle('active',isFavorite(id));}
  var fsBtn=document.getElementById('fs-fav');
  if(fsBtn){fsBtn.textContent=isFavorite(id)?'♥':'♡';fsBtn.classList.toggle('active',isFavorite(id));}
}

/* ============================================================
   CARD FACTORY
   ============================================================ */
function createTrackCard(track,queueList){
  var card=document.createElement('article');card.className='track-card';card.dataset.id=track.id;
  card.innerHTML=
    '<div class="track-card__genre">'+track.genre+'</div>'+
    '<div class="track-card__title" title="'+track.title+'">'+track.title+'</div>'+
    '<div class="track-card__artist">'+track.artist+'</div>'+
    '<div class="track-card__footer">'+
      '<button class="play-btn" data-id="'+track.id+'">▶</button>'+
      '<span class="track-card__duration">'+track.duration+'</span>'+
      '<button class="fav-btn '+(isFavorite(track.id)?'active':'')+'" data-id="'+track.id+'" title="'+(isFavorite(track.id)?t('fav_remove'):t('fav_add'))+'">'+
        (isFavorite(track.id)?'♥':'♡')+
      '</button></div>';
  card.addEventListener('click',function(e){if(!e.target.closest('.fav-btn')&&!e.target.closest('.play-btn'))openModal(track);});
  card.querySelector('.play-btn').addEventListener('click',function(e){
    e.stopPropagation();
    if(queueList){var idx=queueList.findIndex(function(tt){return tt.id===track.id;});loadQueue(queueList,idx>=0?idx:0);}
    else{loadAndPlay(track);}
    document.querySelectorAll('.play-btn').forEach(function(b){b.textContent='▶';});
    if(player.isPlaying&&player.currentTrack&&player.currentTrack.id===track.id)e.currentTarget.textContent='⏸';
  });
  card.querySelector('.fav-btn').addEventListener('click',function(e){e.stopPropagation();toggleFavorite(track.id);});
  return card;
}

/* ============================================================
   QUEUE ENGINE
   ============================================================ */
function loadQueue(queue,startIndex){playlistQueue=queue;playlistIndex=startIndex;_loadTrackByIndex(playlistIndex);}
function _loadTrackByIndex(index){
  if(!playlistQueue.length)return;
  playlistIndex=((index%playlistQueue.length)+playlistQueue.length)%playlistQueue.length;
  _loadTrack(playlistQueue[playlistIndex]);
}

/* ============================================================
   CAROUSEL  — стрелки через innerHTML с SVG
   ============================================================ */
function buildCarousel(containerId,items,cardFactory){
  var section=document.getElementById(containerId);section.innerHTML='';
  var wrapper=document.createElement('div');wrapper.className='carousel';
  var trackEl=document.createElement('div');trackEl.className='carousel__track';
  items.forEach(function(item){
    var slide=document.createElement('div');slide.className='carousel__slide';
    slide.appendChild(cardFactory(item));trackEl.appendChild(slide);
  });

  /* ── Стрелки с SVG-иконками ── */
  var btnPrev=document.createElement('button');
  btnPrev.className='carousel__btn carousel__btn--prev';
  btnPrev.setAttribute('aria-label','Назад');
  btnPrev.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>';

  var btnNext=document.createElement('button');
  btnNext.className='carousel__btn carousel__btn--next';
  btnNext.setAttribute('aria-label','Вперёд');
  btnNext.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';

  var dots=document.createElement('div');dots.className='carousel__dots';
  wrapper.appendChild(trackEl);
  section.appendChild(btnPrev);section.appendChild(wrapper);section.appendChild(btnNext);section.appendChild(dots);

  var current=0;
  var vc=function(){return window.innerWidth<600?1:window.innerWidth<900?2:3;};
  var mi=function(){return Math.max(0,items.length-vc());};
  function ud(){
    dots.innerHTML='';
    for(var i=0;i<=mi();i++){
      var d=document.createElement('span');d.className='carousel__dot'+(i===current?' active':'');
      (function(i2){d.addEventListener('click',function(){goTo(i2);});})(i);
      dots.appendChild(d);
    }
  }
  function goTo(idx){
    current=Math.max(0,Math.min(idx,mi()));
    var sw=(trackEl.querySelector('.carousel__slide')?trackEl.querySelector('.carousel__slide').offsetWidth:0)+16;
    trackEl.style.transform='translateX(-'+(current*sw)+'px)';
    btnPrev.disabled=current===0;btnNext.disabled=current>=mi();
    dots.querySelectorAll('.carousel__dot').forEach(function(d,i){d.classList.toggle('active',i===current);});
  }
  btnPrev.addEventListener('click',function(){goTo(current-1);ra();});
  btnNext.addEventListener('click',function(){goTo(current+1);ra();});
  window.addEventListener('resize',function(){current=0;goTo(0);ud();});
  ud();goTo(0);
  var at=setInterval(function(){goTo(current>=mi()?0:current+1);},4000);
  function ra(){clearInterval(at);at=setInterval(function(){goTo(current>=mi()?0:current+1);},4000);}
}

/* ── Рендер карусели исполнителей — используем getLang() ── */
function renderPopularTracks(){var tr=POPULAR_IDS.map(function(id){return TRACKS.find(function(t){return t.id===id;});}).filter(Boolean);buildCarousel('popular-tracks',tr,function(track){return createTrackCard(track,tr);});}
function renderNewReleases(){var tr=NEW_RELEASE_IDS.map(function(id){return TRACKS.find(function(t){return t.id===id;});}).filter(Boolean);buildCarousel('new-releases',tr,function(track){return createTrackCard(track,tr);});}

function renderFeaturedArtists(){
  var featured=FEATURED_ARTIST_IDS.map(function(id){return ARTISTS.find(function(a){return a.id===id;});}).filter(Boolean);
  buildCarousel('featured-artists',featured,function(artist){
    var card=document.createElement('article');card.className='artist-card';card.dataset.artistId=artist.id;
    var desc=getLang(artist.desc);
    var genre=getLang(artist.genre);
    card.innerHTML=
      '<div class="artist-card__photo"><img src="'+artistPhoto(artist.id)+'" alt="'+artist.name+'" onerror="this.parentElement.classList.add(\'no-photo\')"/></div>'+
      '<div class="artist-card__name">'+artist.name+'</div>'+
      '<div class="artist-card__genre">'+genre+'</div>'+
      '<div class="artist-card__desc">'+desc.substring(0,90)+'…</div>';
    card.addEventListener('click',function(){scrollToSection('artists');setTimeout(function(){selectArtist(artist.id);},400);});
    return card;
  });
}

function renderAllTracks(){
  var grid=document.getElementById('tracks-grid');var noRes=document.getElementById('no-results');grid.innerHTML='';
  var filtered=TRACKS.filter(function(tr){
    return(activeGenre==='all'||tr.genre===activeGenre)&&
      (tr.title.toLowerCase().includes(searchQuery.toLowerCase())||tr.artist.toLowerCase().includes(searchQuery.toLowerCase()));
  });
  if(!filtered.length){noRes.classList.remove('hidden');}
  else{noRes.classList.add('hidden');filtered.forEach(function(tr){grid.appendChild(createTrackCard(tr,filtered));});}
}

function renderGenreFilters(){
  var container=document.getElementById('genre-filters');container.innerHTML='';
  var genres=TRACKS.map(function(tr){return tr.genre;}).filter(function(v,i,a){return a.indexOf(v)===i;});
  var wrapper=document.createElement('div');wrapper.className='genre-dropdown';
  var trigger=document.createElement('button');trigger.className='genre-btn genre-btn--trigger';trigger.id='genre-trigger';
  trigger.innerHTML='<span id="genre-label">'+t('all_genres')+'</span> <span class="genre-arrow">▾</span>';
  var menu=document.createElement('div');menu.className='genre-menu';menu.id='genre-menu';
  var allItem=document.createElement('button');allItem.className='genre-option'+(activeGenre==='all'?' active':'');allItem.textContent=t('all_genres');
  allItem.addEventListener('click',function(){selectGenre('all',t('all_genres'),menu);});menu.appendChild(allItem);
  genres.forEach(function(genre){
    var item=document.createElement('button');item.className='genre-option'+(activeGenre===genre?' active':'');
    item.textContent=genre;item.addEventListener('click',function(){selectGenre(genre,genre,menu);});menu.appendChild(item);
  });
  wrapper.appendChild(trigger);wrapper.appendChild(menu);container.appendChild(wrapper);
  trigger.addEventListener('click',function(e){e.stopPropagation();menu.classList.toggle('open');});
  document.addEventListener('click',function(){menu.classList.remove('open');});
}
function selectGenre(genre,label,menu){
  activeGenre=genre;document.getElementById('genre-label').textContent=label;
  menu.querySelectorAll('.genre-option').forEach(function(o){o.classList.toggle('active',o.textContent===label);});
  menu.classList.remove('open');renderAllTracks();
}

function renderArtists(){
  var list=document.getElementById('artists-list');list.innerHTML='';
  ARTISTS.forEach(function(artist){
    var card=document.createElement('article');card.className='artist-card';card.id='artist-'+artist.id;card.dataset.artistId=artist.id;
    var desc=getLang(artist.desc);
    var genre=getLang(artist.genre);
    card.innerHTML=
      '<div class="artist-card__photo"><img src="'+artistPhoto(artist.id)+'" alt="'+artist.name+'" onerror="this.parentElement.classList.add(\'no-photo\')"/></div>'+
      '<div class="artist-card__name">'+artist.name+'</div>'+
      '<div class="artist-card__genre">'+genre+'</div>'+
      '<div class="artist-card__desc">'+desc+'</div>';
    card.addEventListener('click',function(){selectArtist(artist.id);});list.appendChild(card);
  });
}

function selectArtist(artistId){
  if(activeArtist===artistId){
    activeArtist=null;
    document.querySelectorAll('.artist-card').forEach(function(c){c.classList.remove('active');});
    document.getElementById('artist-tracks').classList.add('hidden');return;
  }
  activeArtist=artistId;
  document.querySelectorAll('.artist-card').forEach(function(c){c.classList.remove('active');});
  var ac=document.getElementById('artist-'+artistId);if(ac)ac.classList.add('active');
  var artist=ARTISTS.find(function(a){return a.id===artistId;});
  var artistTracks=TRACKS.filter(function(tr){return tr.artistId===artistId;});
  var container=document.getElementById('artist-tracks');container.classList.remove('hidden');
  container.innerHTML='<div class="artist-tracks__title">'+t('artist_tracks_label')+artist.name+'</div>';
  var grid=document.createElement('div');grid.className='tracks-grid';
  artistTracks.forEach(function(tr){grid.appendChild(createTrackCard(tr,artistTracks));});
  container.appendChild(grid);
}

function renderFavorites() {
  var grid = document.getElementById('favorites-grid');
  var noFav = document.getElementById('no-favorites');
  var header = document.getElementById('favorites-header');
  grid.innerHTML = '';
  if (header) header.classList.add('hidden');
  if (!favorites.length) {
    noFav.classList.remove('hidden');
  } else {
    noFav.classList.add('hidden');
    var favTracks = favorites.map(function(id) {
      return TRACKS.find(function(tr) { return tr.id === id; });
    }).filter(Boolean);
    favTracks.forEach(function(track) {
      grid.appendChild(createTrackCard(track, favTracks));
    });
  }
}

/* ============================================================
   MODAL
   ============================================================ */
function openModal(track){
  var overlay=document.getElementById('modal-overlay');var content=document.getElementById('modal-content');
  var artistObj=ARTISTS.find(function(a){return a.id===track.artistId;});
  content.innerHTML=
    '<div class="modal__genre">'+track.genre+'</div>'+
    '<div class="modal__title">'+track.title+'</div>'+
    '<div class="modal__artist">'+track.artist+'</div>'+
    '<div class="modal__divider"></div>'+
    '<div class="modal__desc">'+track.desc+'</div>'+
    '<div class="modal__meta">'+
      '<div class="modal__meta-item"><strong>'+t('duration')+'</strong>'+track.duration+'</div>'+
      '<div class="modal__meta-item"><strong>'+t('year')+'</strong>'+track.year+'</div>'+
      '<div class="modal__meta-item"><strong>'+t('genre')+'</strong>'+track.genre+'</div>'+
    '</div>'+
    '<div class="modal__player">'+
      '<div class="modal__player-label">'+t('listen')+'</div>'+
      '<div class="modal__player-controls">'+
        '<button class="mp-btn mp-btn--play" id="modal-play-btn">▶</button>'+
        '<div class="mini-player__progress">'+
          '<span class="mp-time" id="modal-cur">0:00</span>'+
          '<div class="progress-bar" id="modal-progress-bar"><div class="progress-fill" id="modal-progress-fill"></div></div>'+
          '<span class="mp-time mp-time--end">'+track.duration+'</span>'+
        '</div>'+
      '</div>'+
    '</div>';
  overlay.classList.remove('hidden');document.body.style.overflow='hidden';
  document.getElementById('modal-play-btn').addEventListener('click',function(){loadAndPlay(track);closeModal();});
}
function closeModal(){document.getElementById('modal-overlay').classList.add('hidden');document.body.style.overflow='';}

/* ============================================================
   SCROLL & NAV
   ============================================================ */
function scrollToSection(sectionId){
  var el=document.getElementById(sectionId);
  if(el){window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-72,behavior:'smooth'});}
  closeNav();
}
function updateActiveNav(){
  var sections=['home','tracks','artists','favorites'];var sp=window.scrollY+100;var cur='home';
  sections.forEach(function(id){var el=document.getElementById(id);if(el&&el.offsetTop<=sp)cur=id;});
  document.querySelectorAll('.nav__link').forEach(function(l){l.classList.toggle('active',l.dataset.section===cur);});
}
function closeNav(){document.getElementById('nav').classList.remove('open');document.getElementById('burger').classList.remove('open');}

/* ============================================================
   PLAYER ENGINE
   ============================================================ */
var player={audio:new Audio(),currentTrack:null,isPlaying:false,simTime:0,simDuration:0,simTimer:null};
function parseDuration(str){var p=str.split(':').map(Number);return p[0]*60+(p[1]||0);}
function fmtTime(sec){var m=Math.floor(sec/60);var s=Math.floor(sec%60);return m+':'+(s<10?'0':'')+s;}

function loadAndPlay(track){
  if(player.currentTrack&&player.currentTrack.id===track.id){togglePlayPause();return;}
  playlistQueue=TRACKS;playlistIndex=TRACKS.findIndex(function(t){return t.id===track.id;});_loadTrack(track);
}
function _loadTrack(track){
  clearInterval(player.simTimer);player.audio.pause();
  player.currentTrack=track;player.simTime=0;player.simDuration=parseDuration(track.duration);player.isPlaying=true;
  player.audio.src='audio/'+track.id+'.mp3';player.audio.load();
  player.audio.play().then(function(){clearInterval(player.simTimer);}).catch(function(){startSim();});
  showMiniPlayer(track);updatePlayerUI();updateMpFavBtn();
}
function startSim(){
  clearInterval(player.simTimer);
  player.simTimer=setInterval(function(){
    if(!player.isPlaying)return;player.simTime+=0.5;
    if(player.simTime>=player.simDuration){player.simTime=0;playNext();return;}updateProgress();
  },500);
}
function togglePlayPause(){player.isPlaying=!player.isPlaying;if(player.audio.src){player.isPlaying?player.audio.play():player.audio.pause();}updatePlayerUI();}
function playNext(){
  if(isRepeat&&player.currentTrack){player.simTime=0;player.audio.currentTime=0;if(player.audio.src)player.audio.play().catch(function(){startSim();});else startSim();return;}
  if(playlistQueue.length){_loadTrackByIndex(playlistIndex+1);}
  else{var idx=TRACKS.findIndex(function(t){return player.currentTrack&&t.id===player.currentTrack.id;});loadAndPlay(TRACKS[(idx+1)%TRACKS.length]);}
}
function playPrev(){
  if(player.simTime>3){player.simTime=0;player.audio.currentTime=0;updateProgress();return;}
  if(playlistQueue.length){_loadTrackByIndex(playlistIndex-1);}
  else{var idx=TRACKS.findIndex(function(t){return player.currentTrack&&t.id===player.currentTrack.id;});loadAndPlay(TRACKS[(idx-1+TRACKS.length)%TRACKS.length]);}
}
function restartTrack(){
  player.simTime=0;
  if(player.audio.duration){player.audio.currentTime=0;if(!player.isPlaying){player.isPlaying=true;player.audio.play();updatePlayerUI();}}
  else{if(!player.isPlaying)player.isPlaying=true;startSim();}updateProgress();
}
function toggleRepeat(){isRepeat=!isRepeat;var btn=document.getElementById('mp-repeat');if(btn)btn.classList.toggle('active',isRepeat);}
function showMiniPlayer(track){
  var mp=document.getElementById('mini-player');
  document.getElementById('mp-title').textContent=track.title;
  document.getElementById('mp-artist').textContent=track.artist;
  document.getElementById('mp-dur').textContent=track.duration;
  mp.classList.add('visible');
  updateFsPlayerMeta(track);
}
function updateFsPlayerMeta(track){
  var t=document.getElementById('fs-title');var a=document.getElementById('fs-artist');
  var g=document.getElementById('fs-genre');var d=document.getElementById('fs-dur');
  if(t)t.textContent=track.title;
  if(a)a.textContent=track.artist;
  if(g)g.textContent=track.genre||'';
  if(d)d.textContent=track.duration;
  var artist=ARTISTS.find(function(ar){return ar.id===track.artistId;});
  var info=document.getElementById('fs-artist-info');
  var fsImg=document.getElementById('fs-artist-photo');
  if(fsImg){fsImg.src=artist?artistPhoto(artist.id):'';fsImg.style.display=artist?'':'none';}
  if(info&&artist){
    var desc=getLang(artist.desc);
    info.innerHTML='<div class="fs-artist-info__inner"><img src="'+artistPhoto(artist.id)+'" alt="'+artist.name+'" onerror="this.style.display=\'none\'"/><div><h3>'+artist.name+'</h3><p>'+desc+'</p></div></div>';
  } else if(info){info.innerHTML='';}
}
function updateProgress(){
  var ratio=player.simDuration>0?player.simTime/player.simDuration:0;
  var pct=(ratio*100).toFixed(1)+'%';var cur=fmtTime(player.simTime);
  var f=document.getElementById('progress-fill');var c=document.getElementById('mp-cur');
  if(f)f.style.width=pct;if(c)c.textContent=cur;
  var ff=document.getElementById('fs-progress-fill');var fc=document.getElementById('fs-cur');
  if(ff)ff.style.width=pct;if(fc)fc.textContent=cur;
}
function updatePlayerUI(){
  var p=document.getElementById('mp-play');if(p)p.textContent=player.isPlaying?'⏸':'▶';
  var fp=document.getElementById('fs-play');if(fp)fp.textContent=player.isPlaying?'⏸':'▶';
}

player.audio.addEventListener('timeupdate',function(){if(player.audio.duration){player.simTime=player.audio.currentTime;player.simDuration=player.audio.duration;updateProgress();}});
player.audio.addEventListener('ended',playNext);
player.audio.addEventListener('play',function(){player.isPlaying=true;updatePlayerUI();});
player.audio.addEventListener('pause',function(){player.isPlaying=false;updatePlayerUI();});

/* ============================================================
   DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded',function(){
  document.querySelectorAll('.lang-btn').forEach(function(btn){btn.addEventListener('click',function(){setLang(btn.dataset.lang);});});
  applyTranslations();updateAuthUI();
  document.getElementById('auth-overlay').addEventListener('click',function(e){if(e.target===document.getElementById('auth-overlay'))closeAuthModal();});

  renderPopularTracks();renderNewReleases();renderFeaturedArtists();
  renderGenreFilters();renderAllTracks();renderArtists();renderFavorites();

  document.addEventListener('click',function(e){
    if(e.target&&e.target.classList.contains('playlist-play-all')){
      var ft=favorites.map(function(id){return TRACKS.find(function(tr){return tr.id===id;});}).filter(Boolean);
      if(ft.length)loadQueue(ft,0);
    }
  });

  document.getElementById('search').addEventListener('input',function(e){searchQuery=e.target.value;renderAllTracks();});
  document.getElementById('modal-close').addEventListener('click',closeModal);
  document.getElementById('modal-overlay').addEventListener('click',function(e){if(e.target===document.getElementById('modal-overlay'))closeModal();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeModal();closeAuthModal();}});
  document.getElementById('burger').addEventListener('click',function(){document.getElementById('nav').classList.toggle('open');document.getElementById('burger').classList.toggle('open');});
  document.querySelectorAll('.nav__link').forEach(function(link){link.addEventListener('click',function(e){e.preventDefault();scrollToSection(link.dataset.section);});});
  window.addEventListener('scroll',updateActiveNav,{passive:true});updateActiveNav();

  document.getElementById('mp-play').addEventListener('click',togglePlayPause);
  document.getElementById('mp-next').addEventListener('click',playNext);
  document.getElementById('mp-prev').addEventListener('click',playPrev);

  document.getElementById('mp-repeat').addEventListener('click',toggleRepeat);
  document.getElementById('mp-fav').addEventListener('click',function(){if(player.currentTrack)toggleFavorite(player.currentTrack.id);});
  document.getElementById('mp-close').addEventListener('click',function(){
    player.isPlaying=false;clearInterval(player.simTimer);player.audio.pause();
    document.getElementById('mini-player').classList.remove('visible');
  });
  document.getElementById('progress-bar').addEventListener('click',function(e){
    var rect=e.currentTarget.getBoundingClientRect();var ratio=(e.clientX-rect.left)/rect.width;
    player.simTime=ratio*player.simDuration;
    if(player.audio.duration)player.audio.currentTime=ratio*player.audio.duration;
    updateProgress();
  });
  document.getElementById('artist-tracks').classList.add('hidden');
});
/* ============================================================
   FULLSCREEN PLAYER
   ============================================================ */
function openFsPlayer(){
  var fs=document.getElementById('fs-player');
  if(!player.currentTrack||!fs)return;
  fs.classList.remove('hidden');
  fs.classList.add('animating-in');
  updateFsRepeatBtn();updateMpFavBtn();
  setTimeout(function(){fs.classList.remove('animating-in');},350);
}
function closeFsPlayer(){
  var fs=document.getElementById('fs-player');
  if(!fs)return;
  fs.classList.add('animating-out');
  setTimeout(function(){fs.classList.add('hidden');fs.classList.remove('animating-out');},300);
}
function updateFsRepeatBtn(){
  var btn=document.getElementById('fs-repeat');
  if(btn)btn.classList.toggle('active',isRepeat);
}

document.addEventListener('DOMContentLoaded',function(){
  /* Открытие по клику на название/исполнитель */
  document.getElementById('mp-info-click').addEventListener('click',function(){
    if(player.currentTrack)openFsPlayer();
  });
  /* Закрытие */
  document.getElementById('fs-close').addEventListener('click',closeFsPlayer);
  /* Кнопки fullscreen плеера */
  document.getElementById('fs-play').addEventListener('click',function(){togglePlayPause();});
  document.getElementById('fs-next').addEventListener('click',function(){playNext();});
  document.getElementById('fs-prev').addEventListener('click',function(){playPrev();});
  document.getElementById('fs-fav').addEventListener('click',function(){if(player.currentTrack)toggleFavorite(player.currentTrack.id);});
  document.getElementById('fs-repeat').addEventListener('click',function(){
    toggleRepeat();updateFsRepeatBtn();
  });
  /* Прогресс-бар в fullscreen */
  document.getElementById('fs-progress-bar').addEventListener('click',function(e){
    var rect=e.currentTarget.getBoundingClientRect();
    var ratio=(e.clientX-rect.left)/rect.width;
    player.simTime=ratio*player.simDuration;
    if(player.audio.duration)player.audio.currentTime=ratio*player.audio.duration;
    updateProgress();
  });
  /* Escape закрывает fullscreen */
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){
      var fs=document.getElementById('fs-player');
      if(fs&&!fs.classList.contains('hidden'))closeFsPlayer();
    }
  });
});
