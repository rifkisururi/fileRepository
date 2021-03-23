import { Body, Controller, Delete, Get, Param, Post, Put, Render } from '@nestjs/common';
import { FilekitaService } from './filekita.service'
import { FilekitaDTO } from './filekita.dto'

@Controller('filekita')
export class FilekitaController {
    constructor(private FilekitaService: FilekitaService) { }

    @Get('jsondata')
    async lihatOutput() {
        return { data: await this.FilekitaService.showAll() };
    }

    @Get()
    @Render('filekita/index')
    root() {
        return { message: 'Hai Sang juara', title: 'Index Filekita' };
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
