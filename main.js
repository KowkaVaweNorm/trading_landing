/**
 * ID постов канала @dushTrade для официального Telegram Post Widget.
 * Обновляй список свежими ID (https://t.me/dushTrade/<id>).
 */
const TG_CHANNEL = "dushTrade";
const TG_POST_IDS = [957, 956, 955];

function constrainTelegramIframes(root) {
  root.querySelectorAll("iframe").forEach((iframe) => {
    iframe.style.minWidth = "0";
    iframe.style.maxWidth = "100%";
    iframe.style.width = "100%";
  });
}

function mountTelegramFeed() {
  const root = document.getElementById("tg-feed");
  if (!root) return;

  const observer = new MutationObserver(() => constrainTelegramIframes(root));
  observer.observe(root, { childList: true, subtree: true });

  TG_POST_IDS.forEach((id) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.dataset.telegramPost = `${TG_CHANNEL}/${id}`;
    script.dataset.width = "100%";
    script.dataset.dark = "1";
    root.appendChild(script);
  });

  // Виджеты дописывают min-width: 320px — снимаем после отрисовки
  window.setTimeout(() => constrainTelegramIframes(root), 500);
  window.setTimeout(() => constrainTelegramIframes(root), 2000);
}

function observeResourceStagger() {
  const list = document.querySelector(".link-list");
  if (!list) return;

  if (!("IntersectionObserver" in window)) {
    list.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          list.classList.add("is-visible");
          observer.disconnect();
        }
      });
    },
    { threshold: 0.25 }
  );

  observer.observe(list);
}

document.addEventListener("DOMContentLoaded", () => {
  mountTelegramFeed();
  observeResourceStagger();
});
