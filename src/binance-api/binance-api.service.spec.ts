import Binance from 'node-binance-api';
import { BinanceService } from './binance-api.service';

describe('BinanceService', () => {
  let binanceService: BinanceService;
  let binanceApi: Binance;

  beforeEach(() => {
    binanceApi = new Binance().options({ APIKEY: 'apiKey', APISECRET: 'apiSecret' });
    binanceService = new BinanceService(binanceApi);
  });


  describe('#getExchangeInfo', () => {
    it('should return exchange information', async () => {
      binanceApi.exchangeInfo = jest.fn().mockResolvedValue({ timezone: 'UTC', serverTime: 123456 });

      const result = await binanceService.exchangeInfo()

      expect(result).toEqual({ timezone: 'UTC', serverTime: 123456 });
    });

  describe('#prices', () => {
    it('should return the prices for a single symbol', async () => {
      binanceApi.prices = jest.fn().mockResolvedValue({ BTCUSDT: 43000 });
      const result = await binanceService.prices('BTCUSDT');

      expect(binanceApi.prices).toHaveBeenCalledWith('BTCUSDT');
      expect(result).toEqual({ BTCUSDT: 43000 });
    });

    it('should return the prices for all symbols if no symbol is provided', async () => {
      binanceApi.prices = jest.fn().mockResolvedValue({ BTCUSDT: 43000, ETHUSDT: 1300 });
      const result = await binanceService.prices();

      expect(binanceApi.prices).toHaveBeenCalled();
      expect(result).toEqual({ BTCUSDT: 43000, ETHUSDT: 1300 });
    });
  });

  describe('#balance', () => {
    it('should return the account balance', async () => {
      binanceApi.balance = jest.fn().mockResolvedValue({
        BTC: { available: 0.1, onOrder: 0.2, btcValue: 4300 },
        ETH: { available: 2, onOrder: 0.5, btcValue: 1300 },
      });
      const result = await binanceService.balance();

      expect(binanceApi.balance).toHaveBeenCalledWith();
      expect(result).toEqual({
        BTC: { available: 0.1, onOrder: 0.2, btcValue: 4300 },
        ETH: { available: 2, onOrder: 0.5, btcValue: 1300 },
      });
    });
  });

  describe('#bookTickers', () => {
    it('should return the book tickers for a single symbol', async () => {
      binanceApi.bookTickers = jest.fn().mockResolvedValue({
        symbol: 'BTCUSDT',
        bidPrice: 43000,
        bidQty: 0.1,
        askPrice: 43100,
        askQty: 0.2,
      });
      const result = await binanceService.bookTickers('BTCUSDT');

      expect(binanceApi.bookTickers).toHaveBeenCalledWith('BTCUSDT');
      expect(result).toEqual({
        symbol: 'BTCUSDT',
        bidPrice: 43000,
        bidQty: 0.1,
        askPrice: 43100,
        askQty: 0.2,
      });
    });
  });
});
})