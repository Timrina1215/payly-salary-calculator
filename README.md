# Payly — Salary Calculator

Payly is a private salary calculator. It runs entirely in the browser as a normal website and as a Telegram Mini App. Salary figures are never sent to a server.

Calculations:

- Hourly gross per week = hourly rate × hours per week
- Annual income = weekly gross × **52**
- Monthly average = annual income ÷ **12**
- Tax is the percentage you enter. Net = gross − tax

Switching currency changes only the symbol (`$`, `€`, `£`, `₽`). Amounts are not converted.

Languages: English, Russian, French, Arabic. Arabic turns the layout right-to-left.

## Files

Upload these four files to the root of the repository:

- `index.html`
- `style.css`
- `script.js`
- `README.md`

Paths inside the page are relative (`./style.css`, `./script.js`), so the site works on GitHub Pages project sites such as `https://username.github.io/payly/`.

---

## Русский

### 1. Как загрузить проект на GitHub

1. Зарегистрируйтесь или войдите на [github.com](https://github.com).
2. Нажмите **New repository**.
3. Имя, например: `payly`. Репозиторий должен быть **Public** (для бесплатного GitHub Pages на обычном аккаунте).
4. Не добавляйте лишний шаблон, если собираетесь загрузить готовые файлы сами. Создайте репозиторий.
5. Загрузите в **корень** ветки `main` ровно эти файлы: `index.html`, `style.css`, `script.js`, `README.md`.
   - На сайте: **Add file → Upload files**, перетащите файлы и сделайте commit.
   - Или через Git:

```bash
git clone https://github.com/USERNAME/payly.git
cd payly
# скопируйте сюда index.html, style.css, script.js и README.md
git add index.html style.css script.js README.md
git commit -m "Add Payly salary calculator"
git push
```

Файлы должны лежать в корне репозитория, а не в подпапке. Иначе страница не откроется по основному адресу Pages.

### 2. Как включить GitHub Pages

1. Откройте репозиторий на GitHub.
2. **Settings → Pages**.
3. В блоке **Build and deployment** выберите **Source: Deploy from a branch**.
4. Branch: `main`, folder: **`/ (root)`**.
5. Нажмите **Save**.

### 3. Как получить публичный HTTPS URL

Через одну-две минуты GitHub покажет адрес вида:

```text
https://USERNAME.github.io/payly/
```

`USERNAME` — ваш логин, `payly` — имя репозитория. Адрес всегда начинается с `https://`. Откройте его в браузере и проверьте калькулятор. Если страница 404, подождите минуту и убедитесь, что `index.html` лежит в корне выбранной ветки.

### 4. Как использовать этот URL для Telegram Mini App

Скопируйте полный HTTPS-адрес, включая `https://` и завершающий `/`, если он есть. Именно его нужно вставить в BotFather. Локальные адреса и `http://` Telegram не примет.

Если приложение открыто внутри Telegram, страница вызывает `Telegram.WebApp.ready()` и `Telegram.WebApp.expand()` и может подстроить цвета под тему Telegram, пока вы сами не переключили светлую или тёмную тему. В обычном браузере всё работает без Telegram.

### 5. Как подключить Mini App к боту через BotFather

1. В Telegram откройте [@BotFather](https://t.me/BotFather).
2. Если бота ещё нет, отправьте `/newbot`, задайте имя и username, заканчивающийся на `bot`.
3. Отправьте `/newapp`.
4. Выберите своего бота.
5. Название: `Payly`.
6. Краткое описание, например: `Salary calculator`.
7. Загрузите картинку 640×360 и, если попросит, демо-изображение или GIF.
8. В поле **Web App URL** вставьте адрес GitHub Pages, например `https://USERNAME.github.io/payly/`.
9. Задайте короткий адрес (латиницей, без пробелов), например `payly`.

Кнопка меню в чате с ботом:

1. Отправьте BotFather команду `/setmenubutton`.
2. Выберите того же бота.
3. Укажите тот же HTTPS-адрес.
4. Текст кнопки: `Payly`.

Токен бота в эти файлы подставлять не нужно. Его нельзя публиковать в репозитории.

Никакие данные о зарплате никуда не отправляются: расчёт идёт в браузере, а язык, тема и введённые числа хранятся только в `localStorage` на устройстве.

---

## English

### 1. Upload the project to GitHub

1. Sign in at [github.com](https://github.com).
2. Create a **New repository** named, for example, `payly`.
3. Make it **Public** so GitHub Pages is free on a standard account.
4. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the **root** of the `main` branch (Add file → Upload files), or with Git:

```bash
git clone https://github.com/USERNAME/payly.git
cd payly
git add index.html style.css script.js README.md
git commit -m "Add Payly salary calculator"
git push
```

### 2. Turn on GitHub Pages

1. Open the repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Branch: `main`. Folder: **`/ (root)`**.
5. Save.

### 3. Get the public HTTPS URL

After a minute GitHub shows an address like:

```text
https://USERNAME.github.io/payly/
```

Open it and confirm the calculator loads. The URL must be `https`.

### 4. Use that URL as a Telegram Mini App

Copy the full GitHub Pages URL into BotFather. Telegram only accepts public HTTPS links.

Inside Telegram the page calls `Telegram.WebApp.ready()` and `Telegram.WebApp.expand()`, and it can follow Telegram’s color scheme until you pick Light or Dark yourself. Outside Telegram it works as a normal site.

### 5. Connect the Mini App with BotFather

1. Open [@BotFather](https://t.me/BotFather).
2. Create a bot with `/newbot` if you do not have one.
3. Send `/newapp` and select the bot.
4. Title: `Payly`. Add a short description and a 640×360 image.
5. Paste the GitHub Pages URL into **Web App URL**.
6. Choose a short Latin name, for example `payly`.

Optional menu button:

1. Send `/setmenubutton`.
2. Select the bot, paste the same HTTPS URL, and set the button text to `Payly`.

Do not put the bot token in this repository. Salary data stays on the device: the math runs locally, and preferences live in `localStorage` only.
