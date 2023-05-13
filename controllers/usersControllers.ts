import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();

  res.json({ users });
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({
      msg: `User ${id} doesn't exists`,
    });
  }
};

export const postUser = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const emailExists = await User.findOne({
      where: {
        email: body.email,
      },
    });

    if (emailExists) {
      return res.status(400).json({
        msg: `Email ${body.email} exists`,
      });
    }
    const user = User.build(body);
    await user.save();
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "contact support",
    });
  }
};

export const putUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        msg: `Id ${id} doesn't exists`,
      });
    }

    await user.update(body);
    res.json({ user });
  } catch (error) {
    res.status(500).json({
      msg: `Contact support`,
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (!user) {
    return res.status(404).json({
      msg: `Id ${id} doesn't exists`,
    });
  }

  // Logical delete
  await user.update({ status: false });

  // Physical delete
  // await user.destroy()

  res.json({ user });
};
