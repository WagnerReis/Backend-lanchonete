import { Router } from 'express';
import { getRepository } from 'typeorm';

import Attendant from '../models/Attendant';
import CreateAttendantService from '../services/CreateAttendantService';

const attendantsRouter = Router();

interface AttendantInterface {
  password?: string;
}

attendantsRouter.get('/', async (request, response) => {
  const attendantsRepository = getRepository(Attendant);
  const attendant = await attendantsRepository.find();

  return response.json(attendant);
});

attendantsRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const createAttendant = new CreateAttendantService();

  const attendant = await createAttendant.execute({
    name,
    email,
    password,
  });

  const attendant2: AttendantInterface = attendant;
  delete attendant2.password;

  return response.json(attendant2);
})


export default attendantsRouter;
