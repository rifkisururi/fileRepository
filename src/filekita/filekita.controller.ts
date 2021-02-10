import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FilekitaService } from './filekita.service'
import { FilekitaDTO } from './filekita.dto'

@Controller('filekita')
export class FilekitaController {
    constructor(private FilekitaService: FilekitaService) { }

    @Get()
    lihatOutput() {
        return this.FilekitaService.showAll();
    }

    @Post()
    membuatRecord(@Body() data: FilekitaDTO) {
        return this.FilekitaService.create(data)
    }

    @Get('service')
    lihatSemua() {
        return this.FilekitaService.lihatSemua();
    }

    @Get(':id')
    lihatDetail(@Param('id') id: string): string {
        return 'ini controller detail ' + id;
    }

}
