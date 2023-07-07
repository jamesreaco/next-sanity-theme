export const defaultPageBuilderFields = [
  {
    name: 'pageBuilder',
    title: 'Page Builder',
    type: 'array',
    group: 'pageBuilder',
    of: [
      {
        name: 'heroBlock',
        type: 'heroBlock'
      },
      {
        name: 'headerBlock',
        type: 'headerBlock'
      },
      {
        name: 'contentBlock',
        type: 'contentBlock'
      },
      {
        name: 'textBlock',
        type: 'textBlock'
      },
      {
        name: 'latestPostsBlock',
        type: 'latestPostsBlock'
      },
      {
        name: 'latestCaseStudiesBlock',
        type: 'latestCaseStudiesBlock'
      },
      {
        name: 'caseStudyArchiveBlock',
        type: 'caseStudyArchiveBlock'
      }
    ],
  },
]