const order_details = {
    order_id: 124421,
    food: ['Pizza', 'Paratha', 'Pasta'],
    cost: 620,
    restaurant: 'Roya Cafe',
    customer_name: "Divyansh Singh",
    customer_location: "Lucknow"
}



function PlaceOrder(order_details) {
    console.log(`Payment of rupees ${order_details.cost} is in Progress`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment is received and order get placed");
            order_details.status = true;
            resolve(order_details);

        }, 3000);
    })


}

function PreparingOrder(order_details) {
    console.log(`${order_details.food} Preparation Started `);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Your Order is being Prepared");
            order_details.token = 123;
            resolve(order_details)
        }, 3000);
    })
}

function pickup(order_details) {
    console.log(` Delivery Boy is Arriving Soon to ${order_details.restaurant}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order Picked up");
            order_details.received = true;
            resolve(order_details);
        }, 3000);
    })
}

function deliverOrder(order_details) {
    console.log(`I am on the way to ${order_details.customer_location}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Delivered");
            order_details.delivered = true;
            resolve(order_details);
        })
    })
}

PlaceOrder(order_details)
    .then((order_details) => {
        PreparingOrder(order_details)
    })
    .then((order_details) => {
        pickup(order_details);
    }).then((order_details) => {
        deliverOrder(order_details);
    }).then((order_details) => {
        console.log(order_details)
    }).catch((error) => {

    })