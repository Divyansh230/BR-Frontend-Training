// async Function always returns a promise
//await Freezes the javascript 


// const response = await fetch("https://api.github.com/users");
// const data = await response.json();
// console.log(data)


async function github() {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    console.log(data);
}

github();