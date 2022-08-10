import { Router } from 'express';
import { CreateStudentController } from '@modules/students/useCases/createStudent';
import { ListStudentsController } from '@modules/students/useCases/listStudents';

const createStudentController = new CreateStudentController();
// const deleteStudentController = new DeleteStudentController();
const listStudentsController = new ListStudentsController();
// const findStudentByIdController = new FindStudentByIdController();
// const updateStudentController = new UpdateStudentController();

const studentsRoutes = Router();

studentsRoutes.post('/', createStudentController.handle);
// studentsRoutes.patch('/:id', updateStudentController.handle);
studentsRoutes.get('/', listStudentsController.handle);
// studentsRoutes.get('/:id', findStudentByIdController.handle);
// studentsRoutes.delete('/:id', deleteStudentController.handle);

export { studentsRoutes };
