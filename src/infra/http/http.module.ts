import { Module } from "@nestjs/common";
import { EmailController } from "./controllers/api/email/email.controller";
import { AppController } from "./controllers/app.controller";
import { SendMail } from "src/application/useCases/SendMail";
import { MailTrapProvider } from "../providers/MailTrap";
import { IMailProvider } from "src/application/providers/IMailProvider";


@Module({
    imports: [],
    controllers: [EmailController, AppController],
    providers: [SendMail, 
        {
            provide: IMailProvider,
            useClass: MailTrapProvider
        }
    ]
})
export class HttpModule {}