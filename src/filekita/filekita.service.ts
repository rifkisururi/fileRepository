import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FilekitaEntity } from './filekita.entity'
import { FilekitaDTO } from './filekita.dto'

@Injectable()
export class FilekitaService {
    constructor(
        @InjectRepository(FilekitaEntity)
        private filekitaRepository: Repository<FilekitaEntity>
    ) { }

    async showAll() {
        return await this.filekitaRepository.find();
    }

    async create(data: FilekitaDTO) {
        const filekitaNew = await this.filekitaRepository.create(data);
        await this.filekitaRepository.save(filekitaNew)
        return filekitaNew
    }


    async lihatSemua() {
        return "ini di service";
    }

}
