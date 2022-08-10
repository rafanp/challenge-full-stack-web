import { inject, injectable } from 'tsyringe';
import { IStudentsRepository } from 'modules/students/repositories';
import { Student } from 'modules/students/entities';
import { IBaseUseCase } from '@shared/useCases';
import { ICreateStudentDTO } from '@modules/students/dtos';

@injectable()
class CreateStudentUseCase implements IBaseUseCase {
  constructor(
    @inject('StudentsRepository')
    private studentsRepositories: IStudentsRepository,
  ) {}

  async execute({ name, email, ra, cpf }: ICreateStudentDTO): Promise<Student> {
    const student = await this.studentsRepositories.create({
      name,
      email,
      ra,
      cpf,
    });
    return student;
  }
}

export { CreateStudentUseCase };
