import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'categories/:categoryId',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => [
      { categoryId: 'angular' },
      { categoryId: 'react' },
      { categoryId: 'nextjs' },
    ],
  },
  {
    path: 'preparation',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
