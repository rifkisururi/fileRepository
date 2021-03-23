import { Module } from '@nestjs/common';
import { FileKita } from './filekita.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaController } from './filekita.controller';
import { FilekitaService } from './filekita.service';

@Module({
    imports: [TypeOrmModule.forFeature([FileKita])],
    controllers: [FilekitaController],
    providers: [FilekitaService],
})
export class FilekitaModule { }
