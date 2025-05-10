import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from './cart-details.controller';
import { CartService } from './cart-details.service';

describe('AppController', () => {
  let appController: CartController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [CartService],
    }).compile();

    appController = app.get<CartController>(CartController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.findAll()).toBe('Hello World Front-end resources!');
    });
  });
});
