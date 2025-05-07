export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'tech',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'github',
      title: 'GitHub Link',
      type: 'url',
    },
    {
      name: 'demo',
      title: 'Live Demo Link',
      type: 'url',
    },
    {
      name: 'upcoming',
      title: 'Upcoming (hide links)',
      type: 'boolean',
    },
    {
      name: 'orderRank',
      title: 'Order Rank',
      type: 'string', 
      hidden: true,
    },
  ],
}
