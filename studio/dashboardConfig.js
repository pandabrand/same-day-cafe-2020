export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f7118173bbe86dc19b6ffd1',
                  title: 'Sanity Studio',
                  name: 'same-day-cafe-2020-studio',
                  apiId: '7c062af1-48f2-4d2e-b663-04f18a58b9ec'
                },
                {
                  buildHookId: '5f71181727857678b7d084b2',
                  title: 'Blog Website',
                  name: 'same-day-cafe-2020',
                  apiId: 'f17c55fa-fdef-4f22-b63b-1a596f90ca14'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pandabrand/same-day-cafe-2020',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://same-day-cafe-2020.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
