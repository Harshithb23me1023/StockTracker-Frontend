let stocks = [];

function addStock() {
    let symbol = document.getElementById('stockSymbol').value;
    let price = document.getElementById('stockPrice').value;
    if (symbol && price) {
        stocks.push({ symbol, price });
        updateStockTable();
    }
}

function searchStock() {
    let searchSymbol = document.getElementById('searchSymbol').value;
    let stock = stocks.find(s => s.symbol === searchSymbol);
    document.getElementById('searchResult').innerText = stock ? `Stock Found: ${stock.symbol} - $${stock.price}` : "Stock Not Found";
}

function updateStockTable() {
    let table = document.getElementById('stockTable');
    table.innerHTML = "";
    stocks.forEach(stock => {
        let row = `<tr><td>${stock.symbol}</td><td>$${stock.price}</td></tr>`;
        table.innerHTML += row;
    });
}
