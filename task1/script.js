const initialInventory = {
  A: 150,
  B: 150,
  C: 100,
  D: 100,
  E: 200,
};

let currentInventory = { ...initialInventory };
const orders = [];
const backorders = [];

function generateOrder(header, lines) {
  return {
    header,
    lines: lines.filter(line => line.Quantity > 0 && line.Quantity <= 5),
  };
}

function processOrder(order) {
  const allocation = { header: order.header, allocated: [], backordered: [] };

  order.lines.forEach(line => {
    const product = line.Product;
    const requestedQuantity = line.Quantity;

    if (currentInventory[product] >= requestedQuantity) {
      currentInventory[product] -= requestedQuantity;
      allocation.allocated.push({ ...line, Allocated: requestedQuantity });
      allocation.backordered.push({ ...line, Backordered: 0 });
    } else {
      allocation.allocated.push({ ...line, Allocated: 0 });
      allocation.backordered.push({ ...line, Backordered: requestedQuantity });
      backorders.push({ header: order.header, line });
    }
  });

  orders.push(allocation);

  if (Object.values(currentInventory).every(quantity => quantity === 0)) {
    console.log('All inventory is depleted. Halting system...');
    printSummary();
    process.exit(0);
  }
}

function printSummary() {
  orders.forEach(order => {
    const allocatedQuantities = order.allocated.map(line => line.Allocated).join(',');
    const backorderedQuantities = order.backordered.map(line => line.Backordered).join(',');
    console.log(`${order.header}: ${allocatedQuantities}::${backorderedQuantities}`);
  });
}

// Sample stream of orders
const orderStream = [
  generateOrder(1, [{ Product: 'A', Quantity: 1 }, { Product: 'C', Quantity: 4 }]),
  generateOrder(2, [{ Product: 'E', Quantity: 5 }]),
  generateOrder(3, [{ Product: 'D', Quantity: 4 }]),
  generateOrder(4, [{ Product: 'A', Quantity: 1 }, { Product: 'C', Quantity: 1 }]),
  generateOrder(5, [{ Product: 'B', Quantity: 3 }]),
  generateOrder(6, [{ Product: 'D', Quantity: 4 }]),
];

orderStream.forEach(order => processOrder(order));
printSummary();
