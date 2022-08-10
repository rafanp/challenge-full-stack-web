import { IStudentsRepository } from 'modules/students/repositories';
import { inject, injectable } from 'tsyringe';
import { IBaseUseCase } from '@shared/useCases';
import { AppError } from '@shared/errors';

interface IRequest {
  id: string;
  name?: string;
  family_id?: string;
  attending?: boolean;
  child?: boolean;
}

@injectable()
class UpdateStudentUseCase implements IBaseUseCase {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  async execute(data: IRequest): Promise<void> {
    const { id, ...updatedParams } = data;

    const student = await this.studentsRepository.findById(id);

    if (!student) {
      throw new AppError('student_is_not_registered');
    }

    await this.studentsRepository.updateById(id, updatedParams);
  }
}

export { UpdateStudentUseCase };
