import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const UserDecorator = createParamDecorator(
  (_data: unknown, cts: ExecutionContext) => {
    const request = cts.switchToHttp().getRequest();
    return request.headers.authorization;
  },
);
