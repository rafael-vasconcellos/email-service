import { Injectable } from "@nestjs/common";
import { IMailProvider } from "src/application/providers/IMailProvider";
import { ISendMail, ISendMailDTO } from "./ISendMail";


@Injectable()
export class SendMail implements ISendMail { 
    constructor( private provider: IMailProvider ) {}

    async execute(message: ISendMailDTO) { 
        const { name, email, subject, body } = message

        return await this.provider.sendMail( {
            from: {
                name: 'John Doe Compeny Inc.',
                email: 'example@example.com'
            },

            to: {
                name: name ?? '',
                email
            },

            subject: subject ?? '',
            body
        } )
        .then(r => { //console.log(r)
            return {message: "Sucess!"} }
        )
        .catch(e => { return {error: e.message} })


    }
}