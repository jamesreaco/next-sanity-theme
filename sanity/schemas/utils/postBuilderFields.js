export const postBuilderFields = [
  {
    name: 'postBuilder',
    title: 'Post Builder',
    type: 'array',
    group: 'postBuilder',
    of: [
      {
        name: 'postContentBlock',
        type: 'postContentBlock'
      },
      {
        name: 'postQuoteBlock',
        type: 'postQuoteBlock'
      },
    ],
  },
]