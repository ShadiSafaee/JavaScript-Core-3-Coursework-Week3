let order = [{
    itemName: "Hot cakes",
    quantity: 1,
    unitPrice: 2.29
  },
  {
    itemName: "Apple Pie",
    quantity: 2,
    unitPrice: 1.39
  },
  {
    itemName: "Egg McMuffin",
    quantity: 1,
    unitPrice: 2.80
  },
  {
    itemName: "Sausage McMuffin",
    quantity: 1,
    unitPrice: 3.00
  },
  {
    itemName: "Hot Coffee",
    quantity: 2,
    unitPrice: 1.00
  },
  {
    itemName: "Hash Brown",
    quantity: 4,
    unitPrice: 0.40
  },
];




const orderList = (array) => {
  let message = `QTY         Item                   Total`;
  let total = 0;
  const fee = 0;
  console.log(message);
  for (let item in order) {
    const {
      itemName,
      quantity,
      unitPrice,
    } = order[item];
    message = `${quantity}       ${itemName}                 ${quantity*unitPrice}`;
    total += quantity * unitPrice;
    console.log(message);
  };
  console.log("total: " + total);
}
orderList(order)