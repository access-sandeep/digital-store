import { Test, TestingModule } from '@nestjs/testing';
import { AddressController } from './addresses.controller';
import { AddressService } from './addresses.service';

describe('AppController', () => {
  let appController: AddressController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AddressController],
      providers: [AddressService],
    }).compile();

    appController = app.get<AddressController>(AddressController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.add({})).toBe('Hello World Front-end resources!');
    });
  });
});
