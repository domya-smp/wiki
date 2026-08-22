# DomSMP Wiki

Вики сервера на базе Astro Starlight.

## Локальная разработка

```bash
nvm use
npm install
python3 generate.py
npm run dev
```

Сайт откроется по адресу, который напечатает Astro (обычно `http://localhost:4321/wiki/`).

## Проверка production-сборки

```bash
npm run build
npm run preview
```

Содержимое напитков и плагинских крафтов генерируется командой `python3 generate.py`.
