import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { Cart } from '../../entities/cart.entity';

describe('CartController', () => {
  let cartController: CartController;
  let cartServices: CartService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      imports: [],
      providers: [CartService],
    }).compile();

    cartController = app.get<CartController>(CartController);
    cartServices = app.get<CartService>(CartService);
  });

  describe('findAll', () => {
    it('should return all cart data', async () => {
      jest.spyOn(cartServices, 'findAll').mockResolvedValue({} as Cart[]);
      expect(await cartController.findAll()).toBe({} as Cart[]);
    });
  });
});
