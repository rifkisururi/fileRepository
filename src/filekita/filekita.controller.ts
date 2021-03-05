import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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


    @Get(':id')
    lihatDetail(@Param('id') id: string) {
        return this.FilekitaService.lihatPerRecord(id);
    }

    @Put(':id')
    updateDetail(@Param('id') id: string, @Body() data: Partial<FilekitaDTO>) {
        return this.FilekitaService.update(id, data);
    }

    @Delete(':id')
    menghapusRecord(@Param('id') id: string) {
        return this.FilekitaService.hapusData(id);
    }

    /*
@Get('service')
lihatSemua() {
    return this.FilekitaService.lihatSemua();
}
*/


}
