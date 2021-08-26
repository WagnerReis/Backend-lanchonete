import { getRepository } from 'typeorm';

import Attendant from '../models/Attendant';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateAttendantService {
  public async execute({ name, email, password }:Request): Promise<Attendant> {
    const attendantRepository = getRepository(Attendant);

    const checkAttendantExists = await attendantRepository.findOne({
      where: { email },
    });

    if(checkAttendantExists) {
      throw new Error('Email addres already used.')
    }

    const attendant = attendantRepository.create({
      name,
      email,
      password,
    })

    await attendantRepository.save(attendant);

    return attendant;
  }
}

export default CreateAttendantService;
