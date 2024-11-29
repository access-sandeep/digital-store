import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {

  getHelloAdmin(): string {
    return 'Hello Admin!';
  }
}
