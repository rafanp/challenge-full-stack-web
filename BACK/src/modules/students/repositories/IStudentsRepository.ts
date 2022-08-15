import { ICreateStudentDTO, IUpdateStudentDTO } from '../dtos';
import { Student } from '../entities';

interface IStudentsRepository {
  findById(name: string): Promise<Student | undefined>;
  list(): Promise<Student[]>;
  create(data: ICreateStudentDTO): Promise<Student>;
  deleteById(id: string): Promise<void>;
  updateById(id: string, newData: IUpdateStudentDTO): Promise<void>;
}

export { IStudentsRepository };
