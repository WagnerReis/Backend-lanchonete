import { Router } from 'express';
import { getRepository } from 'typeorm';

import Attendant from '../models/Attendant';
import CreateAttendantService from '../services/CreateAttendantService';

const attendantsRouter = Router();

attendantsRouter.get('/', (request, response) => {
  const attendantsRepository = getRepository(Attendant);
  const attendant = attendantsRepository.find();

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

  return response.json(attendant);
})


export default attendantsRouter;
