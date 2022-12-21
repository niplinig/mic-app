// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";

const prisma : PrismaClient = new PrismaClient()

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
      videoNumber,
      videoName,
      videoStart,
      videoEnd,
      reactionSeconds,
      reactionStart,
      diferenceReaction,
      license,
      age,
      sex,
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
        videoNumber: videoNumber,
        videoName: videoName,
        videoStart: videoStart,
        videoEnd: videoEnd,
        reactionSeconds: reactionSeconds,
        reactionStart: reactionStart,
        diferenceReaction: diferenceReaction,
        license: license,
        age: age,
        sex: sex
      },
    })

    res.status(200).json(result);
  }

}
