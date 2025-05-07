import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

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
            // 👇 Drag-and-drop project ordering
            orderableDocumentListDeskItem({
              type: 'project',
              title: 'Order Projects',
              S,
              context,
            }),
            // 👇 Default document views (optional fallback for other types)
            ...S.documentTypeListItems().filter(
              (listItem) => listItem.getId() !== 'project'
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
