import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [ HttpModule, ConfigModule.forRoot({
    envFilePath: '.env'
  }) ],
  controllers: [],
  providers: [],
})
export class AppModule {}
