import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateStudentUseCase } from './UpdateStudentUseCase';

class UpdateStudentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const updateStudentUseCase = container.resolve(UpdateStudentUseCase);

    const updatedStudent = await updateStudentUseCase.execute({
      id,
      ...req.body,
    });

    return res.status(204).json(updatedStudent);
  }
}

export { UpdateStudentController };
