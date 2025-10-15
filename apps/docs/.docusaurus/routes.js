import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/docs',
    component: ComponentCreator('/docs/docs', '02d'),
    routes: [
      {
        path: '/docs/docs',
        component: ComponentCreator('/docs/docs', '5dc'),
        routes: [
          {
            path: '/docs/docs',
            component: ComponentCreator('/docs/docs', '926'),
            routes: [
              {
                path: '/docs/docs/ci',
                component: ComponentCreator('/docs/docs/ci', '12a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/content',
                component: ComponentCreator('/docs/docs/content', '7f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/persistence',
                component: ComponentCreator('/docs/docs/persistence', '702'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/providers',
                component: ComponentCreator('/docs/docs/providers', '388'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/quickstart',
                component: ComponentCreator('/docs/docs/quickstart', '6b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/tokens',
                component: ComponentCreator('/docs/docs/tokens', '2d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docs/upload',
                component: ComponentCreator('/docs/docs/upload', 'e18'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '2a6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
