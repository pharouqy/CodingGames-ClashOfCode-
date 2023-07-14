/*Before paying an invoice, accountants need to be sure the related items have been:
- Ordered
- Received
- Invoiced
Take the 3 lists of OrderedItems, ReceivedItems and InvoicedItems and return the list of PayableItems.
PayableItems is the list of items existing in the 3 other lists.
Lists size can be different. Lists maximum length is 2000 char.
The items are sorted in the same order as found in the OrderedItems list.
Entrée
line 1: OrderedItems string of items separated by space
line 2: ReceivedItems string of items separated by space
line 3: InvoicedItems string of items separated by space
Sortie
1 line : PayableItems string of items separated by space
Contraintes
*Items < 2000
Exemple
Entrée
A B C D E F
B D F
A B D F
Sortie
B D F*/

function accounting(orderedItems, receivedItems, invoicedItems) {
  const order = orderedItems.split("");
  const receive = receivedItems.split("");
  const invoice = invoicedItems.split("");

  const array = [];

  for (let i = 0; i < order.length; i++) {
    for (let j = 0; j < receive.length; j++) {
      for (let z = 0; z < invoice.length; z++) {
        if (order[i] === receive[j] && receive[j] === invoice[z]) {
          array.push(order[i]);
          break;
        }
      }
    }
  }
  const result = [];
  array.forEach((el) => {
    if (el !== " ") {
      result.push(el);
    }
  });
  const sorting = new Set(result);
  const extract = [];
  for (let value of sorting.values()) {
    extract.push(value);
  }
  return extract.join("");
}

console.log(accounting("A B C D E F", "B D F", "A B D F")); // BDF
