let tips = [];
let totalPaid = [];
let bills = [124, 48, 286];

const tipCalculator = bills => {
  bills.forEach(amtDue => {
    if (amtDue > 200) {
      tip = Number((amtDue * 0.1).toFixed(2));
      tips.push(tip);
      totalPaid.push(amtDue + tip);
    } else if (amtDue < 50) {
      tip = Number((amtDue * 0.2).toFixed(2));
      tips.push(tip);
      totalPaid.push(amtDue + tip);
    } else {
      tip = Number((amtDue * 0.15).toFixed(2));
      tips.push(tip);
      totalPaid.push(amtDue + tip);
    }
  });

  console.log('Invoices:' + bills, 'Tips ' + tips, 'Total Paid:' + totalPaid);
};

tipCalculator(bills);
