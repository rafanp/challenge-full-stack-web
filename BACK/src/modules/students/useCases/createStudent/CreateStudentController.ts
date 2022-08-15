import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateStudentUseCase } from './CreateStudentUseCase';

class CreateStudentController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, cpf, email, ra } = req.body;
    const createStudentUseCase = container.resolve(CreateStudentUseCase);

    const student = await createStudentUseCase.execute({
      name,
      cpf,
      email,
      ra,
    });

    return res.status(201).json(student);
  }
}

export { CreateStudentController };
