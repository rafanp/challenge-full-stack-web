import { Router } from 'express';
import { CreateStudentController } from '@modules/students/useCases/createStudent';

// import { CreateMemberController } from 'modules/families/useCases/createMember';
// import { DeleteMemberController } from 'modules/families/useCases/deleteMember';
// import { FindMemberByIdController } from 'modules/families/useCases/findMemberById/FindMemberByIdController';
// import { ListMembersController } from 'modules/families/useCases/listMembers';
// import { UpdateMemberController } from 'modules/families/useCases/updateMember';

const createMemberController = new CreateStudentController();
// const deleteMemberController = new DeleteMemberController();
// const listMembersController = new ListMembersController();
// const findMemberByIdController = new FindMemberByIdController();
// const updateMemberController = new UpdateMemberController();

const studentsRoutes = Router();

studentsRoutes.post('/', createMemberController.handle);
// studentsRoutes.patch('/:id', updateMemberController.handle);
// studentsRoutes.get('/', listMembersController.handle);
// studentsRoutes.get('/:id', findMemberByIdController.handle);
// studentsRoutes.delete('/:id', deleteMemberController.handle);

export { studentsRoutes };
