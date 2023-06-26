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
        name: 'latestPostsBlock',
        type: 'latestPostsBlock'
      },
      {
        name: 'latestCaseStudies',
        type: 'latestCaseStudies'
      },
      {
        name: 'caseStudyArchiveBlock',
        type: 'caseStudyArchiveBlock'
      }
    ],
  },
]