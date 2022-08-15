import { IStudentsRepository } from 'modules/students/repositories';
import { inject, injectable } from 'tsyringe';
import { IBaseUseCase } from '@shared/useCases';
import { AppError } from '@shared/errors';
import { IUpdateStudentDTO } from '@modules/students/dtos';

@injectable()
class UpdateStudentUseCase implements IBaseUseCase {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  async execute(data: IUpdateStudentDTO): Promise<void> {
    const student = await this.studentsRepository.findById(data.id);

    if (!student) {
      throw new AppError('student_is_not_registered');
    }

    await this.studentsRepository.updateById(data.id, data);
  }
}

export { UpdateStudentUseCase };
