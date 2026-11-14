import music from './controller/musicController.js'
import health from './controller/healthController.js'
import welcome from './controller/welcomeController.js'

export function addRoutes(api) {
    api.use(health)
    api.use(welcome)
    api.use(music)
}