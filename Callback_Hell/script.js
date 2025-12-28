//Zomato Application
const order_details = {
    order_id: 124421,
    food: ['Pizza', 'Paratha', 'Pasta'],
    cost: 620,
    restaurant: 'Roya Cafe',
    customer_name: "Divyansh Singh",
    customer_location: "Lucknow"
}


function PlaceOrder(order_details, callback) {
    console.log(`Payment of rupees ${order_details.cost} is in Progress`);
    setTimeout(() => {
        console.log("Payment is received and order get placed");
        order_details.status = true;
        callback(order_details);
    }, 3000)

}

function PreparingOrder(order_details, callback) {
    console.log(`${order_details.food} Preparation Started `);
    setTimeout(() => {
        console.log("Your Order is being Prepared");
        order_details.token = 123;
        callback(order_details);
    }, 3000);
}

function pickup(order_details, callback) {
    console.log(` Delivery Boy is Arriving Soon to ${order_details.restaurant}`);
    setTimeout(() => {
        console.log("Order Picked up");
        order_details.received = true;
        callback(order_details);
    }, 3000);
}

function deliverOrder(order_details) {
    console.log(`I am on the way to ${order_details.customer_location}`);
    setTimeout(() => {
        console.log("Delivered");
        order_details.delivered = true;
    })
}
//It will give error
//PlaceOrder(PreparingOrder(pickup))

//This situation is called Callback hell It is too Complicated
PlaceOrder(order_details, () => {
    PreparingOrder(order_details, () => {
        pickup(order_details, () => {
            deliverOrder(order_details);
        });
    })
})