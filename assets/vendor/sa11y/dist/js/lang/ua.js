
/*!
  * Sa11y, the accessibility quality assurance assistant.
  * @version 4.0.5
  * @author Adam Chaboryk
  * @license GPL-2.0-or-later
  * @copyright © 2020 - 2025 Toronto Metropolitan University.
  * @contact adam.chaboryk@torontomu.ca
  * GitHub: git+https://github.com/ryersondmp/sa11y.git | Website: https://sa11y.netlify.app
  * For all acknowledgements, please visit: https://sa11y.netlify.app/acknowledgements/
  * The above copyright notice shall be included in all copies or substantial portions of the Software.
**/
var ua = {
  // Ukrainian
  strings: {
    LANG_CODE: 'ua',
    MAIN_TOGGLE_LABEL: 'Перевірка доступності',
    CONTAINER_LABEL: 'Засіб перевірки доступності',
    ERROR: 'Помилка',
    ERRORS: 'Помилки',
    WARNING: 'Попередження',
    WARNINGS: 'Попередження',
    GOOD: 'Добре',
    ON: 'Увімкнено',
    OFF: 'Вимкнено',
    ALERT_TEXT: 'Попередження',
    ALERT_CLOSE: 'Закрити',
    OUTLINE: 'Структура',
    TITLE: 'Назва',
    ALT: 'АЛЬТ',
    IMAGES: 'Зображення',
    EDIT: 'Редагувати',
    NO_IMAGES: 'Зображення не знайдено.',
    DECORATIVE: 'Декоративний',
    MISSING: 'Відсутній',
    PAGE_ISSUES: 'Проблеми зі сторінкою',
    SETTINGS: 'Налаштування',
    DEVELOPER_CHECKS: 'Перевірки розробника',
    DEVELOPER_DESC: 'Перевіряє проблеми, які можуть потребувати знань з програмування для виправлення, такі як атрибути HTML, форми тощо.',
    DARK_MODE: 'Темний режим',
    SHORTCUT_SR: 'Перейти до проблеми. Комбінація клавіш: Option крапка',
    SKIP_TO_ISSUE: 'Перейти до проблеми',
    NEW_TAB: 'Відкривається у новій вкладці',
    LINKED: 'Зв’язаний',
    PANEL_HEADING: 'Перевірка доступності',
    NO_ERRORS_FOUND: 'Помилок не знайдено.',
    WARNINGS_FOUND: 'знайдені попередження.',
    TOTAL_FOUND: 'всього знайдених проблем.',
    NOT_VISIBLE: 'Елемент, який ви намагаєтеся переглянути, не відображується; можливо, він прихований або знаходиться усередині компонента вкладки чи випадаючого списку («акордеону»). Ось попередній перегляд:',
    MISSING_ROOT: 'Було здійснено перевірку доступності всієї сторінки, оскільки цільова область <code>%(root)</code> не існує.',
    MISSING_READABILITY_ROOT: 'Оцінка читабельності базується на вмісті <code>%(fallback)</code>, оскільки цільова область <code>%(root)</code> не існує.',
    HEADING_NOT_VISIBLE: 'Заголовок не видно; він може бути прихованим або всередині акордеона чи вкладки.',
    SKIP_TO_PAGE_ISSUES: 'Перейти до сторінки Проблеми',
    CONSOLE_ERROR: 'Вибачте, але на цій сторінці виникла проблема з перевіркою доступності. Чи можете ви <a href="%(link)">повідомити про це за допомогою цієї форми</a> або на <a href="%(link)">GitHub</a>?',

    // Dismiss
    PANEL_DISMISS_BUTTON: 'Показати %(dismissCount) відхилених',
    DISMISS: 'Відхилити',
    DISMISS_ALL: 'Відхилити все',
    DISMISSED: 'Відхилено',
    DISMISS_REMINDER: 'Будь ласка, зверніть увагу, що попередження лише <strong>тимчасово</strong> відхилені. Очищення історії браузера та кукі-файлів відновить всі попередньо відхилені попередження на всіх сторінках.',

    // Export
    DATE: 'Дата',
    PAGE_TITLE: 'Заголовок сторінки',
    RESULTS: 'Результати',
    EXPORT_RESULTS: 'Експорт результатів',
    GENERATED: 'Результати згенеровані за допомогою %(tool).',
    PREVIEW: 'Перегляд',
    ELEMENT: 'Елемент',
    PATH: 'Шлях',

    // Color filters
    COLOUR_FILTER: 'Фільтр кольорів',
    PROTANOPIA: 'Протанопія',
    DEUTERANOPIA: 'Девтеранопія',
    TRITANOPIA: 'Тританопія',
    MONOCHROMACY: 'Монохромність',
    COLOUR_FILTER_MESSAGE: 'Перевірте наявність елементів, які важко сприйняти або виділити на тлі інших кольорів.',
    RED_EYE: 'Червоний дальтонізм.',
    GREEN_EYE: 'Зелений дальтонізм.',
    BLUE_EYE: 'Синій дальтонізм.',
    MONO_EYE: 'Червона, зелена і синя сліпота.',
    COLOUR_FILTER_HIGH_CONTRAST: 'Кольорові фільтри не працюють у режимі високої контрастності.',

    // Alternative text module stop words
    SUS_ALT_STOPWORDS: ['зображення', 'графічний об’єкт', 'малюнок', 'фото'],
    PLACEHOLDER_ALT_STOPWORDS: ['alt', 'зображення', 'фото', 'декоративне', 'фотографія', 'заповнювач', 'зображення-заповнювач', 'роздільник'],
    PARTIAL_ALT_STOPWORDS: [
      'натиснути',
      'натиснути тут',
      'натиснути тут щоб дізнатися більше',
      'натиснути тут для отримання додаткової інформації',
      'перевірити',
      'завантажити',
      'завантажити тут',
      'дізнатися',
      'дізнатися більше',
      'форма',
      'тут',
      'інфа',
      'інформація',
      'посилання',
      'взнати',
      'взнати більше',
      'вивчити',
      'більше',
      'сторінка',
      'стаття',
      'прочитати більше',
      'читати',
      'читати це',
      'це',
      'ця сторінка',
      'цей вебсайт',
      'переглянути',
      'переглянути наш',
      'вебсайт',
    ],
    CLICK: ['click', 'клацання'],
    NEW_WINDOW_PHRASES: ['зовнішнє', 'нова вкладка', 'нове вікно', 'спливаюче вікно', 'спливаючий елемент'],
    FILE_TYPE_PHRASES: ['документ', 'електронна таблиця', 'розрахункова таблиця', 'стиснутий файл', 'заархівований файл', 'робочий аркуш', 'powerpoint', 'презентація', 'встановити', 'відео', 'аудіо', 'pdf', 'пдф'],

    // Readability
    READABILITY: 'Читабельність',
    AVG_SENTENCE: 'Середня кількість слів в одному реченні:',
    COMPLEX_WORDS: 'Складні слова:',
    TOTAL_WORDS: 'Слова:',
    VERY_DIFFICULT: 'Дуже складно',
    DIFFICULT: 'Складно',
    FAIRLY_DIFFICULT: 'Достатньо складно',
    READABILITY_NO_CONTENT: 'Неможливо визначити показник читабельності. Не знайдено жодного абзацу <code>&lt;p&gt;</code> або вмісту списку <code>&lt;li&gt;</code>.',
    READABILITY_NOT_ENOUGH: 'Недостатньо вмісту для розрахунку оцінки читабельності.',

    // Headings
    HEADING_SKIPPED_LEVEL: 'Заголовки не повинні пропускати рівні або переходити від <strong>Заголовка %(PREV_LEVEL)</strong> до <strong {C}>Заголовка %(LEVEL)</strong>, оскільки це порушує порядок і ієрархію контенту, що ускладнює його сприйняття. <hr> Якщо <strong {C}>%(HEADING)</strong> належить до секції <strong>%(PREV_HEADING)</strong>, розгляньте можливість форматування його як <strong>Заголовок %(LEVEL)</strong>.',
    HEADING_EMPTY: 'Знайдено порожній заголовок! Щоб виправити, видаліть цей рядок або змініть його формат: замість <strong {C}>Заголовок %(level)</strong> оберіть <strong>Звичайний</strong> або <strong>Абзац</strong>.',
    HEADING_LONG: 'Заголовки задовгі! Заголовки слід використовувати для організації змісту та передачі структури. Вони мають бути короткими, інформативними та унікальними. Будь ласка, не виходьте за %(MAX_LENGTH) символів (не більше одного речення). <hr> <strong {B}>%(HEADING_LENGTH) Символів</strong>',
    HEADING_FIRST: 'Першим заголовком на сторінці зазвичай повинен бути Заголовок 1 або Заголовок 2. Заголовок 1 має бути початком частини основного змісту та є основним заголовком, що описує загальну мету сторінки. Дізнайтеся більше про <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">структуру заголовків.</a>',
    HEADING_MISSING_ONE: 'Відсутній Заголовок 1. Заголовок 1 повинен бути початком області основного змісту та є основним заголовком, який описує загальну мету сторінки. Дізнайтеся більше про <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">структуру заголовків.</a>',
    HEADING_EMPTY_WITH_IMAGE: 'Заголовок не має тексту, але містить зображення. Якщо це не заголовок, змініть його формат: замість <strong {C}>Заголовок %(level)</strong> поставте <strong>Звичайний</strong> або <strong>Абзац</strong>. В іншому разі додайте текст заміщення до зображення, якщо воно не є декоративним.',
    PANEL_HEADING_MISSING_ONE: 'Відсутній заголовок 1!',
    PANEL_NO_HEADINGS: 'Заголовки не знайдено.',

    // Links
    LINK_EMPTY: 'Видаліть пусті посилання без тексту.',
    LINK_EMPTY_LABELLEDBY: 'Лінк має значення для <code>aria-labelledby</code>, яке є порожнім або не відповідає значенню атрибута <code>id</code> іншого елемента на сторінці.',
    LINK_EMPTY_NO_LABEL: 'Посилання не має тексту для розпізнавання, який є видимим для читання з екрана та інших допоміжних технологій. Щоб виправити: <ul><li>Додайте короткий текст, який описує куди веде посилання.</li><li>У разі коли це посилання на <a href="https://a11y-101.com/development/icons-and-links">іконку або SVG, то, швидше за все, відсутній опис.</a></li><li>Якщо ви вважаєте, що це помилкове посилання викликане сбоєм копіювання/вставки, розгляньте його видалення.</li></ul>',
    LINK_STOPWORD: 'Текст посилання може бути недостатньо описовим без контексту: <strong {C}>%(ERROR)</strong>',
    LINK_STOPWORD_ARIA: 'Хоча надано доступне ім’я, розгляньте можливість перегляду видимого тексту посилання. Фрази, такі як &quot;<strong {C}>%(ERROR)</strong>&quot;, не мають сенсу.',
    LINK_TIP: '<hr> <strong>Порада!</strong> Використовуйте чіткий і унікальний текст посилання, що описує призначення посилання, зазвичай заголовок сторінки або документа.',
    LINK_CLICK_HERE: 'Фраза "клікнути" або "клікніть тут" фокусується на механіці миші, хоча багато людей не використовують мишу або можуть переглядати цей сайт на мобільному пристрої. Розгляньте можливість використання іншого дієслова, яке пов’язане із завданням.',
    DUPLICATE_TITLE: 'Атрибут <code>title</code> для посилань і зображень призначений для надання додаткової інформації і має бути <strong>відмінним</strong> від тексту або альтернативного тексту. Текст заголовка з’являється при наведенні миші на елемент, але він недоступний за допомогою клавіатури або сенсорного введення. Розгляньте можливість <a href="https://www.a11yproject.com/posts/title-attributes/">повністю уникати атрибуту title.</a>',
    LINK_SYMBOLS: 'Уникайте використання символів як закликів до дії в тексті посилання, якщо вони не приховані від допоміжних технологій. Екранні читачі можуть прочитати символи вголос, що може заплутати. Розгляньте можливість їх видалення: <strong {C}>%(ERROR)</strong>',
    LINK_URL: 'Довгі, менш розбірливі URL-адреси, які використовуються як текст посилання, можуть бути складними для прослуховування з використанням допоміжних технологій. У більшості випадків замість URL краще використовувати текст, придатний для читання людиною. Короткі URL-адреси (такі як  домашня сторінка сайту) цілком допустимі.',
    LINK_DOI: 'Для веб-сторінок або ресурсів, доступних лише в Інтернеті, посібник зі <a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">стилю APA</a> рекомендує використовувати описові посилання, обгортаючи URL-адресу або DOI роботи навколо її назви. Довгі, менш розбірливі URL-адреси, які використовуються як текст посилання, можуть бути складними для прослуховування з використанням допоміжних технологій.',
    LINK_NEW_TAB: 'Посилання відкривається у новій вкладці або вікні без попередження. Це може дезорієнтувати, особливо людей, які мають труднощі зі сприйняттям візуального контенту. До того ж, не завжди добре контролювати чийсь досвід чи приймати рішення за іншу особу. У тексті посилання вказуйте, що посилання відкривається у новому вікні. <hr> <strong>Порада!</strong> Вивчіть найкращі практики: <a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">відкриття посилань у нових вікнах та вкладках браузера.</a>',
    LINK_FILE_EXT: 'Посилання вказує на PDF або файл, що завантажується (наприклад, MP3, Zip, Word Doc) без попередження. Вкажіть тип файлу у тексті посилання. Якщо це великий файл, вкажіть його розмір. <hr> <strong>Приклад:</strong> Виконавчий звіт (PDF, 3 МБ)',
    LINK_IDENTICAL_NAME: 'Посилання має той самий текст, що й інше посилання, але вказує на іншу сторінку. Декілька посилань з однаковим текстом можуть заплутати людей, які використовують програми для читання з екрана. <strong>Розгляньте можливість зробити наступне посилання більш описовим, щоб відрізнити його від інших посилань.</strong> <hr> <strong {B}>Доступне ім\'я</strong> <strong {C}>%(TEXT)</strong>',

    // Images
    MISSING_ALT_LINK_HAS_TEXT: 'Зображення використовується як посилання з оточуючим текстом, хоча атрибут текст заміщення повинен бути позначений як декоративний або нульовий.',
    MISSING_ALT_LINK: 'Зображення використовується як посилання, але відсутній текст заміщення! Переконайтеся, що текст заміщення описує, куди веде посилання.',
    MISSING_ALT: 'Відсутній текст заміщення! Якщо зображення передає історію, настрій або важливу інформацію, обов\'язково опишіть його.',
    LINK_ALT_FILE_EXT: 'Знайдено розширення файлу в текст заміщенняі. Переконайтеся, що текст заміщення описує місце призначення посилання, а не надає дослівний опис зображення. Видалити: <strong {C}>%(ERROR)</strong>. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_PLACEHOLDER_ALT: 'Виявлено не описовий або заповнюючий текст заміщення усередині зв\'язаного зображення. Переконайтеся, що текст заміщення визначає місце призначення посилання, а не надає дослівний опис зображення. Замініть наступний текст. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_SUS_ALT: 'Допоміжні технології вже вказують, що це зображення, тому &quot;<strong {C}>%(ERROR)</strong>&quot; можуть бути зайвими. Переконайтеся, що текст заміщення описує місце призначення посилання, а не надає дослівний опис зображення. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    ALT_FILE_EXT: 'Знайдено розширення файлу в текст заміщенняі. Якщо зображення передає історію, настрій або важливу інформацію, обов\'язково опишіть його. Видалити: <strong {C}>%(ERROR)</strong> <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    ALT_PLACEHOLDER: 'Виявлено не описовий або заповнюючий текст заміщення. Замініть наступний текст заміщення чимось більш значущим. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    SUS_ALT: 'Допоміжні технології вже вказують, що це зображення, тому &quot;<strong {C}>%(ERROR)</strong>&quot; можуть бути зайвими. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_NO_ALT_TEXT: 'Зображення у посиланні позначене як декоративне, а текст посилання відсутній. Будь ласка, додайте до зображення текст заміщення, який визначає місце призначення посилання.',
    LINK_IMAGE_TEXT: 'Зображення позначене як декоративне, хоча посилання використовує навколишній текст як описову назву.',
    LINK_IMAGE_LONG_ALT: 'Опис текст заміщенняу на пов\'язаному зображенні <strong>занадто довгий.</strong> текст заміщення на пов\'язаних зображеннях повинен вказувати, куди веде посилання, а не містити дослівний опис зображення. <strong>Розгляньте можливість використання заголовка сторінки в якості текст заміщенняу, яку веде посилання.</strong> <hr> {ALT} {L} <strong {B}>%(altLength) Символів</strong> <strong {C}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_ALT: 'Посилання на зображення містить альтернативний текст. <strong>Чи описує альтернативний текст, куди веде посилання?</strong> Подумайте про використання назви сторінки, на яку веде посилання, в якості альтернативного тексту. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_ALT_AND_TEXT: 'Посилання на зображення містить як текст заміщення, так і <strong>текст навколишнього посилання.</strong> Якщо зображення є декоративним і використовується як функціональне посилання на іншу сторінку, розгляньте можливість помітити зображення як декоративне або нульове ‒ тексту навколишнього посилання має бути достатньо. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong> <hr> <strong {B}>Доступне ім\'я</strong> {L} <strong {C}>%(TEXT)</strong>',
    IMAGE_FIGURE_DECORATIVE: 'Зображення позначене як <strong>декоративне</strong> та буде проігноровано допоміжними технологіями. <hr> Незважаючи на наявність підпису, у більшості випадків зображення також повинно містити текст заміщення. <ul><li>текст заміщення повинен містити короткий опис того, що зображенно.</li><li>Підпис зазвичай повинен надавати контекст, щоб встановити зв’язок зображення з навколишнім змістом, або привернути увагу до певної інформації.</li></ul> Дізнайтесь більше: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">: alt (текст заміщення) в порівнянні з figcaption (підписом).</a>',
    IMAGE_FIGURE_DUPLICATE_ALT: 'Не використовуйте однакові слова для текст заміщенняу та підпису. Пристрої читання з екрана будуть зчитувати їх двічі. <ul><li>текст заміщення повинен містити короткий опис того, що зображенно.</li><li>Підпис зазвичай повинен надавати контекст, щоб встановити зв’язок зображення з навколишнім змістом, або привернути увагу до певної інформації.</li></ul> Дізнайтесь більше: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">: alt (текст заміщення) в порівнянні з figcaption (підписом).</a> <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    IMAGE_DECORATIVE: 'Зображення позначене як <strong>декоративне</strong> та буде проігноровано допоміжними технологіями. Якщо зображення передає історію, настрій або важливу інформацію, переконайтесь, що до нього додано текст заміщення.',
    IMAGE_DECORATIVE_CAROUSEL: 'Зображення позначене як декоративне, але всі зображення в каруселі або галереї повинні містити описовий альтернативний текст, щоб забезпечити рівноцінний досвід для всіх.',
    IMAGE_ALT_TOO_LONG: 'Опис текст заміщенняу задовгий. текст заміщення має бути коротким, але змістовним, як твіт (близько 100 символів). Якщо це складне зображення або діаграма, подумайте про те, щоб помістити довгий опис зображення в текст нижче або в компонент випадаючого списку (акордеону). <hr> {ALT} <strong {B}>%(altLength) Символів</strong> <strong {C}>%(ALT_TEXT)</strong>',
    IMAGE_PASS: '{ALT} %(ALT_TEXT)',

    // Labels
    LABELS_MISSING_IMAGE_INPUT: 'На кнопці зображення не вистачає текст заміщенняу. Будь ласка, додайте текст заміщення, щоб надати доступну назву. Наприклад: <em>Пошук</em> або <em>Подати</em>.',
    LABELS_INPUT_RESET: 'Кнопки перезавантаження не слід використовувати без необхідності, оскільки їх легко активувати помилково. <hr> <strong>Порада!</strong> Дізнайтеся, чому <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">кнопки перезавантаження та відміни викликають проблеми зі зручністю використання.</a>',
    LABELS_ARIA_LABEL_INPUT: 'Введення має доступне ім\'я, проте, будь ласка, переконайтеся, що у нього є видимий підпис. <hr> <strong {B}>Доступне ім\'я</strong> <strong {C}>%(TEXT)</strong>',
    LABELS_NO_FOR_ATTRIBUTE: 'Із цим введенням не пов\'язана жодна назва. Додайте атрибут <code>for</code> що відповідає ідентифікатору цього входу. <hr> <strong {B}>ID</strong> <strong {C}>#%(id)</strong>',
    LABELS_MISSING_LABEL: 'Із цим введенням не пов\'язана жодна назва. Будь ласка, додайте <code>id</code> до цього введення та додайте відповідний атрибут <code>for</code> до назви.',
    LABELS_PLACEHOLDER: 'Текст зниклого заповнювача ускладнює людям запам’ятати, яка інформація належить до поля, і ускладнює ідентифікацію та виправлення помилок. Натомість розгляньте можливість використання постійно видимого підказки перед полем форми. <hr> Дізнайтеся більше: <a href="https://www.nngroup.com/articles/form-design-placeholders/">Заповнювачі у полях форм шкідливі.</a>',

    // Embedded content
    EMBED_VIDEO: 'Будь ласка, переконайтеся, що всі <strong>відеоматеріали мають приховані титри.</strong> Надання титрів для всіх аудіо- та відеоматеріалів є обов\'язковою вимогою рівня А. Титри допомагають людям з порушенням слуху або глухотою.',
    EMBED_AUDIO: 'Будь ласка, забезпечте транскрипцію всіх подкастів. Надання розшифровки аудіоконтенту є обов\'язковою вимогою рівня А. Транскрипція допомагає людям з порушенням слуху або глухотою, але можуть бути корисні всім. Розгляньте можливість розміщення транскрипції нижче або всередині випадаючого списку (акордеону).',
    EMBED_DATA_VIZ: 'Віджети візуалізації даних, подібні до цього, часто викликають труднощі у людей, які використовують клавіатуру або програму читання з екрана для навігації, і можуть становити значні труднощі для людей із слабким зором або дальтоніків. Рекомендується надавати ту саму інформацію в альтернативному (текстовому або табличному) форматі під віджетом. <hr> Дізнайтеся більше про <a href="https://www.w3.org/WAI/tutorials/images/complex/"> комплексні зображення.</a>',
    EMBED_MISSING_TITLE: 'Вбудований контент потребує доступної назви, що описує його вміст. Вкажіть унікальний заголовок (<code>title</code>) або атрибут <code>aria-label</code> на елементі <code>iframe</code>. Дізнайтесь більше про <a href="https://web.dev/learn/accessibility/more-html#iframes">iFrames.</a>',
    EMBED_GENERAL: 'Неможливо перевірити вбудований вміст. Будь ласка, переконайтеся, що зображення мають текст заміщення, до відео є титри, текст має достатній контраст, а інтерактивні <a href="https://webaim.org/techniques/keyboard/">компоненти доступні для клавіатури.</a>',
    EMBED_UNFOCUSABLE: '<code>&lt;iframe&gt;</code> з елементами, на які не можна фокусуватися, не повинен мати <code>tabindex="-1"</code>. Вбудований вміст не буде доступний за допомогою клавіатури.',

    // QA
    QA_BAD_LINK: 'Знайдено неякісне посилання. Схоже, що посилання вказує на середовище розробки. <hr> {L} <strong {C}>%(LINK)</strong>',
    QA_IN_PAGE_LINK: 'Пошкоджений посилання в межах сторінки. Ціль посилання не відповідає жодному елементу на цій сторінці.',
    QA_STRONG_ITALICS: 'Теги жирним шрифтом і курсивом мають змістовне значення і <strong>не</strong> повинні використовуватися для виділення цілих абзаців. Жирний текст слід використовувати для виділення слова або фрази. Курсив слід використовувати для виділення власних назв (наприклад, назв книг і статей), іноземних слів, цитат. Довгі цитати слід оформлювати як блокові цитати.',
    QA_PDF: 'Неможливо перевірити PDF-файли на доступність. PDF-файли вважаються веб-контентом і повинні бути доступні. PDF-файли часто створюють проблеми для користувачів програм читання з екрана (відсутні структурні теги або відсутні мітки полів форми) і для людей зі слабким зором (текст не розгортається під час збільшення). <ul><li>Якщо це форма, розгляньте можливість використання доступної HTML-форми у якості альтернативи.</li><li>Якщо це документ, розгляньте можливість перетворення його на веб-сторінку.</li></ul> В іншому випадку, перевірте <a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">файли PDF на доступність у Acrobat DC.</a>',
    QA_DOCUMENT: 'Не вдалося перевірити документ на доступність. Документи, на які є посилання, вважаються веб-вмістом і також повинні бути доступними. Будь ласка, перегляньте цей документ вручну. <ul><li>Зробіть <a href="https://support.google.com/docs/answer/6199477?hl=uk">документ або презентацію в Google Workspace більш доступною.</a></li><li>Зробіть <a href="https://support.microsoft.com/uk-ua/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">документи Office більш доступними.</a></li></ul>',
    QA_BLOCKQUOTE: 'Це заголовок? <strong {C}>%(TEXT)</strong> <hr> Блок-цитати слід використовувати лише для цитат. Якщо це задумано як заголовок, змініть блокову цитату на змістовний заголовок (наприклад, Заголовок 2 або Заголовок 3).',
    QA_FAKE_HEADING: 'Це заголовок? <strong {C}>%(TEXT)</strong> <hr> Рядок жирного або великого тексту може виглядати як заголовок, але хтось, але людина, яка використовує програму читання з екрана, не зможе визначити його важливість або перейти до його змісту. Жирний або великий текст ніколи не повинен замінювати семантичні заголовки (від заголовка 2 до заголовка 6).',
    QA_FAKE_LIST: 'Ви намагаєтесь створити список? Знайдено можливий елемент списку: <strong {C}>%(firstPrefix)</strong> <hr> Переконайтеся, що ви використовуєте змістовні списки, вживаючи маркування або нумерацію. У разі використання змістовного списку допоміжні технології можуть передавати таку інформацію, як загальна кількість елементів та відносне положення кожного елемента у списку. Дізнайтесь більше про <a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists">змістовні списки.</a>',
    QA_UPPERCASE: 'Знайдено  текст великими літерами. Деякі програми читання з екрана можуть інтерпретувати текст, написаний великими літерами, як абревіатуру і читати кожну літеру окремо. Крім того, деяким людям важче читати текст, написаний великими літерами, і він може виглядати як КРИК.',
    QA_UNDERLINE: 'Підкреслений текст можна переплутати з посиланнями. Розгляньте можливість використання іншого стилю, наприклад &lt;strong&gt;<strong>сильного акценту</strong>&lt;/strong&gt; або &lt;em&gt;<em>наголос</em>&lt;/em&gt;.',
    QA_SUBSCRIPT: 'Параметри форматування нижнього та верхнього індексу слід використовувати лише для зміни положення тексту відповідно до друкарських угод або стандартів. Його <strong>не</strong> слід використовувати лише для презентації чи зовнішнього вигляду. Форматування цілих речень створює проблеми з читабельністю. Відповідні випадки використання включатимуть відображення степеня, порядкових номерів, наприклад 4<sup>th</sup> замість четвертого, і хімічних формул (H<sub>2</sub>O).',
    QA_NESTED_COMPONENTS: 'Уникайте вкладення інтерактивних компонентів макета, таких як розміщення акордеонів всередині вкладок або вкладок всередині акордеонів. Це може ускладнити навігацію, збільшити когнітивне навантаження та призвести до ігнорування вмісту.',
    QA_JUSTIFY: 'Уникайте використання вирівняного тексту, який вирівнюється як по лівому, так і по правому полю. Це може бути складно для читання деяким людям через нерівномірні проміжки між словами. Використовуйте текст, вирівняний по лівому краю, для кращої читабельності.',
    QA_SMALL_TEXT: 'Маленький текст важче читати, особливо для людей зі слабким зором. Щоб забезпечити кращу читабельність, уникайте використання шрифтів, менших за стандартний розмір.',

    // Shared
    ACC_NAME: '<strong {B}>Доступне ім\'я</strong> %(TEXT)',
    ACC_NAME_TIP: '<hr><strong>Порада!</strong> "Доступна назва" - це остаточна мітка, яка передається людям, які використовують допоміжні технології, і яка обчислюється ARIA. Це допомагає їм зрозуміти мету посилання або кнопки.',
    HIDDEN_FOCUSABLE: 'Посилання або кнопка мають <code>aria-hidden=&quot;true&quot;</code>, але все одно можуть отримувати фокус через клавіатуру. Якщо ви хочете приховати дубльоване посилання або кнопку, додайте також <code>tabindex=&quot;-1&quot;</code>. В іншому випадку атрибут <code>aria-hidden=&quot;true&quot;</code> не слід використовувати на елементах, які можуть отримати фокус. <hr> Дізнайтеся більше про <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden">атрибут aria-hidden.</a>',

    // Developer
    DUPLICATE_ID: 'Виявлено <strong>дублікат ID</strong>. Відомо, що помилки дублювання ID можуть викликати проблеми для допоміжних технологій, коли вони намагаються взаємодіяти із вмістом. Будь ласка, видаліть або змініть наступний ідентифікатор. <hr> <strong {B}>ID</strong> <strong {C}>#%(id)</strong>',
    UNCONTAINED_LI: 'Всі елементи списку <code>&lt;li&gt;</code> повинні бути розміщені всередині елементів <code>&lt;ul&gt;</code> неупорядкованих або <code>&lt;ol&gt;</code> упорядкованих. Ця структура допомагає читачам екрана точно оголошувати список та його елементи.',
    TABINDEX_ATTR: 'Елемент не повинен мати атрибут <code>tabindex</code>, більший за 0.',

    // Meta checks
    META_LANG: 'Мова сторінки не вказана! Будь ласка, <a href="https://www.w3.org/International/questions/qa-html-language-declarations">вкажіть мову в тезі HTML.</a>',
    META_TITLE: 'Відсутня назва сторінки! <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title">Укажіть назву сторінки.</a>',
    META_SCALABLE: 'Видаліть параметр <code>user-scalable="no"</code> у <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag">мета-тезі перегляду</a>, щоб дозволити масштабування.',
    META_MAX: 'Переконайтеся, що параметр <code>maximum-scale</code> у <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag">мета-тезі перегляду</a> не менший за 2.',
    META_REFRESH: 'Сторінка не повинна автоматично оновлюватися за допомогою мета-тегу.',

    // Buttons
    BTN_EMPTY: 'Кнопка не має доступного імені, яке описує її призначення.',
    BTN_EMPTY_LABELLEDBY: 'Кнопка має значення <code>aria-labelledby</code>, яке є порожнім або не відповідає значенню <code>id</code> іншого елемента на сторінці.',
    BTN: 'кнопка',
    BTN_TIP: 'Дізнайтеся, як зробити <a href="https://www.sarasoueidan.com/blog/accessible-icon-buttons/">доступну кнопку.</a>',
    BTN_ROLE_IN_NAME: 'Не включайте слово "кнопка" в ім’я кнопки. Екранні зчитувачі вже передають роль елемента, крім його імені.',
    LABEL_IN_NAME: 'Текст, який видно для цього елемента, здається іншим, ніж доступне ім’я, що може спричинити плутанину для користувачів технологій доступності. Будь ласка, перевірте: <hr> <strong {B}>Доступне ім’я</strong> <strong {C}>%(TEXT)</strong>',

    // Tables
    TABLES_MISSING_HEADINGS: 'Відсутні заголовки таблиць! Доступні таблиці потребують HTML-розмітки, яка вказує на клітинки заголовків та клітинки даних, визначаючи їх взаємозв\'язок. Ця інформація надає контекст для людей, які використовують допоміжні технології. Таблиці слід використовувати лише для табличних даних. <hr> Дізнайтеся більше про <a href="https://www.w3.org/WAI/tutorials/tables/">доступні таблиці.</a>',
    TABLES_SEMANTIC_HEADING: 'Семантичні заголовки, такі як Заголовок 2 або Заголовок 3, слід використовувати лише для розділів вмісту; над таблицях HTML. Вказуйте заголовки таблиць за допомогою елемента <code>&lt;th&gt;</code>. <hr> Дізнайтеся більше про <a href="https://www.w3.org/WAI/tutorials/tables/">доступні таблиці.</a>',
    TABLES_EMPTY_HEADING: 'Знайдено порожній заголовок таблиці! Заголовки таблиць ніколи не повинні бути порожніми. Важливо позначати заголовки рядків та/або стовпців, щоб передавати їх зв\'язок. Ця інформація забезпечує контекст для людей, які використовують допоміжні технології. Пам\'ятайте, що таблиці слід використовувати лише для табличних даних. Дізнайтеся більше про доступні таблиці. <hr> Дізнайтеся більше про <a href="https://www.w3.org/WAI/tutorials/tables/">доступні таблиці.</a>',

    // Contrast
    CONTRAST_ERROR: 'Текст має недостатній контраст з фоном, що ускладнює його читання.',
    CONTRAST_WARNING: 'Контраст цього тексту невідомий і потребує ручної перевірки. Переконайтесь, що текст та фон мають сильний контраст.',
    CONTRAST_ERROR_GRAPHIC: 'Графіка не має достатнього контрасту з фоном, що ускладнює її сприйняття.',
    CONTRAST_WARNING_GRAPHIC: 'Контраст цієї графіки невідомий і потребує ручної перевірки. Переконайтесь, що графіка та фон мають сильний контраст.',
    CONTRAST_OPACITY: 'Збільште непрозорість для покращення видимості.',
    CONTRAST_APCA: 'Це не забезпечує достатній контраст для жодного розміру тексту. Розгляньте можливість використання цієї комбінації кольору та розміру тексту?',
    CONTRAST_COLOR: 'Розгляньте можливість використання цього кольору замість?',
    CONTRAST_SIZE: 'Розгляньте можливість збільшення розміру тексту для цієї комбінації кольорів?',
    CONTRAST_PLACEHOLDER: 'Текст у цьому полі введення не має достатнього контрасту з фоном, що ускладнює його читання.',
    CONTRAST_INPUT: 'Текст у цьому полі введення не має достатнього контрасту з фоном, що ускладнює його читання.',
    CONTRAST: 'Контраст',
    UNKNOWN: 'Невідомо',
    LARGE_TEXT: 'Великий текст',
    BODY_TEXT: 'Текст тіла',
    FG: 'Передній план',
    BG: 'Фон',
    NON_TEXT: 'Не-текст',
  },
};

export { ua as default };
