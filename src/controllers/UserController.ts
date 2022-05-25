import { Request, Response } from 'express';

export default class UserController {
  static async createUser(req: Request, res: Response): Promise<Response> {
    const { email, name, password } = req.body;
    return res.status(201).json('');
  }

  static async listUsers(_req: Request, res: Response): Promise<Response> {
    return res.status(200).json('');
  }
}
