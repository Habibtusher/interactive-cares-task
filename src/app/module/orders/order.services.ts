import { Order, Prisma } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { prismaClient } from '../../../helpers/prismaClient';

const insertIntoDb = async (
  payload: Prisma.OrderCreateInput
): Promise<Order> => {
  const result = await prismaClient.order.create({ data: payload });
  return result;
};
const getAllFromDB = async (): Promise<Order[] | null> => {
  const result = await prismaClient.order.findMany();
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Order not found');
  }
  return result;
};
const getByIdFromDB = async (id: number): Promise<Order | null> => {
  const result = await prismaClient.order.findUnique({
    where: {
      id,
    },
  });
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Order not found');
  }
  return result;
};

const updateOneInDB = async (
  id: number,
  payload: Prisma.OrderUpdateInput
): Promise<Order> => {
  const result = await prismaClient.order.update({
    where: {
      id,
    },
    data: payload,
  });
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Order not found');
  }
  return result;
};

const deleteFromDB = async (id: number): Promise<Order> => {
  const result = await prismaClient.order.delete({
    where: {
      id,
    },
  });
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Order not found');
  }
  return result;
};
export const OrderSerCices = {
  insertIntoDb,
  getByIdFromDB,
  getAllFromDB,
  deleteFromDB,
  updateOneInDB,
};
