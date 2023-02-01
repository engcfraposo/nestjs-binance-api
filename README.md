# nestjs-binance-api

## Overview 

The Binance Service provides a series of methods to access the features of the Binance API. This service allows users to retrieve information about current prices, account balances, order books, and execute trades.

### Install


```ssh
npm install nestjs-binance-api

```

### Methods

Here is a list of the available methods:

ticker(symbol: string): Returns information about the current price of a specified asset.

balance(): Returns the current balance of the account on Binance.

bookTickers(symbol: string): Returns information about the order book of a specified asset.

depth(symbol: string, limit = 5): Returns the full order book for a specified asset.

sell(symbol: string, quantity: number, price: number): Sells a specified quantity of an asset at a specific price.

buy(symbol: string, quantity: number, price: number): Buys a specified quantity of an asset at a specific price.

marketBuy(symbol: string, quantity: number): Buys a specified quantity of an asset at the market price.

marketSell(symbol: string, quantity: number): Sells a specified quantity of an asset at the market price.

cancel(symbol: string, orderId: number): Cancels a specific order.

cancelAll(symbol: string): Cancels all orders for a specified asset.

openOrders(symbol: string): Returns all open orders for a specified asset.

orderStatus(symbol: string, orderId: number): Returns the status of a specific order.

trades(symbol: string): Returns information about trades executed for a specified asset.

allOrders(symbol: string): Returns information about all orders (open and closed) for a specified asset.

dustLog(): Returns information about "dust" tokens in the account on Binance.

prevDay(symbol: string): Returns information about the performance of the asset the previous day.

candlesticks(symbol: string, interval = '1d', limit = 30): Returns candlestick chart data for a specified asset and interval.

### License

This module is available under the MIT license. See the LICENSE file for more information.

### Contribution

Feel free to contribute with improvements to the code and documentation. To do this, simply open an issue or make a pull request.

## Resumo

O serviço Binance é uma biblioteca para interagir com a API da Binance. Ele é construído usando o pacote node-binance-api.

### Instalação

Para instalar este módulo, basta executar o seguinte comando:

```ssh
npm install nestjs-binance-api
```

### Uso

O Binance Service oferece uma série de métodos para acessar as funcionalidades da API da Binance. Aqui está uma lista dos métodos disponíveis:

ticker(symbol: string): retorna informações sobre o preço atual de um determinado ativo.
balance(): retorna o balanço atual da conta na Binance.

bookTickers(symbol: string): retorna informações sobre o livro de pedidos de um determinado ativo.

depth(symbol: string, limit = 5): retorna o livro de pedidos completo para um determinado ativo.

sell(symbol: string, quantity: number, price: number): vende uma determinada quantidade de um ativo a um preço específico.

buy(symbol: string, quantity: number, price: number): compra uma determinada quantidade de um ativo a um preço específico.

marketBuy(symbol: string, quantity: number): compra uma determinada quantidade de um ativo ao preço de mercado.

marketSell(symbol: string, quantity: number): vende uma determinada quantidade de um ativo ao preço de mercado.

cancel(symbol: string, orderId: number): cancela uma ordem específica.

cancelAll(symbol: string): cancela todas as ordens para um determinado ativo.

openOrders(symbol: string): retorna todas as ordens abertas para um determinado ativo.

orderStatus(symbol: string, orderId: number): retorna o status de uma ordem específica.

trades(symbol: string): retorna as informações sobre as negociações realizadas para um determinado ativo.

allOrders(symbol: string): retorna informações sobre todas as ordens (abertas e fechadas) para um determinado ativo.

dustLog(): retorna informações sobre os tokens "poeira" na conta na Binance.
prevDay(symbol: string): retorna informações sobre o desempenho do ativo no dia anterior.

candlesticks(symbol: string, interval = '1d', limit = 30): retorna informações sobre os candlesticks (gráficos de velas) para um determinado ativo, com opções para definir o intervalo de tempo (por exemplo, 1 minuto, 1 hora) e o número de velas retornadas (limitadas a um máximo de 1000).

### Licença

Este módulo está disponível sob a licença MIT. Veja o arquivo LICENSE para mais informações.

### Contribuição

Sinta-se livre para contribuir com melhorias no código e na documentação. Para isso, basta abrir uma issue ou fazer um pull request.