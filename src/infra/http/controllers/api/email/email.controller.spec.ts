import { Test } from "@nestjs/testing"
import { ConfigModule } from "@nestjs/config"
import { SendMail } from "src/application/useCases/SendMail"
import { IMailProvider } from "src/application/providers/IMailProvider"
import { MailTrapProvider } from "src/infra/providers/MailTrap"
import { EmailController } from "./email.controller"


describe('Email controller', () => { 
    let emailController: EmailController

    beforeEach(async() => { 
        const app = await Test.createTestingModule( {
            imports: [ ConfigModule.forRoot( {envFilePath: '.env'} ) ],
            controllers: [EmailController],
            providers: [ SendMail, 
                {
                    provide: IMailProvider,
                    useClass: MailTrapProvider
                }
            ]
        } ).compile()

        emailController = app.get<EmailController>(EmailController)
        //console.log(emailController)
    } )

    describe('get', () => { 
        it('should return instructions', () => { 
            expect(emailController.getRoot()).toContain('Instructions');
        } )
    } )


    describe('post', () => { 
        it('should send an email', async() => { 
            expect(await emailController.postRoot( {
                name: 'rafael',
                email: 'rafael.vasconcelos7497@gmail.com',
                subject: 'Contracts',
                body: 'Teste'
            } ) ).toHaveProperty('message')
        } )

        it('should not send an email', async() => { 
            expect(await emailController.postRoot( {} as any ) ).toHaveProperty('error')
        } )

    } )

} )