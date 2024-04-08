import express from 'express';

import { OrdersRoutes } from '../module/orders/order.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/orders",
    route: OrdersRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, router.route));
export default router;
