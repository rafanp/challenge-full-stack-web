import { Router } from 'express';

import { studentsRoutes } from 'modules/students/infra/http/routes/students.routes';

const router = Router();

router.use('/students', studentsRoutes);

export { router };
