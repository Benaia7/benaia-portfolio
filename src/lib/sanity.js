// src/lib/sanity.js
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 's9chf839',     
  dataset: 'production',            // or your dataset name
  useCdn: true,
  apiVersion: '2023-05-07',        
})
