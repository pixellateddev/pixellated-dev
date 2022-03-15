// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../../sanity'
import slugify from 'slugify'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const { resume } = JSON.parse(req.body)
    try {
    if (!resume._id) {
        delete resume._id
        resume.slug.current = slugify(`${resume.title}-${resume.username.split('@')[0]}`.toLocaleLowerCase())
        await sanityClient.create({
            _type: 'resume',
            ...resume
        })
    }
    else {
        await sanityClient.createOrReplace({
            _type: 'resume',
            ...resume
        })
    }
    } catch (error) {}

    res.status(201).json({message: 'resume_created'})
    
   
}
