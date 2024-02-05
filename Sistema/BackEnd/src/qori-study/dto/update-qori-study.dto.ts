import { PartialType } from '@nestjs/mapped-types';
import { CreateQoriStudyDto } from './create-qori-study.dto';

export class UpdateQoriStudyDto extends PartialType(CreateQoriStudyDto) {}
