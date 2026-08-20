const ordersGroup = document.querySelector(".orders");
const outputCustomersBtn = ordersGroup.querySelector(".output-customers-btn");

const orders = [
    { id: 101, customer: "Elena", category: "Electronics", amount: 1200 },
    { id: 102, customer: "Ihor", category: "Clothing", amount: 300 },
    { id: 103, customer: "Elena", category: "Books", amount: 150 },
    { id: 104, customer: "Ihor", category: "Electronics", amount: 800 },
    { id: 105, customer: "Elena", category: "Clothing", amount: 450 },
    { id: 106, customer: "Maria", category: "Books", amount: 200 },
];

function readCustomersInfo(orders) {
    const customers = new Map();

    for (order of orders) {
        if (!customers.has(order.customer)) {
            customers.set(order.customer, {
                totalAmount: order.amount,
                ordersCount: 1,
                categories: new Set().add(order.category),
            });
        } else {
            const customer = customers.get(order.customer);
            customer.totalAmount += order.amount;
            customer.ordersCount++;
            customer.categories.add(order.category);
        }
    }

    return customers;
}

outputCustomersBtn.addEventListener("click", () => {
    console.dir(readCustomersInfo(orders));
});
