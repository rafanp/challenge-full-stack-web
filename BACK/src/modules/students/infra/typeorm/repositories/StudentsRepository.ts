import { getRepository, Repository } from 'typeorm';
import { IStudentsRepository } from 'modules/students/repositories';
import { ICreateStudentDTO } from 'modules/students/dtos';
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

  // async deleteById(id: string): Promise<void> {
  //   await this.ormRepository.delete(id);
  // }

  // async findById(id: string): Promise<Member | undefined> {
  //   const member = await this.ormRepository.findOne({ id });
  //   return member;
  // }

  // async findByFamilyId(id: string): Promise<Member[]> {
  //   const members = await this.ormRepository.find({ family_id: id });
  //   return members;
  // }

  async list(): Promise<Student[]> {
    const members = await this.ormRepository.find();

    return members;
  }

  // async updateById(id: string, newData: IUpdateMemberDTO): Promise<void> {
  //   await this.ormRepository.update(id, newData);
  // }
  // async findByName(name: string): Promise<Member | undefined> {
  //   const member = await this.ormRepository.findOne({ name });

  //   return member;
  // }
}

export { StudentsRepository };
