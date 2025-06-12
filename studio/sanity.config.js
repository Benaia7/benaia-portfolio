import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'         
import { visionTool } from '@sanity/vision'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'benaia-portfolio',

  projectId: 's9chf839',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            orderableDocumentListDeskItem({
              type: 'project',
              title: 'Order Projects',
              S,
              context,
            }),
            S.documentTypeListItem('project').title('All Projects'),
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== 'project'
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
