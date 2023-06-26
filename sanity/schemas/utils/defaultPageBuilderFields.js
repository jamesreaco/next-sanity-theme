export const defaultPageBuilderFields = [
  {
    name: 'pageBuilder',
    title: 'Page Builder',
    type: 'array',
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
        name: 'textBlock',
        type: 'textBlock'
      },
      {
        name: 'latestPosts',
        type: 'latestPosts'
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