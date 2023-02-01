import { Injectable } from '@nestjs/common';
import Binance from 'node-binance-api';

@Injectable()
export class BinanceService {
  private readonly binanceApi: Binance;

  constructor(binanceApi: Binance) {
    this.binanceApi = binanceApi;
  }

  public async exchangeInfo() {
    return await this.binanceApi.exchangeInfo();
  }

  public async prices(symbol?: string) {
    return await this.binanceApi.prices(symbol);
  }

  public async balance() {
    return await this.binanceApi.balance();
  }

  public async bookTickers(symbol?: string) {
    return await this.binanceApi.bookTickers(symbol);
  }
  public async depth(symbol: string, limit = 5) {
    return await this.binanceApi.depth({ symbol, limit });
  }

  public async sell(symbol: string, quantity: number, price: number) {
    return await this.binanceApi.sell(symbol, quantity, price);
  }

  public async buy(symbol: string, quantity: number, price: number) {
    return await this.binanceApi.buy(symbol, quantity, price);
  }

  public async marketBuy(symbol: string, quantity: number) {
    return await this.binanceApi.marketBuy(symbol, quantity);
  }

  public async marketSell(symbol: string, quantity: number) {
    return await this.binanceApi.marketSell(symbol, quantity);
  }

  public async cancel(symbol: string, orderId: number) {
    return await this.binanceApi.cancel(symbol, orderId);
  }

  public async cancelAll(symbol: string) {
    return await this.binanceApi.cancelAll(symbol);
  }

  public async openOrders(symbol: string) {
    return await this.binanceApi.openOrders(symbol);
  }

  public async orderStatus(symbol: string, orderId: string) {
    return await this.binanceApi.orderStatus(symbol, orderId);
  }

  public async trades(symbol: string) {
    return await this.binanceApi.trades(symbol);
  }

  public async allOrders(symbol: string) {
    return await this.binanceApi.allOrders(symbol);
  }

  public async dustLog() {
    return await this.binanceApi.dustLog();
  }

  public async prevDay(symbol: string) {
    return await this.binanceApi.prevDay(symbol);
  }

  public async candlesticks(
    symbol: string,
    interval = '1d',
    limit = 30,
    cb: (_candlesticks: any) => any,
  ) {
    return await this.binanceApi.candlesticks(symbol, interval, cb, limit);
  }
}
