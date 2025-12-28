console.log("Hello World");




//code
// const p1 = fetch("https://api.github.com/users");
// const pr = p1.then((response) => {
//     return response.json();
// })

// pr.then((response) => {
//     console.log(response);
// })

fetch("https://api.github.com/users")
    .then((res) => {
        if (!res.ok) {
            throw new Error("Data is not Present");
        }
        return res.json();
    }).then((data) => {
        //console.log(data);
        const parent = document.getElementById("first");
        for (let i = 0; i < data.length; i++) {
            const image = document.createElement('img');
            image.src = data[i].avatar_url;
            // image.style.height = "40px";
            // image.style.width = "50px";
            parent.append(image);
        }
    }).catch(
        (error) => {
            const parent = document.getElementById("first");
            parent.textContent = error.message;
        }
    )


const j1 = {
    name: "Divyansh",
    course: "AIML",
    place: "Lucknow",
}

//Converting to json
const json = JSON.stringify(j1)












console.log("Hello World End");