import { ClientConfig, createClient } from 'next-sanity'
import ImageUrlBuilder from '@sanity/image-url'

export const config: ClientConfig = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    useCdn: process.env.NODE_ENV === "production",
    token: process.env.SANITY_API_TOKEN,
    apiVersion: 'v1'
}


const imageBuilder = ImageUrlBuilder(config)
export const sanityClient = createClient(config)


export const urlFor = (source: any) => imageBuilder.image(source)