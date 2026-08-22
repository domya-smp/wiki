import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sidebar from './src/generated-sidebar.mjs';

export default defineConfig({
  site: 'https://domya-smp.github.io',
  base: '/wiki',
  integrations: [
    starlight({
      title: 'DomSMP Wiki',
      description: 'Полезная информация, команды и рецепты сервера DomSMP.',
      locales: {
        root: {
          label: 'Русский',
          lang: 'ru',
        },
      },
      customCss: ['./src/styles/custom.css'],
      sidebar,
      lastUpdated: true,
      social: [
        { icon: 'github', label: 'Ethos Wiki', href: 'https://github.com/onitofu/ethos/wiki' },
      ],
    }),
  ],
});
