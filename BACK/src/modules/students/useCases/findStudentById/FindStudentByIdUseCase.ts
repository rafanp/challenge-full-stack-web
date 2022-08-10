import { IStudentsRepository } from 'modules/students/repositories';
import { inject, injectable } from 'tsyringe';
import { Student } from 'modules/students/entities';
import { IBaseUseCase } from '@shared/useCases';
import { AppError } from '@shared/errors';

interface IRequest {
  id: string;
}

@injectable()
class FindStudentByIdUseCase implements IBaseUseCase {
  constructor(
    @inject('StudentsRepository')
    private membersRepositories: IStudentsRepository,
  ) {}

  async execute({ id }: IRequest): Promise<Student> {
    const member = await this.membersRepositories.findById(id);

    if (!member) {
      throw new AppError('student_is_not_registered');
    }

    return member;
  }
}

export { FindStudentByIdUseCase };
