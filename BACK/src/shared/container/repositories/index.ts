import { container } from 'tsyringe';

import * as studentsRepository from 'modules/students/repositories';

const registeredRepositories = {
  studentsRepository: 'StudentsRepository',
} as const;

function registerRepositories() {
  container.registerSingleton<studentsRepository.IStudentsRepository>(
    registeredRepositories.studentsRepository,
    studentsRepository.StudentsRepository,
  );
}

export { registeredRepositories, registerRepositories };
