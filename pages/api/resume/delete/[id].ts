// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../../../sanity'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
      await sanityClient.delete(req.query.id as string)
      res.status(204).json({status: 'OK'})
    }
    catch (err) {
      console.log(err)
      res.status(500).json({message: 'unable to delete'})
    }
}
