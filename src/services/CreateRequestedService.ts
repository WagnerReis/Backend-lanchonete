import { getRepository } from 'typeorm';

import Requested from '../models/Requested';
import Attendant from '../models/Attendant';

interface Request {
  client: string;
  hamburger: string;
  drink: string;
  status: 'row' | 'production' | 'delivered';
  table: number;
  attendant: string;
}

class CreateRequestedService {
  public async execute({
    client,
    hamburger,
    drink,
    status,
    table,
    attendant
  }: Request): Promise<Requested> {
    const requestRepository = getRepository(Requested);
    const attendantRepository = getRepository(Attendant);

    const attendantRequest = await attendantRepository.findOne({
      where: {
        name: attendant,
      }
    });

    const request = requestRepository.create({
      client,
      hamburger,
      drink,
      status,
      table,
      attendant: attendantRequest,
    });

    await requestRepository.save(request);

    return request;
  }
}

export default CreateRequestedService;
