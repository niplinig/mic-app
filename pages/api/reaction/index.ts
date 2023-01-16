// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient()

// POST /api

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  /*   await NextCors(req, res, {
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: '*',
      optionsSuccessStatus: 200,
    }) */

  /*   if (req.method === 'GET') {
  
      const result = await prisma.post.findMany();
      console.table(result);
      res.status(200).json(result);
  
    } */

  if (req.method === 'POST') {

    const {
      age,
      sex,
      license,
      videoStart,
      reactionSeconds,
      reactionStart,
      videoEnd,
      videoNumber,
      videoName,
      diferenceReaction,
    } = req.body

    /** Example to test the API {
         "videoStart": "test",
         "videoEnd": "test",
         "reactionStart": "test",
         "reactionEnd": "test",
         "age": 123,
         "sex": "test"
       }
     */
    const result = await prisma.post.create({
      data: {
        age: age,
        sex: sex,
        license: license,
        videoStart: videoStart,
        reactionSeconds: reactionSeconds,
        reactionStart: reactionStart,
        videoEnd: videoEnd,
        videoNumber: videoNumber,
        videoName: videoName,
        diferenceReaction: diferenceReaction,
      },
    })

    res.status(200).json(result);
  }

}
