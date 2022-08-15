import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteStudentUseCase } from './DeleteStudentUseCase';

class DeleteStudentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteStudentUseCase = container.resolve(DeleteStudentUseCase);

    await deleteStudentUseCase.execute({
      id,
    });
    return res.status(204).send();
  }
}

export { DeleteStudentController };
