let ws = new WebSocket ('wss://fstream.binance.com/ws/btcusdt@aggTrade');
let stockPriceElement = document. getElementById('stock-price');
let lastPrice = null;

ws.onmessage = (event) => {
let stockObject = JSON.parse (event. data) ;
let price = parseFloat (stockObject.p).toFixed (2);
stockPriceElement.innerText = price;
stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red'
lastPrice = price;
}