import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';



@Module({
  imports: [
    MailerModule.forRoot({
      // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
      // or
      transport: {
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: "c59145390c7384",
          pass: "5b11f1d14fc65a"
        }
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      },
      template:
       {
        dir: join(__dirname, 'templates') ,
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: false,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService], // 👈 export for DI
})
export class MailModule {}