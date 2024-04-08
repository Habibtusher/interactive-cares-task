import express from 'express';
import { OrderContyroller } from './order.controller';

const router = express.Router();

router.get('/', OrderContyroller.getAllFromDB);
router.get('/:id', OrderContyroller.getByIdFromDB);
router.patch('/:id', OrderContyroller.updateIntoDB);
router.delete('/:id', OrderContyroller.deleteFromDB);

router.post('/', OrderContyroller.insertIntoDb);
export const OrdersRoutes = router;
