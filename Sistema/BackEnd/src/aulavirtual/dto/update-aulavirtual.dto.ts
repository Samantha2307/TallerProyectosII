import { PartialType } from '@nestjs/mapped-types';
import { CreateAulavirtualDto } from './create-aulavirtual.dto';

export class UpdateAulavirtualDto extends PartialType(CreateAulavirtualDto) {}
