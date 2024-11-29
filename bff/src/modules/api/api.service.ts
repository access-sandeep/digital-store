import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  default(): {message:string} {
    return {message:'Application is all setup and is 🚀.Following are the list of resources.'};
  }
}
