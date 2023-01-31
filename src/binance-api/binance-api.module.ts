import { Module, Global, DynamicModule } from '@nestjs/common';
import { BinanceService } from './binance-api.service';
import Binance from 'node-binance-api';

@Global()
@Module({
  providers: [BinanceService],
  exports: [BinanceService],
})
export class BinanceModule {
  static forRoot(apiKey: string, apiSecret: string): DynamicModule {
    return {
      module: BinanceModule,
      providers: [
        {
          provide: BinanceService,
          useFactory: () => {
            const binanceApi: Binance = new Binance().options({
              APIKEY: apiKey,
              APISECRET: apiSecret,
            });

            return new BinanceService(binanceApi);
          },
        },
      ],
    };
  }
}
