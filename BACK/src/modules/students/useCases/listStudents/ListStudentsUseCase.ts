import { IStudentsRepository } from 'modules/students/repositories';
import { inject, injectable } from 'tsyringe';
import { Student } from 'modules/students/entities';
import { IBaseUseCase } from '@shared/useCases';

@injectable()
class ListStudentsUseCase implements IBaseUseCase {
  constructor(
    @inject('StudentsRepository')
    private studentsRepository: IStudentsRepository,
  ) {}

  async execute(): Promise<Student[]> {
    const allStudents = await this.studentsRepository.list();

    return allStudents;
  }
}

export { ListStudentsUseCase };
