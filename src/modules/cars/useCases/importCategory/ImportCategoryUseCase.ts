import fs from 'fs';
import { parse as csvParse } from 'csv-parse';

//stream: ler o arquivo por partes

class ImportCategoryUseCase{

    execute(file: Express.Multer.File): void {
        const stream = fs.createReadStream(file.path);// ela que faz a leitura do nosso arquivo em partes

        const parseFile = csvParse();

        /*pipe serve para que a cada pedaço lido, ele possa 
        determinar para onde vai enviar */
        stream.pipe(parseFile);

        parseFile.on("data", async (line) =>{
            console.log(line);
        });
    }
}

export { ImportCategoryUseCase }