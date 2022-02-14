import express from 'express'
import reservationRoutes from './reservation.routes'

const router = express.Router()

router.get('/healthcheck', (_, res) => res.sendStatus(200))

router.use('/reservation', reservationRoutes)

export default router
