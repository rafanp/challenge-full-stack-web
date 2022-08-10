// import { ICreateMemberDTO, IListAllMembersOptionsDTO, IUpdateMemberDTO } from '../dtos';
import { ICreateStudentDTO } from '../dtos';
import { Student } from '../entities';

interface IStudentsRepository {
  findById(name: string): Promise<Student | undefined>;
  list(): Promise<Student[]>;
  create(data: ICreateStudentDTO): Promise<Student>;
  // deleteById(id: string): Promise<void>;
  // findById(id: string): Promise<Student | undefined>;
  // findByFamilyId(id: string): Promise<Student[]>;
  // updateById(id: string, newData: IUpdateStudentDTO): Promise<void>;
}

export { IStudentsRepository };
