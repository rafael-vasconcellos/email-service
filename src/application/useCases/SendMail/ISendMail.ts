import { IMailProvider } from "src/application/providers/IMailProvider"


export type ISendMailDTO = {
    name?: string
    email: string
    subject: string
    body: string
}

export type IResponses = {
    status: number
    message: string
}

export abstract class ISendMail { 
    /* abstract provider: IMailProvider  */
    abstract execute(message: ISendMailDTO): Promise<IResponses>
}