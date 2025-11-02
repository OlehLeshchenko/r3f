// src/lib/fontAssets.js

// Через new URL — це змушує Vite включити файли у білд
export const notoSansRegularJson = new URL(
    './assets/fonts/NotoSans/NotoSans-Regular.json',
    import.meta.url
).href;

export const notoSansBoldJson = new URL(
    './assets/fonts/NotoSans/NotoSans-Bold.json',
    import.meta.url
).href;

export const notoSansRegularPng = new URL(
    './assets/fonts/NotoSans/NotoSans-Regular.png',
    import.meta.url
).href;

export const notoSansBoldPng = new URL(
    './assets/fonts/NotoSans/NotoSans-Bold.png',
    import.meta.url
).href;

// Можеш також зробити об’єкт:
export const notoSans = {
    regular: { json: notoSansRegularJson, png: notoSansRegularPng },
    bold: { json: notoSansBoldJson, png: notoSansBoldPng }
};
