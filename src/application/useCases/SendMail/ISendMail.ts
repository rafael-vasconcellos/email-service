import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from "class-validator"


export class ISendMailDTO { 
    @IsOptional()
    @IsString()
    @Length(3)
    name?: string
    @IsOptional()
    @IsString()
    subject?: string
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string
    @IsNotEmpty()
    @IsString()
    body: string
}

export abstract class ISendMail { 
    /* abstract provider: IMailProvider  */
    abstract execute(message: ISendMailDTO): Promise<unknown>
}