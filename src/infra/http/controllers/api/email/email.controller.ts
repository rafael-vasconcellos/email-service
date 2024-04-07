import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { ISendMailDTO } from "src/application/useCases/SendMail/ISendMail";
import { SendMail } from "src/application/useCases/SendMail";


@Controller('api/email')
export class EmailController { 
    constructor( private sendMail: SendMail ) {}

    @Get()
    getRoot() {
        return `
            <h1>Instructions</h1>
            <p>make a post request to <i>api/email</i> with the following body</p>
            ${JSON.stringify({
                name: 'string',
                email: 'string',
                subject: 'string',
                body: 'string'
            })}
        `
    }

    @Post()
    async postRoot(@Body() postBody: ISendMailDTO) { console.log(postBody)
        return await this.sendMail.execute(postBody)
    }

}