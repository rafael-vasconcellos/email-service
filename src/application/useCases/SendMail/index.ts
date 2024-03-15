import { IMailProvider } from "src/application/providers/IMailProvider";
import { IResponses, ISendMail, ISendMailDTO } from "./ISendMail";
import { Injectable } from "@nestjs/common";


@Injectable()
export class SendMail implements ISendMail { 
    constructor( private provider: IMailProvider ) {}

    async execute(message: ISendMailDTO): Promise<IResponses> { 
        const { name, email, subject, body } = message

        if (
            (email && subject && body) &&
            typeof email === 'string' && 
            typeof subject === 'string' && 
            typeof body === 'string'
        ) { 

            const response = { status: 201, message: 'Success!' }
            return await this.provider.sendMail( {
                from: {
                    name: 'John Doe Compeny Inc.',
                    email: 'example@example.com'
                },

                to: {
                    name: name ?? '',
                    email
                },

                subject,
                body
            } )
            .then(e => Object.assign(e, response))
            .catch(e => e)


        } else {
            return { status: 400, message: 'Something is wrong with your request' }
        }


    }
}