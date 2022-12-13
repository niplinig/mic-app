// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from "@prisma/client";

const prisma : PrismaClient = new PrismaClient()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const postId = req.query.id

  if (req.method === 'DELETE') {
    handleDELETE(postId, res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

async function handleDELETE(postId : any, res: any) {
  const post = await prisma.post.delete({
    where: { id: Number(postId) },
  })
  res.json(post)
}
