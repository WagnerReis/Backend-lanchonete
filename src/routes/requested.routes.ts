import { getRepository } from 'typeorm';
import { Router } from 'express';

import CreateRequestedService from '../services/CreateRequestedService';
import Requested from '../models/Requested';

const requestedRouter = Router();

interface AttendantInterface {
  attendant: {
    password?: string;
  }
}

requestedRouter.get('/', async (request, response) => {
  const requestRepository = getRepository(Requested);
  const requested = await requestRepository.find();

  return response.json(requested);
});

requestedRouter.post('/',async (request, response) => {
  const {
    client,
    hamburger,
    drink,
    status,
    table,
    attendant
  } = request.body;

  const createRequestService = new CreateRequestedService();

  const requested = await createRequestService.execute({
    client,
    hamburger,
    drink,
    status,
    table,
    attendant,
  });

  const requested2: AttendantInterface = requested;
  delete requested2.attendant.password;

  return response.json(requested2);
});

export default requestedRouter;
