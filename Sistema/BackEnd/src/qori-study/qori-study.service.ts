import { Injectable } from '@nestjs/common';
import { CreateQoriStudyDto } from './dto/create-qori-study.dto';
import { UpdateQoriStudyDto } from './dto/update-qori-study.dto';

@Injectable()
export class QoriStudyService {
  create(createQoriStudyDto: CreateQoriStudyDto) {
    return 'This action adds a new qoriStudy';
  }

  findAll() {
    return `This action returns all qoriStudy`;
  }

  findOne(id: number) {
    return `This action returns a #${id} qoriStudy`;
  }

  update(id: number, updateQoriStudyDto: UpdateQoriStudyDto) {
    return `This action updates a #${id} qoriStudy`;
  }

  remove(id: number) {
    return `This action removes a #${id} qoriStudy`;
  }
}
