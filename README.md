# Душный трейдинг | MOEX

Статический лендинг-хаб ссылок (MAX, Telegram) с SEO-метой и встроенными постами канала.

## Локальный просмотр

Из корня проекта:

```bash
npx --yes serve .
```

Или открой `index.html` в браузере. Виджеты Telegram надёжнее работают через локальный HTTP-сервер / HTTPS-хостинг.

## Обновить ленту Telegram

В `main.js` массив `TG_POST_IDS` — ID постов вида `https://t.me/dushTrade/<id>`.

## Деплой

### Netlify

1. [app.netlify.com/drop](https://app.netlify.com/drop) — перетащи папку проекта  
   или подключи Git-репозиторий (publish directory = корень).
2. После деплоя в `sitemap.xml` и `robots.txt` замени `./` на полный URL сайта.
3. В `index.html` обнови `link rel="canonical"` и `og:image` на абсолютный URL.

### GitHub Pages

1. Залей репозиторий на GitHub.
2. Settings → Pages → Source: Deploy from a branch → `main` / root.
3. Сайт будет на `https://<user>.github.io/<repo>/`.
4. Подставь этот URL в `canonical`, OG и sitemap.

## Позже

Когда будут ссылки ВК / Пульс — добавь пункты в блок «Ресурсы» в `index.html`.
