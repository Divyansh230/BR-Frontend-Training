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

async function ordering() {
    try {
        const response1 = await PlaceOrder(order_details);
        const response2 = await PreparingOrder(response1);
        const response3 = await pickup(response2);
        const response4 = await deliverOrder(response3);

        console.log(response4);
    } catch (error) {
        console.log(error);
    }

}

ordering()


// We use this when we need not to create dependency between differen asynchronous task

async function userDetails() {
    // const name = await fetch("name");
    // const photo = await fetch("photo");
    // const alpha = await fetch("alpha");

    const [name, photo, alpha] = await Promise.all([fetch("name"), fetch("photo"), fetch("alpha")])
}