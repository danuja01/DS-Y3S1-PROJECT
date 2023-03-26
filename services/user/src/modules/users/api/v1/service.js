import crypto from "crypto";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "../../repository";

import { hashPasswordIfProvided } from "./helpers";

export const serviceCreateUser = async (user) => {
  if (!user.password) user.password = crypto.randomBytes(20).toString("hex");
  await hashPasswordIfProvided(user);
  return createUser(user);
};

export const serviceGetUsers = (filters, sorts, page, limit) => {
  return getAllUsers({ filters, sorts, page, limit });
};

export const serviceGetUserById = (id) => {
  return getUserById(id);
};

export const serviceUpdateUserById = async (id, data) => {
  await hashPasswordIfProvided(data);
  return updateUserById(id, data);
};

export const serviceDeleteUserById = (id) => {
  return deleteUserById(id);
};
