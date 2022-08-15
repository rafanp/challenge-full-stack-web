import { getRepository, Repository } from 'typeorm';
import { IStudentsRepository } from 'modules/students/repositories';
import { ICreateStudentDTO, IUpdateStudentDTO } from 'modules/students/dtos';
import { Student } from 'modules/students/entities';

class StudentsRepository implements IStudentsRepository {
  private ormRepository: Repository<Student>;

  constructor() {
    this.ormRepository = getRepository(Student);
  }

  async create(data: ICreateStudentDTO): Promise<Student> {
    const student = this.ormRepository.create({
      name: data.name,
      email: data.email,
      ra: data.ra,
      cpf: data.cpf,
    });

    await this.ormRepository.save(student);

    return student;
  }

  async deleteById(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  async findById(id: string): Promise<Student | undefined> {
    const member = await this.ormRepository.findOne({ id });
    return member;
  }

  async list(): Promise<Student[]> {
    const members = await this.ormRepository.find();

    return members;
  }

  async updateById(id: string, newData: IUpdateStudentDTO): Promise<void> {
    await this.ormRepository.update(id, newData);
  }
}

export { StudentsRepository };
