export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '627e8d040e3f6c00684898e7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-s5vjn2uw',
                  apiId: 'fd66895d-1f73-4b90-9d24-a7e9da9e521c'
                },
                {
                  buildHookId: '627e8d040cb601005672a5c5',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-j1rmo23s',
                  apiId: '60296ca9-f766-445a-9972-7bdc89982543'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tsummerall/sanity-gatsby-portfolio2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-2-web-j1rmo23s.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
