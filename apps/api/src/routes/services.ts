import { FastifyInstance } from 'fastify'
import prisma from '../plugins/prisma'

export default async function serviceRoutes(fastify: FastifyInstance) {
  fastify.get('/', async (request, reply) => {
    const { branchId } = request.query as any
    const where = branchId ? { branchId } : {}
    const services = await prisma.service.findMany({ where })
    return services
  })

  fastify.post('/', async (request, reply) => {
    const { name, duration, branchId, basePrice } = request.body as any
    const service = await prisma.service.create({
      data: { name, duration, branchId, basePrice }
    })
    return reply.code(201).send(service)
  })
}
