import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrderSerCices } from './order.services';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderSerCices.insertIntoDb(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order placed successfully!',
    data: result,
  });
});
const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await OrderSerCices.getByIdFromDB(parseInt(id));
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order retrieved successfully!',
    data: result,
  });
});
const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderSerCices.getAllFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order retrieved successfully!',
    data: result,
  });
});
const updateIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderSerCices.updateOneInDB(
    parseInt(req.params.id),
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order updated successfully!',
    data: result,
  });
});
const deleteFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderSerCices.deleteFromDB(parseInt(req.params.id));
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order deleted successfully!',
    data: result,
  });
});
export const OrderContyroller = {
  insertIntoDb,
  getByIdFromDB,
  getAllFromDB,
  updateIntoDB,
  deleteFromDB,
};
