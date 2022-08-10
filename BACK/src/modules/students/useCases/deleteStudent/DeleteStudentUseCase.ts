import { IStudentsRepository } from 'modules/students/repositories';
import { inject, injectable } from 'tsyringe';
import { IBaseUseCase } from '@shared/useCases';
import { AppError } from '@shared/errors';

interface IRequest {
  id: string;
}

@injectable()
class DeleteStudentUseCase implements IBaseUseCase {
  constructor(
    @inject('StudentsRepository')
    private studentsRepositories: IStudentsRepository,
  ) {}

  async execute({ id }: IRequest): Promise<void> {
    const student = await this.studentsRepositories.findById(id);

    if (!student) {
      throw new AppError('student_is_not_registered');
    }

    await this.studentsRepositories.deleteById(id);
  }
}

export { DeleteStudentUseCase };
