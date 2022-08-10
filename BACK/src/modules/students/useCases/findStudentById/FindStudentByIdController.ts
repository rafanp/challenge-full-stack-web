import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindStudentByIdUseCase } from './FindStudentByIdUseCase';

class FindStudentByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const findStudentByIdUseCase = container.resolve(FindStudentByIdUseCase);

    const member = await findStudentByIdUseCase.execute({
      id,
    });

    return res.status(201).json(member);
  }
}

export { FindStudentByIdController };
