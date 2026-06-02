import { FastifyInstance } from 'fastify'
import prisma from '../plugins/prisma'

export default async function branchRoutes(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    const branches = await prisma.branch.findMany()
    return branches
  })

  fastify.post('/', async (request, reply) => {
    const { name, brand, address, phone } = request.body as any
    const branch = await prisma.branch.create({
      data: { name, brand, address, phone }
    })
    return reply.code(201).send(branch)
  })
}
