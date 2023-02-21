import Fastify from 'fastify'

const fastify = Fastify({
  logger: true
})

fastify.get('/', async res => {
  return { success: true }
})

fastify.listen({ port: 3000 }, err => {
  if (err) {
    throw err
  }
})
