import { Module } from '@nestjs/common';
import { FilekitaEntity } from './filekita.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaController } from './filekita.controller';
import { FilekitaService } from './filekita.service';

@Module({
    imports: [TypeOrmModule.forFeature([FilekitaEntity])],
    controllers: [FilekitaController],
    providers: [FilekitaService],
})
export class FilekitaModule { }
