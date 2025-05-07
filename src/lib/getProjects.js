import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 's9chf839',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-01-01',
})

export const getProjects = async () => {
  const query = `*[_type == "project" && defined(orderRank)] | order(orderRank){
    _id,
    title,
    description,
    tech,
    github,
    demo,
    upcoming
  }`

  const projects = await client.fetch(query)
  console.log('📦 Fetched projects:', projects)
  return projects
}
