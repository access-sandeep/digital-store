import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.info(`Request on ${new Date()} from ${req.headers.origin}, Response ${res.statusCode} ${res.statusMessage}`);
    
    next();
  }
}
