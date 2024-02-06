import { Injectable } from '@nestjs/common';
import { CreateAulavirtualDto } from './dto/create-aulavirtual.dto';
import { UpdateAulavirtualDto } from './dto/update-aulavirtual.dto';

@Injectable()
export class AulavirtualService {
  create(createAulavirtualDto: CreateAulavirtualDto) {
    return 'This action adds a new aulavirtual';
  }

  findAll() {
    return `This action returns all aulavirtual`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aulavirtual`;
  }

  update(id: number, updateAulavirtualDto: UpdateAulavirtualDto) {
    return `This action updates a #${id} aulavirtual`;
  }

  remove(id: number) {
    return `This action removes a #${id} aulavirtual`;
  }
}
