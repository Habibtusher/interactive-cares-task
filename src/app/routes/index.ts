import express from 'express';

import { OrdersRoutes } from '../module/orders/order.routes';

const router = express.Router();

router.use("/orders", OrdersRoutes)

export default router;
