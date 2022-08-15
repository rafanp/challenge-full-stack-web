import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListStudentsUseCase } from './ListStudentsUseCase';

class ListStudentsController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listStudentsUseCase = container.resolve(ListStudentsUseCase);

    const allStudents = await listStudentsUseCase.execute();

    return res.json(allStudents);
  }
}

export { ListStudentsController };
