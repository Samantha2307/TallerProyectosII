import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QoriStudyService } from './qori-study.service';
import { CreateQoriStudyDto } from './dto/create-qori-study.dto';
import { UpdateQoriStudyDto } from './dto/update-qori-study.dto';

@Controller('qori-study')
export class QoriStudyController {
  constructor(private readonly qoriStudyService: QoriStudyService) {}

  @Post()
  create(@Body() createQoriStudyDto: CreateQoriStudyDto) {
    return this.qoriStudyService.create(createQoriStudyDto);
  }

  @Get()
  findAll() {
    return this.qoriStudyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.qoriStudyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQoriStudyDto: UpdateQoriStudyDto) {
    return this.qoriStudyService.update(+id, updateQoriStudyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.qoriStudyService.remove(+id);
  }
}
