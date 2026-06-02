import Fastify from 'fastify'
import cors from '@fastify/cors'
import branchRoutes from './routes/branches'
import serviceRoutes from './routes/services'

const fastify = Fastify({
  logger: true
})

fastify.register(cors, {
  origin: true
})

fastify.register(branchRoutes, { prefix: '/api/branches' })
fastify.register(serviceRoutes, { prefix: '/api/services' })

fastify.get('/api/health', async function handler (request, reply) {
  return { status: 'ok' }
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
