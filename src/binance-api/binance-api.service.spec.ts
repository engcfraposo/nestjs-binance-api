import { Test, TestingModule } from '@nestjs/testing';
import { BinanceService } from './binance-api.service';

describe('BinanceApiService', () => {
  let service: BinanceApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BinanceService],
    }).compile();

    service = module.get<BinanceService>(BinanceApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
