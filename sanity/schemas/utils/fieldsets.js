export const fieldsets = [
  {
    name: 'seo',
    title: 'SEO',
  },
  {
    name: 'content',
    title: 'Content'
  },
  {
    name: 'settings',
    title: 'Settings'
  },
  {
    name: 'layout',
    title: 'Layout',
    description: 'Fine-tune the margin for a perfect layout.',
    options: {
      collapsible: true, 
      collapsed: true, 
      columns: 2, 
      modal: {type: 'popover'} 
    }
  }
]