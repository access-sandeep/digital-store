import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';
import { EndpointTags } from 'src/shared/enums/controller-tags.enum';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags(EndpointTags.Default)
export class ApiController {
  constructor(private readonly apiService: ApiService) {}
  @Get()
  default():{message:string} {
    return this.apiService.default();
  }  
}

