import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('client_service') private client: ClientProxy) {}
  getHello(): string {
    this.client.emit<any>('messageBody', { text: 'Hello World!' });
    return 'Hello World!';
  }
}
